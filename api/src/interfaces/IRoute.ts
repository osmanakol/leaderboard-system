import { Router } from "express";

export default abstract class IRoute {
    private _moduleName:string
    protected router:Router

    constructor(moduleName:string) {
        this._moduleName = moduleName
        this.router = Router()
    }

    abstract getRoutes():Router

    getPath():string {
        return "/" + this._moduleName
    }
}