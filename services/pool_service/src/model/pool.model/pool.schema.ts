import { modelOptions, prop, getModelForClass, Ref } from "@typegoose/typegoose";
import { PeriodSchema, Player } from "../../clients/index";

@modelOptions({
    schemaOptions: {
        collection: "pools",
        toJSON: {
            virtuals: true
        },
        toObject: {
            virtuals: true
        }
    }
})
export class PoolSchema {
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
    money: number
}

const PoolModel = getModelForClass<typeof PoolSchema>(PoolSchema, {
    options: {
        customName: "pools"
    }
})

export default PoolModel