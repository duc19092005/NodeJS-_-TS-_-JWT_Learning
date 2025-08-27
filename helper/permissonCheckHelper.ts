import { RequestHandler } from "express";
import roleEnum from "../enum/roleEnum";
import permissionMiddleware from "../middleWare/permissonMiddleware";

class permissionCheckHelper{
    // Chỉ Allow 1 mình admin thôi
    public static allowOnlyAdmin() : RequestHandler{
        return permissionMiddleware([roleEnum.admin])
    }

    // Chỉ Allow 1 mình admin thôi
    public static allowOnlyStaff() : RequestHandler{
        return permissionMiddleware([roleEnum.staff])
    }

    public static allowOnlyCustomer() : RequestHandler{
        return permissionMiddleware([roleEnum.customer])
    }
}

export default permissionCheckHelper