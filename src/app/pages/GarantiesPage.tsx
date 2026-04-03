import { Shield, CheckCircle2, MapPin, Gauge, Wrench, Clock, FileText, Phone, Sparkles, ArrowRight, Mail } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import PremiumBackground from '../components/PremiumBackground';
import SEO from '../components/SEO';

export default function GarantiesPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SEO
        title="Nos Garanties Mécaniques"
        description="Garantie mécanique 3 mois incluse sur tous nos véhicules. Valable partout en France, zéro avance de frais, kilométrage illimité. Extensions jusqu'à 24 mois."
        keywords="garantie voiture occasion, garantie mécanique 3 mois, extension garantie automobile, garantie véhicule occasion Val d'Oise"
      />
      <PremiumBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-24">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center justify-center p-3 mb-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <Shield className="size-8 md:size-12 text-white" />
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Garantie <span className="text-white/70 italic font-light font-serif">Sérénité</span>
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Roulez l'esprit libre. Tous nos véhicules incluent une protection mécanique rigoureuse pour une sécurité totale.
          </p>
        </div>

        {/* Garantie Incluse - Pack Principal */}
        <section className="max-w-6xl mx-auto mb-16 md:mb-20">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-transparent blur-xl opacity-30 rounded-3xl"></div>
            <Card className="relative border border-white/20 bg-black/40 backdrop-blur-2xl rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute top-6 right-6 z-20">
                <Badge className="bg-white text-black text-sm md:text-lg px-4 py-2 font-black uppercase tracking-tighter shadow-xl">
                  ✓ Inclus de série
                </Badge>
              </div>
              
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1768929571671-4e58e2d9e72f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBlbmdpbmUlMjBtZWNoYW5pY2FsJTIwcGFydHN8ZW58MXx8fHwxNzcyNTcwMDc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Moteur de voiture"
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent lg:bg-gradient-to-l"></div>
                </div>

                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3 text-white uppercase tracking-tighter">
                    Pack Sécurité 3 Mois
                  </h2>
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    Cette garantie couvre les organes mécaniques majeurs. Elle est automatiquement activée le jour de la livraison de votre véhicule.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-white">
                    <div className="bg-white/5 rounded-2xl p-4 border border-white/10 text-center">
                      <Clock className="size-6 text-white/50 mx-auto mb-2" />
                      <p className="font-bold">3 Mois</p>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-4 border border-white/10 text-center">
                      <Gauge className="size-6 text-white/50 mx-auto mb-2" />
                      <p className="font-bold">Illimité</p>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-4 border border-white/10 text-center">
                      <MapPin className="size-6 text-white/50 mx-auto mb-2" />
                      <p className="font-bold">France</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-4">Organes prioritaires :</h4>
                    <div className="grid gap-3">
                      {[
                        'Moteur (Bloc, distribution, turbo)',
                        'Boîte de vitesses (Manuelle & Auto)',
                        'Ponts et transmission',
                        'Moteur électrique (Hybride)'
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-gray-300 bg-white/5 p-3 rounded-xl border border-white/5">
                          <CheckCircle2 className="size-5 text-white" />
                          <span className="font-medium text-sm md:text-base">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* NOUVELLE SECTION : VALABLE PARTOUT EN FRANCE */}
        <section className="max-w-6xl mx-auto mb-20 md:mb-32">
          <div className="relative group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12 shadow-2xl">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
               <MapPin className="size-48 text-white" />
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="bg-white text-black p-6 rounded-2xl shadow-2xl flex-shrink-0 animate-bounce">
                <MapPin className="size-10 md:size-14" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-4xl font-black text-white mb-4 uppercase tracking-tighter italic">
                  Valable partout en France
                </h3>
                <p className="text-lg md:text-2xl text-gray-300 leading-relaxed font-light">
                  Pas besoin de revenir chez nous en cas de panne ! 
                  <span className="text-white font-bold"> Faites réparer votre véhicule chez n'importe quel garagiste en France.</span> 
                
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Extensions d'options */}
        <section className="max-w-6xl mx-auto mb-20 md:mb-32">
          <div className="text-center mb-16 text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Plus de <span className="text-white/40 italic font-serif">Protection ?</span></h2>
            <p className="text-gray-400 text-lg">Choisissez des options spécifiques selon vos besoins et votre usage.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Option 1 */}
            <Card className="group border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden hover:border-white/30 transition-all">
               <div className="h-48 overflow-hidden">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1555140713-973b9f36cd1e"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-50"
                  alt="Électronique"
                />
               </div>
               <div className="p-8">
                 <div className="flex items-center gap-3 mb-6">
                   <div className="bg-white/10 p-3 rounded-xl text-white">
                      <Sparkles className="size-6" />
                   </div>
                   <h3 className="text-xl font-bold text-white uppercase tracking-tighter">Circuit Électrique</h3>
                 </div>
                 <ul className="space-y-3 mb-8">
                   {['Alternateur & Démarreur', 'Calculateurs électronique', 'Faisceaux moteur', 'Injecteurs & Pompes'].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-gray-400 text-sm">
                       <CheckCircle2 className="size-4 text-white/50" />
                       {item}
                     </li>
                   ))}
                 </ul>
                 <Badge className="bg-white/10 text-white border-white/20">Option disponible</Badge>
               </div>
            </Card>

            {/* Option 2 */}
            <Card className="group border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden hover:border-white/30 transition-all">
               <div className="h-48 overflow-hidden">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1770656505713-b0fd2f5751e6"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-50"
                  alt="Mécanique"
                />
               </div>
               <div className="p-8">
                 <div className="flex items-center gap-3 mb-6">
                   <div className="bg-white/10 p-3 rounded-xl text-white">
                      <Wrench className="size-6" />
                   </div>
                   <h3 className="text-xl font-bold text-white uppercase tracking-tighter">Confort & Refroidissement</h3>
                 </div>
                 <ul className="space-y-3 mb-8">
                   {['Embrayage complet', 'Variateur (CVT)', 'Pompe à eau & Radiateur', 'Compresseur de Clim'].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-gray-400 text-sm">
                       <CheckCircle2 className="size-4 text-white/50" />
                       {item}
                     </li>
                   ))}
                 </ul>
                 <Badge className="bg-white/10 text-white border-white/20">Option disponible</Badge>
               </div>
            </Card>
          </div>
        </section>

        {/* Devis Section */}
        <section className="max-w-4xl mx-auto mb-20">
          <Card className="border border-white/20 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-2xl rounded-3xl p-8 md:p-12 text-center shadow-2xl">
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tighter italic">Extension de Durée</h3>
            <p className="text-gray-400 text-base md:text-xl mb-10 leading-relaxed">
              Vous souhaitez passer à <strong className="text-white">6, 12 ou 24 mois</strong> de tranquillité ? <br/> Nous composons ensemble votre pack sur mesure.
            </p>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left mb-10">
               <p className="text-white font-bold mb-4 flex items-center gap-2">
                 <FileText className="size-5" /> Informations requises pour le devis :
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <ArrowRight className="size-4 text-white" /> Immatriculation du véhicule
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="size-4 text-white" /> Kilométrage actuel
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="size-4 text-white" /> Durée souhaitée (6,12 ou 24 mois)
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="size-4 text-white" /> Options choisies
                  </div>
               </div>
            </div>

            <a href="mailto:m3.automobil@gmail.com?subject=Demande de devis extension garantie">
              <Button className="w-full md:w-auto bg-white text-black hover:bg-white/90 py-8 px-12 text-xl font-black uppercase tracking-tighter rounded-2xl transition-all shadow-xl">
                Demander mon devis par email
              </Button>
            </a>
          </Card>
        </section>

        {/* Footer Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-20">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 flex flex-col items-center text-center group hover:bg-white/10 transition-all">
            <Phone className="size-8 text-white mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-xs opacity-100">Discutons de vive voix</h4>
            <a href="tel:0783269802" className="text-2xl font-black text-white hover:underline uppercase tracking-tighter">07 83 26 98 02</a>
          </div>
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 flex flex-col items-center text-center group hover:bg-white/10 transition-all">
            <Mail className="size-8 text-white mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-xs opacity-100">Par Email</h4>
            <a href="mailto:m3.automobil@gmail.com" className="text-lg font-medium text-white/70 hover:text-white break-all text-white">m3.automobil@gmail.com</a>
          </div>
        </div>

      </div>
    </div>
  );
}