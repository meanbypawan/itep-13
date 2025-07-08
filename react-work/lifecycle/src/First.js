import { Component, PureComponent } from "react";

class First extends PureComponent{
    render(){
        //console.log(this.props);
        console.log("First render...");
        return <>
          <h2>First Component...{this.props.message.m1}</h2>
        </>
    }
}

export default First;