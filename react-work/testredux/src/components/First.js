import { useSelector } from "react-redux";

function First(){
    let {counter,evenCounter,oddCounter} = useSelector((store)=>store.DataCounter);
    return <>
      <hr/>
      <h1>First Component</h1>
      <h2>Counter : {counter}</h2>
      <h2>Even Counter : {evenCounter}</h2>
      <h2>Odd Counter : {oddCounter}</h2>
    </>
}

export default First;