import event from "events";
const eventEmitter = new event.EventEmitter();

eventEmitter.on("data",()=>{
    console.log("Data event executed...");
});

eventEmitter.emit("data");
eventEmitter.emit("data");

/*
  import mongoose from mongoose;
  mongoose.connect("db_url")
  .then(result=>{})
    .catch(err=>{});
*/