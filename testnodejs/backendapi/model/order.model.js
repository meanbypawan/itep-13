import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    billAmount:{
        type: Number
    },
    name:String,
    mobile:String,
    deliveryAddress: String,
    date: String,
    orderItems:[{
        productId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"product"
        },
        qty:Number
    }]
})

export const Order = mongoose.model("order",orderSchema);