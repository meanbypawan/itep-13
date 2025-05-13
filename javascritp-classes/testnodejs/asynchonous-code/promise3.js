
const roomCleaning = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Room Cleaned....");
        },2000);
    });
}
const removingGarbage = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("Garbage Failed......");
        },2500);
    });
}

roomCleaning().then((x)=>{
    console.log(x);
    removingGarbage().then(y=>{
        console.log(y);
        console.log("Got a ice-cream");
    }).catch((rejectResult)=>{
        console.log(rejectResult);
        console.log("Ice-cream lost");
    });
}).catch(()=>{
    console.log("Ice-cream lost");
});


