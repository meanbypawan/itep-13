import User from "../model/user.model.js";

export const signIn = (request,response,next)=>{
  let {email,password} = request.body;
  User.find(email,password)
  .then(result=>{
    if(result.length)
      return response.redirect("/");
    else
      return response.redirect("/sign-in");
  })
  .catch(err=>{
    return response.end("Something went wrong....");
  })
}
export const checkForEmail = (request,response,next)=>{
  User.hasEmail(request.params.emailId)
  .then(result=>{
    if(result.length)
     return response.status(200).json({status: true,message: "Email id is alread taken"});
    else
     return response.status(200).json({status: false,message: "Available"});
  }).catch(err=>{
    console.log(err);
  })
}
export const signUp = (request,response,next)=>{
  let {name,email,password,contact} = request.body;
  let user = new User(null,name,email,password,contact);
  user.create().then(result=>{
    //return response.render("signin.ejs");
    return response.redirect("/sign-in");
    // http://localhost:3000/sign-in
  }).catch(err=>{
    console.log(err);
    response.end("Something wrong....");
  });
}