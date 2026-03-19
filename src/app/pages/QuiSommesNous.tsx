import { User, Award, Heart, Shield, MapPin, Phone, Mail, Calendar, Wrench, CheckCircle2, Target, Users, Search, Lock } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router';
import PremiumBackground from '../components/PremiumBackground';

export default function QuiSommesNous() {
  const valeurs = [
    {
      icon: Shield,
      title: "Sécurité avant tout",
      description: "Grâce à mon expertise en cybersécurité, je détecte les arnaques et les véhicules aux historiques douteux."
    },
    {
      icon: Search,
      title: "Investigation complète",
      description: "Chaque véhicule est analysé comme une enquête : historique, kilométrage, état mécanique. Rien n'échappe."
    },
    {
      icon: Award,
      title: "Expertise technique",
      description: "Passionné de mécanique depuis toujours, je connais les moteurs à privilégier et ceux à éviter."
    },
    {
      icon: Heart,
      title: "Relation humaine",
      description: "Un service personnalisé basé sur la confiance. Vous avez mon téléphone, même après l'achat."
    }
  ];

  const differences = [
    "Expertise cybersécurité = détection des fraudes et arnaques",
    "Pas de showroom coûteux = prix plus justes",
    "Analyse technique approfondie = aucun mauvais choix",
    "Pas de démarches administratives = service clé en main"
  ];

  const etapes = [
    {
      number: "01",
      title: "L'audit",
      description: "On discute de votre projet, vos besoins, votre budget. Comme une analyse de sécurité, on évalue tous les risques."
    },
    {
      number: "02",
      title: "L'investigation",
      description: "Je recherche votre véhicule sur tout le marché français et vérifie chaque historique comme une enquête numérique."
    },
    {
      number: "03",
      title: "La vérification",
      description: "Contrôle mécanique complet, vérification du kilométrage, analyse des pièces. La technique avant l'achat."
    },
    {
      number: "04",
      title: "La livraison",
      description: "Véhicule préparé, nettoyé, avec tous les documents. Et un suivi après-vente digne d'un ingénieur."
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
              Un ingénieur en cybersécurité passionné par l'automobile, qui a décidé de mettre son expertise 
              au service de la confiance dans l'achat de véhicules d'occasion.
            </p>
          </div>
        </div>
      </section>

      {/* Présentation */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Photo */}
              <div className="order-2 md:order-1">
                <div className="relative">
                  <div className="aspect-[4/5] rounded-2xl border border-white/10 overflow-hidden">
                    <img 
                      src="/photo-profil.jpg" 
                      alt="Fondateur M3 Automobile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Badge */}
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
                  De l'informatique à l'automobile : une histoire de passion
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Ingénieur en cybersécurité de formation, j'ai passé des années à traquer les fraudes numériques 
                    et à sécuriser des systèmes d'information complexes. Mais au-delà des écrans, une autre passion 
                    m'anime depuis toujours : <strong>l'automobile</strong>.
                  </p>
                  <p>
                    Tout a commencé naturellement. Mon entourage me sollicitait pour trouver des véhicules 
                    d'occasion, vérifier des annonces, éviter les arnaques. Grâce à mon œil d'expert en 
                    investigation numérique et mes connaissances mécaniques, j'ai réussi à dénicher des perles 
                    rares à des prix défiant toute concurrence.
                  </p>
                  <p>
                    <strong>La cybersécurité m'a appris à détecter les mensonges</strong> : un kilométrage trafiqué 
                    laisse des traces, un historique falsifié contient des incohérences. Cette expertise, 
                    combinée à ma passion pour la mécanique, fait de M3 Automobile une agence unique où 
                    <strong> la rigueur technique rencontre le conseil personnalisé</strong>.
                  </p>
                  <p>
                    Aujourd'hui, nous sommes une petite équipe (moi-même et des partenaires mécaniciens de confiance) 
                    basée à L'Isle-Adam, opérant sur toute l'Île-de-France. Notre mission ? Vous accompagner dans 
                    l'achat ou la vente de votre véhicule avec la même rigueur que j'applique dans mes missions 
                    de cybersécurité.
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

      {/* Mon parcours */}
      <section className="py-12 md:py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Mon Parcours</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Une double expertise qui fait la différence dans chaque transaction
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white/5 border-white/10 text-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500/20 p-3 rounded-lg">
                      <Lock className="size-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Ingénieur Cybersécurité</h3>
                      <p className="text-gray-400 text-sm mb-2">TV5 Monde - Depuis 2024</p>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Expert en détection de fraudes et sécurité des systèmes d'information. 
                        Master en cybersécurité (Sup de Vinci). Cette expertise me permet de détecter 
                        les arnaques automobiles et les historiques falsifiés.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 text-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-lg">
                      <Wrench className="size-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Passionné d'Automobile</h3>
                      <p className="text-gray-400 text-sm mb-2">Plusieurs années d'expérience</p>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Connaissance approfondie des moteurs (les bons et les mauvais), 
                        expérience en achat-vente pour mon entourage, expertise dans la 
                        vérification mécanique et l'analyse des véhicules.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Nos Valeurs</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Ce qui guide chacune de nos actions
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

      {/* Pourquoi nous choisir */}
      <section className="py-12 md:py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Pourquoi choisir M3 Automobile ?
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
                    "Mon expertise en cybersécurité m'apprend à ne jamais faire confiance aux apparences. 
                    Chaque véhicule est audité comme un système informatique : preuves, vérifications, 
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
                        <p className="text-gray-400">Expertise technique</p>
                        <p className="text-gray-400">Détection des fraudes</p>
                        <p className="text-gray-400">Conseil personnalisé</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <p className="text-gray-300 font-semibold mb-1">Vendeurs classiques</p>
                        <p className="text-gray-500">Approche commerciale</p>
                        <p className="text-gray-500">Pas d'analyse technique</p>
                        <p className="text-gray-500">Commission avant tout</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre méthode */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Notre Méthode</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Un processus rigoureux inspiré des méthodes d'investigation en cybersécurité
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

      {/* CTA */}
      <section className="py-12 md:py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Prêt à acheter en toute sécurité ?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Faites appel à un expert qui traite votre achat automobile avec la même 
            rigueur qu'une mission de cybersécurité.
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
