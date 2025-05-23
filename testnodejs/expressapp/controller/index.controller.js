export const indexPage = (request,response,next)=>{
    return response.render("index.ejs"); 
 }
export const aboutPage = (request,response,next)=>{
    return response.render("about.ejs");
}
export const contactPAge = (request,response,next)=>{
    return response.render("contact.ejs");
}
export const signInPage = (request,response,next)=>{
    return response.render("signin.ejs");
}

export const signUpPage = (request,response,next)=>{
    return response.render("signup.ejs");
}