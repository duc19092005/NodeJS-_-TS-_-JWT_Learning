import baseResponseModel from "../baseRespond"

class loginResponseModel extends baseResponseModel<string>
{
    constructor(token : string , respondCode : number , message : string) 
    {
        super(respondCode , message , token)
    }
}

export default loginResponseModel