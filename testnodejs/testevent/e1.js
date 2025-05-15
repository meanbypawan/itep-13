import event from "events";
const eventEmitter = new event.EventEmitter();

eventEmitter.on("wish",()=>{
    console.log("GM....");
});

eventEmitter.emit("wish"); // fire event.
eventEmitter.emit("wish");
eventEmitter.emit("wish");