import { Cart } from "../model/cart.model.js";
export const fetchCart = async(request,response,next)=>{
   try{ 
    const {userId} = request.params;
    const cart = await Cart.findOne({userId}).populate("cartItems.productId").populate("userId");
    return response.status(200).json({"cart-details":cart});
   }
   catch(err){
    return response.status(500).json({error: "Internal Server Error"});
   }
}
export const addToCart = async(request,response,next)=>{
 try{   
  let {userId,productId} = request.body;  
  let cart = await Cart.findOne({userId});
  if(cart){
    let status = cart.cartItems.some((item)=>{return item.productId==productId});
    if(status)
        return response.status(200).json({message:"Item is already added in cart"});
    cart.cartItems.push({productId});
    await cart.save();
    return response.status(201).json({message:"Item successfully added in cart"});
  }
  else{
    let cart = Cart.create({userId, cartItems:[{productId}]});
    return response.status(201).json({message: "Item successfully added in cart"});
  }
 }
 catch(err){
    console.log(err);
    return response.status(500).json({error: "Internal Server Error"});
 }
}