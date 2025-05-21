import http from "http";
import url, { fileURLToPath } from "url";
import fs from "fs";
import path from "path";
const server = http.createServer((request,response)=>{
  const parsedUrl =  url.parse(request.url,true);
  let __filename = fileURLToPath(import.meta.url);
  let __dirname = path.dirname(__filename);
  console.log(__filename);
  console.log(__dirname);
  console.log(parsedUrl.pathname);
  if(parsedUrl.pathname == "/add" && request.method == "GET"){
     let a = parsedUrl.query.a*1;
     let b = parseFloat(parsedUrl.query.b);
     response.write("Addition : "+(a+b));
     response.end();
   }
   else if(parsedUrl.pathname == "/home" || parsedUrl.pathname == "/"){
      let homePage =  fs.readFileSync("./views/home.html","utf8");
      response.writeHead(200,{"Content-Type":"text/html"});
      response.write(homePage);
      response.end();
   }
   else if(parsedUrl.pathname == "/about" && request.method == "GET"){
    let aboutPage =  fs.readFileSync("./views/about.html","utf8");
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write(aboutPage);
    response.end();
   }
   else if(parsedUrl.pathname.match("\.css$")){
     let cssFilePath = path.join(__dirname,"./views",parsedUrl.pathname);
     let readStream = fs.createReadStream(cssFilePath);
     response.writeHead(200,{"Content-Type":"text/css"});
     readStream.pipe(response); 
   }
   else if(parsedUrl.pathname.match("\.jpeg$")){
    let readStream = fs.createReadStream("./views"+parsedUrl.pathname);
    response.writeHead(200,{"Content-Type":"image"});
    readStream.pipe(response); 
   }
});

server.listen(3000,()=>{
    console.log("Server Started....");
});



