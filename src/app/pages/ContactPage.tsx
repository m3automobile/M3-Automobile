import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import PremiumBackground from '../components/PremiumBackground';

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <PremiumBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-10 md:py-16">
        {/* Hero */}
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">Contactez-nous</h1>
          <p className="text-sm md:text-base lg:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Une question ? Un projet ? Notre équipe est à votre écoute
          </p>
        </div>

        {/* Coordonnées */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Téléphone */}
          <Card className="border border-white/10 bg-white/5 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl text-white flex items-center gap-2 md:gap-3">
                <Phone className="size-5 md:size-6" />
                Par téléphone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a href="tel:0783269802" className="block">
                <p className="text-2xl md:text-3xl font-bold text-white mb-2 hover:text-gray-300 transition-colors">
                  07 83 26 98 02
                </p>
              </a>
              <p className="text-sm md:text-base text-gray-400">
                Appelez-nous directement pour toute question ou prise de rendez-vous
              </p>
            </CardContent>
          </Card>

          {/* Email */}
          <Card className="border border-white/10 bg-white/5 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl text-white flex items-center gap-2 md:gap-3">
                <Mail className="size-5 md:size-6" />
                Par email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a href="mailto:m3.automobil@gmail.com" className="block">
                <p className="text-lg md:text-xl font-bold text-white mb-2 hover:text-gray-300 transition-colors break-all">
                  m3.automobil@gmail.com
                </p>
              </a>
              <p className="text-sm md:text-base text-gray-400">
                Écrivez-nous directement, nous vous répondons rapidement
              </p>
            </CardContent>
          </Card>

          {/* Instagram */}
          <Card className="border border-white/10 bg-white/5 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl text-white flex items-center gap-2 md:gap-3">
                <Instagram className="size-5 md:size-6" />
                Instagram
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a 
                href="https://www.instagram.com/m3.automobile/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block"
              >
                <p className="text-lg md:text-xl font-bold text-white mb-2 hover:text-gray-300 transition-colors break-all">
                  @m3.automobile
                </p>
              </a>
              <p className="text-sm md:text-base text-gray-400">
                Suivez nos actualités et découvrez nos nouveaux véhicules
              </p>
            </CardContent>
          </Card>

          {/* Localisation */}
          <Card className="border border-white/10 bg-white/5 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl text-white flex items-center gap-2 md:gap-3">
                <MapPin className="size-5 md:size-6" />
                Notre localisation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg md:text-xl font-bold text-white mb-4">
                L'Isle-Adam (95290)
              </p>
              <p className="text-sm md:text-base text-gray-400 mb-4">
                Contactez-nous pour plus d'informations sur notre localisation
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}