import { ExternalLink, Shield } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import PremiumBackground from '../components/PremiumBackground';
import logoCentrale from '../../assets/logo-lacentrale.svg';
import logoLeboncoin from './logoleboncoin.png';

export default function VehiculesPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <PremiumBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-10 md:py-16">
        {/* Hero */}
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">Nos Véhicules</h1>
          <p className="text-sm md:text-base lg:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Découvrez notre sélection de véhicules d'occasion contrôlés et garantis 6 mois
          </p>
        </div>

        {/* Info Garantie */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 mb-10 md:mb-12 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-4 text-center md:text-left">
            <Shield className="size-10 md:size-12 text-white" />
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white">Garantie 6 mois incluse</h2>
              <p className="text-sm md:text-base text-gray-400">Sur tous nos véhicules sans exception</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <p className="text-sm md:text-base text-white font-semibold">Moteur & Boîte</p>
              <p className="text-xs md:text-sm text-gray-400">Couverture complète</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <p className="text-sm md:text-base text-white font-semibold">Zéro avance</p>
              <p className="text-xs md:text-sm text-gray-400">Prise en charge directe</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <p className="text-sm md:text-base text-white font-semibold">France entière</p>
              <p className="text-xs md:text-sm text-gray-400">Valable partout</p>
            </div>
          </div>
        </div>

        {/* Plateformes */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6 md:mb-8">Consultez Notre Stock</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <a 
              href="https://www.lacentrale.fr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer h-full">
                <CardContent className="pt-8 md:pt-12 pb-8 md:pb-12 text-center px-4">
                  <div className="bg-white rounded-lg p-4 md:p-6 mb-4 md:mb-6 mx-auto w-fit flex items-center justify-center h-24 md:h-32">
                    <img
                      src={logoCentrale}
                      alt="La Centrale"
                      className="max-h-16 md:max-h-20 w-auto object-contain"
                    />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3">La Centrale</h3>
                  <p className="text-sm md:text-base lg:text-lg text-gray-400 mb-4 md:mb-6">
                    Retrouvez tous nos véhicules disponibles avec photos détaillées et caractéristiques complètes
                  </p>
                  <div className="flex items-center justify-center gap-2 md:gap-3 text-white group-hover:gap-3 md:group-hover:gap-4 transition-all text-base md:text-lg">
                    <span className="font-semibold">Accéder au stock</span>
                    <ExternalLink className="size-5 md:size-6" />
                  </div>
                </CardContent>
              </Card>
            </a>

            <a 
              href="https://www.leboncoin.fr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer h-full">
                <CardContent className="pt-8 md:pt-12 pb-8 md:pb-12 text-center px-4">
                  <div className="bg-white rounded-lg p-4 md:p-6 mb-4 md:mb-6 mx-auto w-fit flex items-center justify-center h-24 md:h-32">
                    <img
                      src={logoLeboncoin}
                      alt="Leboncoin"
                      className="max-h-16 md:max-h-20 w-auto object-contain"
                    />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3">Leboncoin</h3>
                  <p className="text-sm md:text-base lg:text-lg text-gray-400 mb-4 md:mb-6">
                    Consultez nos annonces en ligne avec toutes les informations nécessaires
                  </p>
                  <div className="flex items-center justify-center gap-2 md:gap-3 text-white group-hover:gap-3 md:group-hover:gap-4 transition-all text-base md:text-lg">
                    <span className="font-semibold">Voir les annonces</span>
                    <ExternalLink className="size-5 md:size-6" />
                  </div>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>

        {/* Nos Engagements */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-10 lg:p-12 border border-white/10 max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6 md:mb-8">Nos Engagements Qualité</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            <div className="flex gap-3 md:gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full size-10 md:size-12 flex items-center justify-center flex-shrink-0 border border-white/20">
                <span className="text-xl md:text-2xl">✓</span>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Véhicules contrôlés</h3>
                <p className="text-sm md:text-base text-gray-400">Contrôle technique à jour et vérification mécanique complète avant mise en vente</p>
              </div>
            </div>

            <div className="flex gap-3 md:gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full size-10 md:size-12 flex items-center justify-center flex-shrink-0 border border-white/20">
                <span className="text-xl md:text-2xl">✓</span>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Historique vérifié</h3>
                <p className="text-sm md:text-base text-gray-400">Carnet d'entretien, historique d'entretien et rapport d'historique disponibles</p>
              </div>
            </div>

            <div className="flex gap-3 md:gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full size-10 md:size-12 flex items-center justify-center flex-shrink-0 border border-white/20">
                <span className="text-xl md:text-2xl">✓</span>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Prix transparents</h3>
                <p className="text-sm md:text-base text-gray-400">Tous nos prix sont affichés clairement, pas de frais cachés</p>
              </div>
            </div>

            <div className="flex gap-3 md:gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full size-10 md:size-12 flex items-center justify-center flex-shrink-0 border border-white/20">
                <span className="text-xl md:text-2xl">✓</span>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Service complet</h3>
                <p className="text-sm md:text-base text-gray-400">Carte grise, garantie mécanique, possibilité de financement</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16 px-4">
          <p className="text-lg md:text-xl text-gray-300 mb-4 md:mb-6">
            Vous ne trouvez pas ce que vous cherchez ?
          </p>
          <a href="/recherche-personnalisee" className="inline-block">
            <Badge className="bg-white text-gray-900 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg hover:bg-gray-100 cursor-pointer">
              Essayez notre service de recherche personnalisée →
            </Badge>
          </a>
        </div>
      </div>
    </div>
  );
}
