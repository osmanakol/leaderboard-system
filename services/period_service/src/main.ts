import mongo_connection from "./database/mongo.database";
import * as grpc from "@grpc/grpc-js"
import { PeriodController } from "./model/period.model/period.controller";
import { PeriodService } from "../protos/build/period_service_grpc_pb";
import { PERIOD_HOST, PERIOD_PORT, SUB_CHANNEL, SORTED_SET_NAME } from "./config";
import redis_utils from "./utils/redis.util";
import { getActivePeriods, getStatsViaPeriods } from "./clients/index";
import { PeriodsReply } from "../protos/build/period_service_pb";
import { PeriodIdReq, StatsViaPeriodReply } from '../protos/build/stats_service_pb';
import { PeriodDto } from "./model/period.model/period.dto";
import { HSET_PERIOD } from "./config";

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

    let result = await redis_utils.hlen(HSET_PERIOD)
    if (!result) {
        for (const iterator of activePeriods.getPeriodsList()) {
            await redis_utils.hset(HSET_PERIOD, iterator.getId(), JSON.stringify({
                "start": iterator.getStartTime(),
                "finish": iterator.getFinishTime()
            }))
        }

    }
    
    for (const period of activePeriods.getPeriodsList()) {
        await check_redis(period.getId())
    }
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

serve_period()
mongoSetup()
generate_redis()