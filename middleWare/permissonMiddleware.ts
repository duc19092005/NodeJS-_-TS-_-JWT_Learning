import { Request, Response, NextFunction, RequestHandler } from 'express'
import roleEnum from './../enum/roleEnum'
import responseCodeEnum from "./../enum/respondStatusCode"

// Authorzation


const permissionMiddleware = (allowRoles : roleEnum[]) : RequestHandler =>{
    // kiểm tra Roles
    return (req : Request , res : Response , next : NextFunction) =>{
        const jwtPayloadRole = 
             (req as any).user 
        
        if(jwtPayloadRole != null)
        {
            // Tiếp tục tìm kiềm tiêps
            // Kiểm tra xem payload có thỏa mản allowRoles hay ko
            let isPermisson : boolean = false;
            // Mặc định là false
            jwtPayloadRole.roles.forEach((items: roleEnum)  => {
                if(allowRoles.includes(items))
                {
                    // Nếu có quyền
                    isPermisson = true
                }
            });

            // nếu có quyền

            if(isPermisson)
            {
                return next();
            }else{
                res.status(responseCodeEnum.forbiden)
                res.send({
                    "Error" : "You Don't have Permission to access this"
                })
            }
        }else{
            res.status(responseCodeEnum.unauthorize)
            res.send({
                "Error" : "Unanthorize"
            })
        }
    }
}

export default permissionMiddleware