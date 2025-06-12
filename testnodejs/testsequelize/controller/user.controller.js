import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import User from "../model/user.model.js"
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const signIn = async(request,response,next)=>{
   try{
      let {email,password} = request.body;
      let user = await User.findOne({where:{email},raw: true});
      if(user){
         response.cookie("token",generateToken(user.id,user.email)); 
         return bcrypt.compareSync(password,user.password) ? response.status(200).json({message: "Sign In Success",user}) : response.status(401).json({error: "Unauthorized user | Invalid Password"});
      }
      return response.status(401).json({error: "Unauthorized user | Invalid Email Id"});
   }
   catch(err){
    return response.status(500).json({error :"Internal Server Error..."});
   }
}
export const signUp = async(request,response,next)=>{
    try{
       let errors = validationResult(request);
       if(!errors.isEmpty())
         return response.status(401).json({error: "Bad request | Invalid data",errorMessages: errors.array()}); 
       let {name,email,password,contact} = request.body;
       let saltKey = bcrypt.genSaltSync(12);
       password = bcrypt.hashSync(password,saltKey);
       let user = await User.create({name,email,password,contact});
       return response.status(201).json({message: "Sign up success",user});
    }
    catch(err){
        return response.status(500).json({error: "Internal Server Error"});
    }
}

const generateToken = (userId,emailId)=>{
   let payload = {userId: userId,email: emailId};
   let token = jwt.sign(payload,process.env.TOKEN_SECRET,{expiresIn: 60*60});
   console.log(token);
   return token;
}





