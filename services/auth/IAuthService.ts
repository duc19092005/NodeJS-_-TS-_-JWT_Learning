import loginDTO from "../../dto/authDto/loginDto";
import loginResponseModel from "../../respondModel/authRespond/loginRespond";
import baseResponseModel from "../../respondModel/baseRespond";
import registerDto from "../../dto/authDto/registerDto"

interface IAuthServices
{
    login(loginDTO : loginDTO) : baseResponseModel<string>,
    register(registerDto : registerDto) : Promise<baseResponseModel<string>>
}

export default IAuthServices