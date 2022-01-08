import mongo_connection from "./database/mongo.database";
import * as grpc from "@grpc/grpc-js"
import { PeriodController } from "./model/period.model/period.controller";
import { PeriodService } from "../protos/build/rank_service/period_service_grpc_pb";
import { PERIOD_HOST, PERIOD_PORT, SUB_CHANNEL, SORTED_SET_NAME } from "./config";
import redis_utils from "./utils/redis.util";
import { getActivePeriods, getStatsViaPeriods } from "./clients/index";
import { PeriodsReply } from "../protos/build/rank_service/period_service_pb";
import { PeriodIdReq, StatsViaPeriodReply } from '../protos/build/stats_service/stats_service_pb';
import { PeriodDto } from "./model/period.model/period.dto";


const mongoSetup = async () => {
    try {
        await mongo_connection.connection()
    } catch (error) {
        throw error
    }
}

const check_redis = async (period_id: string) => {
    let sort_set_name = `${SORTED_SET_NAME}_${period_id}`
    let result = await redis_utils.checkSortedSet(sort_set_name)
    if (result === 0) {
        let stats: StatsViaPeriodReply = await getStatsViaPeriods(new PeriodIdReq().setPeriodid(period_id))
        for (const stat of stats.getStatsList()) {
            await redis_utils.addSortSet(sort_set_name, stat.getPlayerid(), Number(stat.getMoney().toFixed(2)))    
        }
    } 
}


const generate_redis = async () => {
    let activePeriods: PeriodsReply = await getActivePeriods()

    let result = await redis_utils.getSet("periods")
    if (result === null)
        await redis_utils.addSet("periods", PeriodDto.convertPeriodDto(activePeriods.getPeriodsList()))
    
    for (const period of activePeriods.getPeriodsList()) {
        await check_redis(period.getId())
    }
}

const redis_subs = async () => {
    const subs_client = await redis_utils.redis_instance.duplicate()

    subs_client.subscribe(SUB_CHANNEL, (err, count) => {
        if(err){
            console.log(err.message)
        }
        console.log(`Subscribed to ${count} channels`)
    })

    subs_client.on("message", (channel, message) => {
        console.log(`Received message from ${channel} channel`)
        let {playerId, periodId, money} = JSON.parse(message) //  playerId, periodId, money
        let sort_set_name = `${SORTED_SET_NAME}_${periodId}`
        if (redis_utils.getScore(sort_set_name, playerId) == null){
            redis_utils.addSortSet(sort_set_name, playerId, money)
        }
        else {
            redis_utils.increaseScore(sort_set_name, playerId, money)
        }
    })

    subs_client.on("close" , (...args) => {
        console.log(args)
        console.log(`Subscribed to channels`)
    })
}


const serve_period = () => {
    const server = new grpc.Server()

    // @ts-ignore
    server.addService(PeriodService, new PeriodController())
    server.bindAsync(`${PERIOD_HOST}:${PERIOD_PORT}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
        if (err)
            throw err

        console.log(`Listening port ${port}`)

        server.start()
    })
}


mongoSetup()
serve_period()
generate_redis()
redis_subs()
