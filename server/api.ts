// server/api.ts
import type { Express } from "express";
import { ObjectId } from "mongodb";
import { getDb } from "./db.js";

function requireAdmin(req: any, res: any, next: any) {
  const token = req.headers["x-admin-token"];
  const expected = process.env.ADMIN_TOKEN;
  if (!expected) return res.status(500).json({ error: "ADMIN_TOKEN not set" });
  if (token !== expected) return res.status(401).json({ error: "Unauthorized" });
  next();
}

export function registerApi(app: Express) {
  // Health
  app.get("/api/health", async (_req, res) => {
    const db = await getDb();
    await db.command({ ping: 1 });
    res.json({ ok: true });
  });

  // LIST clients
  app.get("/api/clients", async (_req, res) => {
    const db = await getDb();
    const clients = await db.collection("clients").find({}).sort({ name: 1 }).toArray();
    res.json(clients);
  });

  // LIST events by client
  app.get("/api/clients/:slug/events", async (req, res) => {
    const db = await getDb();
    const { slug } = req.params;
    const events = await db
      .collection("events")
      .find({ clientSlug: slug })
      .sort({ date: 1 })
      .toArray();
    res.json(events);
  });

  // CREATE client
  app.post("/api/clients", requireAdmin, async (req, res) => {
    const db = await getDb();
    const body = req.body || {};
    const now = new Date();

    if (!body.slug || !body.name) {
      return res.status(400).json({ error: "slug and name are required" });
    }

    const doc = {
      slug: String(body.slug).trim(),
      name: String(body.name).trim(),
      segment: body.segment ? String(body.segment) : "",
      description: body.description ? String(body.description) : "",
      color: body.color ? String(body.color) : "from-pink-600 to-pink-700",
      createdAt: now,
      updatedAt: now,
    };

    try {
      await db.collection("clients").insertOne(doc);
      res.status(201).json(doc);
    } catch (e: any) {
      if (String(e?.message).includes("duplicate")) {
        return res.status(409).json({ error: "slug already exists" });
      }
      throw e;
    }
  });

  // UPDATE client
  app.put("/api/clients/:slug", requireAdmin, async (req, res) => {
    const db = await getDb();
    const { slug } = req.params;
    const body = req.body || {};
    const now = new Date();

    const update: any = { updatedAt: now };
    for (const k of ["name", "segment", "description", "color"] as const) {
      if (body[k] !== undefined) update[k] = body[k];
    }

    const r = await db.collection("clients").findOneAndUpdate(
      { slug },
      { $set: update },
      { returnDocument: "after" as any }
    );

    if (!r?.value) return res.status(404).json({ error: "client not found" });
    res.json(r.value);
  });

  // DELETE client + cascade events
  app.delete("/api/clients/:slug", requireAdmin, async (req, res) => {
    const db = await getDb();
    const { slug } = req.params;

    const delClient = await db.collection("clients").deleteOne({ slug });
    await db.collection("events").deleteMany({ clientSlug: slug });

    res.json({ ok: true, deletedClient: delClient.deletedCount });
  });

  // CREATE event (date/campaign)
  app.post("/api/clients/:slug/events", requireAdmin, async (req, res) => {
    const db = await getDb();
    const { slug } = req.params;
    const body = req.body || {};
    const now = new Date();

    if (!body.date || !body.title) {
      return res.status(400).json({ error: "date and title are required" });
    }

    const doc = {
      clientSlug: slug,
      date: String(body.date),
      sendAt: body.sendAt ? String(body.sendAt) : "",
      title: String(body.title),
      description: body.description ? String(body.description) : "",
      offers: Array.isArray(body.offers) ? body.offers.map(String) : [],
      scripts: Array.isArray(body.scripts)
        ? body.scripts.map((s: any) => ({
            id: String(s.id || crypto.randomUUID()),
            title: String(s.title || "Roteiro"),
            content: String(s.content || ""),
          }))
        : [],
      createdAt: now,
      updatedAt: now,
    };

    const r = await db.collection("events").insertOne(doc);
    res.status(201).json({ ...doc, _id: r.insertedId });
  });

  // UPDATE event
  app.put("/api/events/:id", requireAdmin, async (req, res) => {
    const db = await getDb();
    const { id } = req.params;
    const body = req.body || {};
    const now = new Date();

    const update: any = { updatedAt: now };
    for (const k of ["date", "sendAt", "title", "description"] as const) {
      if (body[k] !== undefined) update[k] = body[k];
    }
    if (body.offers !== undefined) update.offers = Array.isArray(body.offers) ? body.offers : [];
    if (body.scripts !== undefined) update.scripts = Array.isArray(body.scripts) ? body.scripts : [];

    const r = await db.collection("events").findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: update },
      { returnDocument: "after" as any }
    );

    if (!r?.value) return res.status(404).json({ error: "event not found" });
    res.json(r.value);
  });

  // DELETE event
  app.delete("/api/events/:id", requireAdmin, async (req, res) => {
    const db = await getDb();
    const { id } = req.params;
    const r = await db.collection("events").deleteOne({ _id: new ObjectId(id) });
    res.json({ ok: true, deleted: r.deletedCount });
  });
}
