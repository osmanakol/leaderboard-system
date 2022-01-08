import * as grpc from "@grpc/grpc-js"
import { IStatsClient, StatsClient } from '../../../protos/build/stats_service/stats_service_grpc_pb';
import { StatsViaPeriodReply, PeriodIdReq } from "../../../protos/build/stats_service/stats_service_pb";
import { STAT_HOST, STAT_PORT } from "../../config";

const client: IStatsClient = new StatsClient(
    `${STAT_HOST}:${STAT_PORT}`,
    grpc.credentials.createInsecure()
)


const getStatsViaPeriods = (period_id: PeriodIdReq): Promise<StatsViaPeriodReply> => {
    return new Promise<StatsViaPeriodReply>((resolve, rejecter) => {
        client.statsViaActivePeriod(period_id, (err, resp) => {
            if (err)
                return rejecter(err)
            return resolve(resp)
        })
    })
}



export {
    getStatsViaPeriods
}