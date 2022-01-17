import * as grpc from "@grpc/grpc-js";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { RankClient, IRankClient } from "../../../protos/build/rank_service_grpc_pb";
import { PeriodIdRank } from "../../../protos/build/rank_service_pb";
import { RANK_HOST, RANK_PORT } from "../../config";

const client: IRankClient = new RankClient(
    `${RANK_HOST}:${RANK_PORT}`,
    grpc.credentials.createInsecure()
)

const changePeriod = (id:string):Promise<Empty> => {
    return new Promise<Empty>((resolve, reject) => {
        client.changePeriod(new PeriodIdRank().setId(id), (err, resp) => {
            if(err)
                return reject(err)
            return resolve(resp)
        })
    })
}

export {
    changePeriod
}