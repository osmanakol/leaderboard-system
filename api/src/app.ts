import { randomBytes } from "crypto";
import express, { Application, NextFunction, Request, Response } from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import { ApiRoute } from './routes/api.route';
import mongo_connection from "./database/mongo.database";
import { errorHandlerUtil, BaseError } from "./utils/index";

class Api {
    public api: Application
    
    constructor(){
        this.api = express()
        this.securityOptions()
        this.config()
        this.routeConfig()
        this.mongoSetup()
        this.errorHandlerSetup()
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

        this.api.use(helmet())
    }

    private mongoSetup = async () => {
        await mongo_connection.connection()
    }

    private errorHandlerSetup = () => {
        this.api.use(async (err:Error, req:Request, res:Response, next:NextFunction) => {
            await errorHandlerUtil.handleError(err)
            if(!errorHandlerUtil.isTrustedError(err)){
                res.status(500).send("Something Broke")
            } else {
                // That means error type is BaseError
                
                const error:BaseError = err as BaseError
                
                res.status(error.httpCode).json({
                    status: "failed",
                    err: error.message
                })
            }
          
        })

        process.on("unhandledRejection", (reason: Error, promise: Promise<any>) => {
            throw reason
        })

        process.on("uncaughtException", (err:Error) => {
            errorHandlerUtil.handleError(err)
            if (!errorHandlerUtil.isTrustedError(err))
                process.exit(1)
        })
    }
}

export default new Api().api