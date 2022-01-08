import { modelOptions, prop, Ref, getModelForClass } from '@typegoose/typegoose';
import { Country } from '../country.service/country.schema';

@modelOptions({
    schemaOptions: {
        collection: "players",
        toJSON: {
            virtuals: true
        },
        toObject: {
            virtuals: true
        }, 
        timestamps: true,
    }
})
export class Player {
    @prop({
        type: () => String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        maxlength: 20
    })
    username:string

    @prop({ref: Country})
    country:Ref<Country>

    @prop({
        type: () => Number,
        default: 0
    })
    total_money: Number
}

const PlayerModel = getModelForClass<typeof Player>(Player, {
    options: {
        customName: "players"
    }
})

export default PlayerModel