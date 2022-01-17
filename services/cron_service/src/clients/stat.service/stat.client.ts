import * as grpc from "@grpc/grpc-js";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { IStatsClient, StatsClient } from "../../../protos/build/stats_service_grpc_pb";
import { PeriodIdReq } from "../../../protos/build/stats_service_pb";
import { STAT_HOST, STAT_PORT } from "../../config";

const client: IStatsClient = new StatsClient(
    `${STAT_HOST}:${STAT_PORT}`,
    grpc.credentials.createInsecure()
)

const calculatePeriod = (id: string):Promise<Empty> => {
    return new Promise<Empty>((resolve, reject) => {
        client.calculatePeriod(new PeriodIdReq().setPeriodid(id), (err ,resp) => {
            if(err)
                return reject(err)
            
            return resolve(resp)
        })
    })
}

const triggerRankUpdate = (id: string):Promise<Empty> => {
    return new Promise<Empty>((resolve, reject) => {
        client.triggerRankUpdate(new PeriodIdReq().setPeriodid(id), (err, resp) => {
            if(err)
                return reject(err)
            return resolve(resp)
        })
    })
}

export {
    calculatePeriod,
    triggerRankUpdate
}