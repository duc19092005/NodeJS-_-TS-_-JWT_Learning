class baseResponseModel<T> {
    protected statusCode : number ;
    protected message : string ;
    protected data : T | null

    constructor(statusCode : number , message : string , data : T | null)
    {
        this.statusCode = statusCode 
        this.message = message
        this.data = data
    }

    public static successRespond<T>(message : string , data : T | null) : baseResponseModel<T>
    {
        const newObject = new baseResponseModel(200 , message , data)
        return newObject
    }

    public static failureRespond(message : string) : baseResponseModel<any>
    {
        const newObject = new baseResponseModel(400 , message , null)
        return newObject
    }

     public static notFoundRespond(message : string) : baseResponseModel<any>
    {
        const newObject = new baseResponseModel(404 , message , null)
        return newObject
    }

    public getResponseCode() : number{
        return this.statusCode
    }
}

export default baseResponseModel