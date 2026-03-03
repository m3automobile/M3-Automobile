import { Shield, CheckCircle2, MapPin, Gauge, Wrench, Clock, FileText, Phone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import PremiumBackground from '../components/PremiumBackground';

export default function GarantiesPage() {
  return (
    <div className="relative min-h-screen">
      <PremiumBackground />
      
      {/* Contenu de la page */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Hero avec image de fond */}
        <div className="relative mb-20 rounded-3xl overflow-hidden shadow-2xl border border-white/5">
          {/* Image de fond */}
          <div className="absolute inset-0 z-0">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1768929571671-4e58e2d9e72f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBlbmdpbmUlMjBtZWNoYW5pY2FsJTIwcGFydHN8ZW58MXx8fHwxNzcyNTcwMDc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Moteur de voiture"
              className="w-full h-full object-cover"
            />
            {/* Overlay gradient noir pour garder le design sobre */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>
          </div>
          
          {/* Contenu Hero */}
          <div className="relative z-10 text-center py-24 px-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-full size-20 flex items-center justify-center mb-6 mx-auto border border-white/30 shadow-2xl">
              <Shield className="size-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">Nos Garanties Mécaniques</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Roulez l'esprit libre grâce à nos garanties complètes sur tous nos véhicules
            </p>
          </div>
        </div>

        {/* Packs de garantie */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">Garantie Mécanique Incluse</h2>
            <p className="text-lg text-gray-400">6 mois de couverture offerte sur tous nos véhicules</p>
          </div>

          {/* Garantie Incluse - Mise en avant */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="border border-white/10 relative overflow-hidden bg-gradient-to-br from-gray-900 to-black shadow-2xl shadow-black/50">
              <div className="absolute top-4 right-4">
                <Badge className="bg-white text-gray-900 shadow-lg text-base px-4 py-2 font-bold">✓ INCLUS</Badge>
              </div>
              <CardHeader className="bg-white/5 pb-8 border-b border-white/10">
                <CardTitle className="text-3xl text-white flex items-center gap-3">
                  <Shield className="size-8 text-white" />
                  Garantie Sérénité 6 Mois
                </CardTitle>
                <CardDescription className="text-gray-400 text-lg mt-2">
                  Protection complète des organes mécaniques essentiels - Offerte sur tous les véhicules achetés depuis notre stock ou via notre service de recherche personnalisée
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-8">
                <div className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10 text-center hover:bg-white/10 transition-colors">
                      <Clock className="size-8 text-white mx-auto mb-2" />
                      <p className="font-bold text-white text-xl">6 mois</p>
                      <p className="text-sm text-gray-400">Dès la livraison</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10 text-center hover:bg-white/10 transition-colors">
                      <Gauge className="size-8 text-white mx-auto mb-2" />
                      <p className="font-bold text-white text-xl">Illimité</p>
                      <p className="text-sm text-gray-400">Kilométrage</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10 text-center hover:bg-white/10 transition-colors">
                      <MapPin className="size-8 text-white mx-auto mb-2" />
                      <p className="font-bold text-white text-xl">Toute la France</p>
                      <p className="text-sm text-gray-400">Réparation partout</p>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-6">
                    <h4 className="font-bold text-white text-xl mb-4 flex items-center gap-2">
                      <CheckCircle2 className="size-6 text-white" />
                      Organes Couverts par la Garantie Incluse
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        'Moteur : Bloc moteur, distribution, moteur électrique hybride',
                        'Boîte de vitesses : Manuelle et automatique',
                        'Boîte de transfert (si véhicule 4x4)',
                        'Ponts et pont réducteur',
                        'Circuit de suralimentation : Turbo, vanne EGR'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-300 bg-white/5 rounded-lg p-3 border border-white/5">
                          <CheckCircle2 className="size-5 text-white mt-0.5 flex-shrink-0" />
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-white/10 to-transparent border-l-4 border-white rounded-r-lg p-6 mt-6">
                    <p className="text-white text-lg font-bold mb-2">💡 Valable partout en France</p>
                    <p className="text-gray-300">
                      Pas besoin de revenir chez nous en cas de panne ! Faites réparer votre véhicule chez n'importe quel garagiste en France. Zéro avance de frais après validation de la prise en charge.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Extensions Possibles */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Envie de plus de protection ?</h3>
              <p className="text-gray-400">Étendez votre couverture avec nos options supplémentaires</p>
            </div>

            <div className="bg-white/5 rounded-xl p-8 border border-white/10 mb-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-white/10 rounded-full size-12 flex items-center justify-center border border-white/20">
                  <Clock className="size-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Extension de Durée</h4>
                  <p className="text-gray-400">Prolongez votre garantie jusqu'à 12 mois</p>
                </div>
              </div>
              <p className="text-gray-300 text-lg mb-4">
                Avec l'extension de durée, bénéficiez de <strong className="text-white">6 mois supplémentaires</strong> de garantie sur les mêmes organes mécaniques essentiels, soit une couverture totale d'<strong className="text-white">1 an</strong>.
              </p>
              <div className="bg-white/10 rounded-lg p-4 inline-block border border-white/5">
                <p className="text-white font-semibold">Extension disponible sur demande</p>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white text-center mb-6">Options d'Extension de Couverture</h4>
              
              {/* Extension Option 1 avec image */}
              <Card className="border border-white/10 bg-gray-900/50 hover:bg-gray-900 hover:border-white/20 transition-all overflow-hidden group">
                <div className="md:flex">
                  {/* Image à gauche */}
                  <div className="md:w-1/3 relative h-48 md:h-auto overflow-hidden">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1555140713-973b9f36cd1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBtZWNoYW5pYyUyMHdhcnJhbnR5JTIwcHJvdGVjdGlvbnxlbnwxfHx8fDE3NzI1NzAwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Circuit électrique"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900/90"></div>
                  </div>
                  
                  {/* Contenu à droite */}
                  <div className="md:w-2/3">
                    <CardHeader className="bg-white/5 border-b border-white/10 pb-4">
                      <CardTitle className="text-lg text-white flex items-center gap-2">
                        <span className="bg-white/20 rounded-full size-8 flex items-center justify-center text-sm font-bold border border-white/10">+</span>
                        Option 1 : Circuit Électrique & Alimentation Moteur
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <p className="font-semibold text-white mb-3 text-sm uppercase tracking-wide opacity-70">Circuit électrique moteur :</p>
                          <ul className="space-y-2">
                            {['Alternateur', 'Démarreur', 'Électronique moteur'].map((item, index) => (
                              <li key={index} className="flex items-start gap-2 text-gray-300">
                                <CheckCircle2 className="size-4 text-gray-500 mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold text-white mb-3 text-sm uppercase tracking-wide opacity-70">Circuit d'alimentation moteur :</p>
                          <ul className="space-y-2">
                            {['Pompe à injection', 'Pompe d\'alimentation', 'Injecteurs', 'Calculateurs'].map((item, index) => (
                              <li key={index} className="flex items-start gap-2 text-gray-300">
                                <CheckCircle2 className="size-4 text-gray-500 mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>

              {/* Extension Option 2 avec image */}
              <Card className="border border-white/10 bg-gray-900/50 hover:bg-gray-900 hover:border-white/20 transition-all overflow-hidden group">
                <div className="md:flex md:flex-row-reverse">
                  {/* Image à droite */}
                  <div className="md:w-1/3 relative h-48 md:h-auto overflow-hidden">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1770656505713-b0fd2f5751e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtZWNoYW5pYyUyMHdvcmtpbmd8ZW58MXx8fHwxNzcyNTU3MTAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Mécanicien professionnel"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-900/90"></div>
                  </div>
                  
                  {/* Contenu à gauche */}
                  <div className="md:w-2/3">
                    <CardHeader className="bg-white/5 border-b border-white/10 pb-4">
                      <CardTitle className="text-lg text-white flex items-center gap-2">
                        <span className="bg-white/20 rounded-full size-8 flex items-center justify-center text-sm font-bold border border-white/10">++</span>
                        Option 2 : Embrayage, Variateur & Refroidissement
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <p className="font-semibold text-white mb-3 text-sm uppercase tracking-wide opacity-70">Embrayage & Transmission :</p>
                          <ul className="space-y-2">
                            {['Embrayage complet', 'Variateur (CVT)', 'Compresseurs'].map((item, index) => (
                              <li key={index} className="flex items-start gap-2 text-gray-300">
                                <CheckCircle2 className="size-4 text-gray-500 mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold text-white mb-3 text-sm uppercase tracking-wide opacity-70">Circuit de refroidissement :</p>
                          <ul className="space-y-2">
                            {['Pompe à eau', 'Radiateurs', 'Motoventilateurs', 'Calorstat (thermostat)'].map((item, index) => (
                              <li key={index} className="flex items-start gap-2 text-gray-300">
                                <CheckCircle2 className="size-4 text-gray-500 mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </div>

            <div className="mt-10 bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 border border-white/10 text-center shadow-2xl">
              <h4 className="text-2xl font-bold text-white mb-3">Garantie Sur Mesure</h4>
              <p className="text-gray-300 text-lg mb-4">
                <strong className="text-white">Composez votre garantie idéale !</strong> Dites-nous ce que vous souhaitez :
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6 text-left">
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <p className="text-white font-semibold mb-2">✓ Choisissez votre durée :</p>
                  <ul className="text-gray-400 space-y-1 text-sm">
                    <li>• Rester sur 6 mois inclus</li>
                    <li>• Passer à 12 mois de couverture</li>
                  </ul>
                </div>
                
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <p className="text-white font-semibold mb-2">✓ Choisissez votre couverture :</p>
                  <ul className="text-gray-400 space-y-1 text-sm">
                    <li>• Garder les organes essentiels uniquement</li>
                    <li>• Ajouter une ou plusieurs extensions</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-4 mb-6 border border-white/5">
                <p className="text-gray-300 text-base">
                  <strong className="text-white">Exemples :</strong> 12 mois avec organes de base seulement • 6 mois + Option Circuit Électrique • 12 mois + toutes les options • ou toute autre combinaison !
                </p>
              </div>

              <div className="bg-gradient-to-r from-white/10 to-transparent border-l-4 border-white rounded-r-lg p-5 mb-6 text-left">
                <p className="text-white font-bold mb-2">📧 Demande de devis par email uniquement</p>
                <p className="text-gray-300 text-sm">
                  Indiquez-nous l'<strong className="text-white">immatriculation de votre véhicule</strong>, la durée et les options souhaitées. Nous vous rappelons rapidement avec votre devis personnalisé.
                </p>
              </div>

              <a href="mailto:m3.automobil@gmail.com?subject=Demande de devis garantie sur mesure&body=Bonjour,%0D%0A%0D%0AJe souhaite obtenir un devis pour une garantie sur mesure.%0D%0A%0D%0AImmatriculation du véhicule : %0D%0ADurée souhaitée : %0D%0AOptions souhaitées : %0D%0A%0D%0AMerci de me recontacter.%0D%0A%0D%0ACordialement">
                <Button className="bg-white hover:bg-gray-200 text-gray-950 font-bold px-8 py-6 text-lg w-full md:w-auto shadow-lg hover:shadow-white/20 transition-all">
                  <FileText className="size-5 mr-2" />
                  Demander un devis par email
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 border border-white/10 max-w-4xl mx-auto text-center shadow-xl">
          <h3 className="text-3xl font-bold text-white mb-4">Des questions sur nos garanties ?</h3>
          <p className="text-xl text-gray-300 mb-8">
            Notre équipe est à votre disposition pour vous conseiller
          </p>
          <a href="tel:0783269802">
            <Button className="bg-white hover:bg-gray-200 text-gray-950 font-bold px-8 py-6 text-lg shadow-lg hover:shadow-white/20 transition-all">
              <Phone className="size-5 mr-2" />
              Appelez-nous : 07 83 26 98 02
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}