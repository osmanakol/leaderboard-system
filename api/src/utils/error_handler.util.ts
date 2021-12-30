import { BaseError, loggerUtil } from './index';

class ErrorHandler {
    public async handleError(err: Error):Promise<void> {
        // TODO : Logger implementation
        await loggerUtil.error(
            "Error message from centralized error handlers",
            err
        )
    }

    public isTrustedError(error:Error) {
        if (error instanceof BaseError){
            return error.isOperational
        }
        return false
    }
}

export default new ErrorHandler() 