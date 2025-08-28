import {Request , Response, Router } from "express";
import permissonCheckHelper from "./../helper/permissonCheckHelper"
import roleServices from "../services/role/roleService"
import roleCreateDto from "../dto/roleDto/roleDto";

const route = Router();


// use Services
// Only Allow Admin

route.post("/createUserRole" , permissonCheckHelper.allowOnlyAdmin() ,async (req : Request , res : Response) => {
    // craete UserRole
    // First get Data
    const roleCreateDtoObject : roleCreateDto [] =
        req.body

    // using serivces

    const getStatus = await roleServices.createUserRole(roleCreateDtoObject)

    res.status(getStatus.getResponseCode())
    res.json(getStatus)
})

export default route