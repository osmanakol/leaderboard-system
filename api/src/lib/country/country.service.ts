import { Service } from "../../interfaces/IService";
import { CountryDto } from './country.dto';
import CountryModel from "./country.model";
import { CountryRepository } from "./country.repository";

export class CountryService extends Service<CountryDto> {
    constructor(){
        super(new CountryRepository(CountryModel))
    }
}