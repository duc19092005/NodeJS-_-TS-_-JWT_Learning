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
}

export default baseResponseModel