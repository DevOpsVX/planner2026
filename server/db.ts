// server/db.ts
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "planner2026";

if (!uri) throw new Error("MONGODB_URI not defined");

let client: MongoClient | null = null;

export async function connectMongo() {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
    console.log("MongoDB connected");
  }
  return client;
}

export async function getDb() {
  const c = await connectMongo();
  return c.db(dbName);
}
