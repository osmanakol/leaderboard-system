import Redis from "ioredis";
import { REDIS_OPTIONS } from "../config";

class RedisUtil {
    public redis_instance:Redis.Cluster; 

    constructor() {
        this.redis_instance = new Redis.Cluster([
            {
                port: 6379,
                host: "10.10.10.10"
            },
            {
                port: 6380,
                host: "10.10.10.11"
            },
            {
                port: 6381,
                host: "10.10.10.12"
            },
            {
                port: 6382,
                host: "10.10.10.13"
            },
            {
                port: 6383,
                host: "10.10.10.14"
            },
            {
                port: 6384,
                host: "10.10.10.15"
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
