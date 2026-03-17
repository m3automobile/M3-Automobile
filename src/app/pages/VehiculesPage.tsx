import { ExternalLink, Shield, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Link } from 'react-router';
import PremiumBackground from '../components/PremiumBackground';
import logoCentrale from './Logolacentrale.png';
import logoLeboncoin from './Logoleboncoin.png';

export default function VehiculesPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <PremiumBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-24">
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-20">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">Nos Véhicules</h1>
          <p className="text-base md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto px-4 leading-relaxed">
            Découvrez notre sélection de véhicules d'occasion rigoureusement contrôlés et garantis 3 mois minimum.
          </p>
        </div>

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

        {/* Plateformes de Vente */}
        <div className="max-w-6xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-10 md:mb-16">Consultez Notre Stock</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* La Centrale */}
            <a 
              href="https://www.lacentrale.fr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer h-full overflow-hidden shadow-xl">
                <CardContent className="pt-12 pb-12 text-center px-6">
                  <div className="bg-white rounded-2xl p-6 mb-8 mx-auto w-fit flex items-center justify-center h-32 md:h-40 shadow-inner group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={logoCentrale}
                      alt="La Centrale"
                      className="max-h-20 md:max-h-24 w-auto object-contain"
                    />
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">La Centrale</h3>
                  <p className="text-base md:text-xl text-gray-300 mb-8 leading-relaxed px-4">
                    Retrouvez nos annonces avec photos HD, historique complet et caractéristiques techniques détaillées.
                  </p>
                  <div className="inline-flex items-center justify-center gap-3 text-white bg-white/10 px-8 py-4 rounded-xl group-hover:bg-white group-hover:text-black transition-all text-lg font-bold">
                    <span>Voir le stock</span>
                    <ExternalLink className="size-6" />
                  </div>
                </CardContent>
              </Card>
            </a>

            {/* Leboncoin */}
            <a 
              href="https://www.leboncoin.fr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer h-full overflow-hidden shadow-xl text-white">
                <CardContent className="pt-12 pb-12 text-center px-6">
                  <div className="bg-white rounded-2xl p-6 mb-8 mx-auto w-fit flex items-center justify-center h-32 md:h-40 shadow-inner group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={logoLeboncoin}
                      alt="Leboncoin"
                      className="max-h-20 md:max-h-24 w-auto object-contain"
                    />
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">Leboncoin</h3>
                  <p className="text-base md:text-xl text-gray-300 mb-8 leading-relaxed px-4">
                    Consultez toutes nos offres en direct sur la plateforme préférée des français.
                  </p>
                  <div className="inline-flex items-center justify-center gap-3 text-white bg-white/10 px-8 py-4 rounded-xl group-hover:bg-white group-hover:text-black transition-all text-lg font-bold">
                    <span>Voir les annonces</span>
                    <ExternalLink className="size-6" />
                  </div>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>

        {/* Engagements Qualité - Style Corrigé */}
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
                <div className="bg-white/10 backdrop-blur-sm rounded-full size-12 md:size-16 flex items-center justify-center flex-shrink-0 border border-white-20 shadow-lg">
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

        {/* CTA - VERSION CORRIGÉE CENTRAGE */}
        <div className="flex flex-col items-center justify-center text-center mt-20 mb-10 overflow-hidden">
          <p className="text-lg md:text-2xl text-gray-300 mb-8 px-4 font-medium">
            Vous ne trouvez pas votre bonheur dans notre stock ?
          </p>
          
          <div className="flex justify-center w-full px-10">
            <Link to="/recherche-personnalisee" className="inline-block">
              <button className="bg-white text-gray-900 px-6 py-4 md:px-10 md:py-5 text-base md:text-xl font-bold rounded-2xl shadow-xl hover:bg-gray-100 transition-all whitespace-nowrap">
                Essayez notre recherche personnalisée →
              </button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}