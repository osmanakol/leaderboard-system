import * as grpc from "@grpc/grpc-js"
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { IRankClient, RankClient } from "../../../protos/build/rank_service_grpc_pb";
import { PeriodIdRank, changePeriodReq } from "../../../protos/build/rank_service_pb";
import { RANK_HOST, RANK_PORT } from "../../config";


const client: IRankClient = new RankClient(
    `${RANK_HOST}:${RANK_PORT}`,
    grpc.credentials.createInsecure()
)


const rankUpdate = (id: PeriodIdRank):Promise<Empty> => {
    return new Promise<Empty>((resolve, reject) => {
        client.pubRank(id, (err, resp) => {
            if(err)
                return reject(err)
            return resolve(resp)
        })
    })
}

const changePeriod = (id:string, money:number):Promise<Empty> => {
    return new Promise<Empty>((resolve, reject) => {
        client.changePeriod(new changePeriodReq().setId(id).setPoolMoney(money), (err, resp) => {
            if(err)
                return reject(err)
            return resolve(resp)
        })
    })
}

export {
    rankUpdate,
    changePeriod
}