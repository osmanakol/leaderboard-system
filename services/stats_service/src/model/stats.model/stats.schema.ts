import { modelOptions, prop, getModelForClass, Ref } from '@typegoose/typegoose';
import { PeriodSchema, Player } from "../../clients/index"


@modelOptions({
    schemaOptions: {
        collection: "stats",
        toJSON: {
            virtuals: true
        },
        toObject: {
            virtuals: true
        }
    }
})
export class StatSchema {
    @prop({ref: Player})
    playerId: Ref<Player>

    @prop({
        type: () => Date
    })
    time: Date

    @prop({ref: PeriodSchema})
    periodId: Ref<PeriodSchema>

    @prop({
        type: () => Number,
        required: true
    })
    totalMoney: number

    @prop({
        type: () => Number
    })
    poolMoney: number

    @prop({
        type: () => Number
    })
    remainingMoney: number
}

const StatModel = getModelForClass<typeof StatSchema>(StatSchema, {
    options: {
        customName: "stats"
    }
})

export default StatModel