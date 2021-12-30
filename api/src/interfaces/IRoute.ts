import { Router } from "express";

export default abstract class IRoute {
    private moduleName:string
    abstract getRoutes():Router
    getPath():string {
        return "/" + this.moduleName
    }
}