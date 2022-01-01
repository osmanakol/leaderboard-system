import { Request, Response, NextFunction } from "express";
import { errorHandlerUtil, BaseError, BaseResponse ,isMongoDbError } from "../utils/index";


export const error_handler_middleware = () => {
   return  async (err:Error, req:Request, res:Response, next:NextFunction) => {
        await errorHandlerUtil.handleError(err)
        if (err.name === "MongoServerError" || err.name === "CastError") {
            let mongo_err = isMongoDbError(err)
            
            BaseResponse(
                mongo_err.httpCode, 
                {
                    status: "failed",
                    err: mongo_err.message
                }, 
                res,
                mongo_err.message
            )
        }
        else if(!errorHandlerUtil.isTrustedError(err)){
            res.status(500).send("Something Broke")
        } else {
            // That means error type is BaseError
            
            const error:BaseError = err as BaseError

            BaseResponse(error.httpCode, {
                status: "failed",
                err: error.message
            }, res, error.message)
        }
      
    }
}