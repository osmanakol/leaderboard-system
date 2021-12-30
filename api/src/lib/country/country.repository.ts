import { BaseRepository } from '../../repository/base/BaseRepository';
import { CountryDto } from './country.dto';
import { Country } from './country.model';

export class CountryRepository extends BaseRepository<CountryDto, Country> {}