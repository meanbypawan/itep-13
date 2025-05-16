import fs from "fs";

const readF1 = ()=>{
    return new Promise((resolve,reject)=>{
        fs.readFile("f1.txt",(err,data)=>{
            err ? reject(err) : resolve(data);
        })
    });
};

const readF2 = ()=>{
    return new Promise((resolve,reject)=>{
        fs.readFile("f2.txt",(err,data)=>{
            err ? reject(err) : resolve(data);
        })
    })
}
Promise.all([readF1(),readF2()])
.then(results=>{
   try{ 
    fs.writeFileSync("result.txt",results[0]+"\n"+results[1]);
    console.log("Operation Success...");
   }
   catch(err){
    console.log("Write Operation Failed..")
   }
})
.catch(err=>{
    console.log(err);
    console.log("Read Operation failed...");
})