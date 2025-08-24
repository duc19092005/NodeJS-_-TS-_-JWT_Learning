import {Router , Request , Response} from 'express'
import authServices from '../services/auth/authService'
import loginDTO from '../dto/authDto/loginDto';
import respondStatus from '../enum/respondStatusCode';
import jsonwebtoken from 'jsonwebtoken';


const router = Router()

const newAuthServicesObject  = new authServices();

router.post("/login" , (req : Request , res : Response) => {
    const loginDtoObject = new loginDTO(req.body.userName
        , req.body.password
    )
    const respondData = newAuthServicesObject.login(loginDtoObject)

    if(respondData != null)
    {
        res.json(respondData)
        res.status(respondStatus.success)
    }
    res.status(400)
})

router.get("/getUserInfo" , (req : Request , res : Response) => {
    // Lấy Data ra
    const payload = (req as any).user
    if(payload.userId && payload.roles)
    {
        const data = payload.userId
        const roles = payload.roles

        res.json({
        userId : data , 
        roles : roles
        })
    }
})

export default router