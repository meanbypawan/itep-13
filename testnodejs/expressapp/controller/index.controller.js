import Product from "../model/product.model.js";
export const indexPage = async(request,response,next)=>{
    let productList = await Product.findAll();
    return response.render("index.ejs",{products: productList,currentUser: request.session.currentUser,isLoggedIn: request.session.isLoggedIn}); 
}
export const aboutPage = (request,response,next)=>{
    return response.render("about.ejs",{currentUser: request.session.currentUser,isLoggedIn: request.session.isLoggedIn});
}
export const contactPAge = (request,response,next)=>{
    return response.render("contact.ejs",{currentUser: request.session.currentUser,isLoggedIn: request.session.isLoggedIn});
}
export const signInPage = (request,response,next)=>{
    return response.render("signin.ejs");
}
export const signUpPage = (request,response,next)=>{
    return response.render("signup.ejs");
}