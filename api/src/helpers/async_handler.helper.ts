import { NextFunction, Request, Response } from "express";

/*export const asyncHandler = fn => (req:Request, res:Response, next:NextFunction) => 
    Promise
        .resolve(fn(req, res, next))
        .catch(next)
*/


export const asyncHandler = (fn:any) => {
    return async (req:Request, res:Response, next:NextFunction)  => {
        try {
            await fn(req, res, next)
        } catch (error) {
            next(error)
        }
    }
}