import Redis, {ClusterOptions} from "ioredis";
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
            
        ], {
            scaleReads: "slave",
            redisOptions: REDIS_OPTIONS
        })
        this.connect_redis()
    }
    
    private connect_redis = async () => {
        await this.redis_instance.connect()
    }

    protected disconnect_redis = async () => {
        await this.redis_instance.disconnect()
    }

    public getSet = async (set_name:string): Promise<String | null> => {
        return await this.redis_instance.get(set_name)
    }

    public addSet = async (set_name: string, data:any, expire_mode:string = "", expire_time:number = 0) => {
        const result = await this.redis_instance.set(set_name, JSON.stringify(data))
        console.log(result)
    }

    public addSortSet = async (set_name: string, set_key: string, set_value:number) => {
        await this.redis_instance.zadd(set_name, set_value, set_key)
    }

    public getScore = async (set_name: string, set_key:string):Promise<string | any> => {
        return await this.redis_instance.zscore(set_name, set_key)
    }

    public getRank = async (set_name: string, set_key: string): Promise<Number | null> => {
        return await this.redis_instance.zrevrank(set_name, set_key)
    }

    public getRankViaRange = async (set_name:string, start_index: number, stop_index: number): Promise<String[]> => {
        return await this.redis_instance.zrevrange(set_name, start_index, stop_index, "WITHSCORES")
    }

    public increaseScore = async (set_name: string, set_key: string, value: number ): Promise<String> => {
        return await this.redis_instance.zincrby(set_name, value, set_key)
    }

    public checkSortedSet = async (set_name: string): Promise<Number> => {
        return await this.redis_instance.zcard(set_name)
    }

}


export default new RedisUtil()
