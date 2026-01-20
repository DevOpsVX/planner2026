// server/db.ts
import { Db, MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("MONGODB_URI not defined");
}

// opcional: permitir configurar o DB via env
const dbName = process.env.MONGODB_DB || "planner2026";

let client: MongoClient | null = null;
let db: Db | null = null;

export async function connectMongo() {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
    db = client.db(dbName);
    console.log("MongoDB connected");
  }
  return client;
}

export async function getDb() {
  if (!db) {
    await connectMongo();
  }
  return db as Db;
}
