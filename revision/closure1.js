function DataEncapsulation(){
    this.data = 500;

    this.f1 = ()=>{
        console.log("Inside f1 : "+this.data)
    }
    this.f2 = ()=>{
        console.log("Inside f2 : "+this.data)
    }
    this.f3 = ()=>{
        console.log("Inside f3 : "+this.data)
    }
}

let obj = new DataEncapsulation(); // obj : {data:500, f1:()=>{},f2:()={},}
obj.f1();
obj.f2();
obj.f3();