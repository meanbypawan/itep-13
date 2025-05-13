console.log("At the start....");
const eatingPizza = ()=>{
   setTimeout(()=>{
    console.log("Pizza Done...");
   },4000); // 4
}

const meetingWithFriends = ()=>{
    setTimeout(()=>{
        console.log("Meeting Done....");
    },6000); // 6
}

const servicingCar = ()=>{
    setTimeout(()=>{
        console.log("Servicing Done....");
    },3000); // 3
}
eatingPizza();
meetingWithFriends();
servicingCar();
console.log("At the end...");