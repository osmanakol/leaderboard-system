//import { ConnectOptions } from 'mongoose';
import { RedisOptions } from "ioredis";

/**ENVIRONMENT SETTINGS */

export const environment = process.env.NODE_ENV

/** RANK SERVICE */
export const RANK_PORT = process.env.RANK_PORT
export const RANK_HOST = process.env.RANK_HOST
/** PERIOD SERVICE */
export const PERIOD_PORT = process.env.PERIOD_PORT
export const PERIOD_HOST = process.env.PERIOD_HOST
/** STAT SERVICE */
export const STAT_PORT = process.env.STAT_PORT
export const STAT_HOST = process.env.STAT_HOST
/** CRON SERVICE */
export const CRON_PORT = process.env.CRON_PORT
export const CRON_HOST = process.env.CRON_HOST

/**ENVIRONMENT SETTINGS */

/** MONGO SETUP */

export const MONGODB_URI:string = process.env.mongoURIString || ""

/*export const MONGO_CONNECT_OPTIONS:ConnectOptions  = {
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

}*/

/** MONGO SETUP */



/** REDIS SETUP */

const REDIS_PORT: number = parseInt(process.env.REDIS_PORT || "6379", 10);
const REDIS_HOST: string = process.env.REDIS_HOST || "";
const REDIS_PASSWORD: string = process.env.REDIS_PASSWORD || "";


export const REDIS_OPTIONS: RedisOptions = {
    port: REDIS_PORT,
    host: REDIS_HOST,
    lazyConnect: true,
    autoResubscribe: true
};

export const SUB_CHANNEL:string = process.env.SUB_CHANNEL || ""
export const SORTED_SET_NAME: string = process.env.SORTED_SET_NAME || ""
export const HSET_PLAYER:string = process.env.HSET_PLAYER || "";
export const HSET_PERIOD:string = process.env.HSET_PERIOD || ""

/** REDIS SETUP */