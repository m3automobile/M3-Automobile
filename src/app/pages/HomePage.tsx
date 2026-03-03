import { Shield, CheckCircle2, MapPin, Gauge, Wrench, Car, Search, Handshake, ExternalLink, Phone, Mail } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Link } from 'react-router';
import PremiumBackground from '../components/PremiumBackground';

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <PremiumBackground />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[600px] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1662531805933-db8cb556201d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBzaG93cm9vbSUyMGNsZWFufGVufDF8fHx8MTc3MjU0OTY5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
            }}
          />
          <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-center text-white">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white">Votre Expert Automobile à L'Isle-Adam</h2>
            <p className="text-base md:text-xl lg:text-2xl max-w-3xl text-gray-200 mb-6 md:mb-8">
              Achat, vente et recherche personnalisée de véhicules d'occasion avec garantie incluse
            </p>
            <div className="flex gap-2 md:gap-4 flex-wrap justify-center">
              <Badge className="bg-white/90 text-gray-900 px-3 py-2 md:px-6 md:py-3 text-sm md:text-lg">
                <Shield className="size-4 md:size-5 mr-2" />
                Garantie 6 mois incluse
              </Badge>
              <Badge className="bg-white/90 text-gray-900 px-3 py-2 md:px-6 md:py-3 text-sm md:text-lg">
                <Search className="size-4 md:size-5 mr-2" />
                Recherche sur mesure
              </Badge>
              <Badge className="bg-white/90 text-gray-900 px-3 py-2 md:px-6 md:py-3 text-sm md:text-lg">
                <Handshake className="size-4 md:size-5 mr-2" />
                Mandat de Vente
              </Badge>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          {/* Nos Services Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">Nos Services</h3>
              <p className="text-base md:text-lg text-gray-400">Une offre complète pour tous vos besoins automobiles</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              {/* Vente de véhicules */}
              <Link to="/vehicules">
                <Card className="border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer h-full">
                  <CardHeader className="text-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-full size-20 flex items-center justify-center mb-4 mx-auto border border-white/20">
                      <Car className="size-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-white">Vente de Véhicules</CardTitle>
                    <CardDescription className="text-gray-300 text-base">Stock de qualité avec garantie</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-300 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="size-5 text-white/70 mt-0.5 flex-shrink-0" />
                        <span>Véhicules contrôlés et certifiés</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="size-5 text-white/70 mt-0.5 flex-shrink-0" />
                        <span>Garantie mécanique 6 mois incluse</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="size-5 text-white/70 mt-0.5 flex-shrink-0" />
                        <span>Prix transparents et compétitifs</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </Link>

              {/* Recherche personnalisée */}
              <Link to="/recherche-personnalisee">
                <Card className="border border-white/20 bg-white/10 backdrop-blur-md shadow-xl shadow-white/5 cursor-pointer h-full hover:bg-white/[0.15] hover:border-white/30 transition-all">
                  <CardHeader className="text-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full size-20 flex items-center justify-center mb-4 mx-auto border border-white/30">
                      <Search className="size-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-white">Recherche Personnalisée</CardTitle>
                    <CardDescription className="text-gray-200 text-base">On trouve votre véhicule idéal</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-300 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="size-5 text-white/70 mt-0.5 flex-shrink-0" />
                        <span>Service de recherche sur tout le marché</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="size-5 text-white/70 mt-0.5 flex-shrink-0" />
                        <span>Accompagnement personnalisé</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="size-5 text-white/70 mt-0.5 flex-shrink-0" />
                        <span>Vérification complète du véhicule</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-white hover:bg-gray-100 text-gray-900 font-semibold">
                      Faire une demande
                    </Button>
                  </CardContent>
                </Card>
              </Link>

              {/* Dépôt-vente */}
              <Link to="/mandat-vente">
                <Card className="border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer h-full">
                  <CardHeader className="text-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-full size-20 flex items-center justify-center mb-4 mx-auto border border-white/20">
                      <Handshake className="size-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-white">Mandat de Vente</CardTitle>
                    <CardDescription className="text-gray-300 text-base">Vendez votre véhicule facilement</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-300 mb-6">
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

          {/* Garanties aperçu */}
          <section className="mb-20 bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-12 border border-white/10">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">Nos Garanties</h3>
              <p className="text-base md:text-lg text-gray-400">Tous nos véhicules sont couverts par nos garanties mécaniques</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 hover:border-white/20 transition-all">
                <MapPin className="size-10 text-white mx-auto mb-3" />
                <h4 className="font-bold text-white mb-2">Valable partout en France</h4>
                <p className="text-gray-400 text-sm">Réparation chez le garage de votre choix</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 hover:border-white/20 transition-all">
                <Wrench className="size-10 text-white mx-auto mb-3" />
                <h4 className="font-bold text-white mb-2">Zéro avance de frais</h4>
                <p className="text-gray-400 text-sm">Prise en charge directe des réparations</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 hover:border-white/20 transition-all">
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

          {/* CTA Section */}
          <section className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-12 border border-white/10">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">Prêt à trouver votre prochaine voiture ?</h3>
            <p className="text-base md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contactez-nous dès maintenant pour découvrir notre stock ou pour une recherche personnalisée
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="tel:0783269802">
                <Button className="bg-white hover:bg-gray-100 text-gray-900 font-semibold px-6 py-4 md:px-8 md:py-6 text-base md:text-lg">
                  <Phone className="size-5 mr-2" />
                  07 83 26 98 02
                </Button>
              </a>
              <Link to="/contact">
                <Button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-6 py-4 md:px-8 md:py-6 text-base md:text-lg border border-white/20">
                  <Mail className="size-5 mr-2" />
                  Formulaire de contact
                </Button>
              </Link>
            </div>
            <p className="text-sm md:text-base text-gray-400 mt-6">
              📍 L'Isle-Adam (95290)
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}