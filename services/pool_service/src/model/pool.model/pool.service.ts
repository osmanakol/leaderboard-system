import { Service } from "../../interfaces/IService";
import { PoolDto } from "./pool.dto";
import { PoolRepository } from './pool.repository';
import PoolModel from "./pool.schema";

export class PoolService extends Service<PoolDto> {
    constructor(){
        super(new PoolRepository(PoolModel))
    }

    public sumAggregation = async () => {
        const result = await PoolModel.aggregate([
            {
               $group: {
                   "total": {
                       $sum: "$money"
                   }
               }  
            }
        ], {})
    }
}