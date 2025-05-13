console.log("At the start...");
const task1 = ()=>{
 setTimeout(()=>{
    console.log("Task 1 executed...");
 },4000);   
}
const task2 = ()=>{
    setTimeout(()=>{
       console.log("Task 2 executed...");
    },2000);   
}
const task3 = ()=>{
    setTimeout(()=>{
       console.log("Task 3 executed...");
    },1500);   
}
   
task1();
task2();
task3();   
console.log("At the end...");