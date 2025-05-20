import http from "http";

const server = http.createServer((request,response)=>{
    if(request.url == "/home" || request.url == "/"){
        response.write("Home Page");
        response.end();
    }
    else if(request.url == "/about"){
        response.write("About Page");
        response.end();
    }
    else if(request.url == "/contact"){
        response.write("Contact Page");
        response.end();
    }
});
server.listen(3000,()=>{
    console.log("server started...");
})