import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
   userId:{
     type: mongoose.Schema.Types.ObjectId,
     ref: "user"
   },
   cartItems:[{
     productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "product"
     }
   },]
});
/*
{
   userId: 'fadf3rrr2cxcv',
   cartItems: [{productId:'fsdafdf'}]
}
*/
export const Cart = mongoose.model("cart",cartSchema);