import * as grpc from "@grpc/grpc-js"
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { IRewardPoolClient, RewardPoolClient } from '../../../protos/build/reward_pool_grpc_pb';
import { Pool, Money, PeriodId, PlayerId } from "../../../protos/build/reward_pool_pb";
import {POOL_PORT, POOL_HOST} from "../../config";

const client: IRewardPoolClient = new RewardPoolClient(
    `${POOL_HOST}:${POOL_PORT}`,
    grpc.credentials.createInsecure()
)


const addPool = (pool: Pool):Promise<Empty> => {
    return new Promise<Empty>((resolve, reject) => {
        client.addPool(pool, (err, resp) => {
            if (err)
                return reject(err)
            return resolve(resp)
        })
    })
}



export {
    addPool
}
