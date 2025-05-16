import fs from "fs";

const writeStream = fs.createWriteStream("xyz.txt");

writeStream.write("Hello Friends...");
writeStream.end();

writeStream.on("finish",()=>{
    console.log("operation success...");
});

writeStream.on("error",(err)=>{
    console.log(err);
})