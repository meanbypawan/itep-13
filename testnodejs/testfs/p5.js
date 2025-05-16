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

Promise.all([roomCleaning(),removingGarbage()])
.then(result=>{
    console.log(result[0]);
    console.log(result[1]);
    console.log("Reward : Got a ice-cream.");
})
.catch(err=>{
    console.log(err);
    console.log("Penalty : Ice-cream lost");
});





