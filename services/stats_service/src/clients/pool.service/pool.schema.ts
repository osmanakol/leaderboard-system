import { modelOptions, prop, getModelForClass } from '@typegoose/typegoose';

export enum PeriodType {
    "NONE" = 0,
    "DAILY" = 1,
    "WEEKLY" = 7,
    "MONTHLY" = 30
}

@modelOptions({
    schemaOptions: {
        collection: "periods",
        toJSON: {
            virtuals: true
        },
        toObject: {
            virtuals: true
        }
    }
})
export class PeriodSchema {
    @prop({
        type: () => Date
    })
    startTime: Date

    @prop({
        type: () => Date
    })
    finishTime: Date

    @prop({
        enum: PeriodType
    })
    periodType: PeriodType

}

const PeriodModel = getModelForClass<typeof PeriodSchema>(PeriodSchema, {
    options: {
        customName: "periods"
    }
})

export default PeriodModel