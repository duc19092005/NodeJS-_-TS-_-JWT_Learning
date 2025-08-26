import jsonwebtoken, { Secret, SignOptions } from "jsonwebtoken";
import payloadJwtHelper from "./payloadJwtHelper";
import { userInfo } from "os";


// Token Service

function generateJwtToken(payloadJwtHelper: payloadJwtHelper): string {
    const jwtPayload : payloadJwtHelper = payloadJwtHelper;
    const newPayload = {
        "userId" : jwtPayload.userId ,
        "roles" : jwtPayload.roles
    }
    const secretKey: string | undefined = process.env.JWT_SECRECT_KEY;
    const options: SignOptions = {
        expiresIn: "1h",
    };
    
    // Hàm sign sẽ nhận đúng kiểu dữ liệu
    const token = jsonwebtoken.sign(newPayload, secretKey!, options);
    return token;
}

export default generateJwtToken
