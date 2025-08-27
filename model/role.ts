import mongoose from "mongoose";
import roleEnum from "./../enum/roleEnum"

mongoose.Promise = global.Promise


const roleSchema : mongoose.Schema = new mongoose.Schema({
    roleName : String // Thông tin Role
});

export default mongoose.model("role" , roleSchema)
