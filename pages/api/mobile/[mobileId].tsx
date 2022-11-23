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
//       const collection = db.collection("mobile");
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
    const {mobileId} = req.query;
    console.log('type',typeof mobileId);
    
    try {
      mongoClient = await connectToCluster(connectionString);
      const db = mongoClient.db("SharpStore");
      const collection = db.collection("mobile");
      let mobilePro =await collection.deleteOne({_id:mobileId});
    
      
if(mobilePro.deletedCount===1){
  return res.status(200).json({message:`successfully deleted one document`});
}else{
return  res.status(404).json({message: `No document matched the ${mobileId}. Deleted 0 document. `, });
}

    } finally {
      
       await mongoClient.close();
     
    }
  }
}