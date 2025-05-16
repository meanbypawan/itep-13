import fs from "fs";
import { read } from "node:fs";

import readline from "node:readline";
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Write someting : ",(data)=>{
  try{ 
    fs.writeFileSync("abc.txt",data);
    console.log("operation success..");
    rl.close();
  }
  catch(err){
    console.log("operation failed...");
  } 
});