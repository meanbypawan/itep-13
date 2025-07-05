import { Component } from "react";
import Data from "./Data";
class App extends Component{
  constructor(){
    super();
    this.state = {
      studentList: Data,
      branchList: ["CS","IT","EC","CV","MECH"],
      defaultBranch: "All"
    }
  }
  addStudent = ()=>{
    let roll = this.rollInput.value;
    let name = this.nameInput.value;
    let branch = this.branchInput.value;
    let contact = this.contactInput.value;
    let newStudent = {name,roll,contact,branch};
    this.setState({studentList:[...this.state.studentList,newStudent]});
  }
  removeStudent = (roll)=>{
    if(window.confirm("Do you want to delete it ?")){
     let index = this.state.studentList.findIndex((student)=>{return student.roll == roll});
     this.state.studentList.splice(index,1);
     this.setState({studentList:[...this.state.studentList]});
    }
  }
  render(){
    return <>
       <div className="bg-danger p-2 d-flex justify-content-center text-white">
        <span style={{fontWeight:"bolder"}}>Student App</span>
       </div>
       <div className="container mt-3 mb-3">
        <div className="row">
          <div className="col-md-6">
            <input ref={(rollObject)=>this.rollInput=rollObject} id="roll" type="text" placeholder="Enter student roll number" className="form-control"/>
          </div>
          <div className="col-md-6">
            <input ref={(nameObject)=>this.nameInput=nameObject} type="text" placeholder="Enter student name" className="form-control"/>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <input ref={(contactObject)=>this.contactInput = contactObject} type="text" placeholder="Enter contact number" className="form-control"/>
          </div>
          <div className="col-md-6">
            <select ref={(branchObject)=>this.branchInput = branchObject} className="form-control">
              <option>Select branch</option>
              {this.state.branchList.map((branch,index)=>{return <option key={index} value={branch}>{branch}</option>})}
            </select>
          </div>
        </div>
        <div className="row mt-3 mb-3">
          <div className="col-md-6">
            <button onClick={this.addStudent} className="btn btn-success">ADD</button>
          </div>
          <div className="col-md-6">
            <button onClick={()=>this.setState({defaultBranch:"CS"})} className="btn btn-primary">CS({this.state.studentList.filter((student)=>{return student.branch == "CS"}).length})</button>
            <button onClick={()=>this.setState({defaultBranch:"IT"})} className="btn btn-danger ml-2">IT({this.state.studentList.filter((student)=>{return student.branch == "IT"}).length})</button>
            <button onClick={()=>this.setState({defaultBranch:"EC"})} className="btn btn-warning ml-2">EC({this.state.studentList.filter((student)=>{return student.branch == "EC"}).length})</button>
            <button onClick={()=>this.setState({defaultBranch:"CV"})} className="btn btn-info ml-2">CV({this.state.studentList.filter((student)=>{return student.branch == "CV"}).length})</button>
            <button onClick={()=>this.setState({defaultBranch:"MECH"})} className="btn btn-success ml-2">MECH({this.state.studentList.filter((student)=>{return student.branch == "MECH"}).length})</button>
            <button onClick={()=>this.setState({defaultBranch:"All"})} className="btn btn-secondary ml-2">Total({this.state.studentList.length})</button>
          </div>
        </div>
       </div>
       <div className="container mt-3">
        <table className="table">
          <thead>
          <tr>
            <th>Roll</th>
            <th>Name</th>
            <th>Branch</th>
            <th>Contact</th>
            <th>Remove</th>
          </tr>
          </thead>
          <tbody>
            {this.state.studentList.filter((student)=>{return student.branch == this.state.defaultBranch || this.state.defaultBranch=="All"}).map((student,index)=>{return <tr key={index}>
              <td>{student.roll}</td>
              <td>{student.name}</td>
              <td>{student.branch}</td>
              <td>{student.contact}</td>
              <td>
                <button onClick={()=>{this.removeStudent(student.roll)}} className="btn btn-outline-danger">Remove</button>
              </td>
            </tr>})}   
          </tbody> 
        </table>
       </div>
    </>
  }
}
export default App;