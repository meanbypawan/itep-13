let p1 = new Promise((resolve,reject)=>{
    resolve("P1 resvoled...");
});

let p2 = new Promise((resolve,reject)=>{
    reject("P2 rejected...");
});

let p3 = new Promise((resolve,reject)=>{
    resolve("P3 resvoled...");
});
Promise.allSettled([p1,p2,p3])
.then(results=>{
    console.log(results);
})
/*
Promise.all([p1,p2,p3]).then(result=>{
    console.log(result[0]);
    console.log(result[1]);
    console.log(result[2]);
}).catch(err=>{
    console.log(err);
})*/
