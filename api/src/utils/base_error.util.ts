export enum HttpStatusCode {
    OK = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    NOT_FOUND = 404,
    CONFLICT = 409,
    INTERNAL_SERVER = 500
}

export enum MongoDbErrorCode {
    DUPLICATE_KEY = 11000
}


export class BaseError extends Error {
    public readonly name: string
    public readonly httpCode: HttpStatusCode
    public readonly isOperational: boolean

    constructor (name: string, httpCode: HttpStatusCode, isOperational: boolean, description: string) {
        super(description)
        Object.setPrototypeOf(this, new.target.prototype)

        this.name = name;
        this.httpCode = httpCode;
        this.isOperational = isOperational

        Error.captureStackTrace(this)
    }
}

export class MongoDbError extends BaseError{}

export class MongoDuplicateKeyError extends MongoDbError {
    constructor(httpCode = HttpStatusCode.CONFLICT, description = "Already exist"){
        super("MongoDbError", httpCode, true, description)
    }
}

export class MongoCastError extends MongoDbError {
    constructor(httpCode = HttpStatusCode.BAD_REQUEST, description = "Could not found") {
        super("MongoDbError", httpCode, true, description)
    }
}

export class APIError extends BaseError {
    constructor(name:string, httpCode = HttpStatusCode.INTERNAL_SERVER, isOperational = true, description = "internal server error") {
        super(name, httpCode, isOperational, description)
    }
}

export class HTTP400Error extends BaseError {
    constructor(description = "bad request") {
        super("NOT FOUND", HttpStatusCode.BAD_REQUEST, true, description)
    }
}


export const isMongoDbError = (err: any):MongoDbError => {
    if (err.code === MongoDbErrorCode.DUPLICATE_KEY){
        return new MongoDuplicateKeyError()
    } else if (err.name === "CastError") {
        return new MongoCastError()
    }
    return err
}

