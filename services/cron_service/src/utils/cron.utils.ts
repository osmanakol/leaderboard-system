import schedule from "node-schedule";
import { CronJob } from "cron";

class CronUtil {
    public dateBasedSchedule = (job_name:string, time:string, func:any) => {
        schedule.scheduleJob(job_name, new Date(time), func)
    }

    public recurrenceJob = (job_name: string, hour:number, minute:number, func:any ,second:number=0) => {
        const rule = new schedule.RecurrenceRule()
        rule.hour = hour
        rule.minute = minute
        rule.second = second

        const job = schedule.scheduleJob(job_name, rule, func)
    }

    public intervalJob = (crontab:string ,func:any, timezone:string="Europe/Istanbul") => {
        const job = new CronJob(crontab, func, null, true, timezone)
        job.start()
    }

}

export default new CronUtil()