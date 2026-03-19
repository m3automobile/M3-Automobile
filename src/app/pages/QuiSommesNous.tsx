import { User, Award, Heart, Shield, MapPin, Phone, Mail, Calendar, Wrench, CheckCircle2, Target, Users } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router';
import PremiumBackground from '../components/PremiumBackground';

export default function QuiSommesNous() {
  const valeurs = [
    {
      icon: Heart,
      title: "Passion avant tout",
      description: "L'automobile n'est pas juste un métier, c'est une passion que je transmets dans chaque conseil."
    },
    {
      icon: Shield,
      title: "Transparence totale",
      description: "Pas de surprises, pas de frais cachés. Chaque véhicule est présenté avec son historique complet."
    },
    {
      icon: Award,
      title: "Exigence mécanique",
      description: "Tous les véhicules sont contrôlés et préparés avant livraison. La qualité avant la quantité."
    },
    {
      icon: User,
      title: "Relation humaine",
      description: "Pas de vendeur pressé ici. Je prends le temps d'écouter vos besoins et de vous conseiller."
    }
  ];

  const differences = [
    "Pas de showroom coûteux = prix plus justes",
    "Pas de commissionnaires = conseil impartial",
    "Pas de stock imposé = recherche personnalisée",
    "Pas de démarches administratives = service clé en main"
  ];

  const etapes = [
    {
      number: "01",
      title: "L'écoute",
      description: "On prend le temps de discuter de votre projet, vos besoins réels, votre budget, vos contraintes."
    },
    {
      number: "02",
      title: "La recherche",
      description: "Je prospecte le marché pour trouver le véhicule qui correspond parfaitement à vos critères."
    },
    {
      number: "03",
      title: "Le contrôle",
      description: "Vérification mécanique complète, historique, carrosserie. Rien n'est laissé au hasard."
    },
    {
      number: "04",
      title: "La livraison",
      description: "Véhicule préparé, nettoyé, avec tous les documents. Et surtout, un suivi après-vente."
    }
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <PremiumBackground />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Qui se cache derrière M3 Automobile ?
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Un passionné, un professionnel, et surtout quelqu'un qui croit que l'achat d'une voiture 
              doit rester un moment de plaisir, pas une épreuve de stress.
            </p>
          </div>
        </div>
      </section>

      {/* Présentation */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Photo placeholder */}
              <div className="order-2 md:order-1">
                <div className="relative">
                  <div className="aspect-[4/5] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden">
                    {/* Remplacer par ta photo */}
                    <div className="text-center p-8">
                      <User className="size-20 text-gray-600 mx-auto mb-4" />
                      <p className="text-gray-500 text-sm">Votre photo ici</p>
                      <p className="text-gray-600 text-xs mt-2">Format recommandé : portrait 4:5</p>
                    </div>
                  </div>
                  {/* Badge expérience */}
                  <div className="absolute -bottom-4 -right-4 bg-white text-gray-900 rounded-xl p-4 shadow-xl">
                    <div className="text-center">
                      <p className="text-3xl font-bold">2025</p>
                      <p className="text-xs text-gray-600">Création</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Texte présentation */}
              <div className="order-1 md:order-2">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  L'histoire de M3 Automobile
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    M3 Automobile est né d'une passion simple : celle de l'automobile et du contact humain. 
                    Après des années à observer le marché de l'occasion, j'ai constaté un manque cruel : 
                    celui d'un interlocuteur de confiance, accessible, qui prend le temps d'écouter avant de vendre.
                  </p>
                  <p>
                    Contrairement aux grandes enseignes qui traitent des volumes industriels, M3 Automobile 
                    fonctionne à l'échelle humaine. Chaque client est un projet, chaque véhicule une histoire. 
                    Je ne vends pas des voitures, j'accompagne des personnes dans un moment important de leur vie.
                  </p>
                  <p>
                    Basé à L'Isle-Adam, je suis présent sur tout l'Île-de-France et au-delà. Mon approche ? 
                    La transparence totale : pas de frais cachés, pas de pression commerciale, juste des conseils 
                    honnêtes et un service qui ne s'arrête pas à la signature du contrat.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link to="/contact">
                    <Button className="bg-white hover:bg-gray-100 text-gray-900 font-semibold">
                      Me contacter
                    </Button>
                  </Link>
                  <a href="tel:0783269802">
                    <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                      <Phone className="size-4 mr-2" />
                      07 83 26 98 02
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-12 md:py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Nos Valeurs</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Ce qui guide chacune de nos actions et fait la différence dans notre relation avec nos clients
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {valeurs.map((valeur, index) => (
                <Card key={index} className="bg-white/5 border-white/10 text-white h-full hover:bg-white/10 transition-colors">
                  <CardContent className="p-6">
                    <valeur.icon className="size-10 text-white mb-4" />
                    <h3 className="font-bold text-lg mb-2">{valeur.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{valeur.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir vs grandes enseignes */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Pourquoi choisir M3 Automobile plutôt qu'une grande enseigne ?
                </h2>
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
                    "Chez M3 Automobile, vous n'êtes pas un numéro de dossier. Vous avez mon téléphone, 
                    vous pouvez m'appeler même après l'achat. C'est cette relation de confiance que je construis."
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
                        <p className="text-gray-400">Relation humaine</p>
                        <p className="text-gray-400">Conseil personnalisé</p>
                        <p className="text-gray-400">Prix justes</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <p className="text-gray-300 font-semibold mb-1">Grandes enseignes</p>
                        <p className="text-gray-500">Processus standardisé</p>
                        <p className="text-gray-500">Vendeurs commissionnés</p>
                        <p className="text-gray-500">Frais cachés</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre méthode de travail */}
      <section className="py-12 md:py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Notre Méthode de Travail</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Une approche structurée en 4 étapes pour vous garantir la meilleure expérience
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {etapes.map((etape, index) => (
                <div key={index} className="relative">
                  <Card className="bg-white/5 border-white/10 text-white h-full hover:bg-white/10 transition-colors">
                    <CardContent className="p-6">
                      <div className="text-4xl font-bold text-white/20 mb-2">{etape.number}</div>
                      <h3 className="font-bold text-xl mb-3">{etape.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{etape.description}</p>
                    </CardContent>
                  </Card>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <div className="text-white/20 text-2xl">→</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Convaincu ? Parlons de votre projet
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Que vous cherchiez une voiture en stock ou un modèle spécifique, 
            je suis là pour vous accompagner dans votre projet.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-3">
                Me contacter
              </Button>
            </Link>
            <a href="tel:0783269802">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3">
                <Phone className="size-4 mr-2" />
                07 83 26 98 02
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
