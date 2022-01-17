import { IRewardPoolServer } from '../../../protos/build/reward_pool_grpc_pb';
import { PeriodId, Money, Pool } from '../../../protos/build/reward_pool_pb';
import IController from '../../interfaces/IController';
import { PoolService } from './pool.service';
import * as grpc from "@grpc/grpc-js";
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { PoolDto } from './pool.dto';
import { Types } from "mongoose";

export class PoolController implements IController, IRewardPoolServer {
    [name: string]: grpc.UntypedHandleCall;
    // @ts-ignore
    private _poolService: PoolService

    constructor(){
        this._poolService = new PoolService()
    }
    
    getTotalMoneyViaPeriod = async (call: grpc.ServerUnaryCall<PeriodId, Money>, callback: grpc.sendUnaryData<Money>) => {
        let aggregation_result
        try {
            aggregation_result = await this._poolService.aggregation([
                { $match: {periodId: new Types.ObjectId(call.request.getPeriodId())} },
                { $group: {_id: null, total: {$sum: "$money"}} }
            ])
            console.log(aggregation_result)
        } catch (error) {
            console.log(error)
        }
        let result: Money = new Money()
        
        if (aggregation_result.length) 
            result.setMoney(aggregation_result[0].total)
        
        callback(null, result)
    }

    addPool = async (call: grpc.ServerUnaryCall<Pool, Empty>, callback: grpc.sendUnaryData<Empty>): Promise<void> => {
        try {
            const result = await this._poolService.create(new PoolDto(call.request), {})
            console.log(result)
        } catch (error) {
            console.log(error)
        }

        callback(null, new Empty())
    }
    

}
