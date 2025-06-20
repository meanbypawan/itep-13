import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    },
    contact:{
        type:String,
        isNumeric: true,
        required: true
    },
    profile:{
        imageName:String,
        address:String
    },
    isVerified:{
        type: Boolean,
        default: false
    }
},{versionKey: false});

export const User = mongoose.model("user",userSchema);