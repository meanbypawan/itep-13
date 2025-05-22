import express from "express";

// app :- It is an express application instance
const app = express();
app.set("view engine","ejs");

app.use(express.static("./public"));
app.use((request,response,next)=>{
   console.log("Hello Express.......");
   next();
});
app.use((request,response,next)=>{
    console.log("You are wonderful....");
    next();
 });
app.get("/home",(request,response,next)=>{
    response.write("Home Page");
    response.end();
});

app.get("/about",(request,response,next)=>{
    response.write("About Page");
    response.end();
});
app.get("/add",(request,response,next)=>{
    let {a,b} = request.query;
    response.write("Addition : "+(a*1 + b*1));
    response.end();
});
app.get("/contact",(request,response,next)=>{
    return response.render("contact.ejs");
    
});
app.use((request,response)=>{
    response.write("Requested resouce is not available....");
    response.end();
})


app.listen(3000,()=>{
    console.log("server started..");
})
