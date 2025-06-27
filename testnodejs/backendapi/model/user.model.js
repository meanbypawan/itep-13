import mongoose, { set } from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        trim: true,
        get:(value)=>{
            return "hello "+value;
        }
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true,
        set: (value)=>{
          console.log("setter executed...");
          const saltKey = bcrypt.genSaltSync(12);
          value = bcrypt.hashSync(value, saltKey);
          return value;
        }
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
},{toJSON:{getters: true}},{versionKey: false});

export const User = mongoose.model("user",userSchema);