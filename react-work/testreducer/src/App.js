import { useReducer, useRef } from "react";

function App(){
  const [state,dispatch] =  useReducer((state,action)=>{
    console.log(action);
    if(action.type == "increment"){
       state.counter = state.counter + 1;
    }
    else if(action.type == "decrement"){
      state.counter = state.counter - 1;
    }
    else if(action.type == "odd-counter"){
      state.oddCounter = state.oddCounter + 2;
    }
    else if(action.type == "custom"){
      state.counter = state.counter + action.payload*1;
    }
    return {...state};
  },{
    counter:100,
    evenCounter:0,
    oddCounter : 1
  });
  let numRef=useRef(null);
  return <>
    <h1>App Component..</h1>
    <button onClick={()=>dispatch({type:"increment"})}>Increment : {state.counter}</button>
    <button onClick={()=>dispatch({type:"decrement"})}>Decrement : {state.counter}</button>
    <button onClick={()=>dispatch({type:"odd-counter"})}>Odd Counter : {state.oddCounter}</button>
    <input type="text" ref={numRef}/>
    <button onClick={()=>dispatch({type:"custom",payload:numRef.current.value})}>Custom</button>
  </>
}

export default App;