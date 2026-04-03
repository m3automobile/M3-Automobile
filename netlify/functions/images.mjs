import { getStore } from "@netlify/blobs";

const STORE_NAME = "vehicle-images";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
};

function isAuthorized(req) {
  const authHeader = req.headers.get("authorization") || "";
  const password = authHeader.replace("Bearer ", "");
  return password === process.env.ADMIN_PASSWORD;
}

export default async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("", { headers: corsHeaders });
  }

  const store = getStore({ name: STORE_NAME, consistency: "strong" });
  const url = new URL(req.url);
  // Path after /api/images/ e.g. "audi-a3-tdi-2015/IMG_6429.webp"
  const imagePath = url.pathname.replace("/api/images/", "").replace(/^\/+/, "");

  try {
    // GET - Serve an image (public)
    if (req.method === "GET") {
      // List all images for a vehicle if path ends with /
      if (!imagePath || imagePath.endsWith("/")) {
        const vehiculeId = imagePath.replace(/\/$/, "");
        if (!vehiculeId) {
          return new Response(JSON.stringify({ error: "Chemin requis" }), {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }

        // List images for this vehicle
        const listKey = `list/${vehiculeId}`;
        const listData = await store.get(listKey);
        const images = listData ? JSON.parse(listData) : [];

        return new Response(JSON.stringify(images), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      // Serve the actual image
      const imageData = await store.get(`img/${imagePath}`, { type: "arrayBuffer" });
      if (!imageData) {
        return new Response("Image non trouvée", { status: 404 });
      }

      // Determine content type
      const ext = imagePath.split(".").pop().toLowerCase();
      const contentTypes = {
        webp: "image/webp",
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        png: "image/png",
      };

      return new Response(imageData, {
        headers: {
          "Content-Type": contentTypes[ext] || "image/webp",
          "Cache-Control": "public, max-age=31536000, immutable",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    // Auth required for write operations
    if (!isAuthorized(req)) {
      return new Response(JSON.stringify({ error: "Non autorisé" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // POST - Upload image(s)
    if (req.method === "POST") {
      const body = await req.json();
      const { vehiculeId, images } = body;
      // images = [{ filename: "photo1.webp", data: "base64string..." }, ...]

      if (!vehiculeId || !images || !images.length) {
        return new Response(JSON.stringify({ error: "vehiculeId et images requis" }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      const uploadedPaths = [];

      for (const img of images) {
        const filename = img.filename
          .toLowerCase()
          .replace(/[^a-z0-9._-]/g, "-");

        const key = `img/${vehiculeId}/${filename}`;
        const binaryData = Uint8Array.from(atob(img.data), (c) => c.charCodeAt(0));

        await store.set(key, binaryData);
        uploadedPaths.push(`/api/images/${vehiculeId}/${filename}`);
      }

      // Update the image list for this vehicle
      const listKey = `list/${vehiculeId}`;
      let currentList = [];
      try {
        const existing = await store.get(listKey);
        if (existing) currentList = JSON.parse(existing);
      } catch {}

      const newList = [...currentList, ...uploadedPaths];
      await store.set(listKey, JSON.stringify(newList));

      return new Response(JSON.stringify({ uploaded: uploadedPaths }), {
        status: 201,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // DELETE - Remove an image
    if (req.method === "DELETE") {
      if (!imagePath) {
        return new Response(JSON.stringify({ error: "Chemin image requis" }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      await store.delete(`img/${imagePath}`);

      // Update list
      const parts = imagePath.split("/");
      const vehiculeId = parts[0];
      const listKey = `list/${vehiculeId}`;
      try {
        const existing = await store.get(listKey);
        if (existing) {
          const list = JSON.parse(existing);
          const updated = list.filter((p) => !p.endsWith(imagePath));
          await store.set(listKey, JSON.stringify(updated));
        }
      } catch {}

      return new Response(JSON.stringify({ deleted: imagePath }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ error: "Méthode non supportée" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Image API Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
};

export const config = {
  path: "/api/images/*",
};
