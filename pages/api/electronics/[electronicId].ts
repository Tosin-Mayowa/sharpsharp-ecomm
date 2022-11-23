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
    const {electronicId} = req.query;
    console.log('qId',electronicId);
    
    try {
      mongoClient = await connectToCluster(connectionString);
      const db = mongoClient.db("SharpStore");
      const collection = db.collection("electronics");

      //find()- this return all the data in the collection, but if we we pass in a filter by name or category it will be find({name}), which means the api route will have query params,i.e /api/electronics?name
      // sort by id descending order that is y is -1, in ascending it is 1. toArray will give the daata in array form, because wat is coming from the database is an object.
      let product =await collection.findOne({electId:electronicId});
      console.log('product',product);
      

if(!product){
 return res.status(201).json({message:'No product found',data:[]});
}
    return  res.status(200).json({ message:'found all electronic products',data:product});
    } finally {
     
       await mongoClient.close();
     
    }
  
  }

  if (req.method === "DELETE") {
    let mongoClient;
    const {electronicId} = req.query;
    console.log('type',typeof electronicId);
    
    try {
      mongoClient = await connectToCluster(connectionString);
      const db = mongoClient.db("SharpStore");
      const collection = db.collection("electronics");
      let electroPro =await collection.deleteOne({electId:electronicId});
      console.log('ele',electroPro);
      
      console.log('count',electroPro.deletedCount);
      
if(electroPro.deletedCount===1){
  return res.status(200).json({message:`successfully deleted one document`,data:electroPro });
}else{
  res.status(404).json({message: `No document matched the ${electronicId}. Deleted 0 document. `, });
}

    } finally {
      
       await mongoClient.close();
     
    }
  }
}