import { ExternalLink, Shield, CheckCircle2, Car, Search } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Link } from 'react-router';
import PremiumBackground from '../components/PremiumBackground';
import SEO from '../components/SEO';
import VehiculeCard from '../components/VehiculeCard';
import { useVehicules } from '../hooks/useVehicules';
import { useState } from 'react';
import logoCentrale from './Logolacentrale.png';
import logoLeboncoin from './Logoleboncoin.png';

export default function VehiculesPage() {
  const { vehicules } = useVehicules();
  const [filtre, setFiltre] = useState<'tous' | 'en_vente' | 'vendu'>('tous');

  const vehiculesFiltres = filtre === 'tous'
    ? vehicules
    : vehicules.filter(v => v.statut === filtre);

  const nbEnVente = vehicules.filter(v => v.statut === 'en_vente').length;
  const nbVendus = vehicules.filter(v => v.statut === 'vendu').length;

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SEO
        title="Nos Véhicules d'Occasion Garantis"
        description="Découvrez notre sélection de véhicules d'occasion rigoureusement contrôlés à L'Isle-Adam (95). Garantie 3 mois incluse, historique vérifié, prix transparents."
        keywords="voiture occasion garantie, véhicule occasion L'Isle-Adam, voiture occasion 95, achat voiture Val d'Oise, M3 Automobile véhicules"
      />
      <PremiumBackground />

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-24">
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-20">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">Nos Véhicules</h1>
          <p className="text-base md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto px-4 leading-relaxed">
            Découvrez notre sélection de véhicules d'occasion rigoureusement contrôlés et garantis 3 mois minimum.
          </p>
        </div>

        {/* ===== SECTION VÉHICULES ===== */}
        <section className="max-w-6xl mx-auto mb-16 md:mb-24">
          {/* Compteur */}
          <p className="text-center text-gray-400 text-base mb-4">
            {nbEnVente} véhicule{nbEnVente > 1 ? 's' : ''} disponible{nbEnVente > 1 ? 's' : ''} · {nbVendus} vendu{nbVendus > 1 ? 's' : ''}
          </p>

          {/* Filtres */}
          <div className="flex justify-center gap-3 mb-10">
            <button
              onClick={() => setFiltre('tous')}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                filtre === 'tous'
                  ? 'bg-white text-gray-900'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/10'
              }`}
            >
              Tous ({vehicules.length})
            </button>
            <button
              onClick={() => setFiltre('en_vente')}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                filtre === 'en_vente'
                  ? 'bg-green-500 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/10'
              }`}
            >
              <span className="flex items-center gap-2">
                <Car className="size-4" />
                En vente ({nbEnVente})
              </span>
            </button>
            <button
              onClick={() => setFiltre('vendu')}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                filtre === 'vendu'
                  ? 'bg-red-500/80 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/10'
              }`}
            >
              Vendus ({nbVendus})
            </button>
          </div>

          {/* Grille véhicules EN VENTE + carte CTA */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {vehiculesFiltres.filter(v => v.statut === 'en_vente').map((vehicule) => (
              <VehiculeCard key={vehicule.id} vehicule={vehicule} />
            ))}

            {/* Carte "annonce" recherche perso — entre en vente et vendus */}
            <Link to="/recherche-personnalisee" className="block group">
              <Card className="border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden hover:border-white/20 transition-all h-full flex flex-col">
                {/* Zone "photo" avec ? */}
                <div className="relative h-52 md:h-60 overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] flex items-center justify-center">
                  <span className="text-[8rem] md:text-[10rem] font-black text-white/10 group-hover:text-white/20 transition-colors select-none leading-none">?</span>
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-white/90 text-gray-900 border-none font-bold text-sm px-3 py-1">
                      RECHERCHE
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-white/90 text-gray-900 border-none text-xs px-2 py-1">
                      <Shield className="size-3 mr-1" />
                      Garantie 3 mois
                    </Badge>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <p className="text-2xl md:text-3xl font-black text-white/60">On s'en charge</p>
                  </div>
                </div>

                <CardContent className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1">Pas trouvé votre bonheur ?</h3>
                  <p className="text-sm text-gray-400 mb-4">On a peut-être ce qu'il vous faut chez un de nos confrères</p>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <Car className="size-4 text-white/50 flex-shrink-0" />
                      <span>Toutes marques</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <Search className="size-4 text-white/50 flex-shrink-0" />
                      <span>Tout budget</span>
                    </div>
                  </div>

                  <div className="space-y-1.5 mb-4">
                    <div className="flex items-start gap-2 text-gray-400 text-xs">
                      <CheckCircle2 className="size-3.5 text-white/50 mt-0.5 flex-shrink-0" />
                      <span>Accès à notre réseau de confrères pros</span>
                    </div>
                    <div className="flex items-start gap-2 text-gray-400 text-xs">
                      <CheckCircle2 className="size-3.5 text-white/50 mt-0.5 flex-shrink-0" />
                      <span>Véhicule vérifié avant livraison</span>
                    </div>
                    <div className="flex items-start gap-2 text-gray-400 text-xs">
                      <CheckCircle2 className="size-3.5 text-white/50 mt-0.5 flex-shrink-0" />
                      <span>Accompagnement de A à Z</span>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <div className="flex items-center justify-center gap-2 w-full bg-white hover:bg-gray-100 text-gray-900 font-bold py-3 rounded-xl transition-colors text-sm group-hover:scale-[1.02]">
                      Lancer une recherche →
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* Grille véhicules VENDUS — après la carte CTA */}
          {vehiculesFiltres.filter(v => v.statut === 'vendu').length > 0 && (
            <div className="mt-12 md:mt-16">
              <h3 className="text-xl md:text-2xl font-bold text-white/60 mb-6">Déjà vendus</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {vehiculesFiltres.filter(v => v.statut === 'vendu').map((vehicule) => (
                  <VehiculeCard key={vehicule.id} vehicule={vehicule} />
                ))}
              </div>
            </div>
          )}

          {vehiculesFiltres.length === 0 && (
            <div className="text-center py-16">
              <Car className="size-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">Aucun véhicule dans cette catégorie pour le moment.</p>
            </div>
          )}
        </section>

        {/* Info Garantie Premium */}
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 mb-16 md:mb-24 max-w-5xl mx-auto shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8 text-center md:text-left">
            <div className="bg-white/10 p-4 rounded-full border border-white/20">
              <Shield className="size-12 md:size-16 text-white" />
            </div>
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">Garantie 3 mois incluse</h2>
              <p className="text-lg md:text-xl text-gray-400">Une tranquillité d'esprit totale sur tous nos modèles.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:bg-white/10 transition-colors">
              <p className="text-lg text-white font-bold mb-1">Moteur & Boîte</p>
              <p className="text-sm text-gray-400">Couverture mécanique complète</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:bg-white/10 transition-colors">
              <p className="text-lg text-white font-bold mb-1">Zéro avance de frais</p>
              <p className="text-sm text-gray-400">Gestion directe avec le garage</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:bg-white/10 transition-colors">
              <p className="text-lg text-white font-bold mb-1">Partout en France</p>
              <p className="text-sm text-gray-400">Valable dans le garage de votre choix</p>
            </div>
          </div>
        </div>

        {/* Plateformes externes - version compacte */}
        <section className="max-w-4xl mx-auto mb-16 md:mb-24">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Retrouvez-nous aussi sur</h2>
            <p className="text-gray-400">Nos annonces complètes avec toutes les photos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://www.leboncoin.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex items-center gap-5 hover:bg-white/10 hover:border-white/20 transition-all">
                <div className="bg-white rounded-xl p-3 flex-shrink-0 group-hover:scale-105 transition-transform">
                  <img src={logoLeboncoin} alt="Leboncoin" className="h-10 w-auto object-contain" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-white">Leboncoin</h3>
                  <p className="text-sm text-gray-400">Toutes nos annonces en ligne</p>
                </div>
                <ExternalLink className="size-5 text-gray-500 group-hover:text-white transition-colors" />
              </div>
            </a>

            <a
              href="https://www.lacentrale.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex items-center gap-5 hover:bg-white/10 hover:border-white/20 transition-all">
                <div className="bg-white rounded-xl p-3 flex-shrink-0 group-hover:scale-105 transition-transform">
                  <img src={logoCentrale} alt="La Centrale" className="h-10 w-auto object-contain" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-white">La Centrale</h3>
                  <p className="text-sm text-gray-400">Photos HD & historique complet</p>
                </div>
                <ExternalLink className="size-5 text-gray-500 group-hover:text-white transition-colors" />
              </div>
            </a>
          </div>
        </section>

        {/* Engagements Qualité */}
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-16 border border-white/10 max-w-6xl mx-auto shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-12 md:mb-16">Nos Engagements Qualité</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {[
              { title: "Véhicules contrôlés", desc: "Contrôle technique à jour et vérification mécanique complète avant mise en vente." },
              { title: "Historique vérifié", desc: "Carnet d'entretien et rapports d'historique (HistoVec) fournis systématiquement." },
              { title: "Prix transparents", desc: "Tous nos prix sont affichés clairement, sans frais de dossier cachés." },
              { title: "Service complet", desc: "Gestion de la carte grise, garantie mécanique et solutions de financement." }
            ].map((item, index) => (
              <div key={index} className="flex gap-5">
                <div className="bg-white/10 backdrop-blur-sm rounded-full size-12 md:size-16 flex items-center justify-center flex-shrink-0 border border-white/20 shadow-lg">
                  <CheckCircle2 className="size-6 md:size-10 text-white" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-base md:text-lg text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
