import IAuthServices from "./IAuthService";
import loginDTO from "../../dto/authDto/loginDto";
import loginResponseModel from "../../respondModel/authRespond/loginRespond";
import roleEnum from "../../enum/roleEnum";
import payloadJwtHelper from "../../helper/payloadJwtHelper";
import { getuid } from "process";
import generateJwtToken from "../../helper/generateJwtTokenHelper";
import baseResponseModel from "../../respondModel/baseRespond";
import registerDto from "../../dto/authDto/registerDto"
import mongoose from "mongoose";
import mongoDBSchema from "../../model/user"



class authServices implements IAuthServices
{
    public login(loginDTO : loginDTO) : baseResponseModel<string>
    {
        if(loginDTO.getUserName() == "admin"
            && loginDTO.getPassword() == "123"
        )
        {
            // Generate Roles
            const roles : roleEnum[] = [roleEnum.admin , roleEnum.customer
                , roleEnum.staff
            ]
            // Generate New Guid
            const guid : string = crypto.randomUUID()

            // Generates NewPayload
            
            const newPayloadObject = new payloadJwtHelper(guid , roles)
            // Generate Token
            const generateJwtToken1 = generateJwtToken(newPayloadObject)

            // Return Data

            const returnData = baseResponseModel.successRespond(generateJwtToken1)

            return returnData
        }
        return baseResponseModel.failureRespond("Sai tài khoản và mật khẩu");
    }

    public async register(registerDto : registerDto) : Promise<baseResponseModel<string>>
    {
        // Register
        // Tiến hành create Data
        try
        {
            const createStatus = await mongoDBSchema.create(
                {
                    userName : registerDto.getUserName() ,
                    password : registerDto.getPassword()
                }
            )

            return baseResponseModel.successRespond("Tạo dữ liệu thành công");
        }catch(e : any)
        {
            console.log(e.message)
            return baseResponseModel.failureRespond("Lỗi Database");
        }
    }

}

export default authServices