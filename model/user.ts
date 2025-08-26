import mongoose from "mongoose";

mongoose.Promise = global.Promise

const userSchema : mongoose.Schema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});


export default mongoose.model("user" , userSchema);

