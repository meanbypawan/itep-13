setTimeout(()=>{console.log("Timeout executed..")},0)
setImmediate(()=>{console.log("Immediate Executed...")});

process.nextTick(()=>{console.log("Tick Executed...")});
Promise.resolve().then(result=>{console.log("Promise resvoled...")})

/*
  Node.Js = V8-engine + Libuv
  Sycnhronouse :-  V8-engine is responsible to handle synchronous operation.

  Asynchronous :- In NodeJS , Libuv is responible to handle 
     Asynchronous Operation
    setTimeout()
    setInterval()
    File System Access
    Network Call
    Crypto Related Task
    DB-operation
    I/O Operation
 What is Libuv :-- It is c-library. Responsible to handle Asynchronouse op.
   Have some component
    a. Event Loop
    b. Callback Queue :-
        1. Macro Task Queue :--- Timer callback
        2. Micro Task Queue----> Promise callback
        3. Tick Queue.  :------nextTick callback
    c. Thread Pool :-  When Libuv use Thread-pool
         1. while dealing with file operation
         2. crypto-operation

*/