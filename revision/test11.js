let obj1 = {a:20,b:10}; // "{a:20,b:10}"

let obj2 = {a:20,b:    10}; // "{a:20,b:10}"

obj1 = JSON.stringify(obj1);
obj2 = JSON.stringify(obj2);
console.log(obj1 == obj2);