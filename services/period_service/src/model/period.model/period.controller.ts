import * as grpc from '@grpc/grpc-js';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import IController from '../../interfaces/IController';
import { IPeriodServer } from "../../../protos/build/period_service_grpc_pb";
import { PeriodObj, Periods, GetPeriodViaStartTimes, GetPeriodViaFinishTimes, PeriodsReply, PeriodServiceIdReq } from '../../../protos/build/period_service_pb';
import { PeriodDto } from './period.dto';
import { PeriodService } from './period.service';
import redisUtil from "../../utils/redis.util";
import { HSET_PERIOD } from "../../config";
import { setCron } from "../../clients/cron.service/cron.client";

export class PeriodController implements IController, IPeriodServer {
    [name: string]: grpc.UntypedHandleCall;
    // @ts-ignore
    private _periodService: PeriodService
    
    constructor() {
        this._periodService = new PeriodService()
    }

   

    addPeriod = async (call: grpc.ServerUnaryCall<PeriodObj, Empty>, callback: grpc.sendUnaryData<Empty>): Promise<void> => {
        try {
            const result = await this._periodService.create(new PeriodDto(call.request), {})
            console.log(result)
            if(result.isActive) {
                await redisUtil.hset(HSET_PERIOD, result._id.toString(), JSON.stringify({
                    "start": result.startTime.toString(),
                    "finish": result.finishTime.toString() 
                }))
                await setCron(result._id.toString(), result.finishTime.toString())
            }
            
              

        } catch (error) {
            console.log(error)
        }

        callback(null, new Empty())
    }

    getActivePeriod = async (call:grpc.ServerUnaryCall<Empty, PeriodsReply>, callback: grpc.sendUnaryData<PeriodsReply>): Promise<void> => {
        let periods: PeriodDto[] = new Array<PeriodDto>()

        try {
            periods = await this._periodService.find({isActive: true}, {}, {lean: true})
        } catch (error) {
            console.log(error)
        }

        callback(null, new PeriodsReply().setPeriodsList(PeriodDto.convertPeriodObjReplyArray(periods)))
    }

    getPeriods = async (call:grpc.ServerUnaryCall<Empty, Periods>, callback: grpc.sendUnaryData<Periods>): Promise<void> => {
        let periods: PeriodDto[] = new Array<PeriodDto>()

        try {
            periods = await this._periodService.find({}, {}, {lean:true})
            console.log(periods)
        } catch (error) {
            console.log(error)
        }

        callback(null, new Periods().setPeriodsList(PeriodDto.convertPeriodArray(periods)))
    }

    getPeriodViaStartTime = async (call: grpc.ServerUnaryCall<GetPeriodViaStartTimes, Periods>, callback: grpc.sendUnaryData<Periods>): Promise<void> => {
        let periods: PeriodDto[] = new Array<PeriodDto>()
        try {
            periods = await this._periodService.find({startTime: new Date(call.request.getStartTime())}, {}, {lean: true})
            console.log(periods)
        } catch (error) {
            console.log(error)
        }

        callback(null, new Periods().setPeriodsList(PeriodDto.convertPeriodArray(periods)))
    }


    getPeriodViaFinishTime = async (call: grpc.ServerUnaryCall<GetPeriodViaFinishTimes, Periods>, callback: grpc.sendUnaryData<Periods>): Promise<void> => {
        let periods: PeriodDto[] = new Array<PeriodDto>()
        try {
            periods = await this._periodService.find({finishTime: new Date(call.request.getFinishTime())}, {}, {lean: true})
            console.log(periods)
        } catch (error) {
            console.log(error)
        }

        callback(null, new Periods().setPeriodsList(PeriodDto.convertPeriodArray(periods)))
    }

    makeInActive = async (call: grpc.ServerUnaryCall<PeriodServiceIdReq, Empty> ,callback: grpc.sendUnaryData<Empty>): Promise<void> => {
        try {
            await this._periodService.update({_id: call.request.getId()}, {$set:{
                isActive: false
            }}, {lean:true})
        } catch (error) {
            console.log(error)
        }

        callback(null, new Empty())
    }

}
