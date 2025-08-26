import roleEnum from "../../enum/roleEnum";


class payloadJwtHelper
{
    userId : string 
    roles : roleEnum [] 
    constructor(userId : string , role : roleEnum [])
    {
        this.userId = userId ,
        this.roles = role
    }
}

export default payloadJwtHelper