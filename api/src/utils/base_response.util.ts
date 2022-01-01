import { Response } from "express";
import { HttpStatusCode } from './index';

/**
 * 
 * @param status_code 
 * @param res
 * @param payload
 */
export const BaseResponse = (status_code:HttpStatusCode, payload:any ,res:Response, message:string = "OK") => {
    res.status(status_code).json({
        status: "success",
        payload:payload,
        message: message
    })
}