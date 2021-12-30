import { IConnection } from "./IConnection";
import { MONGO_CONNECT_OPTIONS, MONGODB_URI } from "../config";
import mongoose from "mongoose";

class MongooseConnection implements IConnection {
    private uri:string=MONGODB_URI

    public async connection(): Promise<void> {
        mongoose.Promise = global.Promise

        mongoose.connect(this.uri, MONGO_CONNECT_OPTIONS)

        mongoose.connection.on("error", (err) => {
            console.error("Failed to Connect MongoDb")
        })

        mongoose.connection.on("disconnected", (err) => {
            console.warn("Mongo db disconnected")
        })

        mongoose.connection.on("connected", (err) => {
            console.info("mongo db is connected")
        })
        
    }
    disconnection(): void {
        mongoose.connection.close(() => {
            console.info("Mongoose default connection is disconnected")
        })
    }

}


export default new MongooseConnection()