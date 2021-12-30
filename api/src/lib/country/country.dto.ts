import { IModel } from '../../model/base.model';
import { Types } from "mongoose";
import { IsISO31661Alpha2, IsMongoId, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CurrencyDto implements IModel {
    @IsString()
    currency_code: string

    @IsString()
    currency_name: string

    @IsString()
    currency_symbol: string
}

export class CountryDto implements IModel{
    @IsMongoId()
    @IsOptional()
    _id: Types.ObjectId

    @IsString()
    @IsISO31661Alpha2()
    iso: string

    @IsString()
    country: string

    @ValidateNested()
    @Type(() => CurrencyDto)
    currency: CurrencyDto

    @IsNumber()
    country_id: number
}