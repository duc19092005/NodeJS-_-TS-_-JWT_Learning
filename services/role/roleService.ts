import roleDto from "../../dto/roleDto/roleDto";
import roleEnum from "../../enum/roleEnum";
import role from "../../model/role";
import roleModel from "../../model/role";
import mongoose from "mongoose";

// Tiến hành CRUD

class roleService{
    // Get All RoleInfo Services

    public static async getAllRoleInfo() : Promise<roleDto[]>{
        // Tiến hành truy vấn
        var findAllRole = await roleModel.find();

        if(findAllRole.length > 0)
        {
            // Khởi tạo Data
            const newRoleDtoArray : roleDto [] = []
            
            findAllRole.forEach(element => {
                const newObjectId : string = element._id as string;
                const newRoleName : roleEnum = element.roleName as roleEnum;

                newRoleDtoArray.push(new roleDto(newObjectId , newRoleName));
            });

            return newRoleDtoArray
        }else{
            return []
        }
    }

    // Thêm Role Services

    public static createRole() : void{
        // Add Data
        const newRoleArray : string [] = Object.values(roleEnum)
        
        // Tiến hành add data 

        newRoleArray.forEach(async element => {
            const createData = await roleModel.create({
                roleName : element
            })
        });
    }
}