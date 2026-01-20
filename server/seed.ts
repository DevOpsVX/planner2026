// server/seed.ts
import { getDb } from "./db.js";
import { clients } from "../client/src/data/clients.js";

async function seed() {
  const db = await getDb();

  console.log("🧹 Limpando collections...");
  await db.collection("clients").deleteMany({});
  await db.collection("events").deleteMany({});

  console.log("🚀 Inserindo dados...");

  const now = new Date();

  for (const client of clients) {
    const clientDoc = {
      slug: client.slug,
      name: client.name,
      segment: client.segment,
      description: client.description,
      color: client.color,
      createdAt: now,
      updatedAt: now,
    };

    await db.collection("clients").insertOne(clientDoc);

    for (const campaign of client.campaigns || []) {
      const eventDoc = {
        clientSlug: client.slug,

        // campos da campanha/evento
        id: campaign.id,
        title: campaign.title,
        date: campaign.date, // string YYYY-MM-DD (ok)
        sendAt: campaign.sendDate, // o seu campo chama sendDate no front

        description: campaign.description || "",
        offers: campaign.offers || [],
        scripts: campaign.scripts || [],

        createdAt: now,
        updatedAt: now,
      };

      await db.collection("events").insertOne(eventDoc);
    }
  }

  console.log("✅ Seed finalizado com sucesso!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("❌ Erro no seed:", err);
  process.exit(1);
});
