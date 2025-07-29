import { useDispatch, useSelector } from "react-redux";
import First from "./components/First";
import { incrementConter, incrementEvenCounter, incrementOddCounter } from "./redux-config/CounterSlice";

function App(){
  let {m1,m2} =  useSelector((store)=>store.DataMessage);
  let {counter,evenCounter,oddCounter} = useSelector((store)=>store.DataCounter);
  let dispatch = useDispatch();
  return <>
    <h2>App Component...</h2>
    <h1>Morning Message : {m1}</h1>
    <h1>Night Message : {m2}</h1>
    <button onClick={()=>dispatch(incrementConter())}>Counter : {counter}</button>
    <button onClick={()=>dispatch(incrementEvenCounter())}>Even Counter : {evenCounter}</button>
    <button onClick={()=>dispatch(incrementOddCounter())}>Odd Counter : {oddCounter}</button>
    <First/>
  </>
}

export default App;