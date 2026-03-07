import { Handshake, CheckCircle2, Euro, Camera, FileText, Phone, Mail, Shield, Key, Lock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Button } from '../components/ui/button';
import PremiumBackground from '../components/PremiumBackground';

export default function DepotVentePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <PremiumBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-10 md:py-16">
        {/* Hero */}
        <div className="text-center mb-12 md:mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-full size-16 md:size-20 flex items-center justify-center mb-4 md:mb-6 mx-auto border border-white/30">
            <Handshake className="size-8 md:size-10 text-white" />
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">Mandat de Vente Sérénité</h1>
          <p className="text-sm md:text-base lg:text-lg text-gray-400 mb-2">Anciennement "Dépôt-Vente Virtuel"</p>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Vendez votre véhicule en toute tranquillité : vous continuez à l'utiliser, nous gérons tout, et vous êtes protégé juridiquement
          </p>
        </div>

        {/* L'argument choc */}
        <div className="mb-20 max-w-5xl mx-auto">
          <Card className="border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl shadow-white/5">
            <CardContent className="pt-8 pb-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-full size-16 flex items-center justify-center flex-shrink-0 border border-white/30">
                  <Shield className="size-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">Notre Garantie : Votre Atout Majeur</h2>
                  <p className="text-xl text-gray-200">
                    <strong>Nous incluons une garantie mécanique de 6 mois</strong> sur votre véhicule lors de la vente.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/10">
                  <p className="text-white font-semibold mb-2">✅ Acheteur rassuré</p>
                  <p className="text-sm text-gray-300">Vente plus rapide et meilleur prix</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/10">
                  <p className="text-white font-semibold mb-2">✅ Vous êtes dégagé</p>
                  <p className="text-sm text-gray-300">Zéro responsabilité après la vente</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/10">
                  <p className="text-white font-semibold mb-2">✅ Protection juridique</p>
                  <p className="text-sm text-gray-300">L'acheteur se retourne vers M3, pas vers vous</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pourquoi nous confier votre véhicule */}
        <section className="mb-20 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Pourquoi choisir le Mandat de Vente Sérénité ?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/[0.15] hover:border-white/30 transition-all">
              <CardHeader className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full size-16 flex items-center justify-center mb-4 mx-auto border border-white/30">
                  <Key className="size-8 text-white" />
                </div>
                <CardTitle className="text-xl text-white">Zéro Immobilisation</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 text-lg">
                  <strong className="text-white">Vous continuez à utiliser votre véhicule quotidiennement</strong> jusqu'à la vente. Pas besoin de vous en séparer ni de chercher une solution de remplacement.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/[0.15] hover:border-white/30 transition-all">
              <CardHeader className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full size-16 flex items-center justify-center mb-4 mx-auto border border-white/30">
                  <Lock className="size-8 text-white" />
                </div>
                <CardTitle className="text-xl text-white">Sécurité de Paiement</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 text-lg">
                  <strong className="text-white">Fini le stress des faux chèques de banque.</strong> Nous sécurisons la transaction, vérifions l'identité et les fonds de l'acheteur.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all">
              <CardHeader className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-full size-16 flex items-center justify-center mb-4 mx-auto border border-white/20">
                  <Camera className="size-8 text-white" />
                </div>
                <CardTitle className="text-xl text-white">Visibilité Maximale</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-400 text-lg">
                  Votre véhicule est mis en avant sur La Centrale, Leboncoin et notre réseau professionnel
                </p>
              </CardContent>
            </Card>

            <Card className="border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all">
              <CardHeader className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-full size-16 flex items-center justify-center mb-4 mx-auto border border-white/20">
                  <FileText className="size-8 text-white" />
                </div>
                <CardTitle className="text-xl text-white">Gestion Administrative</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-400 text-lg">
                  Nous gérons les appels, les visites, les essais et toutes les démarches administratives (carte grise, contrôle technique...)
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Protection professionnelle */}
        <section className="mb-20 bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <Shield className="size-12 text-white mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-3">Protection Professionnelle</h2>
            <p className="text-lg text-gray-400">Vous êtes protégé par notre statut professionnel</p>
          </div>
          
          <Card className="border-2 border-gray-600 bg-gradient-to-br from-gray-800 to-gray-900">
            <CardContent className="pt-8 pb-8">
              <div className="space-y-6">
                <div className="bg-white/10 rounded-lg p-6 border border-gray-600">
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">💼 M3 Automobile est une SASU</h3>
                  <p className="text-gray-300 text-lg mb-4">
                    En tant que <strong className="text-white">professionnel de l'automobile</strong>, nous endossons toute la responsabilité commerciale et juridique de la vente.
                  </p>
                  <div className="bg-gray-700/50 rounded-lg p-4 mt-4">
                    <p className="text-white font-semibold text-xl text-center mb-2">
                      ✅ L'acheteur ne pourra PAS se retourner contre vous
                    </p>
                    <p className="text-gray-300 text-center">
                      Même si le véhicule vous appartient encore pendant le mandat, c'est <strong className="text-white">M3 Automobile qui est l'interlocuteur légal</strong> en cas de problème. Vous êtes totalement déchargé des éventuels litiges après-vente.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="size-6 text-white mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold">Vente professionnelle</p>
                      <p className="text-sm text-gray-400">Facture et garantie au nom de M3 Automobile</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="size-6 text-white mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold">Garantie légale</p>
                      <p className="text-sm text-gray-400">Nous assumons les garanties légales de conformité</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="size-6 text-white mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold">Tranquillité d'esprit</p>
                      <p className="text-sm text-gray-400">Aucun recours possible contre vous après la vente</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="size-6 text-white mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold">Assurance RC Pro</p>
                      <p className="text-sm text-gray-400">Notre assurance professionnelle vous couvre</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Comment ça marche */}
        <section className="mb-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Comment ça marche ?</h2>
          
          <div className="space-y-6">
            <Card className="border-2 border-gray-600 bg-gradient-to-br from-gray-800 to-gray-900">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="bg-white/10 rounded-full size-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Évaluation gratuite</h3>
                    <p className="text-gray-400">
                      Vous nous contactez et nous venons expertiser votre véhicule. Nous établissons ensemble un prix de vente réaliste et attractif basé sur l'état et le marché.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-600 bg-gradient-to-br from-gray-800 to-gray-900">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="bg-white/10 rounded-full size-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Signature du mandat</h3>
                    <p className="text-gray-400">
                      Nous signons un contrat de dépôt-vente transparent : vous restez propriétaire jusqu'à la vente. Aucun frais si le véhicule ne se vend pas.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-600 bg-gradient-to-br from-gray-800 to-gray-900">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="bg-white/10 rounded-full size-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Préparation et diffusion</h3>
                    <p className="text-gray-400">
                      Nous préparons votre véhicule (nettoyage complet), réalisons des photos professionnelles et diffusons l'annonce sur toutes nos plateformes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-600 bg-gradient-to-br from-gray-800 to-gray-900">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="bg-white/10 rounded-full size-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Nous gérons tout</h3>
                    <p className="text-gray-400">
                      Visites, essais, négociations, vérifications des acheteurs... Notre équipe s'occupe de tout. Vous n'avez rien à faire !
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-white/30 bg-gradient-to-br from-gray-700 to-gray-800 shadow-xl">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="bg-white/20 rounded-full size-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Paiement sécurisé</h3>
                    <p className="text-gray-300">
                      Une fois vendu, nous gérons toute la paperasse (carte grise, contrôle technique...). Vous recevez votre paiement rapidement et en toute sécurité.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Nos engagements */}
        <section className="mb-20 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-12 border border-gray-700 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Nos Engagements</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-3">
              <CheckCircle2 className="size-6 text-white mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Transparence totale</h3>
                <p className="text-gray-400">
                  Vous êtes informé régulièrement des visites, des retours et de l'avancement de la vente
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <CheckCircle2 className="size-6 text-white mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Prix juste et réaliste</h3>
                <p className="text-gray-400">
                  Nous vous conseillons le bon prix pour vendre rapidement tout en maximisant votre bénéfice
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <CheckCircle2 className="size-6 text-white mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Présentation professionnelle</h3>
                <p className="text-gray-400">
                  Photos HD, description détaillée, mise en valeur de tous les points forts de votre véhicule
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <CheckCircle2 className="size-6 text-white mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Sécurité garantie</h3>
                <p className="text-gray-400">
                  Vérification des acheteurs, paiement sécurisé, gestion administrative complète
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <CheckCircle2 className="size-6 text-white mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Stock couvert</h3>
                <p className="text-gray-400">
                  Votre véhicule est assuré pendant toute la durée du dépôt-vente
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <CheckCircle2 className="size-6 text-white mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Reprise possible</h3>
                <p className="text-gray-400">
                  Vous pouvez reprendre votre véhicule à tout moment si vous changez d'avis
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tarifs */}
        <section className="mb-20 max-w-4xl mx-auto">
          <Card className="border-2 border-gray-600 bg-gradient-to-br from-gray-800 to-gray-900">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Euro className="size-8 text-white" />
                <div>
                  <CardTitle className="text-2xl text-white">Notre Rémunération</CardTitle>
                  <CardDescription className="text-gray-400">Simple et transparente</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-6 border border-gray-600">
                  <p className="text-gray-300 mb-4">
                    Nous percevons une <strong className="text-white">commission uniquement en cas de vente réussie</strong>. 
                    Le taux est fixé ensemble lors de la signature du mandat et dépend du prix de vente.
                  </p>
                  <p className="text-white font-semibold text-lg">
                    💡 Aucun frais si votre véhicule ne se vend pas
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <p className="text-gray-400 text-sm mb-1">Évaluation</p>
                    <p className="text-white font-bold text-xl">Gratuite</p>
                  </div>
                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <p className="text-gray-400 text-sm mb-1">Photos & Annonces</p>
                    <p className="text-white font-bold text-xl">Incluses</p>
                  </div>
                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <p className="text-gray-400 text-sm mb-1">Gestion complète</p>
                    <p className="text-white font-bold text-xl">Incluse</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-12 border border-gray-600 max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Vous souhaitez vendre votre véhicule ?</h3>
          <p className="text-xl text-gray-300 mb-8">
            Contactez-nous pour une estimation gratuite et sans engagement
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:0783269802">
              <Button className="bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-6 text-lg">
                <Phone className="size-5 mr-2" />
                07 83 26 98 02
              </Button>
            </a>
            <a href="mailto:m3.automobil@gmail.com">
              <Button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold px-8 py-6 text-lg border-2 border-gray-500">
                <Mail className="size-5 mr-2" />
                m3.automobil@gmail.com
              </Button>
            </a>
          </div>
          <p className="text-gray-400 mt-6">
            📍 3 rue de l'Abbé Breuil, L'Isle-Adam 95290
          </p>
        </div>
      </div>
    </div>
  );
}