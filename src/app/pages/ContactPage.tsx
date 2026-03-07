import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Formulaire */}
          <div>
            <Card className="border border-white/10 bg-white/5 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl text-white">Envoyez-nous un message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-5 md:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-white font-semibold block mb-2">Prénom *</label>
                      <Input 
                        placeholder="Jean" 
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      <label className="text-white font-semibold block mb-2">Nom *</label>
                      <Input 
                        placeholder="Dupont" 
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 backdrop-blur-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-white font-semibold block mb-2">Email *</label>
                    <Input 
                      type="email" 
                      placeholder="jean.dupont@email.com" 
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 backdrop-blur-sm"
                    />
                  </div>

                  <div>
                    <label className="text-white font-semibold block mb-2">Téléphone *</label>
                    <Input 
                      type="tel" 
                      placeholder="06 12 34 56 78" 
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 backdrop-blur-sm"
                    />
                  </div>

                  <div>
                    <label className="text-white font-semibold block mb-2">Objet</label>
                    <select className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-white/30 backdrop-blur-sm">
                      <option>Demande d'information</option>
                      <option>Recherche personnalisée</option>
                      <option>Dépôt-vente</option>
                      <option>Question sur les garanties</option>
                      <option>Prise de rendez-vous</option>
                      <option>Autre</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-white font-semibold block mb-2">Votre message *</label>
                    <Textarea 
                      placeholder="Décrivez votre demande..." 
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 min-h-[150px] backdrop-blur-sm"
                    />
                  </div>

                  <Button className="w-full bg-white hover:bg-gray-100 text-gray-900 font-semibold py-5 md:py-6 text-base md:text-lg">
                    <Send className="size-4 md:size-5 mr-2" />
                    Envoyer le message
                  </Button>

                  <p className="text-xs md:text-sm text-gray-400 text-center">
                    * Champs obligatoires - Nous vous répondons sous 24h
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Coordonnées */}
          <div className="space-y-5 md:space-y-6">
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
    </div>
  );
}
