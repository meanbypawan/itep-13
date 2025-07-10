import { useState } from "react";
import First from "./components/First";

function App(){
  let message = "Welcome to reactjs";
  let dataObj = {message:"Welcome to reactjs",m1:"hello"};
  const [counter,setCounter] = useState(100);
  return <>
    <h1>App component</h1>
    <h1>{counter}</h1>
    <First data={dataObj} counter={counter} setCounter={setCounter}/>
  </>
}

export default App;