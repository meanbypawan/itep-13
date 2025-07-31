import { Navigate } from "react-router-dom";
import SignIn from "../sign-in/SignIn";
import { useSelector } from "react-redux";

export const isUserExist = ()=>{
    return !!sessionStorage.getItem("current-user");
}
export const getCurrentUser = ()=>{
   let user =  sessionStorage.getItem("current-user");
   user = JSON.parse(user);
   return user;
}
function Auth({children}){
    const {user,isLoggedIn} = useSelector((store)=>store.User);
    if(isLoggedIn)
        return children;
    return <Navigate to="/sign-in"/>
      
}
export default Auth;