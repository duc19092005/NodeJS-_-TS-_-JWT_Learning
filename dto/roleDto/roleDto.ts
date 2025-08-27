import roleEnum from "../../enum/roleEnum"

export default class roleDto{
    public roleId : string 
    public roleName : roleEnum

    constructor(roleId : string , roleName : roleEnum)
    {
        this.roleId = roleId
        this.roleName = roleName
    }
}