import { Stat, StatsViaPeriod } from '../../../protos/build/stats_service/stats_service_pb';
import { IModel } from '../base.model';

export class StatDto implements IModel{

    constructor(grpc_stat: Stat){
      this.playerId = grpc_stat.getPlayerid()
      this.time = new Date(grpc_stat.getTime())
      this.periodId = grpc_stat.getPeriodid()
      this.totalMoney = grpc_stat.getTotalmoney()
      this.calcPool()
      this.doFixed()
    }

    private calcPool = (per:number=2) => {
        this.poolMoney = this.totalMoney * 2 / 100
        this.remainingMoney = this.totalMoney - this.poolMoney
    }

    private doFixed = () => {
        this.poolMoney = Number(this.poolMoney.toFixed(2))
        this.totalMoney = Number(this.totalMoney.toFixed(2))
        this.remainingMoney = Number(this.remainingMoney.toFixed(2))
    }

    public static convertStatArray(dtoArray:StatDto[]): Stat[] {
        let statArray: Stat[] = new Array<Stat>()

        for (let model of dtoArray) {
            let statObj: Stat = new Stat()

            statObj.setPlayerid(model.playerId)
            statObj.setPeriodid(model.periodId)
            statObj.setTime(model.time.toString())
            statObj.setTotalmoney(model.totalMoney)

            statArray.push(statObj)
        }

        return statArray

    }


    public static convertStatViaPeriodArray(dtoArray:any): StatsViaPeriod[] {
        let statArray: StatsViaPeriod[] = new Array<StatsViaPeriod>()

        for (let model of dtoArray) {
            let statObj: StatsViaPeriod = new StatsViaPeriod()

            statObj.setPlayerid(model.playerId.toString())
            statObj.setMoney(model.money)

            statArray.push(statObj)
        }

        return statArray

    }
    
    playerId: string
    time: Date
    periodId: string
    totalMoney: number
    poolMoney: number
    remainingMoney: number
}