import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import VehiculesPage from "./pages/VehiculesPage";
import RecherchePersonnalisee from "./pages/RecherchePersonnalisee";
import GarantiesPage from "./pages/GarantiesPage";
import ContactPage from "./pages/ContactPage";
import DepotVentePage from "./pages/DepotVentePage";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import QuiSommesNous from "./pages/QuiSommesNous";
import VehiculeDetailPage from "./pages/VehiculeDetailPage";
import RendezVousPage from "./pages/RendezVousPage";
import NotFoundPage from "./pages/NotFoundPage";
import AdminPage from "./pages/AdminPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "vehicules", Component: VehiculesPage },
      { path: "vehicules/:id", Component: VehiculeDetailPage },
      { path: "recherche-personnalisee", Component: RecherchePersonnalisee },
      { path: "rendez-vous", Component: RendezVousPage },
      { path: "garanties", Component: GarantiesPage },
      { path: "mandat-vente", Component: DepotVentePage },
      { path: "contact", Component: ContactPage },
      { path: "mentions-legales", Component: MentionsLegales },
      { path: "politique-de-confidentialite", Component: PolitiqueConfidentialite },
      { path: "qui-sommes-nous", Component: QuiSommesNous },
      { path: "*", Component: NotFoundPage },
    ],
  },
  // Admin page - outside Layout (no header/footer)
  {
    path: "/admin",
    Component: AdminPage,
  },
]);