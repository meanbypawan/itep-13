let customerAddress = {houseNo: 123,city:"Indore"}

let customer = {id:100, cname:"Cheeku", address: customerAddress};

console.log(customer);

let copy = {...customer}

copy.address.city = "Mumbai";
console.log(customerAddress);