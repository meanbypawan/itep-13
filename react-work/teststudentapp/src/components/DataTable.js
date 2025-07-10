function DataTable({studentList,defaultBranch}){
    return <>
      <div className="container mt-3">
      <table className="table table-striped">
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
          {studentList.filter((student)=>{return student.branch == defaultBranch || defaultBranch=="All"}).map((student,index)=>{return <tr key={index}>
            <td>{student.roll}</td>
            <td>{student.name}</td>
            <td>{student.branch}</td>
            <td>{student.contact}</td>
            <td>
              <button className="btn btn-outline-danger">Remove</button>
            </td>
          </tr>})}
        </tbody>
      </table>
     </div>
    </>
}
export default DataTable;