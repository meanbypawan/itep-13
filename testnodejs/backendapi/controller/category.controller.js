import { Category } from "../model/category.model.js"

export const fetchCategory = (request,response,next)=>{
    Category.find()
    .then(result=>{
        return response.status(200).json({categories: result});
    }).catch(err=>{
        return response.status(500).json({error: "Internal server error"});
    })
}
export const saveInBulk = (request,response,next)=>{
    Category.insertMany(request.body).
    then(result=>{
        return response.status(201).json({message:"All category saved..."});
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error"});
    })
}