import * as grpc from "@grpc/grpc-js"
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { IPeriodClient, PeriodClient } from '../../../protos/build/period_service_grpc_pb';
import { PeriodsReply } from "../../../protos/build/period_service_pb";
import { PERIOD_HOST, PERIOD_PORT } from "../../config";

const client: IPeriodClient = new PeriodClient(
    `${PERIOD_HOST}:${PERIOD_PORT}`,
    grpc.credentials.createInsecure()
)


const getActivePeriods = (): Promise<PeriodsReply> => {
    return new Promise<PeriodsReply>((resolve, reject) => {
        client.getActivePeriod(new Empty(), (err, resp) =>{
            if (err)
                return reject(err)
            return resolve(resp)
        })
    })
}



export {
    getActivePeriods
}
