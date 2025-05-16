/*
  Stream :-  Event
    1. Readable
    2. Writable
    3. Trasnform
    4. Duplex
*/
import fs from "fs";

const readStream = fs.createReadStream("data.txt");
// data --> If data available for read
// end ---> If data not available for read
// error --> If something go wrong
let result = "";

readStream.on("data",(chunk)=>{
    console.log("Data event ...");
    result = result + chunk;
});
readStream.on("end",()=>{
    console.log("End event....");
    console.log(result);
    console.log("Operation Success...");
});
readStream.on("error",(err)=>{
    console.log(err);
    console.log("Error event...");
});








