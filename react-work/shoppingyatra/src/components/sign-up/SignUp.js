import { useState } from "react";
import "./SignUp.css";
import axios from "axios";
import EndPoint from "../../apis/EndPoint";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
function SignUp(){
    const [state,setState] = useState({
        name: "",
        email: "",
        password: "",
        contact: ""
    });
    const [isLoading,setIsLoading] = useState(false);
    const handleSubmit = async(event)=>{
       try{ 
        event.preventDefault();
        setIsLoading(true);
        let response = await axios.post(EndPoint.SIGN_UP,state);
        toast.success(response.data.message);
        setState({
            name: "",
            email: "",
            password: "",
            contact: ""
        });
       }
       catch(err){
        console.log(err);
        toast.error("Oops! something went wrong..");
       }
       setIsLoading(false);
    }
    return <>
      <ToastContainer/>
      <div className="container d-flex justify-content-center align-items-center" style={{height:"600px"}}>
        <div className="form-container">
            {isLoading ? <div className="spinner-border spinner-position"></div>: ""}
            <h5 className="p-3 text-center bg-primary text-white">Sign Up</h5>
            <form onSubmit={handleSubmit} className="p-2 d-flex flex-column justify-content-center">
                <input defaultValue={state.name} onChange={(event)=>setState({...state,name: event.target.value})} type="text" className="form-control" placeholder="Enter name"/>
                <input defaultValue={state.email} onChange={(event)=>setState({...state,email: event.target.value})} type="email" className="form-control mt-2" placeholder="Enter email id"/>
                <input defaultValue={state.password} onChange={(event)=>setState({...state,password:event.target.value})} type="password" className="form-control mt-2" placeholder="Ente password"/>
                <input defaultValue={state.contact} onChange={(event)=>setState({...state,contact: event.target.value})} type="text" className="form-control mt-2" placeholder="Enter contact number"/>
                <button type="submit" className="btn btn-primary mt-2" style={{width:"100%"}}>Submit</button>
                <Link to="/sign-in" className="text-center mt-2">Already have an account ?</Link>
            </form>

        </div>
      </div>
    </>
}

export default SignUp;