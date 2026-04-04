import { Shield, CheckCircle2, MapPin, Gauge, Wrench, Car, Search, Handshake, Phone, Mail, Lock, Users, ArrowRight, User, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Link } from 'react-router';
import PremiumBackground from '../components/PremiumBackground';
import SEO from '../components/SEO';
import VehiculeCard from '../components/VehiculeCard';
import { useVehicules } from '../hooks/useVehicules';
import { useAvis } from '../hooks/useAvis';

export default function HomePage() {
  const { vehicules } = useVehicules();
  const { avis } = useAvis();

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SEO
        title="Achat & Vente de Véhicules d'Occasion Garantis"
        description="M3 Automobile à L'Isle-Adam (95290) : achat, vente et recherche personnalisée de véhicules d'occasion. Garantie 3 mois, expert en détection de fraudes, service clé en main."
        keywords="garage voiture occasion L'Isle-Adam, vente voiture occasion Val d'Oise, garage 95290, voiture occasion garantie, recherche voiture personnalisée, M3 Automobile, détection fraude automobile"
        canonicalPath="/"
      />
      <PremiumBackground />

      {/* Hero Section - Structure inspirée convoyeur-arb */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden">
        {/* Background image - voiture subtile côté droit */}
        <div
          className="absolute inset-0 bg-cover bg-right-bottom"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1920&q=80')`
          }}
        />
        {/* Gradient overlay - plus opaque à gauche pour lisibilité du texte */}
        {/* Mobile: gradient vertical pour voir la voiture en haut, Desktop: gradient horizontal */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060B12] via-[#060B12]/60 to-[#060B12] md:bg-gradient-to-r md:from-[#060B12] md:via-[#060B12]/95 md:to-[#060B12]/40" />

        {/* Contenu - Aligné à GAUCHE */}
        <div className="relative container mx-auto px-6 md:px-12 lg:px-16">
          {/* Badge localisation — effet glow animé */}
          <div className="group relative inline-flex items-center gap-2 bg-[#8B2D3A]/10 border border-[#8B2D3A]/30 text-[#8B2D3A] px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wider uppercase mb-8 md:mb-10 animate-[shimmer_3s_ease-in-out_infinite]">
            {/* Halo glow derrière le badge */}
            <span className="absolute inset-0 rounded-full bg-[#8B2D3A]/20 blur-md animate-pulse" />
            <span className="relative flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8B2D3A] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#8B2D3A]" />
              </span>
              L'Isle-Adam · Val d'Oise · Île-de-France
            </span>
          </div>

          {/* Typographie géante empilée */}
          <h1 className="text-[3.5rem] md:text-[7rem] lg:text-[9rem] font-black tracking-tighter leading-[0.85] mb-6 md:mb-10">
            <span className="block text-white">M3</span>
            <span className="block text-[#8B2D3A]">AUTO</span>
            <span className="block text-white">MOBILE</span>
          </h1>

          {/* Sous-titre */}
          <p className="text-gray-400 text-base md:text-xl max-w-lg mb-6 md:mb-8 leading-relaxed">
            Véhicules d'occasion contrôlés et garantis. Votre tranquillité, notre priorité.
          </p>

          {/* Badge de confiance */}
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-2 rounded-full text-xs md:text-sm font-medium tracking-wide uppercase mb-8 md:mb-10">
            <CheckCircle2 className="size-4 text-green-400" />
            Garantie 3 mois incluse sur tous nos véhicules
          </div>

          {/* Boutons CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:0783269802">
              <Button className="bg-[#8B2D3A] hover:bg-[#A63D4D] text-white font-bold px-8 py-6 text-base w-full sm:w-auto">
                <Phone className="size-5 mr-2" />
                Appeler maintenant
              </Button>
            </a>
            <Link to="/vehicules">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold px-8 py-6 text-base w-full sm:w-auto transition-all">
                Voir nos véhicules
                <ArrowRight className="size-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Dégradé de transition en bas du hero — fondu vers le reste de la page */}
        <div className="absolute bottom-0 left-0 right-0 h-40 md:h-60 bg-gradient-to-b from-transparent to-[#060B12] z-10" />
      </section>

      {/* Container principal */}
      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">

        {/* 1. NOS SERVICES */}
        <section className="mb-20 md:mb-32">
          <div className="text-center mb-10 md:mb-16">
            <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-4">Nos Services</h3>
            <p className="text-sm md:text-lg lg:text-xl text-gray-400">Une offre complète pour tous vos besoins automobiles</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <Link to="/vehicules">
              <Card className="border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer h-full text-white">
                <CardHeader className="text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full size-20 flex items-center justify-center mb-4 mx-auto border border-white/20">
                    <Car className="size-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Vente de Véhicules</CardTitle>
                  <CardDescription className="text-gray-300 text-base">Stock de qualité avec garantie</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-5 text-white/70 mt-0.5 flex-shrink-0" />
                      <span>Véhicules audités et certifiés</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-5 text-white/70 mt-0.5 flex-shrink-0" />
                      <span>Garantie mécanique 3 mois incluse</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-5 text-white/70 mt-0.5 flex-shrink-0" />
                      <span>Historique vérifié (pas de fraude)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            <Link to="/recherche-personnalisee">
              <Card className="border border-white/20 bg-white/10 backdrop-blur-md shadow-xl shadow-white/5 cursor-pointer h-full hover:bg-white/[0.2] hover:border-white/30 transition-all text-white">
                <CardHeader className="text-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full size-20 flex items-center justify-center mb-4 mx-auto border border-white/30">
                    <Search className="size-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Recherche Personnalisée</CardTitle>
                  <CardDescription className="text-gray-200 text-base">On trouve votre véhicule idéal</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-300 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-5 text-white/70 mt-0.5 flex-shrink-0" />
                      <span>Investigation sur tout le marché</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-5 text-white/70 mt-0.5 flex-shrink-0" />
                      <span>Vérification anti-fraude complète</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-5 text-white/70 mt-0.5 flex-shrink-0" />
                      <span>Contrôle mécanique expert</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-white hover:bg-gray-100 text-gray-900 font-bold py-6">
                    Faire une demande
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link to="/mandat-vente">
              <Card className="border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer h-full text-white">
                <CardHeader className="text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full size-20 flex items-center justify-center mb-4 mx-auto border border-white/20">
                    <Handshake className="size-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Mandat de Vente</CardTitle>
                  <CardDescription className="text-gray-300 text-base">Vendez votre véhicule facilement</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-5 text-white/70 mt-0.5 flex-shrink-0" />
                      <span>Prise en charge complète de la vente</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-5 text-white/70 mt-0.5 flex-shrink-0" />
                      <span>Visibilité sur nos plateformes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-5 text-white/70 mt-0.5 flex-shrink-0" />
                      <span>Gestion administrative incluse</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        {/* 2. VEHICULES EN VENTE */}
        <section className="mb-20 md:mb-32">
          <div className="text-center mb-10 md:mb-16">
            <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-4">Nos Véhicules Disponibles</h3>
            <p className="text-sm md:text-lg lg:text-xl text-gray-400">Découvrez notre sélection rigoureusement contrôlée et garantie</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-10">
            {vehicules.filter(v => v.statut === 'en_vente').slice(0, 3).map((vehicule) => (
              <VehiculeCard key={vehicule.id} vehicule={vehicule} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/vehicules">
              <Button className="bg-white hover:bg-gray-100 text-gray-900 font-bold px-8 py-3 text-base">
                Voir tous nos véhicules
                <ArrowRight className="size-4 ml-2" />
              </Button>
            </Link>
          </div>
        </section>

        {/* 2.5. CE QUE NOS CLIENTS DISENT */}
        <section className="mb-20 md:mb-32">
          <div className="text-center mb-10 md:mb-16">
            <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-4">Ce que nos clients disent de nous</h3>
            <p className="text-sm md:text-lg lg:text-xl text-gray-400">Découvrez les témoignages de nos clients satisfaits</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {avis.filter(a => a.visible).map((review) => (
              <Card key={review.id} className="border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all text-white h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{review.nom}</CardTitle>
                      <CardDescription className="text-gray-400 text-sm mt-1">{review.vehicule}</CardDescription>
                    </div>
                    <div className="flex gap-0.5 ml-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`size-4 ${i < review.note ? 'fill-[#F59E0B] text-[#F59E0B]' : 'text-gray-600'}`}
                        />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-gray-300 text-sm mb-4 flex-1">{review.texte}</p>
                  <p className="text-gray-500 text-xs">{new Date(review.date).toLocaleDateString('fr-FR')}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 3. QUI SE CACHE DERRIERE M3 */}
        <section className="mb-20 md:mb-32">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Qui se cache derrière M3 Automobile ?</h2>
              <div className="w-20 h-1 bg-white/50 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Photo + badge repositionné */}
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl border border-white/10 overflow-hidden mb-6">
                  <img
                    src="/photo-profil.jpg"
                    alt="Mam III Jobb - Fondateur M3 Automobile"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Badge 2025 déplacé en haut à droite avec fond translucide */}
                <div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-md text-white rounded-xl p-4 shadow-xl border border-white/20">
                  <div className="text-center">
                    <p className="text-3xl font-bold">2025</p>
                    <p className="text-xs text-gray-300">Création</p>
                  </div>
                </div>
              </div>

              {/* Texte présentation court */}
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm mb-4">
                  <Lock className="size-4" />
                  Mam III Jobb - Ingénieur Cybersécurité & Expert Automobile
                </div>

                <p className="text-gray-300 leading-relaxed mb-4">
                  M3 Automobile est né d'une double passion : la cybersécurité et l'automobile.
                  Ingénieur en cybersécurité chez TV5 Monde, j'ai passé des années à traquer les fraudes
                  numériques et à sécuriser des systèmes d'information complexes.
                </p>

                <p className="text-gray-300 leading-relaxed mb-6">
                  Cette expertise en investigation numérique, combinée à ma passion pour la mécanique,
                  fait de M3 Automobile une agence unique sur le marché de l'occasion.
                </p>

                {/* Section équipe avec encadre translucide comme avant */}
                <div className="mt-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="size-5 text-blue-400" />
                    <span className="text-white font-semibold">Une équipe en expansion</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    M3 Automobile, c'est <strong className="text-white">Mam III Jobb</strong> à la tête des opérations,
                    accompagné d'un réseau partenaire de professionnels <strong className="text-white">non accessible au grand public</strong>.
                    Une structure légère mais compétente.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link to="/qui-sommes-nous">
                    <Button className="bg-white hover:bg-gray-100 text-gray-900 font-semibold">
                      Découvrir notre histoire
                      <ArrowRight className="size-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NOS GARANTIES */}
        <section className="mb-20 bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-12 border border-white/10">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">Nos Garanties</h3>
            <p className="text-base md:text-lg text-gray-400">Tous nos véhicules sont couverts par nos garanties mécaniques</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <MapPin className="size-10 text-white mx-auto mb-3" />
              <h4 className="font-bold text-white mb-2">Valable partout en France</h4>
              <p className="text-gray-400 text-sm">Réparation chez le garage de votre choix</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <Wrench className="size-10 text-white mx-auto mb-3" />
              <h4 className="font-bold text-white mb-2">Zéro avance de frais</h4>
              <p className="text-gray-400 text-sm">Prise en charge directe des réparations</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <Gauge className="size-10 text-white mx-auto mb-3" />
              <h4 className="font-bold text-white mb-2">Kilométrage illimité</h4>
              <p className="text-gray-400 text-sm">Aucun plafond pendant la garantie</p>
            </div>
          </div>

          <div className="text-center">
            <Link to="/garanties">
              <Button className="bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-3">
                En savoir plus sur nos garanties
              </Button>
            </Link>
          </div>
        </section>

        {/* 3. POURQUOI CHOISIR M3 - Version allégée avec redirection */}
        <section className="mb-20 md:mb-32 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-12 border border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Pourquoi choisir M3 Automobile ?
                </h2>
                <p className="text-gray-300 mb-6">
                  Une approche unique qui combine expertise cybersécurité et passion automobile 
                  pour vous offrir un service incomparable sur le marché de l'occasion.
                </p>
                
                {/* Mini VS compact */}
                <div className="bg-white/5 rounded-xl border border-white/10 p-4 mb-6">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="text-white font-bold text-sm">M3 Automobile</span>
                    <span className="text-gray-500">vs</span>
                    <span className="text-gray-400 font-bold text-sm">Vendeurs classiques</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="text-gray-300">✓ Détection de fraudes</div>
                    <div className="text-gray-500">✗ Pas de vérification</div>
                    <div className="text-gray-300">✓ Expertise technique</div>
                    <div className="text-gray-500">✗ Approche commerciale</div>
                    <div className="text-gray-300">✓ Analyse approfondie</div>
                    <div className="text-gray-500">✗ Commission avant tout</div>
                  </div>
                </div>

                <Link to="/qui-sommes-nous">
                  <Button className="bg-white hover:bg-gray-100 text-gray-900 font-semibold">
                    Découvrir toute notre différence
                    <ArrowRight className="size-4 ml-2" />
                  </Button>
                </Link>
              </div>
              
              {/* Citation */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <p className="text-gray-300 italic text-lg leading-relaxed">
                  "Mon expertise en cybersécurité m'apprend à ne jamais faire confiance aux apparences. 
                  Chaque véhicule est audité comme un système informatique : rigueur, vérifications, 
                  et rien n'est laissé au hasard."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <User className="size-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Mam III Jobb</p>
                    <p className="text-gray-400 text-sm">Fondateur M3 Automobile</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section - Bouton téléphone corrigé */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <a href="tel:0783269802" className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 flex flex-col items-center text-center group hover:bg-white/10 transition-all cursor-pointer">
            <Phone className="size-8 text-white mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="text-white font-bold mb-2">Discutons de vive voix</h4>
            <span className="text-2xl font-black text-white uppercase tracking-tighter">07 83 26 98 02</span>
          </a>
          <a href="mailto:m3.automobil@gmail.com" className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 flex flex-col items-center text-center group hover:bg-white/10 transition-all cursor-pointer">
            <Mail className="size-8 text-white mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="text-white font-bold mb-2">Par Email</h4>
            <span className="text-lg font-medium text-white/70 group-hover:text-white break-all">m3.automobil@gmail.com</span>
          </a>
        </div>

      </div>
    </div>
  );
}
