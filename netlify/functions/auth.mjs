const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json",
};

export const handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Méthode non supportée" }),
    };
  }

  try {
    const { password } = JSON.parse(event.body);
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: "ADMIN_PASSWORD non configuré sur Netlify" }),
      };
    }

    if (password === adminPassword) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ success: true, token: password }),
      };
    }

    return {
      statusCode: 401,
      headers,
      body: JSON.stringify({ error: "Mot de passe incorrect" }),
    };
  } catch (error) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: "Requête invalide" }),
    };
  }
};
