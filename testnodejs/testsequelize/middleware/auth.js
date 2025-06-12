import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const auth = async (request,response,next)=>{
    let {token} = request.cookies; 
    try{
      if(!token)
        throw new Error("Unauthorized user");
      let decode = await jwt.verify(token,process.env.TOKEN_SECRET);
      console.log(decode.userId+" "+decode.email);
      next();
    }
    catch(err){
        return response.status(401).json({error: "Unauthorized user | Invalid token"});
    }
//    try{
//     if(!request.headers.authorization)
//         throw new Error("Unauthorized user | Invalid token");
//     let bearerToken = request.headers.authorization;
//     let token = bearerToken.split(" ")[1];
//     let decode = await jwt.verify(token,"fsdfksdjfweroiuriuvvxcmvxnv"); 
//     console.log(decode.userId+"  "+decode.email);
//     next();
//    }
//    catch(err){
//     console.log(err);
//     return response.status(401).json({error: "Unauthorized user | Invalid token"});
//    }
}