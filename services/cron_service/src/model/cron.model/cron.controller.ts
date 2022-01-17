import IController from "../../interfaces/IController";
import { ICronServer } from "../../../protos/build/cron_service_grpc_pb";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { PeriodCron } from "../../../protos/build/cron_service_pb";
import * as grpc from "@grpc/grpc-js";
import cronUtil from "../../utils/cron.utils";
import { calculatePeriod, makeInActive } from "../../clients/index";


export class CronController implements IController, ICronServer {
    [name: string]: import("@grpc/grpc-js").UntypedHandleCall;
    

    setCron = async (call: grpc.ServerUnaryCall<PeriodCron, Empty>, callback: grpc.sendUnaryData<Empty>): Promise<void> => {
        
        try {
            cronUtil.dateBasedSchedule(call.request.getPeriodid(), call.request.getTime(), async function(id: string){
                console.log("cron working")
                await calculatePeriod(id)
                await makeInActive(id)
            }.bind(null, call.request.getPeriodid()))
        } catch (error) {
            console.log(error)
        }
        
        callback(null, new Empty())
        
    }

}