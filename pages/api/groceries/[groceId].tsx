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
    console.log(req);
    res.status(200).json({ data:"hello"  });
//     try {
//       mongoClient = await connectToCluster(connectionString);
//       const db = mongoClient.db("SharpStore");
//       const collection = db.collection("electronics");
// 

//       res.status(200).json({ data:"hello"  });
//     } finally {
//       setTimeout(() => {
//         mongoClient.close();
//       }, 1500);
//     }
  }

  if (req.method === "DELETE") {
    let mongoClient;
    const {groceId} = req.query;
  
    
    try {
      mongoClient = await connectToCluster(connectionString);
      const db = mongoClient.db("SharpStore");
      const collection = db.collection("groceries");
      let grocePro =await collection.deleteOne({_id:groceId});
      console.log('ele',grocePro);
      
      console.log('count',grocePro.deletedCount);
      
if(grocePro.deletedCount===1){
  return res.status(200).json({message:`successfully deleted one document` });
}else{
 return res.status(404).json({message: `No document matched the ${groceId}. Deleted 0 document. `, });
}

    } finally {
      
       await mongoClient.close();
     
    }
  }
}