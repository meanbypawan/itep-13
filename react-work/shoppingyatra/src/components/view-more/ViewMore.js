import { useNavigate, useParams } from "react-router-dom";
import Header from "../header/Header";
import { useEffect, useReducer } from "react";
import axios from "axios";
import EndPoint from "../../apis/EndPoint";

function ViewMore(){
    const navigate = useNavigate();
    const {id} = useParams();
    const [state,dispatch] = useReducer((state,action)=>{
        if(action.type == "set-product"){
            state.product = action.payload;
            console.log(action.payload);
        }
        return {...state};
    },{product:{}});
    useEffect(()=>{
        loadProduct();
    },[]);
    const loadProduct = async()=>{
      try{  
       let response = await axios.get(EndPoint.FETCH_PRODUCT+`/${id}`);
       dispatch({type:"set-product",payload: response.data.product});
      }
      catch(err){
        console.log(err);
      } 
    }
    const handleBuyNow = ()=>{
       navigate("/buy-now",{state:{params:{product:state.product}}});
    }
    return <>
      <Header/>
      <div className="container-fluid pb-5">
        <div className="row px-xl-5">
            <div className="col-lg-5 mb-30">
                <div id="product-carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner bg-light">
                        <div className="carousel-item active">
                            <img className="w-100 h-100" src={state.product?.thumbnail} alt="Image"/>
                        </div>
                        {state.product?.images?.map((image,index)=>{return <div key={index} className="carousel-item">
                            <img className="w-100 h-100" src={image} alt="Image"/>
                        </div>})}
                        
                    </div>
                    <a className="carousel-control-prev" href="#product-carousel" data-slide="prev">
                        <i className="fa fa-2x fa-angle-left text-dark"></i>
                    </a>
                    <a className="carousel-control-next" href="#product-carousel" data-slide="next">
                        <i className="fa fa-2x fa-angle-right text-dark"></i>
                    </a>
                </div>
            </div>

            <div className="col-lg-7 h-auto mb-30">
                <div className="h-100 bg-light p-30">
                    <h3>{state.product.title}</h3>
                    <div className="d-flex mb-3">
                        <div className="text-primary mr-2">
                            <small className="fas fa-star"></small>
                            <small className="fas fa-star"></small>
                            <small className="fas fa-star"></small>
                            <small className="fas fa-star-half-alt"></small>
                            <small className="far fa-star"></small>
                        </div>
                        <small className="pt-1">(99 Reviews)</small>
                    </div>
                    <h3 className="font-weight-semi-bold mb-4">{state.product.price} Rs.</h3>
                    <p className="mb-4">{state.product.description}</p>
                    
                    <div className="d-flex align-items-center mb-4 pt-2">
                       <button onClick={handleBuyNow} className="btn btn-primary px-3">Buy now</button>
                       <button className="btn btn-outline-primary px-3 ml-2"><i className="fa fa-shopping-cart mr-1"></i> Add To Cart</button>
                    </div>
                    <div className="d-flex pt-2">
                        <strong className="text-dark mr-2">Share on:</strong>
                        <div className="d-inline-flex">
                            <a className="text-dark px-2" href="">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a className="text-dark px-2" href="">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a className="text-dark px-2" href="">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a className="text-dark px-2" href="">
                                <i className="fab fa-pinterest"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row px-xl-5">
            <div className="col">
                <div className="bg-light p-30">
                    <div className="nav nav-tabs mb-4">
                        <a className="nav-item nav-link text-dark active" data-toggle="tab" href="#tab-pane-1">Description</a>
                        <a className="nav-item nav-link text-dark" data-toggle="tab" href="#tab-pane-2">Information</a>
                        <a className="nav-item nav-link text-dark" data-toggle="tab" href="#tab-pane-3">Reviews ({state.product?.reviews?.length})</a>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="tab-pane-1">
                            <h4 className="mb-3">Product Description</h4>
                            {state.product.description}
                        </div>
                        <div className="tab-pane fade" id="tab-pane-2">
                            <h4 className="mb-3">Additional Information</h4>
                            <p>{state.product.description}</p>
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item px-0">
                                          <b>Warranty Information : </b><label>{state.product.warrantyInformation}</label>
                                        </li>
                                        <li className="list-group-item px-0">
                                          <b>Shipping Information : </b><label>{state.product.shippingInformation}</label>
                                        </li>
                                        <li className="list-group-item px-0">
                                          <b>Availability Status : </b><label>{state.product.availabilityStatus}</label>
                                        </li>
                                      </ul> 
                                </div>
                                <div className="col-md-6">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item px-0">
                                           <b>Discount offered : </b><label>{state.product.discountPercentage} %</label>
                                        </li>
                                        <li className="list-group-item px-0">
                                           <b>Qty available : </b><label>{state.product.stock}</label>
                                        </li>
                                        <li className="list-group-item px-0">
                                           <b>Rating : </b><label>{state.product.rating}/5</label>
                                        </li>
                                      </ul> 
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab-pane-3">
                            <div className="row">
                                <div className="col-md-6">
                                    <h4 className="mb-4">{state.product?.reviews?.length} review for "Product Name"</h4>
                                    {state.product?.reviews?.map((review,index)=>{return <div key={index} className="media mb-4">
                                        <img src="img/user.jpg" alt="Image" className="img-fluid mr-3 mt-1" style={{width: "45px"}}/>
                                        <div className="media-body">
                                            <h6>{review.reviewerName}<small> - <i>{review.date}</i></small></h6>
                                            <div className="text-primary mb-2">
                                             <label style={{fontWeight:"bolder",color:"orange"}}>Rating : {review.rating}</label>/(5)
                                            </div>
                                            <p>{review.comment}</p>
                                        </div>
                                    </div>})}
                                </div>
                                <div className="col-md-6">
                                    <h4 className="mb-4">Leave a review</h4>
                                    <small>Your email address will not be published. Required fields are marked *</small>
                                    <div className="d-flex my-3">
                                        <p className="mb-0 mr-2">Your Rating * :</p>
                                        <div className="text-primary">
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                    </div>
                                    <form>
                                        <div className="form-group">
                                            <label for="message">Your Review *</label>
                                            <textarea id="message" cols="30" rows="5" className="form-control"></textarea>
                                        </div>
                                        <div className="form-group">
                                            <label for="name">Your Name *</label>
                                            <input type="text" className="form-control" id="name"/>
                                        </div>
                                        <div className="form-group">
                                            <label for="email">Your Email *</label>
                                            <input type="email" className="form-control" id="email"/>
                                        </div>
                                        <div className="form-group mb-0">
                                            <input type="submit" value="Leave Your Review" className="btn btn-primary px-3"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}

export default ViewMore;