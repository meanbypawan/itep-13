function Header({data}){
    return <>
      <div className="bg-danger p-2 text-white d-flex justify-content-center">
       <span style={{fontSize:"20px",fontWeight:"bolder"}}>{data}</span>
      </div>
    </>
}
export default Header;