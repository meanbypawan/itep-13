let obj1 = {a : 20, b : 10, msg:"hello"}

let obj2 = {...obj1}; // shallow

console.log(obj1);
console.log(obj2);

let jsonString = JSON.stringify(obj1);
console.log(jsonString);
let obj3 = JSON.parse(jsonString); // deep copy
console.log(obj3);