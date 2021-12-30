import { NextFunction, Request, Response, Router } from 'express';
import IController from '../../interfaces/IController';
import { CountryService } from './country.service';
import { HttpStatusCode, BaseResponse, HTTP400Error } from "../../utils/index";

export class CountryController implements IController {
    private _countryService : CountryService

    constructor(){
        this._countryService = new CountryService()
    }


    public getCountries = async (req:Request, res:Response, next:NextFunction) => {
        const countries = await this._countryService.find({}, {}, {
            lean: true
        })

        if (!countries.length)
            throw new HTTP400Error("Countries data could not get")

        BaseResponse(HttpStatusCode.OK, countries, res)
    }

    public getCountry =async (req:Request, res:Response, next:NextFunction) => {

        const country = await this._countryService.findOne({country_id: req.params.id}, {_id:0}, {lean:true})

        if (country == null)
            throw new HTTP400Error("Country could not found")

        BaseResponse(HttpStatusCode.OK, country, res)
    }

}