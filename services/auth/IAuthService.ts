import loginDTO from "../../dto/authDto/loginDto";
import loginResponseModel from "../../respondModel/authRespond/loginRespond";
import baseResponseModel from "../../respondModel/baseRespond";

interface IAuthServices
{
    login(loginDTO : loginDTO) : baseResponseModel<string>,
}

export default IAuthServices