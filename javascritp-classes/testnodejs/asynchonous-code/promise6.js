function f1(){}
async function f2(){
   return 100;
} // Promise {undefined}


f2().then(result=>{
    console.log(result);
});