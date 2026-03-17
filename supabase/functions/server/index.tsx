import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-cc861502/health", (c) => {
  return c.json({ status: "ok" });
});

// Route pour soumettre une demande de recherche personnalisée
app.post("/make-server-cc861502/recherche-personnalisee", async (c) => {
  try {
    const body = await c.req.json();
    
    // Validation des champs obligatoires (accepte ancien format marqueModele ou nouveau format marque+modele)
    const hasMarqueModele = body.marqueModele || (body.marque && body.modele);
    if (!body.nom || !body.telephone || !body.email || !hasMarqueModele || !body.motorisation) {
      return c.json(
        { error: "Tous les champs obligatoires doivent être remplis (nom, téléphone, email, marque, modèle et motorisation)" },
        400
      );
    }

    // Générer un ID unique pour la demande
    const timestamp = Date.now();
    const demandeId = `recherche_${timestamp}`;

    // Stocker la demande dans le KV store
    const demandeData = {
      id: demandeId,
      type: "recherche_personnalisee",
      date: new Date().toISOString(),
      nom: body.nom,
      telephone: body.telephone,
      email: body.email,
      marqueModele: body.marqueModele || `${body.marque} ${body.modele}`,
      marque: body.marque || '',
      modele: body.modele || '',
      motorisation: body.motorisation || '',
      anneeMin: body.anneeMin,
      kilometrageMax: body.kilometrageMax,
      budgetMin: body.budgetMin,
      budgetMax: body.budgetMax,
      criteres: body.criteres,
      statut: "nouveau"
    };
    
    await kv.set(demandeId, demandeData);

    console.log(`Nouvelle demande de recherche personnalisée enregistrée: ${demandeId}`);

    // Envoi de l'email via Resend
    try {
      const resendApiKey = Deno.env.get("RESEND_API_KEY");
      
      if (resendApiKey) {
        const emailBody = {
          from: "M3 Automobile <onboarding@resend.dev>",
          to: ["m3.automobil@gmail.com"],
          subject: `Nouvelle demande - ${body.marqueModele || body.marque + ' ' + body.modele}`,
          reply_to: body.email,
          html: `
            <h2>Nouvelle demande de recherche personnalisée</h2>
            <p><strong>Date:</strong> ${new Date().toLocaleString('fr-FR')}</p>
            
            <h3>Informations client</h3>
            <ul>
              <li><strong>Nom:</strong> ${body.nom}</li>
              <li><strong>Téléphone:</strong> ${body.telephone}</li>
              <li><strong>Email:</strong> ${body.email}</li>
            </ul>
            
            <h3>Critères de recherche</h3>
            <ul>
              ${body.marque ? `<li><strong>Marque:</strong> ${body.marque}</li>` : ''}
              ${body.modele ? `<li><strong>Modèle:</strong> ${body.modele}</li>` : ''}
              ${body.marqueModele ? `<li><strong>Marque & Modèle:</strong> ${body.marqueModele}</li>` : ''}
              ${body.motorisation ? `<li><strong>Motorisation:</strong> ${body.motorisation}</li>` : ''}
              ${body.anneeMin ? `<li><strong>Année minimum:</strong> ${body.anneeMin}</li>` : ''}
              ${body.kilometrageMax ? `<li><strong>Kilométrage maximum:</strong> ${body.kilometrageMax} km</li>` : ''}
              ${body.budgetMin ? `<li><strong>Budget minimum:</strong> ${body.budgetMin} €</li>` : ''}
              ${body.budgetMax ? `<li><strong>Budget maximum:</strong> ${body.budgetMax} €</li>` : ''}
              ${body.criteres ? `<li><strong>Critères spécifiques:</strong> ${body.criteres}</li>` : ''}
            </ul>
            
            <p><strong>ID de la demande:</strong> ${demandeId}</p>
            
            <hr>
            <p style="color: #666; font-size: 12px;">Cet email a été envoyé automatiquement depuis le site M3 Automobile.</p>
          `
        };

        const emailResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify(emailBody),
        });

        if (emailResponse.ok) {
          console.log(`Email envoyé avec succès pour la demande ${demandeId}`);
        } else {
          const errorData = await emailResponse.text();
          console.error(`Erreur lors de l'envoi de l'email:`, errorData);
        }
      } else {
        console.log("RESEND_API_KEY non configurée, email non envoyé");
      }
    } catch (emailError) {
      console.error("Erreur lors de l'envoi de l'email:", emailError);
      // On continue même si l'email échoue, la demande est quand même enregistrée
    }

    return c.json({
      success: true,
      message: "Votre demande a été enregistrée avec succès. Nous vous recontacterons sous 24h.",
      demandeId: demandeId
    });

  } catch (error) {
    console.error("Erreur lors de l'enregistrement de la demande de recherche:", error);
    return c.json(
      { error: "Une erreur est survenue lors de l'enregistrement de votre demande" },
      500
    );
  }
});

// Route pour récupérer toutes les demandes (pour l'admin)
app.get("/make-server-cc861502/recherches", async (c) => {
  try {
    const demandes = await kv.getByPrefix("recherche_");
    return c.json({ demandes });
  } catch (error) {
    console.error("Erreur lors de la récupération des demandes:", error);
    return c.json(
      { error: "Erreur lors de la récupération des demandes" },
      500
    );
  }
});

Deno.serve(app.fetch);