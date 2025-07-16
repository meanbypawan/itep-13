import { useContext } from "react";
import Third from "./Third";
import { CounterContext } from "../App";

function Second(){
    let {counter,setCounter} = useContext(CounterContext);
    return <>
      <h3>Second Component..</h3>
      <button onClick={()=>setCounter(counter-1)}>Decrement {counter}</button>
      <Third/>
    </>
}

export default Second;