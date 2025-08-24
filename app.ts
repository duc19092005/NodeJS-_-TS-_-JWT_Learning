import express, { Express, Request, Response } from "express";
import userRoute from './route/user'; // Corrected
import authMiddleWare from "./middleWare/authMiddleWare";
import dotenv from 'dotenv'
dotenv.config();

const app: Express = express();
app.use(express.json())
const PORT = 5000;
app.use(authMiddleWare)

app.use("/user" , userRoute)

app.listen(PORT, (error?: any) => {
    if (!error) {
        console.log("Server is Successfully Running, and App is listening on port " + PORT);
    } else {
        console.log("Error occurred, server can't start", error);
    }
});