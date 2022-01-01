import express from "express";
import { CountryRoute } from "../lib/country/country.route";
import { PlayerRoute } from "../lib/player/player.route";

export class ApiRoute {
    protected route: express.Router
    private _countryRoute: CountryRoute
    private _playerRoute: PlayerRoute

    constructor() {
        this.route = express.Router()
        this._countryRoute = new CountryRoute()
        this._playerRoute = new PlayerRoute()
    }

    public Routes = (): express.Router => {
        this.route.get("/", (req: express.Request, res: express.Response, next: express.NextFunction) => {
          res.status(200).json({
            status: "success",
             message: "Api is working",
          });
        });

        this.route.use(this._countryRoute.getPath(), this._countryRoute.getRoutes())

        this.route.use(this._playerRoute.getPath(), this._playerRoute.getRoutes())

        return this.route
    }
}