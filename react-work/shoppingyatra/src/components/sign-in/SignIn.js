import { Link } from "react-router-dom";

function SignIn(){
    return <>
      <div className="container d-flex justify-content-center align-items-center" style={{height:"600px"}}>
              <div className="form-container">
                  <h5 className="p-3 text-center bg-primary text-white">Sign In</h5>
                  <form  className="p-2 d-flex flex-column justify-content-center">
                      <input  type="email" className="form-control mt-2" placeholder="Enter email id"/>
                      <input  type="password" className="form-control mt-2" placeholder="Ente password"/>
                      <button type="submit" className="btn btn-primary mt-2" style={{width:"100%"}}>Submit</button>
                      <Link to="/sign-in" className="text-center mt-2">Create new account ?</Link>
                  </form>
      
              </div>
            </div>
    </>
}

export default SignIn;