import IController from "../../interfaces/IController";
import { StatService } from "./stats.service";
import { IStatsServer } from "../../../protos/build/stats_service_grpc_pb";
import { Pool, PlayerId, PeriodId, Money } from '../../../protos/build/reward_pool_pb';
import { PeriodIdReq, Stat, StatReply, StatsViaPeriodReply } from "../../../protos/build/stats_service_pb";
import * as grpc from "@grpc/grpc-js"
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { StatDto } from "./stats.dto";
import { addPool } from "../../clients/index";
import redisUtils from "../../utils/redis.util";
import { SUB_CHANNEL } from "../../config";
import { Types } from "mongoose";

export class StatController implements IController, IStatsServer {
    [name: string]: grpc.UntypedHandleCall;
    
    // @ts-ignore
    private _statService: StatService

    constructor(){
        this._statService = new StatService()
    }
   

    statsViaActivePeriod = async (call: grpc.ServerUnaryCall<PeriodIdReq, StatsViaPeriodReply>, callback: grpc.sendUnaryData<StatsViaPeriodReply>):Promise<void> => {
        let aggregation_result
        try {
            aggregation_result = await this._statService.aggregation([
                { $match: { periodId: new Types.ObjectId(call.request.getPeriodid()) } },
                { $group: { _id: "$playerId", money: { $sum: "$remainingMoney" }} },
                { $project: { _id: 0, money:1, playerId: "$_id"} }
            ])
        } catch (error) {
            console.log(error)
        }

        let result: StatsViaPeriodReply = new StatsViaPeriodReply()
        console.log(aggregation_result)
        if (aggregation_result.length){
            result.setStatsList(StatDto.convertStatViaPeriodArray(aggregation_result))
        }

        callback(null, result)
    }
    
    //addStat: grpc.handleClientStreamingCall<StatDto, Empty>;
    addStat = (call: grpc.ServerReadableStream<Stat, Empty>, callback: grpc.sendUnaryData<StatReply>): void => {
        let reply: StatReply = new StatReply()
        call.on("data", async (request: Stat) => {
            console.log(`[addStat] Request: ${JSON.stringify(request.toObject())}`)
            reply.addStats(request)
            try {
                let statDto: StatDto = new StatDto(request)
                const result = await this._statService.create(statDto, {})
                console.log(result)
                let pool: Pool = new Pool()
                pool.setPlayer(new PlayerId().setPlayerId(statDto.playerId))
                pool.setPeriod(new PeriodId().setPeriodId(statDto.periodId))
                pool.setTime(request.getTime())
                pool.setMoney(new Money().setMoney(statDto.poolMoney))
                const pool_result = await addPool(pool)
                console.log(pool_result)
                await redisUtils.publish(SUB_CHANNEL, {
                    playerId: statDto.playerId.toString(), 
                    periodId: statDto.periodId.toString(), 
                    money: statDto.remainingMoney
                })
            } catch (error) {
                console.log(error)
            }
        })

        call.on("end", () => {
            callback(null, reply)
        })
    }


}
