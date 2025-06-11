import jwt from "jsonwebtoken";
export const auth = async (request,response,next)=>{
   try{
    if(!request.headers.authorization)
        throw new Error("Unauthorized user | Invalid token");
    let bearerToken = request.headers.authorization;
    let token = bearerToken.split(" ")[1];
    let decode = await jwt.verify(token,"fsdfksdjfweroiuriuvvxcmvxnv"); 
    console.log(decode.payload);
    next();
   }
   catch(err){
    console.log(err);
    return response.status(401).json({error: "Unauthorized user | Invalid token"});
   }
}