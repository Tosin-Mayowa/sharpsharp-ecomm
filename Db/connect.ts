import { MongoClient } from "mongodb";

const connectionString=process.env.MONGO_URI

export const client = new MongoClient(connectionString);