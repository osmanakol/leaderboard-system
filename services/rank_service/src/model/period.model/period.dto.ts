import { IModel } from '../../../../stats_service/src/model/base.model';
import { PeriodObj, PeriodObjReply } from "../../../protos/build/rank_service/period_service_pb";
import { PeriodType } from "./period.schema";

export class PeriodDto implements IModel {
    constructor(grpc_period: PeriodObj) {
        this.startTime = new Date(grpc_period.getStartTime())
        this.finishTime = new Date(grpc_period.getFinishTime())
        this.periodType = grpc_period.getTotalDay()
        this.isActive = grpc_period.getIsActive()
    }

    public static convertPeriodArray(dtoArray:PeriodDto[]): PeriodObj[] {
        let periodObjArray: PeriodObj[] = new Array<PeriodObj>()

        for (let model of dtoArray) {
            let periodObj: PeriodObj = new PeriodObj()
            
            periodObj.setStartTime(model.startTime.toString())
            periodObj.setFinishTime(model.finishTime.toString())
            periodObj.setTotalDay(model.periodType)
            periodObj.setIsActive(model.isActive)

            periodObjArray.push(periodObj)
        }

        return periodObjArray

    }

    public static convertPeriodObjReplyArray(dtoArray:PeriodDto[]): PeriodObjReply[] {
        let periodObjArray: PeriodObjReply[] = new Array<PeriodObjReply>()

        for (let model of dtoArray) {
            let periodObj: PeriodObjReply = new PeriodObjReply()
            
            periodObj.setId(model._id.toString())
            periodObj.setStartTime(model.startTime.toString())
            periodObj.setFinishTime(model.finishTime.toString())
            periodObj.setTotalDay(model.periodType)
            periodObj.setIsActive(model.isActive)

            periodObjArray.push(periodObj)
        }

        return periodObjArray

    }

    public static convertPeriodDto(objArray:PeriodObjReply[]): PeriodDto[] {
        let periodDtos: PeriodDto[] = new Array<PeriodDto>()

        for (let model of objArray) {
            let periodObj: PeriodObj = new PeriodObj()
            periodObj.setStartTime(model.getStartTime().toString())
            periodObj.setFinishTime(model.getFinishTime().toString())
            periodObj.setTotalDay(model.getTotalDay())
            periodObj.setIsActive(model.getIsActive())
            let periodDto: PeriodDto = new PeriodDto(periodObj)
            periodDto._id = model.getId()
          
            periodDtos.push(periodDto)
        }

        return periodDtos

    }


    _id: string
    startTime: Date
    finishTime: Date
    periodType: PeriodType
    isActive: boolean
} 