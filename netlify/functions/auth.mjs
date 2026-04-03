const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json",
};

export default async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "M\u00e9thode non support\u00e9e" }), {
      status: 405, headers: corsHeaders,
    });
  }

  try {
    const { password } = await req.json();
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword) {
      return new Response(JSON.stringify({ error: "ADMIN_PASSWORD non configur\u00e9 sur Netlify" }), {
        status: 500, headers: corsHeaders,
      });
    }

    if (password === adminPassword) {
      return new Response(JSON.stringify({ success: true, token: password }), {
        headers: corsHeaders,
      });
    }

    return new Response(JSON.stringify({ error: "Mot de passe incorrect" }), {
      status: 401, headers: corsHeaders,
    });
  } catch {
    return new Response(JSON.stringify({ error: "Requ\u00eate invalide" }), {
      status: 400, headers: corsHeaders,
    });
  }
};

export const config = {
  path: "/api/auth",
};
