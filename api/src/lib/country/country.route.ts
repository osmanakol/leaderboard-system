import { Router } from "express";
import IRoute from "../../interfaces/IRoute";
import { CountryController } from "./country.controller";
import { asyncHandler } from "../../helpers/async_handler.helper";

export class CountryRoute extends IRoute {
    private _countryController: CountryController

    constructor(){
        super("country")
        this._countryController = new CountryController()
    }

    getRoutes(): Router {
        this.router.get(
            "/",
            asyncHandler(this._countryController.getCountries)
        )

        this.router.get(
            "/:id",
            asyncHandler(this._countryController.getCountry)
        )

        return this.router
    }

}