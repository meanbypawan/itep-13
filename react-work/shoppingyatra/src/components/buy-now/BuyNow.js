import { useLocation } from "react-router-dom";
import Header from "../header/Header";
import { useRef, useState } from "react";
import { getCurrentUser } from "../auth/Auth.js";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import EndPoint from "../../apis/EndPoint.js";

function BuyNow(){
    const location = useLocation();
    let product = location.state?.params?.product??{};
    let billRef = useRef(null);
    const [state,setState] = useState({
        name:"",
        mobile:"",
        deliveryAddress:"",
        qty: 1
    });
    const handleQty = (quantity)=>{
      let totalBillAmount = product?.price * quantity;
      totalBillAmount = totalBillAmount+((totalBillAmount*18)/100);
      billRef.current.innerText = totalBillAmount.toFixed(2);
      setState({...state,qty: quantity})
    }
    const handleSubmit = async (event)=>{
       try{ 
        event.preventDefault();
        let user = getCurrentUser();
        let date = new Date();
        date = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
        let orderDetails = {...state,billAmount: billRef.current.innerText*1,userId: user._id,productId: product._id,date};
        let response = await axios.post(EndPoint.CREATE_ORDER,orderDetails);
        console.log(response.data);
        toast.success(response.data.message);
       }
       catch(err){
        toast.error("Please try after sometime.");
       }
    }
    return <>
       <ToastContainer/>
       <Header/>
       <div className="container">
          <div className="row">
             <div className="col-md-4" style={{height:"350px",boxShadow:"10px 10px 10px grey"}}>
                <img src={product?.thumbnail} width="100%" height="350px"/>
             </div>
             <div className="col-md-8 p-3" style={{height:"350px",boxShadow:"10px 10px 10px grey"}}>
               <div className="p-2 container">
                <h4>{product?.title}</h4>
                <p>Item price : <b className="text-success">{product?.price} Rs.</b></p>
                <p>SGST [9%] : <b>{((product?.price*9)/100).toFixed(2)} Rs.</b></p>
                <p>CGST [9%] : <b>{((product?.price*9)/100).toFixed(2)} Rs.</b></p>
                <h3>Bill Amount : <b ref={billRef}>{(product?.price + ((product?.price*18)/100)).toFixed(2)}</b>Rs.</h3>
                <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6">
                        <input onChange={(event)=>setState({...state,name: event.target.value})} type="text" placeholder="Enter name" className="form-control"/>
                    </div>
                    <div className="col-md-6">
                        <input onChange={(event)=>setState({...state,mobile:event.target.value})} type="text" placeholder="Enter mobile number" className="form-control"/>
                    </div>
                    <div className="col-md-6 mt-2">
                       <input onChange={(event)=>setState({...state,deliveryAddress: event.target.value})} type="text" placeholder="Enter delivery address" className="form-control"/>
                    </div>
                    <div className="col-md-4 mt-2">
                      Qty: <input onChange={(event)=>handleQty(event.target.value)} type="number" min="1" defaultValue="1" style={{width:"50px"}}/>
                      <button className="btn btn-primary ml-2" >Place order</button>
                    </div>
                    
                </div>
                </form>
               </div>
             </div>
          </div>
       </div>
    </>
}
export default BuyNow;