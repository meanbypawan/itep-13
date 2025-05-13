// class Test{
//     constructor(){
//         console.log("Constructor called...");
//     }
//     m1(){
//         console.log("m1-executed....");
//     }
// }

// let obj = new Test();
// obj.m1();
/*
  class Promise(){
    constructor(promiseCallback){
       
    }
    then(callback){
      return this;
    }
    catch(errorCallback){
       return this;
    }
  }
*/
let p = new Promise((resolve,reject)=>{
   resolve("TATA...");
   //reject("Bye bye....");
});
p.then((resolvedResult)=>{
    console.log("Then callback executed......"+resolvedResult);
})  
.catch((rejectedResult)=>{
   console.log("Catch callback executed....."+rejectedResult);
});












