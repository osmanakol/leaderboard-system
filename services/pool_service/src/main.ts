import * as grpc from '@grpc/grpc-js';
import { RewardPoolService } from '../protos/build/pool_service/reward_pool_grpc_pb';
import { PoolController } from './model/pool.model/pool.controller';
import mongo_connection from "./database/mongo.database";
import { HOST, PORT } from "./config";

const mongoSetup = async () => {
    try {
        await mongo_connection.connection()
    } catch (error) {
        throw error
    }
}


const serve = () => {
    const server = new grpc.Server()

    // @ts-ignore
    server.addService(RewardPoolService, new PoolController())
    server.bindAsync(`${HOST}:50060`, grpc.ServerCredentials.createInsecure(), (err, port) => {
        if (err)
            throw err

        console.log(`Listening port ${port}`)
        
        server.start()
    })
}

mongoSetup()
serve()
