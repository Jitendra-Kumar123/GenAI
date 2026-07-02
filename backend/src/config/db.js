import mongoose from "mongoose";

async function ConnectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("db connected");
    }catch(err){
        console.log("db connection err: ", `${err}`);
        return res.status(400).json({
            message: "db connection err"
        })
        process.exit(1);
    }
}

export {ConnectDB};