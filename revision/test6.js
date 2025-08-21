function firstTask(n){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        console.log("First Task Completed..."+n);
        resolve(n+1);
       },4000);
    })
}
function secondTask(n){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        console.log("Second Task Completed..."+n);
        resolve(n+1);
       },2000);
    })
}
function thirdTask(n){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        console.log("Third Task Completed..."+n);
        resolve(n+1);
       },4000);
    })
}
firstTask(10)
.then(result=>{return secondTask(result)})
.then(result=>{return thirdTask(result)});
/*
async function executeTask(){
    let result = await firstTask(10);
    result = await secondTask(result);
    result = await thirdTask(result);
}
executeTask();
*/