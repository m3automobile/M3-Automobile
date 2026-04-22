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
import { BlurText } from '../components/BlurText';

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

      {/* ═══════════════════════════════════════════════════════════
          HERO SECTION — Vidéo en boucle + BlurText
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden -mt-20 md:-mt-24">
        {/* Vidéo background en boucle */}
        {/* Vidéo desktop (paysage recadré) */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Vidéo mobile (portrait) */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover md:hidden"
        >
          <source src="/hero-bg-mobile.mp4" type="video/mp4" />
        </video>

        {/* Overlay dégradé pour lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060B12]/80 via-[#060B12]/60 to-[#060B12] md:bg-gradient-to-r md:from-[#060B12]/90 md:via-[#060B12]/60 md:to-[#060B12]/30" />

        {/* Contenu hero — aligné à gauche */}
        <div className="relative container mx-auto px-6 md:px-12 lg:px-16 pt-28 md:pt-0">
          {/* Badge localisation — glow ambre */}
          <div className="group relative inline-flex items-center gap-2 bg-[#8B2D3A]/10 border border-[#8B2D3A]/30 text-[#8B2D3A] px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wider uppercase mb-6 md:mb-8">
            <span className="absolute inset-0 rounded-full bg-[#8B2D3A]/15 blur-md animate-pulse" />
            <span className="relative flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8B2D3A] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#8B2D3A]" />
              </span>
              L'Isle-Adam · Val d'Oise · Île-de-France
            </span>
          </div>

          {/* Titre animé BlurText */}
          <div className="mb-3 md:mb-4">
            <BlurText
              text="M3 AUTOMOBILE"
              as="h1"
              className="text-[2.8rem] md:text-[4.5rem] lg:text-[6rem] font-black tracking-tighter leading-[0.9] text-white"
              delay={0.08}
              startDelay={0.2}
            />
          </div>

          {/* Sous-titre animé */}
          <BlurText
            text="L'excellence automobile, sans compromis."
            as="p"
            className="text-gray-300 text-base md:text-xl max-w-lg mb-4 md:mb-6 leading-relaxed"
            delay={0.05}
            startDelay={0.8}
          />

          {/* Badge de confiance */}
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-2 rounded-full text-xs md:text-sm font-medium tracking-wide uppercase mb-6 md:mb-8">
            <CheckCircle2 className="size-4 text-green-400" />
            Garantie 3 mois incluse sur tous nos véhicules
          </div>

          {/* Boutons CTA — ambre */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:0783269802">
              <Button className="bg-[#8B2D3A] hover:bg-[#A63D4D] text-white font-bold px-8 py-6 text-base w-full sm:w-auto shadow-lg shadow-[#8B2D3A]/20 transition-all">
                <Phone className="size-5 mr-2" />
                Appeler maintenant
              </Button>
            </a>
            <Link to="/vehicules">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold px-8 py-6 text-base w-full sm:w-auto backdrop-blur-sm transition-all">
                Voir nos véhicules
                <ArrowRight className="size-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Container principal */}
      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">

        {/* ═══════════════════════════════════════════════════════════
            1. NOS SERVICES — Liquid glass cards
            ═══════════════════════════════════════════════════════════ */}
        <section className="mb-20 md:mb-32">
          <div className="text-center mb-10 md:mb-16">
            <BlurText text="Nos Services" as="h3" className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-4" delay={0.06} />
            <p className="text-sm md:text-lg lg:text-xl text-gray-400">Une offre complète pour tous vos besoins automobiles</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <Link to="/vehicules">
              <Card className="border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl hover:bg-white/10 hover:border-[#8B2D3A]/30 hover:shadow-lg hover:shadow-[#8B2D3A]/5 transition-all duration-300 cursor-pointer h-full text-white">
                <CardHeader className="text-center">
                  <div className="bg-[#8B2D3A]/10 backdrop-blur-sm rounded-full size-20 flex items-center justify-center mb-4 mx-auto border border-[#8B2D3A]/20">
                    <Car className="size-10 text-[#8B2D3A]" />
                  </div>
                  <CardTitle className="text-2xl">Vente de Véhicules</CardTitle>
                  <CardDescription className="text-gray-300 text-base">Stock de qualité avec garantie</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-5 text-[#8B2D3A]/70 mt-0.5 flex-shrink-0" />
                      <span>Véhicules audités et certifiés</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-5 text-[#8B2D3A]/70 mt-0.5 flex-shrink-0" />
                      <span>Garantie mécanique 3 mois incluse</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-5 text-[#8B2D3A]/70 mt-0.5 flex-shrink-0" />
                      <span>Historique vérifié (pas de fraude)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            <Link to="/recherche-personnalisee">
              <Card className="border border-[#8B2D3A]/20 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl shadow-[#8B2D3A]/5 cursor-pointer h-full hover:bg-white/[0.15] hover:border-[#8B2D3A]/40 transition-all duration-300 text-white">
                <CardHeader className="text-center">
                  <div className="bg-[#8B2D3A]/20 backdrop-blur-sm rounded-full size-20 flex items-center justify-center mb-4 mx-auto border border-[#8B2D3A]/30">
                    <Search className="size-10 text-[#8B2D3A]" />
                  </div>
                  <CardTitle className="text-2xl">Recherche Personnalisée</CardTitle>
                  <CardDescription className="text-gray-200 text-base">On trouve votre véhicule idéal</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-300 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-5 text-[#8B2D3A]/70 mt-0.5 flex-shrink-0" />
                      <span>Investigation sur tout le marché</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-5 text-[#8B2D3A]/70 mt-0.5 flex-shrink-0" />
                      <span>Vérification anti-fraude complète</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-5 text-[#8B2D3A]/70 mt-0.5 flex-shrink-0" />
                      <span>Contrôle mécanique expert</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-[#8B2D3A] hover:bg-[#A63D4D] text-white font-bold py-6 shadow-lg shadow-[#8B2D3A]/20">
                    Faire une demande
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link to="/mandat-vente">
              <Card className="border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl hover:bg-white/10 hover:border-[#8B2D3A]/30 hover:shadow-lg hover:shadow-[#8B2D3A]/5 transition-all duration-300 cursor-pointer h-full text-white">
                <CardHeader className="text-center">
                  <div className="bg-[#8B2D3A]/10 backdrop-blur-sm rounded-full size-20 flex items-center justify-center mb-4 mx-auto border border-[#8B2D3A]/20">
                    <Handshake className="size-10 text-[#8B2D3A]" />
                  </div>
                  <CardTitle className="text-2xl">Mandat de Vente</CardTitle>
                  <CardDescription className="text-gray-300 text-base">Vendez votre véhicule facilement</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-5 text-[#8B2D3A]/70 mt-0.5 flex-shrink-0" />
                      <span>Prise en charge complète de la vente</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-5 text-[#8B2D3A]/70 mt-0.5 flex-shrink-0" />
                      <span>Visibilité sur nos plateformes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-5 text-[#8B2D3A]/70 mt-0.5 flex-shrink-0" />
                      <span>Gestion administrative incluse</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            2. VEHICULES EN VENTE
            ═══════════════════════════════════════════════════════════ */}
        <section className="mb-20 md:mb-32">
          <div className="text-center mb-10 md:mb-16">
            <BlurText text="Nos Véhicules Disponibles" as="h3" className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-4" delay={0.06} />
            <p className="text-sm md:text-lg lg:text-xl text-gray-400">Découvrez notre sélection rigoureusement contrôlée et garantie</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-10">
            {vehicules.filter(v => v.statut === 'en_vente').slice(0, 3).map((vehicule) => (
              <VehiculeCard key={vehicule.id} vehicule={vehicule} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/vehicules">
              <Button className="bg-[#8B2D3A] hover:bg-[#A63D4D] text-white font-bold px-8 py-3 text-base shadow-lg shadow-[#8B2D3A]/20 transition-all">
                Voir tous nos véhicules
                <ArrowRight className="size-4 ml-2" />
              </Button>
            </Link>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            2.5. CE QUE NOS CLIENTS DISENT
            ═══════════════════════════════════════════════════════════ */}
        <section className="mb-20 md:mb-32">
          <div className="text-center mb-10 md:mb-16">
            <BlurText text="Ce que nos clients disent de nous" as="h3" className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-4" delay={0.05} />
            <p className="text-sm md:text-lg lg:text-xl text-gray-400">Découvrez les témoignages de nos clients satisfaits</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {avis.filter(a => a.visible).map((review) => (
              <Card key={review.id} className="border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-white h-full flex flex-col">
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
                          className={`size-4 ${i < review.note ? 'fill-[#8B2D3A] text-[#8B2D3A]' : 'text-gray-600'}`}
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

        {/* ═══════════════════════════════════════════════════════════
            3. QUI SE CACHE DERRIERE M3
            ═══════════════════════════════════════════════════════════ */}
        <section className="mb-20 md:mb-32">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <BlurText text="Qui se cache derrière M3 Automobile ?" as="h2" className="text-3xl md:text-4xl font-bold text-white mb-4" delay={0.05} />
              <div className="w-20 h-1 bg-[#8B2D3A]/50 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Photo + badge */}
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl border border-white/10 overflow-hidden mb-6">
                  <img
                    src="/photo-profil.jpg"
                    alt="Mam III Jobb - Fondateur M3 Automobile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-4 right-4 bg-[#060B12]/80 backdrop-blur-md text-white rounded-xl p-4 shadow-xl border border-[#8B2D3A]/20">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#8B2D3A]">2025</p>
                    <p className="text-xs text-gray-300">Création</p>
                  </div>
                </div>
              </div>

              {/* Texte présentation */}
              <div>
                <div className="inline-flex items-center gap-2 bg-[#8B2D3A]/10 text-[#8B2D3A] px-4 py-2 rounded-full text-sm mb-4 border border-[#8B2D3A]/20">
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

                {/* Section équipe — liquid glass */}
                <div className="mt-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="size-5 text-[#8B2D3A]" />
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
                    <Button className="bg-[#8B2D3A] hover:bg-[#A63D4D] text-white font-semibold shadow-lg shadow-[#8B2D3A]/20 transition-all">
                      Découvrir notre histoire
                      <ArrowRight className="size-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            NOS GARANTIES — Liquid glass panel
            ═══════════════════════════════════════════════════════════ */}
        <section className="mb-20 bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-12 border border-white/10">
          <div className="text-center mb-8">
            <BlurText text="Nos Garanties" as="h3" className="text-3xl md:text-4xl font-bold text-white mb-3" delay={0.06} />
            <p className="text-base md:text-lg text-gray-400">Tous nos véhicules sont couverts par nos garanties mécaniques</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-[#8B2D3A]/20 transition-all duration-300">
              <MapPin className="size-10 text-[#8B2D3A] mx-auto mb-3" />
              <h4 className="font-bold text-white mb-2">Valable partout en France</h4>
              <p className="text-gray-400 text-sm">Réparation chez le garage de votre choix</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-[#8B2D3A]/20 transition-all duration-300">
              <Wrench className="size-10 text-[#8B2D3A] mx-auto mb-3" />
              <h4 className="font-bold text-white mb-2">Zéro avance de frais</h4>
              <p className="text-gray-400 text-sm">Prise en charge directe des réparations</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-[#8B2D3A]/20 transition-all duration-300">
              <Gauge className="size-10 text-[#8B2D3A] mx-auto mb-3" />
              <h4 className="font-bold text-white mb-2">Kilométrage illimité</h4>
              <p className="text-gray-400 text-sm">Aucun plafond pendant la garantie</p>
            </div>
          </div>

          <div className="text-center">
            <Link to="/garanties">
              <Button className="bg-[#8B2D3A] hover:bg-[#A63D4D] text-white font-semibold px-8 py-3 shadow-lg shadow-[#8B2D3A]/20 transition-all">
                En savoir plus sur nos garanties
              </Button>
            </Link>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            POURQUOI CHOISIR M3
            ═══════════════════════════════════════════════════════════ */}
        <section className="mb-20 md:mb-32 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md rounded-2xl p-6 md:p-12 border border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <BlurText text="Pourquoi choisir M3 Automobile ?" as="h2" className="text-2xl md:text-3xl font-bold text-white mb-6" delay={0.05} />
                <p className="text-gray-300 mb-6">
                  Une approche unique qui combine expertise cybersécurité et passion automobile
                  pour vous offrir un service incomparable sur le marché de l'occasion.
                </p>

                {/* Mini VS compact */}
                <div className="bg-white/5 rounded-xl border border-white/10 p-4 mb-6">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="text-[#8B2D3A] font-bold text-sm">M3 Automobile</span>
                    <span className="text-gray-500">vs</span>
                    <span className="text-gray-400 font-bold text-sm">Vendeurs classiques</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="text-gray-300"><span className="text-[#8B2D3A]">✓</span> Détection de fraudes</div>
                    <div className="text-gray-500">✗ Pas de vérification</div>
                    <div className="text-gray-300"><span className="text-[#8B2D3A]">✓</span> Expertise technique</div>
                    <div className="text-gray-500">✗ Approche commerciale</div>
                    <div className="text-gray-300"><span className="text-[#8B2D3A]">✓</span> Analyse approfondie</div>
                    <div className="text-gray-500">✗ Commission avant tout</div>
                  </div>
                </div>

                <Link to="/qui-sommes-nous">
                  <Button className="bg-[#8B2D3A] hover:bg-[#A63D4D] text-white font-semibold shadow-lg shadow-[#8B2D3A]/20 transition-all">
                    Découvrir toute notre différence
                    <ArrowRight className="size-4 ml-2" />
                  </Button>
                </Link>
              </div>

              {/* Citation — liquid glass */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6">
                <p className="text-gray-300 italic text-lg leading-relaxed">
                  "Mon expertise en cybersécurité m'apprend à ne jamais faire confiance aux apparences.
                  Chaque véhicule est audité comme un système informatique : rigueur, vérifications,
                  et rien n'est laissé au hasard."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#8B2D3A]/10 border border-[#8B2D3A]/20 flex items-center justify-center">
                    <User className="size-5 text-[#8B2D3A]" />
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

        {/* ═══════════════════════════════════════════════════════════
            CONTACT — Liquid glass cards
            ═══════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <a href="tel:0783269802" className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 flex flex-col items-center text-center group hover:bg-white/10 hover:border-[#8B2D3A]/30 transition-all duration-300 cursor-pointer">
            <div className="bg-[#8B2D3A]/10 rounded-full p-4 mb-4 group-hover:scale-110 transition-transform border border-[#8B2D3A]/20">
              <Phone className="size-8 text-[#8B2D3A]" />
            </div>
            <h4 className="text-white font-bold mb-2">Discutons de vive voix</h4>
            <span className="text-2xl font-black text-white uppercase tracking-tighter">07 83 26 98 02</span>
          </a>
          <a href="mailto:m3.automobil@gmail.com" className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 flex flex-col items-center text-center group hover:bg-white/10 hover:border-[#8B2D3A]/30 transition-all duration-300 cursor-pointer">
            <div className="bg-[#8B2D3A]/10 rounded-full p-4 mb-4 group-hover:scale-110 transition-transform border border-[#8B2D3A]/20">
              <Mail className="size-8 text-[#8B2D3A]" />
            </div>
            <h4 className="text-white font-bold mb-2">Par Email</h4>
            <span className="text-lg font-medium text-white/70 group-hover:text-white break-all">m3.automobil@gmail.com</span>
          </a>
        </div>

      </div>
    </div>
  );
}
