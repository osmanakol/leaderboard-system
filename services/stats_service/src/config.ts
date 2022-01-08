import { ConnectOptions } from 'mongoose';
import { RedisOptions } from "ioredis";

/**ENVIRONMENT SETTINGS */
export const environment = process.env.NODE_ENV
export const STAT_PORT = process.env.STAT_PORT
export const STAT_HOST = process.env.STAT_HOST
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


/** REDIS SETUP */

const REDIS_PORT: number = parseInt(process.env.REDIS_PORT || "6379", 10);
const REDIS_HOST: string = process.env.REDIS_HOST || "";
const REDIS_PASSWORD: string = process.env.REDIS_PASSWORD || "";


export const REDIS_OPTIONS: RedisOptions = {
    port: REDIS_PORT,
    host: REDIS_HOST,
    password: REDIS_PASSWORD,
    lazyConnect: true,
    autoResubscribe: true
};

export const SUB_CHANNEL:string = process.env.SUB_CHANNEL || ""

/** REDIS SETUP */