import { IModel } from '../../model/base.model';
import { Types } from "mongoose";

export class CurrencyDto implements IModel {
  
    currency_code: string


    currency_name: string

 
    currency_symbol: string
}

export class CountryDto implements IModel{
 
    _id: Types.ObjectId


    iso: string

  
    country_name: string

 
    currency: CurrencyDto

  
    country_id: number
}