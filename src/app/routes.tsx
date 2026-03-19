import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import VehiculesPage from "./pages/VehiculesPage";
import RecherchePersonnalisee from "./pages/RecherchePersonnalisee";
import GarantiesPage from "./pages/GarantiesPage";
import ContactPage from "./pages/ContactPage";
import DepotVentePage from "./pages/DepotVentePage";
import MentionsLegales from "./pages/MentionsLegales";
import QuiSommesNous from "./pages/QuiSommesNous";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "vehicules", Component: VehiculesPage },
      { path: "recherche-personnalisee", Component: RecherchePersonnalisee },
      { path: "garanties", Component: GarantiesPage },
      { path: "mandat-vente", Component: DepotVentePage },
      { path: "contact", Component: ContactPage },
      { path: "mentions-legales", Component: MentionsLegales },
      { path: "qui-sommes-nous", Component: QuiSommesNous },
    ],
  },
]);