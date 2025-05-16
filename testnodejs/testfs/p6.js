const roomCleaning = ()=>{
    console.log("Room cleaning in progress...");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //resolve("Room cleaned....");
            reject("Room cleaning failed...");
        },4000);
    });
}

const removingGarbage = ()=>{
    console.log("Removing Garbage in progress....");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Garbage removed...");
        },3000);
    });
}

Promise.allSettled([roomCleaning(),removingGarbage()])
.then(results=>{
    console.log(results);
});





