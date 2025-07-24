import { useLocation } from "react-router-dom";
import Header from "../header/Header";

function BuyNow(){
    const location = useLocation();
    let product = location.state?.params?.product??{};
    return <>
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
                <h3>Bill Amount : <b>{(product?.price + ((product?.price*18)/100)).toFixed(2)} Rs.</b></h3>
                <div className="row">
                    <div className="col-md-6">
                        <input type="text" placeholder="Enter name" className="form-control"/>
                    </div>
                    <div className="col-md-6">
                        <input type="text" placeholder="Enter mobile number" className="form-control"/>
                    </div>
                    <div className="col-md-6 mt-2">
                       <input type="text" placeholder="Enter delivery address" className="form-control"/>
                    </div>
                    <div className="col-md-4 mt-2">
                      <button className="btn btn-primary">Place order</button>
                    </div>
                </div>
               </div>
             </div>
          </div>
       </div>
    </>
}
export default BuyNow;