import { useRef } from "react";

function StudentForm({studentList,setStudentList,defaultBranch,setDefaultBranch,handleSubmit,branchList}) {
    let rollRef = useRef(null); // rollRef = {current: 100}
    let nameRef = useRef(null);
    let contactRef = useRef(null);
    let branchRef = useRef(null);
    const handleFormSubmission = (event)=>{
        event.preventDefault();
        let roll = rollRef.current.value;
        let name = nameRef.current.value;
        let contact = contactRef.current.value;
        let branch = branchRef.current.value;
        handleSubmit(roll,name,contact,branch);
    }
    return <>
        <div className="container mt-3 mb-3">
            <form onSubmit={handleFormSubmission}>
                <div className="row">
                    <div className="col-md-6">
                        <input id="studentRoll" ref={rollRef} type="text" placeholder="Enter student roll number" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <input ref={nameRef} type="text" className="form-control" placeholder="Enter student name" />
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6">
                        <select ref={branchRef} className="form-control">
                            <option>select branch</option>
                            {branchList.map((branch, index) => { return <option key={index} value={branch}>{branch}</option> })}
                        </select>
                    </div>
                    <div className="col-md-6">
                        <input ref={contactRef} type="text" placeholder="Enter contact number" className="form-control" />
                    </div>
                </div>
                <div className="row mt-3 mb-3">
                    <div className="col-md-6">
                        <button type="submit" className="btn btn-success">ADD</button>
                    </div>
                    <div className="col-md-6">
                        <button type="button" onClick={() => setDefaultBranch("CS")} className="btn btn-info ml-2">CS({studentList.filter((student) => { return student.branch == "CS" }).length})</button>
                        <button type="button" onClick={() => setDefaultBranch("IT")} className="btn btn-warning ml-2">IT({studentList.filter((student) => { return student.branch == "IT" }).length})</button>
                        <button type="button" onClick={() => setDefaultBranch("EC")} className="btn btn-primary ml-2">EC({studentList.filter((student) => { return student.branch == "EC" }).length})</button>
                        <button type="button" onClick={() => setDefaultBranch("CV")} className="btn btn-danger ml-2">CV({studentList.filter((student) => { return student.branch == "CV" }).length})</button>
                        <button type="button" onClick={() => setDefaultBranch("MECH")} className="btn btn-success ml-2">MECH({studentList.filter((student) => { return student.branch == "MECH" }).length})</button>
                        <button type="button" onClick={() => setDefaultBranch("All")} className="btn btn-secondary ml-2">Total({studentList.length})</button>
                    </div>
                </div>
            </form>
        </div>
    </>
}

export default StudentForm;