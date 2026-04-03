import { User, Award, Heart, Shield, MapPin, Phone, Mail, Calendar, Wrench, CheckCircle2, Target, Users, Search, Lock, Clock, Star, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router';
import PremiumBackground from '../components/PremiumBackground';
import SEO from '../components/SEO';

export default function QuiSommesNous() {
  const valeurs = [
    {
      icon: Shield,
      title: "Sécurité avant tout",
      description: "Grâce à mon expertise en cybersécurité, je détecte les arnaques et les véhicules aux historiques douteux avant qu'ils n'atteignent nos clients."
    },
    {
      icon: Search,
      title: "Investigation complète",
      description: "Chaque véhicule est analysé comme une enquête : historique, kilométrage, état mécanique. Rien n'échappe à notre vigilance."
    },
    {
      icon: Award,
      title: "Exigence technique",
      description: "Passionné de mécanique depuis toujours, nous connaissons les moteurs à privilégier et ceux à éviter absolument."
    },
    {
      icon: Heart,
      title: "Relation humaine",
      description: "Un service personnalisé basé sur la confiance. Notre équipe reste accessible, même après votre achat."
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
      description: "On discute de votre projet, vos besoins, votre budget. Comme une analyse de sécurité, on évalue tous les risques et vos critères."
    },
    {
      number: "02",
      title: "L'investigation",
      description: "Nous recherchons votre véhicule sur tout le marché français et vérifions chaque historique comme une enquête numérique."
    },
    {
      number: "03",
      title: "La vérification",
      description: "Contrôle mécanique complet par nos partenaires, vérification du kilométrage, analyse des pièces. La technique avant l'achat."
    },
    {
      number: "04",
      title: "La livraison",
      description: "Véhicule préparé, nettoyé, avec tous les documents. Et surtout, un suivi après-vente digne d'une structure professionnelle."
    }
  ];

  const team = [
    {
      role: "Fondateur & Expert",
      description: "Ingénieur en cybersécurité, passionné d'automobile",
      image: "/photo-profil.jpg"
    },
    {
      role: "Mécanicien Certifié",
      description: "Expert technique, contrôle et préparation des véhicules",
      image: null
    },
    {
      role: "Carrossier Partenaire",
      description: "Vérification état carrosserie et réparations",
      image: null
    }
  ];

  const stats = [
    { number: "2025", label: "Année de création", icon: Calendar },
    { number: "100%", label: "Véhicules audités", icon: Shield },
    { number: "0", label: "Arnaques tolérées", icon: Lock },
    { number: "∞", label: "Passion automobile", icon: Heart }
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SEO
        title="Qui Sommes-Nous - Notre Histoire"
        description="Découvrez l'histoire de M3 Automobile. Fondée par un ingénieur en cybersécurité passionné d'automobile. Expertise en détection de fraudes et mécanique à L'Isle-Adam."
        keywords="M3 Automobile histoire, qui sommes nous, garage automobile L'Isle-Adam, expert cybersécurité automobile, Mam III Jobb"
      />
      <PremiumBackground />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm mb-6">
              <Users className="size-4" />
              Une équipe jeune, un savoir-faire confirmé
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Qui sommes-nous ?
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              M3 Automobile, c'est l'histoire d'une passion qui devient métier. 
              Une structure jeune mais animée par des expertises solides et complémentaires.
            </p>
          </div>
        </div>
      </section>

      {/* Photo centrale + équipe */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative inline-block">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-white/20 overflow-hidden mx-auto shadow-2xl">
                <img 
                  src="/photo-profil.jpg" 
                  alt="Mam III Jobb - Fondateur M3 Automobile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 rounded-xl px-8 py-4 shadow-xl whitespace-nowrap">
                <p className="font-bold text-lg">Mam III Jobb</p>
                <p className="text-sm text-gray-600">Fondateur de M3 Automobile</p>
              </div>
            </div>
            
            <div className="mt-20">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Et une équipe en pleine expansion
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                M3 Automobile, c'est <strong>Mam III Jobb</strong> à la tête des opérations, accompagné d'un 
                réseau partenaire de professionnels (mécaniciens certifiés, carrossiers experts) non accessible 
                au grand public. Une structure légère mais compétente, en croissance constante 
                pour mieux vous servir partout en Île-de-France.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <stat.icon className="size-8 text-white mx-auto mb-3" />
                  <p className="text-3xl font-bold text-white">{stat.number}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* L'histoire complète */}
      <section className="py-12 md:py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              Notre histoire
            </h2>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                Tout a commencé il y a plusieurs années, bien avant la création officielle de M3 Automobile en 2025. 
                À l'époque, j'étais déjà cet ingénieur en informatique passionné par l'automobile, celui que 
                l'on appelait dans son entourage pour trouver la bonne occasion, éviter l'arnaque, négocier 
                le meilleur prix.
              </p>
              
              <div className="bg-white/5 border-l-4 border-blue-500 p-6 my-8">
                <p className="text-lg italic">
                  "J'ai toujours réussi à obtenir des prix hors marché, à dénicher des perles rares que d'autres 
                  n'avaient pas vues. Ce don pour la recherche et l'analyse, hérité de mon métier de cybersécurité, 
                  appliqué à l'automobile."
                </p>
              </div>

              <p>
                Pendant des années, j'ai exercé cette activité en parallèle de ma carrière dans la cybersécurité 
                – d'abord à Campus Cyber, puis chez Crouzet, et aujourd'hui chez TV5 Monde. Chaque mission de 
                sécurisation de systèmes d'information m'apprenait davantage sur la détection de fraudes, 
                l'analyse de comportements suspects, la recherche de preuves.
              </p>

              <p>
                <strong>Ces compétences, je les ai transférées à l'automobile.</strong> Un kilométrage trafiqué 
                laisse des traces numériques. Un historique falsifié contient des incohérences. Une annonce 
                frauduleuse suit des patterns reconnaissables. Mon œil d'expert en investigation numérique 
                devenait un atout précieux pour détecter les arnaques automobiles.
              </p>

              <p>
                En parallèle, ma passion pour la mécanique ne cessait de croître. J'ai appris à connaître 
                les moteurs fiables et ceux à éviter, les pannes courantes, les points de vigilance sur 
                chaque modèle. Des années d'échanges avec des mécaniciens, de lecture de documentation technique, 
                d'obsession pour la mécanique automobile.
              </p>

              <div className="bg-white/10 rounded-xl p-6 my-8">
                <h3 className="text-xl font-bold text-white mb-4">Pourquoi M3 Automobile en 2025 ?</h3>
                <p>
                  Parce que le marché de l'occasion en France a besoin d'acteurs différents. Parce que les 
                  grandes enseignes vendent du volume, pas de la confiance. Parce que les particuliers méritent 
                  un interlocuteur qui comprend aussi bien les rouages d'un moteur que les mécanismes d'une arnaque en ligne.
                </p>
              </div>

              <p>
                <strong>La structure M3 Automobile est jeune, mais le savoir-faire ne l'est pas.</strong> 
                C'est le fruit de années d'expérience en achat-vente, de formation continue en mécanique, 
                et d'une expertise reconnue en cybersécurité. Quand vous travaillez avec nous, vous ne faites 
                pas appel à un vendeur, mais à un investigateur technique passionné.
              </p>

              <p>
                Aujourd'hui, nous sommes en expansion. À côté de moi, se sont greffés des mécaniciens 
                certifiés avec qui j'ai tissé des liens de confiance, des carrossiers experts pour l'état 
                des carrosseries, et un réseau de partenaires à travers l'Île-de-France. Nous restons une 
                structure à taille humaine, mais une structure professionnelle avec des process rigoureux 
                hérités du monde de l'informatique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre équipe */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Notre équipe</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Une structure légère mais compétente, en croissance constante
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {team.map((member, index) => (
                <Card key={index} className="bg-white/5 border-white/10 text-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center overflow-hidden border-2 border-white/20">
                      {member.image ? (
                        <img src={member.image} alt={member.role} className="w-full h-full object-cover" />
                      ) : (
                        <Users className="size-10 text-gray-500" />
                      )}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{member.role}</h3>
                    <p className="text-gray-400 text-sm">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm">
                <TrendingUp className="size-4" />
                Nous recrutons ! Rejoignez notre équipe en expansion
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
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Mon Parcours Professionnel</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Une double expertise qui fait la différence
              </p>
            </div>

            <div className="space-y-6">
              <Card className="bg-white/5 border-white/10 text-white">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="bg-blue-500/20 p-4 rounded-lg flex-shrink-0">
                      <Lock className="size-6 text-blue-400" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h3 className="font-bold text-lg">Ingénieur Cybersécurité</h3>
                        <span className="text-gray-400 text-sm">2024 - Aujourd'hui</span>
                      </div>
                      <p className="text-blue-400 text-sm mb-2">TV5 Monde - Paris</p>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Expert en détection de fraudes et sécurité des systèmes d'information. 
                        Master en cybersécurité (Sup de Vinci - Bac+5). Cette expertise me permet 
                        de détecter les arnaques automobiles et les historiques falsifiés avec une 
                        rigueur d'investigateur numérique.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 text-white">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="bg-purple-500/20 p-4 rounded-lg flex-shrink-0">
                      <Shield className="size-6 text-purple-400" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h3 className="font-bold text-lg">Stagiaire Cybersécurité</h3>
                        <span className="text-gray-400 text-sm">Mai - Juin 2023</span>
                      </div>
                      <p className="text-purple-400 text-sm mb-2">Campus Cyber - La Défense, Paris</p>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Projet initié par le Président de la République, le Campus Cyber est le 
                        lieu totem de la cybersécurité en France. J'ai œuvré à étudier le processus 
                        du patch management et la gestion de la vulnérabilité au sein de ce campus 
                        qui rassemble DGSE, ANSSI, CNRS et les principaux acteurs du domaine.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 text-white">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="bg-purple-500/20 p-4 rounded-lg flex-shrink-0">
                      <Star className="size-6 text-purple-400" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h3 className="font-bold text-lg">Passionné d'Automobile</h3>
                        <span className="text-gray-400 text-sm">Depuis toujours</span>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Connaissance approfondie des moteurs (les bons et les mauvais), 
                        expérience en achat-vente pour mon entourage depuis plusieurs années, 
                        expertise dans la vérification mécanique et l'analyse des véhicules. 
                        Un savoir-faire qui précède la création de M3 Automobile.
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
                    Chaque véhicule est audité comme un système informatique : rigueur, vérifications, 
                    et rien n'est laissé au hasard."
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/5 rounded-2xl border border-white/10 p-6 md:p-8">
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="text-center">
                      <p className="text-white font-bold mb-1">M3 Automobile</p>
                      <div className="w-20 h-1 bg-white/50 rounded-full"></div>
                    </div>
                    <span className="text-2xl text-gray-500">VS</span>
                    <div className="text-center">
                      <p className="text-gray-400 font-bold mb-1">Vendeurs classiques</p>
                      <div className="w-20 h-1 bg-gray-600 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-white/10">
                      <span className="text-gray-300">Expertise cybersécurité</span>
                      <span className="text-gray-500">Approche commerciale</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/10">
                      <span className="text-gray-300">Détection des fraudes</span>
                      <span className="text-gray-500">Pas de vérification</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/10">
                      <span className="text-gray-300">Conseil personnalisé</span>
                      <span className="text-gray-500">Commission avant tout</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-300">Réseau de pros dédié</span>
                      <span className="text-gray-500">Interlocuteur unique</span>
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
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Notre Méthode de Travail</h2>
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

      {/* Message personnel */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-y border-white/10">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-white/30 overflow-hidden">
            <img src="/photo-profil.jpg" alt="Jobb" className="w-full h-full object-cover" />
          </div>
          <p className="text-xl md:text-2xl text-gray-300 italic leading-relaxed mb-6">
            "C'était Jobb, créateur et fondateur de M3 Automobile. 
            Passionné par l'automobile et la cybersécurité, je mets aujourd'hui mon expertise 
            au service de votre projet automobile."
          </p>
          <p className="text-lg text-white font-semibold">
            Hâte de faire votre connaissance et de vous accompagner dans votre recherche.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-gray-400">
            <span className="text-2xl">👋</span>
            <span>À très vite !</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Prêt à nous confier votre projet ?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Une équipe passionnée et compétente vous attend. 
            Discutons de votre future voiture.
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
