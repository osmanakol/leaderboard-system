import { Types } from 'mongoose';
import { IModel } from '../../model/base.model';
import { IsDate, IsMongoId, IsNumber, IsOptional, IsString, MaxLength, MinLength, ValidateNested } from 'class-validator';
import { CountryDto } from '../country/country.dto';
import { Type } from 'class-transformer';

export class PlayerDto implements IModel {
    @IsMongoId()
    @IsOptional()
    _id: Types.ObjectId

    @IsString()
    @MinLength(3)
    @MaxLength(20)
    username:string

    @ValidateNested()
    @Type(() => CountryDto)
    country:CountryDto

    @IsNumber()
    total_money:Number

    @IsOptional()
    @IsDate()
    createdAt?: Date

    @IsOptional()
    @IsDate()
    updatedAt?:Date
}