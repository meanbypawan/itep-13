import Counter from "./components/Counter";

const { Component } = require("react");

class App extends Component{
  render(){
    let customerName = "Cheeku Singh";
    let customerAge = 25;
    let address = "Rajmohalla, Indore (MP)";
    let fruitList = ["Mango","Cheeku","Banana","Papaya","Orange","Apple"];
    return <>
       <h1>App Component...</h1>
       <p>Name : {customerName}</p>
       <p>Age : {customerAge}</p>
       <p>Address : {address}</p>
       <ul>
        {fruitList.map((item,index)=>{return <li key={index}>{item}</li>})}
       </ul>
       <Counter/> 
       <Counter/>
       <hr/>
    </>
  }
}

export default App;