import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { connectMongo } from "./db.js";
import { registerApi } from "./api.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  createServer(app);

  app.use(express.json({ limit: "2mb" }));

  // Conectar ao MongoDB (aguardar!)
  await connectMongo();

  // API antes do SPA fallback
  registerApi(app);

  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log("Server running on port", port));
}

startServer().catch(console.error);
