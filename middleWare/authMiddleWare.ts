import { Request, Response, NextFunction } from 'express'
import jsonwebtoken from 'jsonwebtoken'

const authMiddleWare = (req: Request, res: Response, next: NextFunction) => {
    // Các đường dẫn đc bỏ qua
    const continueURL = "/user/login"
    if(req.originalUrl === (continueURL))
    {
       return next();
    }else {
        if (!req.headers.authorization?.startsWith("Bearer ")) {
            return res.status(401).send("Unauthorized: Token is missing or malformed.");
        }
        
        const token = req.headers.authorization.split(' ')[1];

        try {
            const secretKey: string | undefined = process.env.JWT_SECRECT_KEY;
            const payload: any = jsonwebtoken.verify(token, secretKey!);
            
            (req as any).user = payload; 
            next();
            
        } catch (error) {
            console.error("Token verification failed:", error);
            return res.status(403).send("Forbidden: Invalid token.");
        }
    }
}

export default authMiddleWare;