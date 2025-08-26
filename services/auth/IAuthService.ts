import loginDTO from "../../dto/authDto/loginDto";
import baseResponseModel from "../../respondModel/baseRespond";
import registerDto from "../../dto/authDto/registerDto"

interface IAuthServices
{
    login(loginDTO : loginDTO) : baseResponseModel<string>,
    register(registerDto : registerDto) : Promise<baseResponseModel<string | null>>
}

export default IAuthServices