import { validationResult } from "express-validator";
import { User } from "../model/user.model.js";
import bcrypt from "bcryptjs";
export const createUser = async(request,response,next)=>{
  try{
    const errors =  validationResult(request);
    if(!errors.isEmpty())
        return response.status(400).json({error: "Bad request",errorMessages: errors.array()});
    let {password,name,contact,email} = request.body;
    const saltKey = bcrypt.genSaltSync(12);
    password = bcrypt.hashSync(password,saltKey);
    let result = await User.create({name,password,contact,email});
    return response.status(201).json({message: "user created", user: result});
  }
  catch(err){
    return response.status(500).json({error: "Internal Server Error"});
  }
}

export const authenticateUser = async(request,response,next)=>{
    try{
     let {email,password} = request.body;
     let user = await User.findOne({email});
     if(!user)
        return response.status(401).json({error: "Unauthorized user | Email id not found"});
     let status = bcrypt.compareSync(password,user.password);
     return status ? response.status(200).json({message:"Sign in success"}) : response.status(401).json({error: "Unauthorized user | Invalid password"});
    }
    catch(err){
        return response.status(500).json({error: "Internal Server Error"});
    }
}