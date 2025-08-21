function showInfo(msg,s){
    console.log(msg+" "+s+" "+this.name+" "+this.age+"  "+this.contact);
}

let customer1 = {name:"Atul",age:28,contact:"9009111222"};

let student1 = {name:"Vivek",age:26,contact:"9009111333"};

//showInfo.call(customer1,"Welcome","Mr");
//showInfo.call(student1,"Good Morning","Mr");
//showInfo.apply(customer1,["Welcome","Mr"]);

displayCustomerDetails = showInfo.bind(customer1);
displayCustomerDetails("Welcome","Mr");