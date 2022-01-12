import { IConnection } from "./IConnection";
import { MONGO_CONNECT_OPTIONS, MONGODB_URI } from "../config";
import mongoose from "mongoose";
import { loggerUtil } from "../utils/index";

class MongooseConnection implements IConnection {
    private uri:string=MONGODB_URI

    public async connection(): Promise<void> {
        mongoose.Promise = global.Promise

        mongoose.connect(this.uri, MONGO_CONNECT_OPTIONS).catch((err) => {
            loggerUtil.error("Failed to Connect MongoDb", err)
        })

        mongoose.connection.on("error", (err) => {
            loggerUtil.error("Failed to Connect MongoDb", err)
            //console.error("Failed to Connect MongoDb")
        })

        mongoose.connection.on("disconnected", (err) => {
            loggerUtil.warn("Mongo db disconnected", err)
            //console.warn("Mongo db disconnected")
        })

        mongoose.connection.on("reconnected", (err) => {
            loggerUtil.warn("Mongo db disconnected", err)
            //console.warn("Mongo db disconnected")
        })

        mongoose.connection.on("connected", (err) => {
            loggerUtil.info("mongo db is connected", err)
            //console.info("mongo db is connected")
        })
        
    }
    disconnection(): void {
        mongoose.connection.close(() => {
            loggerUtil.info("Mongoose default connection is disconnected")
            //console.info("Mongoose default connection is disconnected")
        })
    }

}


export default new MongooseConnection()