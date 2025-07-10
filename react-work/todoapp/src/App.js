import { useState } from "react";
import Data from "./ToDoData";
function App(){
  const [taskList,setTaskList] = useState(Data);
  const [priorityList,setPriorityList] = useState([{priorityId:1,priorityValue: "Low"},{priorityId:2, priorityValue:"Normal"},{priorityId:3,priorityValue:"High"}]);
  const [defaultStatus,setDeafaultStatus] = useState("active");
  const [title,setTitle] = useState("");
  const [pid,setPid] = useState("0");
  const changeTaskStatus = (t,status)=>{
     let index = taskList.findIndex((task)=>{return task.title == t.title});
     t.status = status;
     taskList.splice(index,1,t);
     setTaskList([...taskList]);
  }
  const handleAdd = ()=>{
    let status = "active";
    let date = new Date();
    date = date.getDay()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
    let newTask = {title,pid,status,date};
    setTaskList([...taskList,newTask]);
  }
  return <>
     <div className="bg-danger p-2 text-white d-flex justify-content-center">
       <span className="heading">Student App</span>
     </div>
     <div className="container mt-3 mb-3">
      <div className="row">
        <div className="col-md-6">
          <input onChange={(event)=>setTitle(event.target.value)} type="text" className="form-control" placeholder="Enter task title"/>
        </div>
        <div className="col-md-6">
          <select onChange={(event)=>setPid(event.target.value)} className="form-control">
            <option value="0">select priority</option>
            {priorityList.map((priorityObj,index)=>{return <option key={index} value={priorityObj.priorityId}>{priorityObj.priorityValue}</option>})}
          </select>
        </div>
      </div>
      <div className="row mt-3 mb-3">
        <div className="col-md-6">
          <button onClick={handleAdd} className="btn btn-secondary">ADD</button>
        </div>
      </div>
     </div>
     <div className="container mt-3 m">
      <button onClick={()=>setDeafaultStatus("active")} disabled={defaultStatus=="active"?true:false} className="btn btn-success">Active({taskList.filter((task)=>{return task.status=="active"}).length})</button>
      <button onClick={()=>setDeafaultStatus("deactive")} disabled={defaultStatus=="deactive"?true:false} className="btn btn-primary ml-2">Deactive({taskList.filter((task)=>{return task.status=="deactive"}).length})</button>
     </div>
     <div className="container mt-3">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Title</th>
            <th>Date</th>
            <th>Priority</th>
            <th>Change Status</th>
          </tr>
        </thead>
        <tbody>
          {taskList.filter((task)=>{return task.status == defaultStatus}).sort((a,b)=>{return b.pid-a.pid}).map((task,index)=>{return <tr className={task.pid==3 ? 'bg-danger': task.pid==2 ? "bgorange": "bg-success"} key={index}>
            <td>{index+1}</td>
            <td>{task.title}</td>
            <td>{task.date}</td>
            <td>{priorityList.find((obj)=>{return obj.priorityId == task.pid}).priorityValue}</td>
            <td>{task.status == "active"?<button onClick={()=>changeTaskStatus(task,"deactive")} className="btn button-size btn-outline-warning">Deactive</button>:<button onClick={()=>changeTaskStatus(task,"active")} className="btn button-size btn-outline-warning">Active</button>}</td>
          </tr>})}
        </tbody>
      </table>
     </div>
  </>
}

export default App;