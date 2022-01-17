import { BaseRepository } from "../../repository/base/BaseRepository";
import { PeriodDto } from './period.dto';
import { PeriodSchema } from "./period.schema";

export class PeriodRepository extends BaseRepository<PeriodDto, PeriodSchema> {}