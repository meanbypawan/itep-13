import { Component } from "react";
import Data from "./Data";

class App extends Component{
  constructor(){
    super();
    this.state = {
      productList: Data
    }
  }
  render(){
    return <>
      <div className="container mt-3">
        <div className="row">
          {this.state.productList.map((product,index)=>{return <div className="col-md-3 p-2">
            <div className="d-flex flex-column align-items-center" style={{height:"300px",boxShadow:"10px 10px 10px grey"}}>
              <img src={product.thumbnail} height="250px"/>
              <h6>{product.title}</h6>
            </div>
          </div>})}
        </div>
      </div>      
    </>
  }
}
export default App;







