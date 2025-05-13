console.log("At the start....");
const eatingPizza = (callback)=>{
   setTimeout(()=>{
    console.log("Pizza Done...");
    callback();
   },4000); // 4
}

const meetingWithFriends = (callback)=>{
    setTimeout(()=>{
        console.log("Meeting Done....");
        callback();
    },6000); // 6
}

const servicingCar = ()=>{
    setTimeout(()=>{
        console.log("Servicing Done....");
    },3000); // 3
}
eatingPizza(()=>{
    meetingWithFriends(()=>{
        servicingCar();
    });
});
console.log("At the end...");








