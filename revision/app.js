import express from "express";

const app = express();
app.use(express.static("public"))

app.get("/search",(request,response,next)=>{
    console.log(request.query);
    let {keyword,len} = request.query;
})
app.use((request,response,next)=>{
   return response.status(404).json({error: "Requested resource not avaialbe"});
})
app.listen(3000,()=>{
    console.log("server started...");
})