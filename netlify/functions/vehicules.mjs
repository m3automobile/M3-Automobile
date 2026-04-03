import { getStore } from "@netlify/blobs";

const STORE_NAME = "vehicules";
const DATA_KEY = "all-vehicules";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Content-Type": "application/json",
};

function isAuthorized(req) {
  const authHeader = req.headers.get("authorization") || "";
  const password = authHeader.replace("Bearer ", "");
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) return false;
  return password === adminPassword;
}

// Initial data embedded directly (fallback if blob store is empty)
const INITIAL_DATA = [
  {
    id: "audi-a3-tdi-110-2015",
    marque: "Audi", modele: "A3 Sportback", version: "1.6 TDI 110ch Ambiente",
    annee: 2015, kilometrage: 149000, energie: "Diesel", boite: "Manuelle",
    puissanceDin: 110, puissanceFiscale: 5, couleur: "Noir", portes: 5, places: 5,
    finition: "Ambiente", prix: 11299, statut: "en_vente",
    description: "Audi A3 en excellent \u00e9tat, combinant confort de route et \u00e9conomie de carburant. \u00c9quip\u00e9e du moteur 1.6 TDI r\u00e9put\u00e9 pour sa robustesse.",
    pointsForts: ["Distribution neuve + courroies d'accessoire", "Si\u00e8ges chauffants", "Aide au stationnement", "Bluetooth", "Contr\u00f4le technique valide jusqu'en 2028", "Moteur ultra sain"],
    equipements: ["Si\u00e8ges chauffants", "Aide au stationnement", "Bluetooth", "Climatisation"],
    lienLeboncoin: "https://www.leboncoin.fr/ad/voitures/3170691777",
    images: ["/images/vehicules/audi-a3-tdi-2015/IMG_6429.webp","/images/vehicules/audi-a3-tdi-2015/IMG_6445.webp","/images/vehicules/audi-a3-tdi-2015/IMG_6447.webp","/images/vehicules/audi-a3-tdi-2015/IMG_6450.webp","/images/vehicules/audi-a3-tdi-2015/IMG_6455.webp","/images/vehicules/audi-a3-tdi-2015/IMG_6458.webp","/images/vehicules/audi-a3-tdi-2015/IMG_6459.webp","/images/vehicules/audi-a3-tdi-2015/IMG_6460.webp","/images/vehicules/audi-a3-tdi-2015/IMG_6461.webp","/images/vehicules/audi-a3-tdi-2015/IMG_6462.webp","/images/vehicules/audi-a3-tdi-2015/IMG_6463.webp","/images/vehicules/audi-a3-tdi-2015/IMG_6465.webp","/images/vehicules/audi-a3-tdi-2015/IMG_6466.webp","/images/vehicules/audi-a3-tdi-2015/IMG_6472.webp","/images/vehicules/audi-a3-tdi-2015/IMG_6480.webp","/images/vehicules/audi-a3-tdi-2015/IMG_6490.webp","/images/vehicules/audi-a3-tdi-2015/IMG_6492.webp","/images/vehicules/audi-a3-tdi-2015/IMG_6501.webp","/images/vehicules/audi-a3-tdi-2015/IMG_6503.webp","/images/vehicules/audi-a3-tdi-2015/IMG_6510.webp","/images/vehicules/audi-a3-tdi-2015/IMG_6542.webp","/images/vehicules/audi-a3-tdi-2015/IMG_6549.webp","/images/vehicules/audi-a3-tdi-2015/IMG_6550.webp","/images/vehicules/audi-a3-tdi-2015/IMG_6551.webp","/images/vehicules/audi-a3-tdi-2015/IMG_6557.webp"],
    miseEnCirculation: "08/2015", critAir: "2"
  },
  {
    id: "citroen-c3-hdi-exclusive-2011",
    marque: "Citro\u00ebn", modele: "C3", version: "1.4 HDi 70ch Exclusive",
    annee: 2011, kilometrage: 184000, energie: "Diesel", boite: "Manuelle",
    puissanceDin: 70, puissanceFiscale: 4, couleur: "Autre", portes: 5, places: 5,
    finition: "Exclusive", prix: 5399, statut: "en_vente",
    description: "Citro\u00ebn C3 en excellent \u00e9tat, finition Exclusive avec feux LED et clignotants dynamiques. Pare-brise panoramique.",
    pointsForts: ["Distribution neuve", "Pare-brise panoramique", "Feux LED + clignotants dynamiques", "Toit ouvrant / panoramique", "Aide au stationnement", "Phares LED / Xenon", "Contr\u00f4le technique valide jusqu'en 2028"],
    equipements: ["Toit panoramique", "Aide au stationnement", "Phares LED/Xenon", "Bluetooth"],
    lienLeboncoin: "https://www.leboncoin.fr/ad/voitures/3169754926",
    images: ["/images/vehicules/citroen-c3-hdi-2011/IMG_6399.webp","/images/vehicules/citroen-c3-hdi-2011/IMG_6348.webp","/images/vehicules/citroen-c3-hdi-2011/IMG_6354.webp","/images/vehicules/citroen-c3-hdi-2011/IMG_6382.webp","/images/vehicules/citroen-c3-hdi-2011/IMG_6389.webp","/images/vehicules/citroen-c3-hdi-2011/IMG_6393.webp","/images/vehicules/citroen-c3-hdi-2011/IMG_6396.webp"],
    miseEnCirculation: "02/2011"
  },
  {
    id: "peugeot-208-vti-120-2011",
    marque: "Peugeot", modele: "208", version: "1.6 VTi 120ch F\u00e9line",
    annee: 2011, kilometrage: 188000, energie: "Essence", boite: "Manuelle",
    puissanceDin: 120, puissanceFiscale: 6, couleur: "Autre", portes: 5, places: 5,
    finition: "F\u00e9line", prix: 4099, statut: "vendu",
    description: "Peugeot 208 finition F\u00e9line, bloc 1.6 VTi 120ch distribution cha\u00eene. Sellerie tout cuir.",
    pointsForts: ["Moteur \u00e0 cha\u00eene (pas de courroie)", "Sellerie tout cuir", "Si\u00e8ges chauffants", "R\u00e9gulateur de vitesse", "Aide au stationnement", "Bluetooth"],
    equipements: ["Cuir int\u00e9gral", "Si\u00e8ges chauffants", "R\u00e9gulateur de vitesse", "Bluetooth"],
    lienLeboncoin: "https://www.leboncoin.fr/ad/voitures/3163027472",
    images: ["/images/vehicules/peugeot-208-vti-2011/2a6672a0d4dc14cc5590c9183ef3c09f76a02446.webp","/images/vehicules/peugeot-208-vti-2011/f724efc8574158e2a7dc8e4cc204977c3458f0ad.webp","/images/vehicules/peugeot-208-vti-2011/48d11cf284a7bcc961286f17562d9d02036b6ace.webp","/images/vehicules/peugeot-208-vti-2011/35cebfb6dee338669296cdb87331d0bd4cb2fdcd.webp","/images/vehicules/peugeot-208-vti-2011/9fb8b5f4c989e5992158f69c778aeb80205952a4.webp"],
    miseEnCirculation: "11/2011"
  },
  {
    id: "renault-clio-iii-dci-2007",
    marque: "Renault", modele: "Clio III", version: "1.5 dCi 70ch Expression",
    annee: 2007, kilometrage: 44900, energie: "Diesel", boite: "Manuelle",
    puissanceDin: 70, puissanceFiscale: 4, couleur: "Gris", portes: 5, places: 5,
    finition: "Expression", prix: 6299, statut: "vendu",
    description: "P\u00e9pite 44 000 km certifi\u00e9s. Excellent \u00e9tat proche du neuf, premi\u00e8re main.",
    pointsForts: ["Seulement 44 900 km certifi\u00e9s", "Premi\u00e8re main", "Carnet d'entretien complet", "Excellent \u00e9tat (proche du neuf)", "V\u00e9hicule non fumeur", "Factures disponibles"],
    equipements: ["Climatisation", "Direction assist\u00e9e", "Vitres \u00e9lectriques"],
    lienLeboncoin: "https://www.leboncoin.fr/ad/voitures/3163015235",
    images: ["/images/vehicules/renault-clio-iii-dci-2007/2261a477f72cadbd5bca66a9ff0c9b23c6b2c983.webp","/images/vehicules/renault-clio-iii-dci-2007/c42a49dae03c05044957870c551c29dc579be81e.webp","/images/vehicules/renault-clio-iii-dci-2007/5fe80361166e27d3c8d79861333ad2c83c275e1c.webp","/images/vehicules/renault-clio-iii-dci-2007/6764e583e407151c8071f1e954a4779875ebc69c.webp","/images/vehicules/renault-clio-iii-dci-2007/e2b61c023e03b55c2ee46d0806cf13f4122b4fa7.webp"],
    miseEnCirculation: "06/2007"
  },
  {
    id: "peugeot-308-hdi-110-2009",
    marque: "Peugeot", modele: "308", version: "1.6 HDi 110ch Premium Pack",
    annee: 2009, kilometrage: 135000, energie: "Diesel", boite: "Manuelle",
    puissanceDin: 110, puissanceFiscale: 6, couleur: "Gris", portes: 5, places: 5,
    finition: "Premium Pack", prix: 4999, statut: "vendu",
    description: "Peugeot 308 excellent \u00e9tat, moteur 1.6 HDI robuste. Id\u00e9ale trajets quotidiens.",
    pointsForts: ["Distribution neuve \u00e0 133 000 km", "R\u00e9gulateur de vitesse", "Carnet d'entretien disponible", "Sous garantie garage"],
    equipements: ["R\u00e9gulateur de vitesse", "Climatisation", "Carnet d'entretien"],
    lienLeboncoin: "https://www.leboncoin.fr/ad/voitures/3155772110",
    images: ["/images/vehicules/peugeot-308-hdi-2009/5e5989d5937d82f6ef7fa78d8d3f936340dbb17a.webp","/images/vehicules/peugeot-308-hdi-2009/9d5b4f644455c66cb132eefb365682bdda5b2f25.webp","/images/vehicules/peugeot-308-hdi-2009/dfe6c48fe56f0c1fdbf654b49e3f20bf0cdce7e4.webp","/images/vehicules/peugeot-308-hdi-2009/45040ba18e65f965c018ce27e52b9d285efc8960.webp","/images/vehicules/peugeot-308-hdi-2009/f4732f4af495292b94972106a713332bb512d386.webp"],
    miseEnCirculation: "12/2009", critAir: "Non class\u00e9"
  }
];

function generateId(vehicule) {
  const slug = `${vehicule.marque}-${vehicule.modele}-${vehicule.version}`
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `${slug}-${vehicule.annee}`;
}

async function getVehicules(store) {
  try {
    const data = await store.get(DATA_KEY);
    if (data) return JSON.parse(data);
  } catch (e) {
    console.log("Blob read error, seeding...", e.message);
  }
  // Seed with initial data
  await store.set(DATA_KEY, JSON.stringify(INITIAL_DATA));
  return [...INITIAL_DATA];
}

async function saveVehicules(store, vehicules) {
  await store.set(DATA_KEY, JSON.stringify(vehicules));
}

// ===== Netlify Functions V2 format =====
export default async (req, context) => {
  // CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("", { headers: corsHeaders });
  }

  const store = getStore({ name: STORE_NAME, consistency: "strong" });
  const url = new URL(req.url);
  const id = url.searchParams.get("id");

  try {
    // GET - Public
    if (req.method === "GET") {
      const vehicules = await getVehicules(store);
      return new Response(JSON.stringify(vehicules), { headers: corsHeaders });
    }

    // Auth check for write operations
    const authHeader = req.headers.get("authorization") || "";
    const password = authHeader.replace("Bearer ", "");
    if (password !== process.env.ADMIN_PASSWORD) {
      return new Response(JSON.stringify({ error: "Non autoris\u00e9" }), {
        status: 401,
        headers: corsHeaders,
      });
    }

    // POST - Create
    if (req.method === "POST") {
      const vehicules = await getVehicules(store);
      const newVehicule = await req.json();
      if (!newVehicule.id) newVehicule.id = generateId(newVehicule);
      if (vehicules.find((v) => v.id === newVehicule.id)) {
        return new Response(JSON.stringify({ error: "ID d\u00e9j\u00e0 existant" }), {
          status: 409, headers: corsHeaders,
        });
      }
      vehicules.unshift(newVehicule);
      await saveVehicules(store, vehicules);
      return new Response(JSON.stringify(newVehicule), { status: 201, headers: corsHeaders });
    }

    // PUT - Update
    if (req.method === "PUT") {
      const vehicules = await getVehicules(store);
      const updates = await req.json();
      const targetId = id || updates.id;
      const index = vehicules.findIndex((v) => v.id === targetId);
      if (index === -1) {
        return new Response(JSON.stringify({ error: "V\u00e9hicule non trouv\u00e9" }), {
          status: 404, headers: corsHeaders,
        });
      }
      vehicules[index] = { ...vehicules[index], ...updates };
      await saveVehicules(store, vehicules);
      return new Response(JSON.stringify(vehicules[index]), { headers: corsHeaders });
    }

    // DELETE
    if (req.method === "DELETE") {
      const vehicules = await getVehicules(store);
      const index = vehicules.findIndex((v) => v.id === id);
      if (index === -1) {
        return new Response(JSON.stringify({ error: "V\u00e9hicule non trouv\u00e9" }), {
          status: 404, headers: corsHeaders,
        });
      }
      const deleted = vehicules.splice(index, 1)[0];
      await saveVehicules(store, vehicules);
      return new Response(JSON.stringify(deleted), { headers: corsHeaders });
    }

    return new Response(JSON.stringify({ error: "M\u00e9thode non support\u00e9e" }), {
      status: 405, headers: corsHeaders,
    });
  } catch (error) {
    console.error("API Error:", error);
    return new Response(JSON.stringify({ error: "Erreur serveur: " + error.message }), {
      status: 500, headers: corsHeaders,
    });
  }
};

export const config = {
  path: "/api/vehicules",
};
