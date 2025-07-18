import { useEffect, useState } from "react";
import Header from "./Header";

function About(){
    const [counter,setCounter] = useState(100);
    useEffect(()=>{
      console.log("1st flevour....");
    });
    useEffect(()=>{
      console.log("2nd flevour | componentDidMount");
    },[]);
    useEffect(()=>{
      console.log("3rd Flevour | componentDidUpdate");
    },[counter]);
    useEffect(()=>{
      return ()=>{
        console.log("4th flevour | componentWillUnmount");
      }
    },[]); 
    return <>
      <Header/>
      <div className="container mt-3">
        <h3>About component...</h3>
        <button onClick={()=>setCounter(counter+1)}>{counter}</button>
      </div>
    </>
}

export default About;