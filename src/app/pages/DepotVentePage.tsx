import { Handshake, CheckCircle2, Euro, Camera, FileText, Phone, Mail, Shield, Key, Lock, Sparkles, ArrowRight, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import PremiumBackground from '../components/PremiumBackground';

export default function DepotVentePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <PremiumBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-24">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center justify-center p-3 mb-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <Handshake className="size-8 md:size-12 text-white" />
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Mandat de Vente <span className="text-white/70 italic font-light font-serif">Sérénité</span>
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed px-4">
            Vendez votre véhicule sans contrainte. Vous continuez à l'utiliser, <br className="hidden md:block" /> 
            <span className="text-white font-bold underline decoration-white/30">nous gérons l'intégralité du processus de vente.</span>
          </p>
        </div>

        {/* L'argument choc : LA GARANTIE */}
        <div className="mb-20 md:mb-32 max-w-6xl mx-auto text-white">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-transparent blur-xl opacity-30 rounded-3xl"></div>
            <Card className="relative border border-white/20 bg-black/40 backdrop-blur-2xl rounded-3xl overflow-hidden shadow-2xl">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
                  <div className="bg-white text-black p-6 rounded-2xl shadow-2xl flex-shrink-0 animate-pulse">
                    <Shield className="size-12 md:size-16" />
                  </div>
                  <div className="text-center md:text-left">
                    <h2 className="text-2xl md:text-4xl font-black text-white mb-4 uppercase tracking-tighter italic">
                      Notre Garantie : Votre Atout Majeur
                    </h2>
                    <p className="text-lg md:text-2xl text-gray-300 leading-relaxed">
                      <strong className="text-white">Nous incluons une garantie mécanique de 6 mois</strong> lors de la transaction. L'acheteur est rassuré, vous vendez plus vite et au meilleur prix.
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 font-white">
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors group">
                    <p className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                       <CheckCircle2 className="size-5 text-white" /> Acheteur rassuré
                    </p>
                    <p className="text-sm text-gray-400">Vente plus rapide car sécurisée professionnellement.</p>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                    <p className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                       <CheckCircle2 className="size-5 text-white" /> Zéro responsabilité
                    </p>
                    <p className="text-sm text-gray-400">Vous êtes totalement dégagé de la garantie après la vente.</p>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                    <p className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                       <CheckCircle2 className="size-5 text-white" /> Protection Juridique
                    </p>
                    <p className="text-sm text-gray-400">L'acheteur se retourne vers M3 Automobile, pas vers vous.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Pourquoi choisir ce mandat ? */}
        <section className="mb-20 md:mb-32 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Pourquoi nous <span className="text-white/40 italic font-serif">faire confiance ?</span></h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Key, title: "Zéro Immobilisation", desc: "Vous gardez vos clés et utilisez votre voiture jusqu'au jour de la vente." },
              { icon: Lock, title: "Paiement Sécurisé", desc: "Vérification des fonds et de l'identité des acheteurs. Zéro risque de fraude." },
              { icon: Camera, title: "Visibilité Luxe", desc: "Photos HD professionnelles et présence sur La Centrale & Leboncoin." },
              { icon: FileText, title: "Gestion Totale", desc: "Appels, visites, essais et paperasse : nous gérons 100% du travail." }
            ].map((item, i) => (
              <Card key={i} className="border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl p-6 hover:border-white/30 transition-all group overflow-hidden">
                <div className="bg-white/10 rounded-2xl size-14 flex items-center justify-center mb-6 border border-white/20 group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all">
                  <item.icon className="size-7 text-white group-hover:text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-tighter">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* SASU Protection Section - LE BOUCLIER JURIDIQUE */}
        <section className="mb-20 md:mb-32 max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-16 border border-white/10 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-10 opacity-5 rotate-12">
               <Shield className="size-64 text-white" />
             </div>
             <div className="relative z-10 text-center">
                <div className="inline-block bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6 text-white text-xs font-bold uppercase tracking-widest">
                   Protection du Vendeur
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter italic">M3 Automobile : Votre Bouclier Juridique</h2>
                <div className="space-y-6 text-lg md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-10 text-white">
                  <p>
                    Vendre à un particulier est risqué. En nous confiant votre véhicule, <span className="text-white font-bold underline decoration-white/30">vous créez une barrière légale entre vous et l'acheteur.</span>
                  </p>
                  <p className="bg-white/10 p-6 rounded-2xl border-l-4 border-white italic">
                    "Si l'acheteur rencontre le moindre problème après la vente, <span className="text-white font-bold">c'est vers nous qu'il se retourne, jamais vers vous.</span> M3 Automobile assume l'intégralité de la responsabilité commerciale et juridique."
                  </p>
                  <p className="text-base md:text-xl opacity-80">
                    Vous touchez votre argent, nous gérons le reste. Aucun recours personnel n'est possible contre vous.
                  </p>
                </div>
                <div className="inline-flex items-center gap-3 text-white font-bold text-lg bg-white/10 px-8 py-4 rounded-2xl border border-white/20">
                   <Lock className="size-5 text-white" /> Transaction 100% Sécurisée & Déchargée
                </div>
             </div>
          </div>
        </section>

        {/* Comment ça marche stylisé */}
        <section className="mb-20 md:mb-32 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-16 tracking-tight">Le processus <span className="text-white/40 italic font-serif">M3</span></h2>
          
          <div className="space-y-4">
            {[
              { num: "1", title: "Estimation gratuite", desc: "Expertise physique de votre véhicule et fixation d'un prix de vente cohérent." },
              { num: "2", title: "Mandat de vente", desc: "Contrat 100% transparent. Zéro frais si le véhicule n'est pas vendu." },
              { num: "3", title: "Mise en valeur", desc: "Préparation esthétique et shooting photo professionnel pour attirer l'acheteur." },
              { num: "4", title: "Promotion active", desc: "Diffusion sur nos réseaux et gestion des contacts 7j/7." },
              { num: "5", title: "Vente & Paiement", desc: "Sécurisation de la transaction et virement rapide de vos fonds." }
            ].map((step, idx) => (
              <div key={idx} className="group flex gap-6 p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/30 transition-all hover:bg-white/10">
                <div className="bg-white/10 rounded-2xl size-14 flex items-center justify-center flex-shrink-0 border border-white/20 group-hover:bg-white group-hover:text-black transition-all">
                  <span className="text-xl font-black text-white group-hover:text-black">{step.num}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tighter">{step.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tarifs Clear Card */}
        <section className="mb-20 md:mb-32 max-w-4xl mx-auto text-white">
          <Card className="border border-white/20 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-2xl rounded-3xl p-8 md:p-12 text-center shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-tighter italic">Transparence Tarifaire</h3>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Nous nous rémunérons via une <strong className="text-white">commission fixe</strong> déjà intégrée au prix de vente final. <br/> 
              <span className="text-white/80 font-bold bg-white/10 px-4 py-1 rounded-lg mt-4 inline-block">Pas de vente = Pas de frais.</span>
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="border border-white/10 rounded-2xl p-6 bg-white/5">
                <Euro className="size-6 text-white mx-auto mb-3" />
                <p className="text-white font-bold">Estimation</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Gratuite</p>
              </div>
              <div className="border border-white/10 rounded-2xl p-6 bg-white/5">
                <Camera className="size-6 text-white mx-auto mb-3" />
                <p className="text-white font-bold">Shooting</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Inclus</p>
              </div>
              <div className="border border-white/10 rounded-2xl p-6 bg-white/5">
                <FileText className="size-6 text-white mx-auto mb-3" />
                <p className="text-white font-bold">Dossier Admin</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Inclus</p>
              </div>
            </div>
          </Card>
        </section>

        {/* CTA Section - Footer Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 flex flex-col items-center text-center group hover:bg-white/10 transition-all shadow-xl">
            <Phone className="size-8 text-white mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-xs opacity-100">Des questions</h4>
            <a href="tel:0783269802" className="text-2xl font-black text-white hover:underline uppercase tracking-tighter">07 83 26 98 02</a>
          </div>
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 flex flex-col items-center text-center group hover:bg-white/10 transition-all shadow-xl">
            <Mail className="size-8 text-white mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-xs opacity-100">Par Email</h4>
            <a href="mailto:m3.automobil@gmail.com" className="text-lg font-medium text-white/70 hover:text-white break-all text-white">m3.automobil@gmail.com</a>
          </div>
        </div>

      </div>
    </div>
  );
}
