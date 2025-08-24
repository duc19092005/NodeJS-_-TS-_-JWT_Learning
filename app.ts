import express, { Express, Request, Response } from "express";
import userRoute from './route/user'; // Corrected
import authMiddleWare from "./middleWare/authMiddleWare";

const app: Express = express();
app.use(express.json())
const PORT = 5000;
app.use(authMiddleWare)
const TestString: string = "abc";

app.use("/user" , userRoute)

app.get("/get", (req: Request, res: Response) => {
    res.status(200).send("213123123");
});

app.listen(PORT, (error?: any) => {
    if (!error) {
        console.log("Server is Successfully Running, and App is listening on port " + PORT);
    } else {
        console.log("Error occurred, server can't start", error);
    }
});