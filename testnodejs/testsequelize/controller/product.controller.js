import Product from "../model/product.model.js";
import Reviews from "../model/reviews.model.js";
export const updateProduct = (request,response,next)=>{
    let {id} = request.params;
    Product.update({price: request.body.price},{where:{id}})
    .then(result=>{
       return result[0]? response.status(201).json({message: "Update success.."}):response.status(404).json({error:"Requested resouce is not available | Id not found"});
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({error: "Internal Server Error"});
    });
}
export const getProductById = (request,response,next)=>{
    let {id} = request.params;
    Product.findByPk(id)
    .then(result=>{
        return response.status(200).json({product:result});
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error"});
    })
}

export const list = (request,response)=>{
    Product.findAll()
    .then(result=>{
        return response.status(200).json({products:result});
    }).catch(err=>{
        return response.status(500).json({error: "Internal server error"});
    });
}

export const saveInBluk = async(request,response,next)=>{
   try{
    let productList = request.body;
    for(let product of productList){
        await Product.create(product,{include:[Reviews]});
    }
    return response.status(201).json({message: "All product saved.."});
   }
   catch(err){
    console.log(err);
    return response.status(500).json({error: "Internal Server Error"});
   }   
}