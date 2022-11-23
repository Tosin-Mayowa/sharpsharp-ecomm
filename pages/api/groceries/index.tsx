// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { connectionString, connectToCluster } from "../../../Db/connect";

// type Data = {
//   name: string,
//   data:any
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    let mongoClient;



    try {
      mongoClient = await connectToCluster(connectionString);
      const db = mongoClient.db("SharpStore");
      const collection = db.collection("groceries");

      //find()- this return all the data in the collection, but if we we pass in a filter by name or category it will be find({name}), which means the api route will have query params,i.e /api/electronics?name
      // sort by id descending order that is y is -1, in ascending it is 1. toArray will give the daata in array form, because wat is coming from the database is an object.
      let product =await collection.find().sort({_id:-1}).toArray();

if(!product.length){
 return res.status(201).json({message:'No product found',data:[]});
}
    return  res.status(200).json({ message:'found all groceries products',data:product});
    } finally {
     
       await mongoClient.close();
     
    }
  }

  if (req.method === "POST") {
    let mongoClient;
    const product = req.body;
    try {
      mongoClient = await connectToCluster(connectionString);
      const db = mongoClient.db("SharpStore");
      const collection = db.collection("groceries");
    await collection.insertOne(product);

      res.status(200).json({message:'successfully created  groceries product' ,data: product });
    } finally {
      
      await mongoClient.close();
      
    }
  }
}
