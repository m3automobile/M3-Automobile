import { getStore } from "@netlify/blobs";

const STORE_NAME = "avis";
const DATA_KEY = "all-avis";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Content-Type": "application/json",
};

// Avis initiaux (fallback si le blob store est vide)
const INITIAL_DATA = [
  {
    id: "avis-1",
    nom: "Sophie L.",
    note: 5,
    texte: "Excellent service ! Mam III a trouvé exactement la voiture que je cherchais en moins d'une semaine. Véhicule impeccable, toutes les vérifications ont été faites. Je recommande à 100%.",
    vehicule: "Audi A3 Sportback",
    date: "2025-11-15",
    visible: true
  },
  {
    id: "avis-2",
    nom: "Karim B.",
    note: 5,
    texte: "Très professionnel et transparent. Le contrôle technique, l'historique, tout était nickel. Rien à cacher, on sent la rigueur. Merci M3 !",
    vehicule: "Peugeot 208",
    date: "2025-12-03",
    visible: true
  },
  {
    id: "avis-3",
    nom: "Marie-Claire D.",
    note: 5,
    texte: "Je recommande vivement M3 Automobile. Mon fils a acheté sa première voiture ici et tout s'est passé dans les règles. Garantie incluse, pas de mauvaise surprise.",
    vehicule: "Renault Clio III",
    date: "2026-01-20",
    visible: true
  },
  {
    id: "avis-4",
    nom: "Thomas R.",
    note: 4,
    texte: "Bon rapport qualité-prix et un suivi sérieux. La recherche personnalisée m'a fait gagner un temps fou. Seul petit bémol : le délai un peu long, mais le résultat en valait la peine.",
    vehicule: "Citroën C3",
    date: "2026-02-10",
    visible: true
  }
];

async function getAvis(store) {
  try {
    const data = await store.get(DATA_KEY);
    if (data) return JSON.parse(data);
  } catch (e) {
    console.log("Blob read error, seeding...", e.message);
  }
  // Seed avec les données initiales
  await store.set(DATA_KEY, JSON.stringify(INITIAL_DATA));
  return [...INITIAL_DATA];
}

async function saveAvis(store, avisList) {
  await store.set(DATA_KEY, JSON.stringify(avisList));
}

export default async (req, context) => {
  // CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("", { headers: corsHeaders });
  }

  const store = getStore({ name: STORE_NAME, consistency: "strong" });
  const url = new URL(req.url);
  const id = url.searchParams.get("id");

  try {
    // GET - Public (renvoie tous les avis)
    if (req.method === "GET") {
      const avisList = await getAvis(store);
      return new Response(JSON.stringify(avisList), { headers: corsHeaders });
    }

    // Auth check pour les opérations d'écriture
    const authHeader = req.headers.get("authorization") || "";
    const password = authHeader.replace("Bearer ", "");
    if (password !== process.env.ADMIN_PASSWORD) {
      return new Response(JSON.stringify({ error: "Non autorisé" }), {
        status: 401,
        headers: corsHeaders,
      });
    }

    // POST - Créer un avis
    if (req.method === "POST") {
      const avisList = await getAvis(store);
      const newAvis = await req.json();
      if (!newAvis.id) newAvis.id = `avis-${Date.now()}`;

      // Si l'avis existe déjà, c'est une mise à jour
      const existingIndex = avisList.findIndex((a) => a.id === newAvis.id);
      if (existingIndex !== -1) {
        avisList[existingIndex] = { ...avisList[existingIndex], ...newAvis };
      } else {
        avisList.unshift(newAvis);
      }

      await saveAvis(store, avisList);
      return new Response(JSON.stringify(newAvis), { status: 201, headers: corsHeaders });
    }

    // PUT - Mettre à jour un avis
    if (req.method === "PUT") {
      const avisList = await getAvis(store);
      const updates = await req.json();
      const targetId = id || updates.id;
      const index = avisList.findIndex((a) => a.id === targetId);
      if (index === -1) {
        return new Response(JSON.stringify({ error: "Avis non trouvé" }), {
          status: 404, headers: corsHeaders,
        });
      }
      avisList[index] = { ...avisList[index], ...updates };
      await saveAvis(store, avisList);
      return new Response(JSON.stringify(avisList[index]), { headers: corsHeaders });
    }

    // DELETE - Supprimer un avis
    if (req.method === "DELETE") {
      const avisList = await getAvis(store);
      const index = avisList.findIndex((a) => a.id === id);
      if (index === -1) {
        return new Response(JSON.stringify({ error: "Avis non trouvé" }), {
          status: 404, headers: corsHeaders,
        });
      }
      const deleted = avisList.splice(index, 1)[0];
      await saveAvis(store, avisList);
      return new Response(JSON.stringify(deleted), { headers: corsHeaders });
    }

    return new Response(JSON.stringify({ error: "Méthode non supportée" }), {
      status: 405, headers: corsHeaders,
    });
  } catch (error) {
    console.error("API Avis Error:", error);
    return new Response(JSON.stringify({ error: "Erreur serveur: " + error.message }), {
      status: 500, headers: corsHeaders,
    });
  }
};

export const config = {
  path: "/api/avis",
};
