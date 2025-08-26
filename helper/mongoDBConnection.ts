import mongoose from "mongoose";


async function connectToMongoDB(connectString : string) : Promise<boolean>
{
    try
    {
        const connect = await mongoose.connect(connectString)
        return true;
    }catch(e : any)
    {
        console.error("Lỗi Connect Với Database")
        return false
    }
}

export default connectToMongoDB


