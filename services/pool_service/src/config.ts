import { ConnectOptions } from 'mongoose';


/**ENVIRONMENT SETTINGS */
export const environment = process.env.NODE_ENV
export const PORT = process.env.PORT
export const HOST = process.env.HOST
/**ENVIRONMENT SETTINGS */

/** MONGO SETUP */

export const MONGODB_URI:string = process.env.mongoURIString || ""

export const MONGO_CONNECT_OPTIONS:ConnectOptions  = {
    appName: process.env.APP_NAME,
    noDelay: true,
    autoIndex: true,
    minPoolSize: 5,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4,
    keepAlive: true,
    keepAliveInitialDelay: 300000,
    autoCreate: true,
    //loadBalanced: true

}