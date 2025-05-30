import { validationResult } from "express-validator";
import User from "../model/user.model.js"

export const signUp = async(request,response,next)=>{
    try{
       let errors = validationResult(request);
       if(!errors.isEmpty())
         return response.status(401).json({error: "Bad request | Invalid data",errorMessages: errors.array()}); 
       let {name,email,password,contact} = request.body;
       let user = await User.create({name,email,password,contact});
       return response.status(201).json({message: "Sign up success",user});
    }
    catch(err){
        return response.status(500).json({error: "Internal Server Error"});
    }
}