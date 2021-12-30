import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose"

export class Currency {
    @prop({
        type: () => String,
        required: true,
        trim:true
    })
    currency_code: string

    @prop({
        type: () => String,
        required: true,
        trim:true
    })
    currency_name: string

    @prop({
        type: () => String,
        required: true,
        trim:true
    })
    currency_symbol: string
}


@modelOptions({
    schemaOptions: {
        collection: "countries",
        toJSON: {
            virtuals: true
        },
        toObject: {
            virtuals: true
        }
    }
})
export class Country {
    @prop({
        type: () => String,
        required: true,
        unique: true,
        trim:true,
        maxlength: 2
    })
    iso: string

    @prop({
        type: () => String,
        required: true,
        unique: true,
        trim:true
    })
    country: string

    @prop({
        _id: false,
        type: () => Currency,
        required: true
    })
    currency: Currency

    @prop({
        type: () => Number,
        unique: true,
        required: true
    })
    country_id: number
}

const CountryModel = getModelForClass<typeof Country>(Country, {options: {
    customName: "countries"
}})

export default CountryModel