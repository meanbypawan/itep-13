import jwt from "jsonwebtoken";

export const auth = async (request,response,next)=>{
   try{
     let token = request.cookies.token;
     jwt.verify(token,process.env.TOKEN_SECRET);
     next();
   }
   catch(err){
     return response.status(401).json({error: "Unauthorized user"});
   }
}