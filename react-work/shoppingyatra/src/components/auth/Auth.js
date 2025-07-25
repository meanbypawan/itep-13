import { Navigate } from "react-router-dom";
import SignIn from "../sign-in/SignIn";

export const isUserExist = ()=>{
    return !!sessionStorage.getItem("current-user");
}
export const getCurrentUser = ()=>{
   let user =  sessionStorage.getItem("current-user");
   user = JSON.parse(user);
   return user;
}
function Auth({children}){
    if(isUserExist())
        return children;
    return <Navigate to="/sign-in"/>
      
}
export default Auth;