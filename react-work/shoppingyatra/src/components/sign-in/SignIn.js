import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import EndPoint from "../../apis/EndPoint";

function SignIn(){
    const navigate = useNavigate();
    const [state,setState] = useState({
        email:"",
        password:""
    });
    const handleSubmit = async (event)=>{
       try{ 
        event.preventDefault();
        if(state.email && state.password){
          let response = await axios.post(EndPoint.SIGN_IN,state)
          sessionStorage.setItem("current-user",JSON.stringify(response.data.user));
          navigate(-1);
        }
        else
          toast.error("Please enter email and password"); 
       }
       catch(err){
        console.log(err);
        toast.error(err.response.data.error);
       }
    }
    return <>
      <ToastContainer/>
      <div className="container d-flex justify-content-center align-items-center" style={{height:"600px"}}>
              <div className="form-container">
                  <h5 className="p-3 text-center bg-primary text-white">Sign In</h5>
                  <form onSubmit={handleSubmit} className="p-2 d-flex flex-column justify-content-center">
                      <input onChange={(event)=>setState({...state,email: event.target.value})}  type="email" className="form-control mt-2" placeholder="Enter email id"/>
                      <input  onChange={(event)=>setState({...state,password: event.target.value})} type="password" className="form-control mt-2" placeholder="Ente password"/>
                      <button type="submit" className="btn btn-primary mt-2" style={{width:"100%"}}>Submit</button>
                      <Link to="/sign-in" className="text-center mt-2">Create new account ?</Link>
                  </form>
      
              </div>
            </div>
    </>
}

export default SignIn;