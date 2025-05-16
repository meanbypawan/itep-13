import fs from "fs";
try{
 console.log("At the start...");
 let data = fs.readFileSync("data.txt","utf8");
 console.log(data);
 console.log("At the end.....");
}
catch(err){
    console.log("oepration failed..");
    console.log(err);
}