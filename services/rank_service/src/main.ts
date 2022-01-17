import mongo_connection from "./database/mongo.database";
import * as grpc from "@grpc/grpc-js"
import { SUB_CHANNEL, SORTED_SET_NAME, RANK_PORT, RANK_HOST, HSET_PLAYER } from "./config";
import redis_utils from "./utils/redis.util";
import { getActivePeriods, getStatsViaPeriods } from "./clients/index";
import { PeriodsReply } from "../protos/build/period_service_pb";
import { PeriodIdReq, StatsViaPeriodReply } from '../protos/build/stats_service_pb';
import { RankService } from "../protos/build/rank_service_grpc_pb";
import { RankController } from "./model/rank.model/rank.controller";
import redisUtil from "./utils/redis.util";



const mongoSetup = async () => {
    try {
        await mongo_connection.connection()
    } catch (error) {
        throw error
    }
}
/*const check_redis = async (period_id: string) => {
    let sort_set_name = `${SORTED_SET_NAME}_${period_id}`
    let result = await redis_utils.checkSortedSet(sort_set_name)
    if (result === 0) {
        let stats: StatsViaPeriodReply = await getStatsViaPeriods(new PeriodIdReq().setPeriodid(period_id))
        for (const stat of stats.getStatsList()) {
            await redis_utils.addSortSet(sort_set_name, stat.getPlayerid(), Number(stat.getMoney().toFixed(2)))    
        }
    } 
}


const get_periods = async () => {
    let activePeriods: PeriodsReply = await getActivePeriods()

    let result = await redis_utils.getSet("periods")
    if (result === null)
        await redis_utils.addSet("periods", PeriodDto.convertPeriodDto(activePeriods.getPeriodsList()))
    
    for (const period of activePeriods.getPeriodsList()) {
        await check_redis(period.getId())
    }
}*/

const redis_subs = async () => {
 
    const subs_client = await redis_utils.redis_instance.duplicate()

    subs_client.subscribe(SUB_CHANNEL, (err, count) => {
        if(err){
            console.log(err.message)
        }
        console.log(`Subscribed to ${count} channels`)
    })

    subs_client.on("message", async (channel, message) => {
        console.log(`Received message from ${channel} channel`)
        let {playerId, periodId, money} = JSON.parse(message) //  playerId, periodId, money
        let sort_set_name = `${SORTED_SET_NAME}_${periodId}`
        if (await redis_utils.getScore(sort_set_name, playerId) == null){
            await redis_utils.addSortSet(sort_set_name, playerId, money)
        }
        else {
            let previous_rank =  await redis_utils.getRank(sort_set_name, playerId)
            await redis_utils.increaseScore(sort_set_name, playerId, money)
            let current_rank = await redis_utils.getRank(sort_set_name, playerId)
            let hset =  JSON.parse(await redis_utils.hget(HSET_PLAYER, playerId))

            if(previous_rank !== -1 || current_rank !== -1){
                let affected_player = null
                if (previous_rank < current_rank) {
                   hset["daily_diff"] = -1
                   affected_player = await redisUtil.getRankViaRange(sort_set_name, previous_rank, current_rank)
                } else if (previous_rank > current_rank) {
                    hset["daily_diff"] = 1
                    affected_player = await redisUtil.getRankViaRange(sort_set_name, current_rank, previous_rank)
                } else if (hset["daily_diff"] === undefined) {
                    hset["daily_diff"] = 0
                }
                if (affected_player !== null) {
                    let players = await redisUtil.hgetall(HSET_PLAYER)
                    for (let index = 0; index < affected_player.length; index+=2) {
                        let player = JSON.parse(players[`${affected_player[index]}`])
                        player["daily_diff"] = hset["daily_diff"] === 1 ? -1 : 1
                        await redis_utils.hset(HSET_PLAYER, `${affected_player[index]}`, JSON.stringify(player))
                    }
                }
            }
            await redis_utils.hset(HSET_PLAYER, playerId, JSON.stringify(hset))
            
            
        }
    })

    subs_client.on("close" , (...args) => {
        console.log(args)
        console.log(`Subscribed to channels`)
    })
}


const serve_rank = async () => {
    const server = new grpc.Server()
    try {
        await redis_utils.connect_redis()
    } catch (error) {
        console.log(error)
    }

    // @ts-ignore
    server.addService(RankService, new RankController())
    server.bindAsync(`${RANK_HOST}:${RANK_PORT}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
        if (err)
            throw err

        console.log(`Listening port ${port}`)

        server.start()
    })
}


serve_rank()
mongoSetup()
//get_periods()
redis_subs()
