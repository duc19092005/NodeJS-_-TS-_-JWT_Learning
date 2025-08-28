export default class roleDto{
    public roleId : string 
    public userId : string

    constructor(roleId : string , userId : string)
    {
        this.roleId = roleId,
        this.userId = userId
    }
}