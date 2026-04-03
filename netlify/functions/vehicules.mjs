import { getStore } from "@netlify/blobs";
import { readFileSync } from "fs";
import { join } from "path";

const STORE_NAME = "vehicules";
const DATA_KEY = "all-vehicules";

// CORS headers
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Content-Type": "application/json",
};

// Check admin password
function isAuthorized(event) {
  const authHeader = event.headers.authorization || "";
  const password = authHeader.replace("Bearer ", "");
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) return false;
  return password === adminPassword;
}

// Load initial data from static JSON file (fallback)
function loadInitialData() {
  try {
    // Try to read the static JSON bundled with the site
    const filePath = join(process.cwd(), "public", "data", "vehicules.json");
    const data = readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  } catch (e) {
    console.log("Could not load initial data from file:", e.message);
    return [];
  }
}

// Get vehicle data from blob store, initialize if empty
async function getVehicules(store) {
  try {
    const data = await store.get(DATA_KEY);
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {
    console.log("Blob store empty or error, initializing...");
  }

  // Initialize from static JSON
  const initialData = loadInitialData();
  if (initialData.length > 0) {
    await store.set(DATA_KEY, JSON.stringify(initialData));
  }
  return initialData;
}

// Save vehicle data to blob store
async function saveVehicules(store, vehicules) {
  await store.set(DATA_KEY, JSON.stringify(vehicules));
}

// Generate a slug ID from vehicle info
function generateId(vehicule) {
  const slug = `${vehicule.marque}-${vehicule.modele}-${vehicule.version}`
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `${slug}-${vehicule.annee}`;
}

export const handler = async (event) => {
  // Handle CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  const store = getStore(STORE_NAME);

  try {
    // GET - Public: return all vehicles
    if (event.httpMethod === "GET") {
      const vehicules = await getVehicules(store);
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(vehicules),
      };
    }

    // All other methods need auth
    if (!isAuthorized(event)) {
      return {
        statusCode: 401,
        headers,
        body: JSON.stringify({ error: "Non autorisé" }),
      };
    }

    // POST - Create a new vehicle
    if (event.httpMethod === "POST") {
      const vehicules = await getVehicules(store);
      const newVehicule = JSON.parse(event.body);

      // Generate ID if not provided
      if (!newVehicule.id) {
        newVehicule.id = generateId(newVehicule);
      }

      // Check for duplicate ID
      if (vehicules.find((v) => v.id === newVehicule.id)) {
        return {
          statusCode: 409,
          headers,
          body: JSON.stringify({ error: "Un véhicule avec cet ID existe déjà" }),
        };
      }

      vehicules.unshift(newVehicule); // Add at the beginning
      await saveVehicules(store, vehicules);

      return {
        statusCode: 201,
        headers,
        body: JSON.stringify(newVehicule),
      };
    }

    // PUT - Update a vehicle
    if (event.httpMethod === "PUT") {
      const vehicules = await getVehicules(store);
      const updates = JSON.parse(event.body);
      const id = event.queryStringParameters?.id || updates.id;

      const index = vehicules.findIndex((v) => v.id === id);
      if (index === -1) {
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ error: "Véhicule non trouvé" }),
        };
      }

      vehicules[index] = { ...vehicules[index], ...updates };
      await saveVehicules(store, vehicules);

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(vehicules[index]),
      };
    }

    // DELETE - Remove a vehicle
    if (event.httpMethod === "DELETE") {
      const vehicules = await getVehicules(store);
      const id = event.queryStringParameters?.id;

      const index = vehicules.findIndex((v) => v.id === id);
      if (index === -1) {
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ error: "Véhicule non trouvé" }),
        };
      }

      const deleted = vehicules.splice(index, 1)[0];
      await saveVehicules(store, vehicules);

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(deleted),
      };
    }

    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Méthode non supportée" }),
    };
  } catch (error) {
    console.error("API Error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Erreur serveur: " + error.message }),
    };
  }
};
