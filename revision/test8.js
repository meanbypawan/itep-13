// Way of creating object in javacript

let obj = {a:20,b:10}
class Message{
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
}
function Greetings(a,b){
    this.a = a;
    this.b = b;
}

console.log(obj);
let obj2 = new Message(20,10);
console.log(obj2);
let obj3 = new Greetings(50,40);
console.log(obj3);

let obj4 = new Object();
obj4.a = 100;
obj4.b = 200;
console.log(obj4);

let x = {a : 500, b: 600}
let obj5 = Object.create(x);
console.log(obj5.a+"  "+obj5.b);