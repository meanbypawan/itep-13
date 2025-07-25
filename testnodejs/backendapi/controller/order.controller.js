import { Order } from "../model/order.model.js"

export const save = async(request,response,next)=>{
   Order.create({
    name: request.body.name,
    mobile: request.body.mobile,
    deliveryAddress: request.body.deliveryAddress,
    billAmount: request.body.billAmount*1,
    date: request.body.date,
    userId: request.body.userId,
    orderItems:[{productId: request.body.productId,qty: request.body.qty*1}]
   }).then(result=>{
    return response.status(201).json({message:"Order created",orderDetails: result});
   }).catch(err=>{
    return response.status(500).json({error: "Internal Server Error"});
   })
}