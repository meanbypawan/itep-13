import { Component } from "react";

class Counter extends Component{
    constructor(){
        console.log("Counter contructor executed....");
        super();
        this.state = {
            regularCounter : 100
        }
    }
    incrementRegularCounter = ()=>{
        //this.state.regularCounter = this.state.regularCounter + 1;
        this.setState({regularCounter: this.state.regularCounter + 1});
    }
    render(){
        console.log("Render Executed...");
        return <>
          <h3>Counter Component...</h3>
          <button onClick={this.incrementRegularCounter}>Regular : {this.state.regularCounter}</button>
          <hr/>
        </>
    }
}

export default Counter;