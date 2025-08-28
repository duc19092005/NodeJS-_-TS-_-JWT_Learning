import mongoose from "mongoose";

// UseMongooseServices

const userRole : mongoose.Schema = new mongoose.Schema 
(
    {
        userId : {
            type : String ,
            require : true
        } ,
        roleId : {
            type : String ,
            require : true
        } 
    }
)

export default mongoose.model("userRole" , userRole)