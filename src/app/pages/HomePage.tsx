import { Shield, CheckCircle2, MapPin, Gauge, Wrench, Car, Search, Handshake, ExternalLink, Phone, Mail, Construction, User, Lock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Link } from 'react-router';
import PremiumBackground from '../components/PremiumBackground';

export default function HomePage() {
  const differences = [
    "Expertise cybersécurité = détection des fraudes et arnaques",
    "Analyse technique approfondie = aucun mauvais choix",
    "Pas de showroom coûteux = prix plus justes",
    "Pas de démarches administratives = service clé en main"
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <PremiumBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1771775751121-3091d79073d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjB1cmJhbiUyMGNpdHklMjBlbGVnYW50fGVufDF8fHx8MTc3MjY0NDYzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
          }}
        />
        <div className="relative container mx-auto px-4 flex flex-col items-center justify-center text-center text-white">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-8 text-white tracking-tight -mt-20 md:-mt-32">
            Bienvenue chez M3 Automobile
          </h2>
          <p className="text-base md:text-xl lg:text-3xl max-w-4xl text-gray-200 mb-6 md:mb-12 px-4 leading-relaxed font-medium">
            Achat, vente et recherche personnalisée de véhicules d'occasion par un expert en cybersécurité
          </p>
          <div className="flex gap-3 md:gap-6 flex-wrap justify-center px-4">
            <Badge className="bg-white/90 text-gray-900 px-4 py-2.5 md:px-6 md:py-3 text-sm md:text-lg font-semibold border-none hover:bg-white transition-colors">
              <Lock className="size-4 md:size-6 mr-2" />
              <span className="whitespace-nowrap">Expert en détection de fraudes</span>
            </Badge>
            <Badge className="bg-white/90 text-gray-900 px-3 py-2 md:px-6 md:py-3 text-sm md:text-lg font-semibold border-none hover:bg-white transition-colors">
              <Shield className="size-4 md:size-6 mr-2" />
              <span className="whitespace-nowrap">Garantie 3 mois (extension possible)</span>
            </Badge>
            <Badge className="bg-white/90 text-gray-900 px-3 py-2 md:px-6 md:py-3 text-sm md:text-lg font-semibold border-none hover:bg-white transition-colors">
              <Search className="size-4 md:size-6 mr-2" />
              <span className="whitespace-nowrap">Recherche sur mesure</span>
            </Badge>
          </div>
        </div>
      </section>

      {/* Container principal */}
      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
        
        {/* Qui sommes-nous - Version courte */}
        <section className="mb-20 md:mb-32">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Photo */}
              <div className="relative order-2 md:order-1">
                <div className="aspect-[4/5] rounded-2xl border border-white/10 overflow-hidden">
                  <img 
                    src="/photo-profil.jpg" 
                    alt="Fondateur M3 Automobile - Ingénieur Cybersécurité" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white text-gray-900 rounded-xl p-4 shadow-xl">
                  <div className="text-center">
                    <p className="text-3xl font-bold">2025</p>
                    <p className="text-xs text-gray-600">Création</p>
                  </div>
                </div>
              </div>

              {/* Texte présentation */}
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm mb-4">
                  <Lock className="size-4" />
                  Ingénieur Cybersécurité & Expert Automobile
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Un expert en cybersécurité passionné par l'automobile
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  M3 Automobile est né d'une double passion : la cybersécurité et l'automobile. 
                  Ingénieur en cybersécurité de formation, j'ai décidé de mettre mon expertise en 
                  détection de fraudes au service de l'achat de véhicules d'occasion.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Mon entourage me sollicitait déjà pour trouver des voitures, vérifier les annonces 
                  et éviter les arnaques. Aujourd'hui, j'applique les méthodes d'investigation 
                  numérique à chaque véhicule : analyse des historiques, vérification des kilométrages, 
                  expertise mécanique. Une approche unique en son genre.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/qui-sommes-nous">
                    <Button className="bg-white hover:bg-gray-100 text-gray-900 font-semibold">
                      Découvrir mon histoire
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                      Me contacter
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi nous choisir */}
        <section className="mb-20 md:mb-32 bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-12 border border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Pourquoi choisir M3 Automobile ?
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Ce qui nous différencie : une expertise technique unique combinant cybersécurité et mécanique
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="space-y-4">
                  {differences.map((diff, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="size-6 text-white flex-shrink-0 mt-0.5" />
                      <p className="text-gray-300 text-lg">{diff}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-6 bg-white/5 border border-white/10 rounded-xl">
                  <p className="text-gray-300 italic">
                    "Mon expertise en cybersécurité m'apprend à ne jamais faire confiance aux apparences. 
                    Chaque véhicule est audité comme un système informatique : rigueur, vérifications, 
                    et rien n'est laissé au hasard."
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-white/10 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-white mb-4">VS</div>
                    <div className="grid grid-cols-2 gap-4 mt-8 text-sm">
                      <div className="bg-white/10 rounded-lg p-4">
                        <p className="text-white font-semibold mb-1">M3 Automobile</p>
                        <p className="text-gray-400">Expertise cybersécurité</p>
                        <p className="text-gray-400">Détection des fraudes</p>
                        <p className="text-gray-400">Analyse technique</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <p className="text-gray-300 font-semibold mb-1">Vendeurs classiques</p>
                        <p className="text-gray-500">Approche commerciale</p>
                        <p className="text-gray-500">Pas de vérification</p>
                        <p className="text-gray-500">Commission avant tout</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nos Services Section */}
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

        {/* Nos Garanties Section */}
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

        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-20">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 flex flex-col items-center text-center group hover:bg-white/10 transition-all">
            <Phone className="size-8 text-white mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="text-white font-bold mb-2">Discutons de vive voix</h4>
            <a href="tel:0783269802" className="text-2xl font-black text-white hover:underline uppercase tracking-tighter">07 83 26 98 02</a>
          </div>
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 flex flex-col items-center text-center group hover:bg-white/10 transition-all">
            <Mail className="size-8 text-white mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="text-white font-bold mb-2">Par Email</h4>
            <a href="mailto:m3.automobil@gmail.com" className="text-lg font-medium text-white/70 hover:text-white break-all">m3.automobil@gmail.com</a>
          </div>
        </div>

      </div>
    </div>
  );
}
