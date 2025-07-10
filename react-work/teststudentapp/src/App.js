import { useRef, useState } from "react";
import Data from "./components/Data";
import Header from "./components/Header";
import DataTable from "./components/DataTable";
import StudentForm from "./components/StudentForm";
function App(){
   const [studentList,setStudentList] = useState(Data);
   const [branchList,setBranchList] = useState(["CS","EC","IT","CV","MECH"]);
   const [defaultBranch,setDefaultBranch] = useState("All");
   const handleSubmit = (roll,name,contact,branch)=>{ // Synthetic even object
    let newStudent = {roll,name,contact,branch};
    setStudentList([...studentList,newStudent]);
   }
   return <>
     <Header data="Student App"/>
     <StudentForm studentList={studentList} setStudentList={setStudentList} defaultBranch={defaultBranch} setDefaultBranch={setDefaultBranch} handleSubmit={handleSubmit} branchList={branchList}/>
     <DataTable studentList={studentList} defaultBranch={defaultBranch}/>
     <Header data="copyright @ITEP Batch 13"/>
   </>
}

export default App;