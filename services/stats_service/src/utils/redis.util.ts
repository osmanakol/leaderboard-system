import Redis from "ioredis";
import { REDIS_OPTIONS } from "../config";

class RedisUtil {
    public redis_instance:Redis.Cluster; 

    constructor() {
        this.redis_instance = new Redis.Cluster([
            {
                port: 7000,
                host: "127.0.0.1"
            },
            {
                port: 7001,
                host: "127.0.0.1"
            },
            {
                port: 7002,
                host: "127.0.0.1"
            },
            {
                port: 7003,
                host: "127.0.0.1"
            },
            {
                port: 7004,
                host: "127.0.0.1"
            },
            {
                port: 7005,
                host: "127.0.0.1"
            },
        ], REDIS_OPTIONS)
        this.connect_redis()
    }

    public publish = async (channel: string, data:any) => {
        await this.redis_instance.publish(channel, JSON.stringify({...data}))
    }
    
    private connect_redis = async () => {
        await this.redis_instance.connect()
    }

    protected disconnect_redis = async () => {
        await this.redis_instance.disconnect()
    }

}


export default new RedisUtil()