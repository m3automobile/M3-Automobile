import { Search, CheckCircle2, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import PremiumBackground from '../components/PremiumBackground';

export default function RecherchePersonnalisee() {
  return (
    <div className="relative min-h-screen">
      <PremiumBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-full size-20 flex items-center justify-center mb-6 mx-auto border border-white/30">
            <Search className="size-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">Recherche Personnalisée</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Vous cherchez un véhicule précis ? Nous le trouvons pour vous sur l'ensemble du marché français
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {/* Formulaire */}
          <div>
            <Card className="border border-white/10 bg-white/5 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Décrivez votre recherche</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div>
                    <label className="text-white font-semibold block mb-2">Marque & Modèle *</label>
                    <Input 
                      placeholder="Ex: Peugeot 3008, BMW Série 3..." 
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 backdrop-blur-sm"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-white font-semibold block mb-2">Année min</label>
                      <Input 
                        type="number" 
                        placeholder="2018" 
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      <label className="text-white font-semibold block mb-2">Kilométrage max</label>
                      <Input 
                        type="number" 
                        placeholder="100 000 km" 
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 backdrop-blur-sm"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-white font-semibold block mb-2">Budget min</label>
                      <Input 
                        type="number" 
                        placeholder="10 000 €" 
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      <label className="text-white font-semibold block mb-2">Budget max</label>
                      <Input 
                        type="number" 
                        placeholder="25 000 €" 
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 backdrop-blur-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-white font-semibold block mb-2">Critères spécifiques</label>
                    <Textarea 
                      placeholder="Ex: Boîte automatique, GPS, attelage, cuir, diesel..." 
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 min-h-[100px] backdrop-blur-sm"
                    />
                  </div>

                  <div className="border-t border-white/10 pt-6">
                    <label className="text-white font-semibold block mb-2">Vos coordonnées</label>
                    <div className="space-y-4">
                      <Input 
                        placeholder="Nom & Prénom *" 
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 backdrop-blur-sm"
                      />
                      <Input 
                        type="tel" 
                        placeholder="Téléphone *" 
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 backdrop-blur-sm"
                      />
                      <Input 
                        type="email" 
                        placeholder="Email *" 
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 backdrop-blur-sm"
                      />
                    </div>
                  </div>

                  <Button className="w-full bg-white hover:bg-gray-100 text-gray-900 font-semibold py-6 text-lg">
                    Envoyer ma demande
                  </Button>

                  <p className="text-sm text-gray-400 text-center">
                    * Champs obligatoires - Nous vous recontactons sous 24h
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Comment ça marche */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Comment ça marche ?</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full size-12 flex items-center justify-center flex-shrink-0 border border-white/20">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Décrivez votre recherche</h3>
                    <p className="text-gray-400">
                      Remplissez le formulaire avec vos critères : marque, modèle, budget, options souhaitées...
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full size-12 flex items-center justify-center flex-shrink-0 border border-white/20">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Nous recherchons pour vous</h3>
                    <p className="text-gray-400">
                      Notre équipe parcourt l'ensemble des plateformes et notre réseau professionnel pour trouver LE véhicule qui correspond
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full size-12 flex items-center justify-center flex-shrink-0 border border-white/20">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Sélection et vérification</h3>
                    <p className="text-gray-400">
                      Nous sélectionnons les meilleures opportunités et vérifions l'historique, l'état mécanique et les documents
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full size-12 flex items-center justify-center flex-shrink-0 border border-white/20">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Vous validez</h3>
                    <p className="text-gray-400">
                      Nous vous présentons notre sélection. Si ça vous convient, nous gérons l'achat et vous livrons le véhicule avec garantie
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Avantages */}
            <Card className="border border-white/10 bg-white/5 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Nos avantages</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="size-5 text-white mt-0.5 flex-shrink-0" />
                    <span><strong className="text-white">Gain de temps</strong> : Nous faisons les recherches à votre place</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="size-5 text-white mt-0.5 flex-shrink-0" />
                    <span><strong className="text-white">Accès au réseau pro</strong> : Véhicules non accessibles au grand public</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="size-5 text-white mt-0.5 flex-shrink-0" />
                    <span><strong className="text-white">Expertise</strong> : Vérification complète avant achat</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="size-5 text-white mt-0.5 flex-shrink-0" />
                    <span><strong className="text-white">Garantie incluse</strong> : 6 mois sur tous nos véhicules</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="size-5 text-white mt-0.5 flex-shrink-0" />
                    <span><strong className="text-white">Service clé en main</strong> : De la recherche à la livraison</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact direct */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10 max-w-4xl mx-auto text-center">
          <Clock className="size-12 text-white mx-auto mb-4" />
          <h3 className="text-3xl font-bold text-white mb-4">Besoin d'un conseil immédiat ?</h3>
          <p className="text-xl text-gray-300 mb-8">
            Appelez-nous directement pour discuter de votre projet
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:0783269802">
              <Button className="bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-6 text-lg">
                <Phone className="size-5 mr-2" />
                07 83 26 98 02
              </Button>
            </a>
            <a href="mailto:m3.automobil@gmail.com">
              <Button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-8 py-6 text-lg border border-white/20">
                <Mail className="size-5 mr-2" />
                m3.automobil@gmail.com
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}