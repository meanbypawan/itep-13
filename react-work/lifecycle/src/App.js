import {Component} from "react";
import First from "./First";
class App extends Component{
  constructor(){
    super();
    this.state = {
      counter : 100
    }
    //console.log("Constructor called...");
  }
  // componentDidMount(){ // Mounting
  //   console.log("componentDidMount()-called...");
  // }
  // componentDidUpdate(){ // Updating
  //   console.log("componentDidUpdate()--called...");
  // }
  // componentWillUnmount(){ // Unmounting
  //   console.log("componentWillUnMount() -- called....");
  // }
  // shouldComponentUpdate(nextProps,nextState){
  //   if(nextState.counter%2)
  //     return true
  //   return false;
  // }
  render(){
    console.log("app render-called...");
    const dataMessage = {m1: "Hello"};
    return <>
      <h1>App Component...</h1>
      <button onClick={()=>this.setState({counter: this.state.counter+1})}>{this.state.counter}</button>
      <hr/>
      <First message = {dataMessage}/>
    </>
  }
}
export default App;