setTimeout(()=>{ // Macro Task Queue
    console.log("Set Timeout Executed....");
},0);

setImmediate(()=>{ // Macro Task Queue
    console.log("Set Immediate Executed....");
});

Promise.resolve().then(result=>{ // Micro Task Queue
    console.log("Promise executed....");
});

process.nextTick(()=>{ // Tick Queue
    console.log("Next Tick Executed....");
});