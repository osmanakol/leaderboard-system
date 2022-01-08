import { IModel } from "../base.model";
import { Pool } from '../../../protos/build/pool_service/reward_pool_pb';

export class PoolDto implements IModel {
    constructor(grpc_pool: Pool){
        this.playerId = grpc_pool.getPlayer()?.getPlayerId() || ""
        this.time = new Date(grpc_pool.getTime())
        this.periodId = grpc_pool.getPeriod()?.getPeriodId() || ""
        this.money = Number(grpc_pool.getMoney()?.getMoney().toFixed(2)) || 0 
    }

    playerId: string
    time: Date
    periodId: string
    money: number
}