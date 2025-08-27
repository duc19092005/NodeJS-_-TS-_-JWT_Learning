import {Router , Request , Response} from 'express'
import authServices from '../services/auth/authService'
import loginDTO from '../dto/authDto/loginDto';
import respondStatus from '../enum/respondStatusCode';
import registerDto from '../dto/authDto/registerDto';
import permisonMiddleware from "./../middleWare/permissonMiddleware"
import roleEnum from '../enum/roleEnum';
import permissonHelper from "./../helper/permissonCheckHelper"

const router = Router()

const newAuthServicesObject  = new authServices();

router.post("/login" , (req : Request , res : Response) => {
    const loginDtoObject = new loginDTO(req.body.userName
        , req.body.password
    )
    const respondData = newAuthServicesObject.login(loginDtoObject)

    res.status(respondData.getResponseCode())
    res.json(respondData)
})

router.post("/register" , async (req : Request , res : Response) => {
    const newObject = new registerDto(req.body.userName , req.body.password)
    const getStatus = await newAuthServicesObject.register(newObject)
    res.status(getStatus.getResponseCode())
    res.json(getStatus)
})

router.get("/getUserInfo" , permissonHelper.allowOnlyAdmin() , (req : Request , res : Response) => {
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