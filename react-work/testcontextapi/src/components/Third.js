import { useContext } from "react";
import { CounterContext, DataContext, MessageContext } from "../App";

function Third(){
    let message = useContext(MessageContext); 
    let {m1,m2,m3} = useContext(DataContext);
    let {counter,setCounter} = useContext(CounterContext);
    return <>
      <h3>Third Component..{message}</h3>
      <h5>{m1} : {m2} : {m3}</h5>
      <button onClick={()=>setCounter(counter+1)}>Increment Counter :{counter} </button>
    </>
}

export default Third;