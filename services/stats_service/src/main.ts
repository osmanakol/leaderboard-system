import * as grpc from '@grpc/grpc-js';
import { StatsService } from '../protos/build/stats_service_grpc_pb';
import { StatController } from './model/stats.model/stats.controller';
import mongo_connection from "./database/mongo.database";
import { STAT_HOST, STAT_PORT } from "./config";


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
    server.addService(StatsService, new StatController())
    server.bindAsync(`${STAT_HOST}:${STAT_PORT}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
        if (err)
            throw err

        console.log(`Listening port ${port}`)
        
        server.start()
    })
}

mongoSetup()
serve()
