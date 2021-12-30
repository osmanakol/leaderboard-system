import express from "express";

export class ApiRoute {
    protected route: express.Router

    constructor() {
        this.route = express.Router()
    }

    public Routes = (): express.Router => {
        this.route.get(
            "/",
            (
              req: express.Request,
              res: express.Response,
              next: express.NextFunction
            ) => {
              res.status(200).json({
                status: "success",
                message: "Api is working",
              });
            }
        );

        return this.route
    }
}