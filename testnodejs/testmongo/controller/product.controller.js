import db from "../db/dbConfig.js"
export const save = async(request,response,next)=>{
  db.collection("products").insertOne(request.body)
  .then(result=>{
    return response.status(201).json({message: "Product saved..."});
  }).catch(err=>{
    return response.status(500).json({error: "Internal Server Error"});
  })
}

export const list = (rt,response,next)=>{
    db.collection("products").aggregate().toArray()
    .then(result=>{
        return response.status(200).json({products: result});
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error"});
    })
}