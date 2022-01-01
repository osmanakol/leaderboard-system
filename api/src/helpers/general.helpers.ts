export const isDevEnvironment = ():boolean => {
    if (process.env.NODE_ENV === "development")
        return true
    return false
}

export const isNullOrUndefined = (value:any):boolean => {
    if (value === undefined || value === null)
        return true
    return false
}