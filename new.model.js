import mongoose from "mongoose";

const userSchema=new mongoose.connect(){

    name:{
        type:String;
    },
    email:{
        type:String
    }

}

export default userSchema || userSchema("user",userSchema)