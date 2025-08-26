class baseResponseModel<T> {
    protected statusCode : number ;
    protected message : string ;
    protected data : T

    constructor(statusCode : number , message : string , data : T)
    {
        this.statusCode = statusCode 
        this.message = message
        this.data = data
    }

    public static successRespond<T>(data : T) : baseResponseModel<T>
    {
        const newObject = new baseResponseModel(200 , "Success" , data)
        return newObject
    }

    public static failureRespond<T>(message : T) : baseResponseModel<T>
    {
        const newObject = new baseResponseModel(400 , "Failure" , message)
        return newObject
    }

     public static notFoundRespond<T>(message : T) : baseResponseModel<T>
    {
        const newObject = new baseResponseModel(404 , "Failure" , message)
        return newObject
    }

    public getResponseCode() : number{
        return this.statusCode
    }
}

export default baseResponseModel