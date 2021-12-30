import { BaseError } from './index';

class ErrorHandler {
    public async handleError(err: Error):Promise<void> {
        // TODO : Logger implementation
        if (process.env.NODE_ENV === "development"){
            console.error(err.stack)
        }
    }

    public isTrustedError(error:Error) {
        if (error instanceof BaseError){
            return error.isOperational
        }
        return false
    }
}

export default new ErrorHandler() 