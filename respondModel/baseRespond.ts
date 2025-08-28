import respondStatusEnum from "../enum/respondStatusCodeEnum";

class baseResponseModel<T> {
    protected statusCode : respondStatusEnum ;
    protected message : string ;
    protected data : T | null

    constructor(statusCode : respondStatusEnum , message : string , data : T | null)
    {
        this.statusCode = statusCode 
        this.message = message
        this.data = data
    }

    public static successRespond<T>(message : string ,statusCode : respondStatusEnum ,data : T | null) : baseResponseModel<T>
    {
        const newObject = new baseResponseModel(statusCode  , message , data)
        return newObject
    }

    public static failureRespond(message : string , statusCode : respondStatusEnum) : baseResponseModel<any>
    {
        const newObject = new baseResponseModel(statusCode, message , null)
        return newObject
    }

     public static notFoundRespond(message : string,statusCode : respondStatusEnum) : baseResponseModel<any>
    {
        const newObject = new baseResponseModel(statusCode , message , null)
        return newObject
    }

    public getResponseCode() : number{
        return this.statusCode
    }
}

export default baseResponseModel