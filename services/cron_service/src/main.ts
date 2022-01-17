import * as grpc from "@grpc/grpc-js";
import { CronController } from "./model/cron.model/cron.controller";
import { CronService } from "../protos/build/cron_service_grpc_pb";
import { CRON_HOST, CRON_PORT, HSET_PERIOD } from "./config";
import { getActivePeriods, triggerRankUpdate, calculatePeriod, makeInActive } from "./clients/index";
import cronUtil from "./utils/cron.utils";

const routinePeriod = async () => {
    let periods = await getActivePeriods()
    
    for (const iterator of periods.getPeriodsList()) {
        cronUtil.dateBasedSchedule(iterator.getId(), iterator.getFinishTime(), async function(id:string) {
            await calculatePeriod(id)
            await makeInActive(id)
        }.bind(null, iterator.getId()))
    
        console.log("Cron period finish routine")
    }
}

const routineRankUpdate = async () => {

    cronUtil.intervalJob("*/2 * * * *", async () => {
        let periods = await getActivePeriods()
        for (const iterator of periods.getPeriodsList()) {
            await triggerRankUpdate(iterator.getId())
        }
    })
}

const serve = () => {
    const server = new grpc.Server()
    
    // @ts-ignore
    server.addService(CronService, new CronController())
    server.bindAsync(`${CRON_HOST}:${CRON_PORT}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
        if (err)
            throw err
        
        console.log(`Listening port ${port}`)

        server.start()
    })
}

serve()
routineRankUpdate()
routinePeriod()