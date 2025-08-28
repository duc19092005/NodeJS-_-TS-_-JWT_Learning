import roleDto from "../../respondModel/roleRespond/roleDto";
import roleEnum from "../../enum/roleEnum";
import role from "../../model/role";
import roleModel from "../../model/role";
import userRoleModel from "../../model/userRole";
import mongoose from "mongoose";
import responseModel from "../../respondModel/baseRespond"
import roleCreateDto from "../../dto/roleDto/roleDto";
import crudResponseMessage from "../../enum/crudResponseMessage";
import respondStatus from "../../enum/respondStatusCodeEnum";

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

    public static async createUserRole(roleCreateDto : roleCreateDto[]) : Promise<responseModel<string | null>>{
        try{
            // Check if exist

            let isExist = false;

            if(roleCreateDto.length > 0)
            {
                // Check If Role Exits

                for(const element of roleCreateDto){
                    // Check if Role Exits Or Not
                    const checkUserRole =
                        await userRoleModel.findOne({
                            roleId : element.roleId ,
                            userId : element.userId
                        })

                    // If exist

                    if(checkUserRole != null){
                        isExist = true
                        break;
                    }
                }
                
                if(isExist)
                {
                    return responseModel.failureRespond("Tạo thất bại do data đã tồn tại" , respondStatus.dataConflict)
                }
                // Get And CRUD Into Database
                
                const addUserRole = await userRoleModel.create(roleCreateDto)
                return responseModel.successRespond("Tạo Data Thành Công" , respondStatus.created , null)

            }else{
                return responseModel.failureRespond("Tạo Thất bại do bạn chưa nhập gì" , respondStatus.badRequest)
            }
        }catch(e : any){
                return responseModel.failureRespond("Lỗi :" + e.message , respondStatus.serviceUnavailable)
        }
    }
}

export default roleService