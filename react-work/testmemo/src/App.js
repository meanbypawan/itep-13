import { useCallback, useMemo, useState } from "react";
import MemoizedFirst from "./First";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";

function App(){
  console.log("App Render..");
  let [counter,setCounter] = useState(100);
  let message = "Good Morning..";
  let dataObject = {m1:"GM",m2:"GN"};
  dataObject = useMemo(()=>dataObject,[]);
  let incrementCounter = ()=>{
    setCounter(counter+1);
  }
  incrementCounter = useCallback(()=>incrementCounter,[]);
  return <>
     <h1>App Component...{counter}</h1>
     <button onClick={()=>setCounter(counter+1)}>Increment {counter}</button>
     <MemoizedFirst/>
     <Second dataMessage={message}/>
     <Third data={dataObject}/>
     <Fourth incrementCounter={incrementCounter}/>
  </>
}

export default App;