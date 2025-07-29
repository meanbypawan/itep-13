import Header from "../header/Header";
import axios from "axios";
import EndPoint from "../../apis/EndPoint.js";
import {toast,ToastContainer} from "react-toastify";
import {getCurrentUser} from "../auth/Auth.js";
import {useState} from "react";
function Profile(){
    const [file,setFile] = useState(null);
    const handleChange = (event)=>{
      if(event.target.files)
        setFile(event.target.files[0]);
    }
    const handleClick = async ()=>{
        try{
          let user = getCurrentUser();
          let formData = new FormData();
          formData.append("imageName",file);
          let response = await axios.patch(EndPoint.UPLOAD_FILE+`/${user._id}`,formData);
          console.log(response.data);
        }
        catch(err){
          console.log(err);
          toast.error("Oops! something went wrong");
        }
    }
    return <>
      <ToastContainer/>
      <Header/>
      <div className="container mt-3">
        <input onChange={handleChange} type="file" className="form-control"/>
        <button onClick={handleClick} className="btn btn-primary mt-2">Upload</button>
      </div>
    </>
}

export default Profile;