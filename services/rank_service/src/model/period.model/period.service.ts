import { Service } from '../../../../pool_service/src/interfaces/IService';
import { PeriodDto } from './period.dto';
import { PeriodRepository } from './period.repository';
import PeriodModel from './period.schema';

export class PeriodService extends Service<PeriodDto> {
    constructor(){
        super(new PeriodRepository(PeriodModel))
    }
}