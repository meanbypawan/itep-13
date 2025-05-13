const f1 = (n)=>{
    return new Promise((resolve,reject)=>{
        if(n%2==0)
            resolve("Given number is even....");
        else
           reject("Given number is odd......."); 
    });
}

f1(11).then((resolvedResult)=>{
    console.log("Then executed | Promise is resolved...");
    console.log(resolvedResult);
}).catch(err=>{
    console.log("Catch executed | Promise is rejected..");
    console.log(err);
});