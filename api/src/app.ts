import { randomBytes } from "crypto";
import express, { Application } from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import { ApiRoute } from './routes/api.route';
import mongo_connection from "./database/mongo.database";
import { errorHandlerUtil, MongoDbError } from "./utils/index";
import { error_handler_middleware } from "./middleware/error_handler.middleware";
import { HttpStatusCode } from './utils/base_error.util';
import redisUtil from "./utils/redis.util";
import { HSET_PLAYER } from "./config";
import { PlayerService } from "./lib/player/player.service";
import CountryModel from "./lib/country/country.model";

class Api {
    public api: Application
    
    constructor(){
        this.api = express()
        this.errorHandlerSetup()
        this.securityOptions()
        this.config()
        this.routeConfig()
        this.mongoSetup()
        this.errorHandlerSetup()
        this.setRedis()
    }

    private config = () => {
        this.api.use(express.json())
        this.api.use(express.urlencoded({extended: true}))
        this.api.use(rateLimit({
            windowMs: 1 * 60 * 1000,
            max: 30
        }))
    }

    private routeConfig = () => {
        this.api.use("/", new ApiRoute().Routes())
    }

    private securityOptions = () => {
        this.api.use((req, res, next) => {
            res.locals.cspNonce = randomBytes(16).toString("hex")
            next();
        })
        this.api.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
        //this.api.use(helmet())
    }

    private mongoSetup = async () => {
        try {
            await mongo_connection.connection()
        } catch (error) {
            throw new MongoDbError("MongoConnectionError", HttpStatusCode.INTERNAL_SERVER, true, "MongoDbConnectionError")
        }
    }

    private errorHandlerSetup = () => {
        this.api.use(error_handler_middleware())

        process.on("unhandledRejection", (reason: Error, promise: Promise<any>) => {
            throw reason
        })

        process.on("uncaughtException", (err:Error) => {
            errorHandlerUtil.handleError(err)
            if (!errorHandlerUtil.isTrustedError(err))
                process.exit(1)
        })
    }

    private setRedis =async () => {
        let result = await redisUtil.hlen(HSET_PLAYER)
        if(!result){
            let player_service = new PlayerService()
            const players = await player_service.find({}, {createdAt:0, updatedAt:0}, {lean:true, populate: {
                path:"country",
                match: true,
                model: CountryModel
            }})
            for (const iterator of players) {
                await redisUtil.hset(HSET_PLAYER, iterator._id.toString(), JSON.stringify(
                    {   
                        "username": iterator.username,
                        "money": iterator.total_money,
                        "country": iterator.country.country_name,
                        "daily_diff": 0
                    })
                )   
            }
        }
    }
}

export default new Api().api