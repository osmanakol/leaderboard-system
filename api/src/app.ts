import { randomBytes } from "crypto";
import express, { Application, NextFunction, Request, Response } from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import { ApiRoute } from './routes/api.route';
import mongo_connection from "./database/mongo.database";


class Api {
    public api: Application
    
    constructor(){
        this.api = express()
        this.securityOptions()
        this.config()
        this.routeConfig()
        this.mongoSetup()
        this.errorHandler()
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

    private errorHandler = () => {
        this.api.use((err:Error, req:Request, res:Response, next:NextFunction) => {
            if (process.env.NODE_ENV === "development") {
                console.error(err.stack)
                res.status(500).send(err.message)
            }
            res.status(500).send('Something Brokes!!')

        })
    }
}

export default new Api().api