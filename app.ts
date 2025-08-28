import express, { Express, Request, Response } from "express";
import userRoute from './route/user'; // Corrected
import authMiddleWare from "./middleWare/authMiddleWare";
import dotenv from 'dotenv'
import connectToMongoDB from "./helper/mongoDBConnection"
import roleMiddleware from "./middleWare/roleMiddleware"
import roleRoute from "./route/role";
dotenv.config();

const app: Express = express();
app.use(express.json())
const PORT = 5000;

app.use(roleMiddleware());
app.use(authMiddleWare);
app.use("/user" , userRoute)
app.use("/role" , roleRoute)

async function connectToMongoDBFuncition()
{
    const connectString = process.env.MONGODB_CONNECT_STRING
    if(connectString != null)
    {
        const getStatus = await connectToMongoDB(connectString)
        if(getStatus)
        {
            app.listen(PORT, (error?: any) => {
                if (!error) {
                    console.log("Server is Successfully Running, and App is listening on port " + PORT);
                } else {
                    console.log("Error occurred, server can't start", error);
                }
            });
        }else{
            console.log("Error Can't Connect To MongoDB")
        }
    }else{
        console.error("Lỗi ConnectionString bị Null")
    }

}

connectToMongoDBFuncition()
