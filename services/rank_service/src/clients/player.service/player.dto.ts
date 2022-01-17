import { Types } from 'mongoose';
import { IModel } from '../../model/base.model';
import { CountryDto } from '../country.service/country.dto';


export class PlayerDto implements IModel {

    _id: Types.ObjectId


    username:string


    country:CountryDto


    total_money:Number

  
    createdAt?: Date

    updatedAt?:Date
}