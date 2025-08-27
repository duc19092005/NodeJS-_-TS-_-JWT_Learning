import {Request , Response,  NextFunction } from "express";
import mongoose from "mongoose";
import roleEnum from "../enum/roleEnum";
import roleModel from "../model/role";

const roleCheckingMiddleware = () => {
    return async (req : Request , res : Response , next : NextFunction) => {
        try{
                // Convert To Array
            const roleArray : string[] = Object.values(roleEnum)

            // Check If Role Exits

            for(const roleItem of roleArray){
                
                // Check Role
                const findExistRoleInDB = await
                    roleModel.findOne({
                        roleName : roleItem
                    })

                // if Not Exist

                if(findExistRoleInDB == null)
                {
                    const newRoleModel = {
                        roleName : roleItem
                    }

                    const addIntoDB =
                        await roleModel.create(newRoleModel)
                }else{
                    
                }
            };

            return next();
        }catch(e : any){
            res.status(400)
            res.json("Lỗi : " + e.message)
        }
    }
}

export default roleCheckingMiddleware