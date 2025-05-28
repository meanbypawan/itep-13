export const auth = (request,response,next)=>{
   if(request.session.isLoggedIn)
    next();
   else
     return response.redirect("/sign-in");
}