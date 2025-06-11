import sequelize from "../db/dbConfig.js";
import Cart from "../model/cart.model.js";
import CartItems from "../model/cart_items.model.js";

export const addToCart = async(request,response,next)=>{
  let t = await sequelize.transaction();
  try{
    let {userId,productId} = request.body;
    let cart = await Cart.findOne({where:{userId}})
    if(cart){
       console.log("If executed | Second Time.."); 
       let cartItems =  await CartItems.findOne({where:{productId,cartId: cart.id}});
       if(cartItems)
        return response.status(200).json({message: "Item is already added in cart"});
       await CartItems.create({cartId:cart.id,productId},{transaction: t});
       await t.commit();
       return response.status(201).json({message:"Item successfully added in cart"});
    }
    else{
        console.log("Else executed | First time");
        let cart = await Cart.create({userId},{transaction: t});
        await CartItems.create({cartId: cart.id,productId},{transaction: t});
        await t.commit();
        return response.status(201).json({message: "Item successfully added in cart"});
    }
  }
  catch(err){
    t.rollback();   
    return response.status(500).json({error: "Internal Server Error"});
  }
}