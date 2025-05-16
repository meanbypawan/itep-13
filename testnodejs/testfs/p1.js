/*
   Synchronous/Blocking
     1. writeFileSync()
     2. readFileSync()
     3. appendFileSync()

   Asynchronous/Non-blocking
     1. writeFile()
     2. readFile()
     3. appendFile()
*/
import fs from "fs";
console.log("At the start...");
fs.writeFile("data.txt","NodeJs application is super fast",(err)=>{
    if(err)
        console.log(err);
    else
       console.log("Operation Success...");
});
console.log("At the end...");
















