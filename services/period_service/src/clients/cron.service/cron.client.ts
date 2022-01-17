import * as grpc from "@grpc/grpc-js";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { ICronClient, CronClient } from "../../../protos/build/cron_service_grpc_pb";
import { CRON_HOST, CRON_PORT } from "../../config";
import { PeriodCron } from "../../../protos/build/cron_service_pb";

const client: ICronClient = new CronClient(
    `${CRON_HOST}:${CRON_PORT}`,
    grpc.credentials.createInsecure()
)

const setCron = (id:string, time:string):Promise<Empty> => {
    return new Promise<Empty>((resolve,reject) => {
        client.setCron(new PeriodCron().setTime(time).setPeriodid(id), (err,resp) => {
            if(err)
                return reject(err)
            return resolve(resp)
        })
    })
}

export {
    setCron
}