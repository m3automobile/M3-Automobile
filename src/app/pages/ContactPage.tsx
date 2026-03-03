import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import PremiumBackground from '../components/PremiumBackground';

export default function ContactPage() {
  return (
    <div className="relative min-h-screen">
      <PremiumBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Contactez-nous</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Une question ? Un projet ? Notre équipe est à votre écoute
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulaire */}
          <div>
            <Card className="border border-white/10 bg-white/5 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Envoyez-nous un message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
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

                  <Button className="w-full bg-white hover:bg-gray-100 text-gray-900 font-semibold py-6 text-lg">
                    <Send className="size-5 mr-2" />
                    Envoyer le message
                  </Button>

                  <p className="text-sm text-gray-400 text-center">
                    * Champs obligatoires - Nous vous répondons sous 24h
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Coordonnées */}
          <div className="space-y-6">
            <Card className="border border-white/10 bg-white/5 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <Phone className="size-6" />
                  Par téléphone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:0783269802" className="block">
                  <p className="text-3xl font-bold text-white mb-2 hover:text-gray-300 transition-colors">
                    07 83 26 98 02
                  </p>
                </a>
                <p className="text-gray-400">
                  Appelez-nous directement pour toute question ou prise de rendez-vous
                </p>
              </CardContent>
            </Card>

            <Card className="border border-white/10 bg-white/5 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <Mail className="size-6" />
                  Par email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:m3.automobil@gmail.com" className="block">
                  <p className="text-xl font-bold text-white mb-2 hover:text-gray-300 transition-colors break-all">
                    m3.automobil@gmail.com
                  </p>
                </a>
                <p className="text-gray-400">
                  Écrivez-nous directement, nous vous répondons rapidement
                </p>
              </CardContent>
            </Card>

            <Card className="border border-white/10 bg-white/5 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <MapPin className="size-6" />
                  Notre adresse
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold text-white mb-2">
                  3 rue de l'Abbé Breuil
                </p>
                <p className="text-xl font-bold text-white mb-4">
                  95290 L'Isle-Adam
                </p>
                <p className="text-gray-400 mb-4">
                  Venez nous rendre visite pour découvrir notre stock ou discuter de votre projet
                </p>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=3+rue+de+l'Abbé+Breuil+95290+L'Isle-Adam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20">
                    <MapPin className="size-4 mr-2" />
                    Voir sur Google Maps
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="border border-white/10 bg-white/5 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <Clock className="size-6" />
                  Horaires d'ouverture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Lundi - Vendredi</span>
                    <span className="text-white font-semibold">9h - 19h</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Samedi</span>
                    <span className="text-white font-semibold">9h - 19h</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Dimanche</span>
                    <span className="text-gray-400">Fermé</span>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  💡 Sur rendez-vous en dehors de ces horaires
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="size-16 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">Carte Google Maps</p>
              <p className="text-gray-500 text-sm">3 rue de l'Abbé Breuil, 95290 L'Isle-Adam</p>
            </div>
          </div>
        </div>

        {/* Info supplémentaire */}
        <div className="mt-16 max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Informations Pratiques</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-gray-400 mb-2">🚗 Parking</p>
              <p className="text-white font-semibold">Disponible sur place</p>
            </div>
            <div>
              <p className="text-gray-400 mb-2">🚌 Transports</p>
              <p className="text-white font-semibold">Gare à proximité</p>
            </div>
            <div>
              <p className="text-gray-400 mb-2">♿ Accessibilité</p>
              <p className="text-white font-semibold">PMR</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}