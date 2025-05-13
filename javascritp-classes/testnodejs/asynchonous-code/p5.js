const first = (n,callback)=>{
    setTimeout(()=>{
       console.log("Inside First : "+n);
       callback(n+2);
    },4000);
}
const second = (n,callback)=>{
    setTimeout(()=>{
       console.log("Inside Second : "+n);
       callback(n+2);  
    },3000);
}
const third = (n,callback)=>{
    setTimeout(()=>{
        console.log("Inside Third : "+n);
        callback(n+2);
    },1500);
}
const fourth = (n)=>{
    setTimeout(()=>{
        console.log("Inside Fourth : "+n);
    },2200);
}
first(10,(n)=>{
    second(n,(n)=>{
        third(n,(n)=>{
            fourth(n);
        });
    });
});


