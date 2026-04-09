import { Search, CheckCircle2, Phone, Mail, Clock, ArrowRight, Car, Sparkles, AlertTriangle, CalendarDays } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import PremiumBackground from '../components/PremiumBackground';
import SEO from '../components/SEO';
import { useState } from 'react';
import { projectId, publicAnonKey } from '/utils/supabase/info'

export default function RecherchePersonnalisee() {
  const [formData, setFormData] = useState({
    marque: '',
    modele: '',
    motorisation: '',
    anneeMin: '',
    kilometrageMax: '',
    budgetMax: '',
    criteres: '',
    dateDebut: '',
    nom: '',
    telephone: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const today = new Date().toISOString().split('T')[0];
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Les champs obligatoires sont déjà gérés par l'attribut HTML 'required'
    // On envoie directement les données au serveur
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-cc861502/recherche-personnalisee`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Votre demande a été envoyée avec succès ! Nous vous recontacterons sous 24h.'
        });
        setFormData({
          marque: '', modele: '', motorisation: '', anneeMin: '', kilometrageMax: '', budgetMax: '',
          criteres: '', dateDebut: '', nom: '', telephone: '', email: ''
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Une erreur est survenue. Veuillez réessayer.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Impossible d\'envoyer votre demande. Vérifiez votre connexion.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <PremiumBackground />
      
      <SEO
        title="Recherche Personnalisée de Véhicules"
        description="Confiez-nous la recherche de votre véhicule idéal. Investigation complète du marché, vérification anti-fraude et contrôle mécanique expert à L'Isle-Adam (95)."
        keywords="recherche voiture personnalisée, trouver voiture occasion, chasseur automobile, recherche véhicule sur mesure, M3 Automobile recherche"
      />
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-24">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center justify-center p-3 mb-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl animate-pulse">
            <Search className="size-8 md:size-12 text-white" />
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Recherche Sur Mesure
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Votre prochain véhicule est peut-être déjà chez un confrère ou dans notre réseau privé. <br className="hidden md:block" /> Confiez-nous la mission de le trouver.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-7xl mx-auto mb-20">
          {/* Formulaire stylisé */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-transparent blur-xl opacity-50 rounded-3xl"></div>
            <Card className="relative border border-white/20 bg-black/40 backdrop-blur-2xl rounded-3xl overflow-hidden shadow-2xl">
              <CardHeader className="bg-white/5 border-b border-white/10 p-8">
                <CardTitle className="text-2xl md:text-3xl text-white flex items-center gap-3">
                  <Car className="size-6 text-white/70" />
                  Votre Projet Automobile
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-white/90 text-sm font-bold uppercase tracking-widest ml-1">Marque(s) *</label>
                      <Input 
                        placeholder="Ex: Audi, BMW, Mercedes..." 
                        className="h-14 bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-white/40 focus:bg-white/10 transition-all rounded-xl"
                        name="marque"
                        value={formData.marque}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-white/90 text-sm font-bold uppercase tracking-widest ml-1">Modèle(s) *</label>
                      <Input 
                        placeholder="Ex: A3, Série 3, Classe A..." 
                        className="h-14 bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-white/40 focus:bg-white/10 transition-all rounded-xl"
                        name="modele"
                        value={formData.modele}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-white/90 text-sm font-bold uppercase tracking-widest ml-1">Motorisation *</label>
                    <select
                      name="motorisation"
                      value={formData.motorisation}
                      onChange={handleChange}
                      required
                      className="w-full h-14 bg-white/5 border border-white/10 text-white rounded-xl px-4 focus:border-white/40 focus:bg-white/10 transition-all outline-none appearance-none cursor-pointer"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%239CA3AF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '20px' }}
                    >
                      <option value="" disabled className="bg-black text-gray-400">Sélectionnez une motorisation</option>
                      <option value="essence" className="bg-black text-white">Essence</option>
                      <option value="diesel" className="bg-black text-white">Diesel</option>
                      <option value="essence-diesel" className="bg-black text-white">Essence ou Diesel</option>
                      <option value="hybride" className="bg-black text-white">Hybride</option>
                      <option value="electrique" className="bg-black text-white">Électrique</option>
                      <option value="gpl" className="bg-black text-white">GPL</option>
                      <option value="peu-importe" className="bg-black text-white">Peu importe</option>
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-white/90 text-sm font-bold uppercase tracking-widest ml-1 text-xs">Année minimum</label>
                      <Input 
                        type="number" placeholder="2020" 
                        className="h-12 bg-white/5 border-white/10 text-white focus:border-white/40 rounded-xl"
                        name="anneeMin" value={formData.anneeMin} onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-white/90 text-sm font-bold uppercase tracking-widest ml-1 text-xs">KM Maximum</label>
                      <Input 
                        type="number" placeholder="80 000" 
                        className="h-12 bg-white/5 border-white/10 text-white focus:border-white/40 rounded-xl"
                        name="kilometrageMax" value={formData.kilometrageMax} onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-white/90 text-sm font-bold uppercase tracking-widest ml-1 text-xs">Budget Maximum (€)</label>
                    <Input 
                      type="number" placeholder="30 000" 
                      className="h-12 bg-white/5 border-white/10 text-white focus:border-white/40 rounded-xl"
                      name="budgetMax" value={formData.budgetMax} onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-white/90 text-sm font-bold uppercase tracking-widest ml-1 text-xs">Options & Critères</label>
                    <Textarea 
                      placeholder="Toit ouvrant, cuir, attelage, boîte auto..." 
                      className="bg-white/5 border-white/10 text-white min-h-[120px] focus:border-white/40 rounded-xl resize-none p-4"
                      name="criteres" value={formData.criteres} onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-white/90 text-sm font-bold uppercase tracking-widest ml-1 text-xs flex items-center gap-2">
                      <CalendarDays className="size-4" /> Date souhaitée de début de recherche *
                    </label>
                    <input
                      type="date"
                      name="dateDebut"
                      value={formData.dateDebut}
                      onChange={handleChange}
                      min={today}
                      required
                      className="w-full h-12 bg-white/5 border border-white/10 text-white rounded-xl px-4 focus:border-white/40 focus:bg-white/10 transition-all outline-none cursor-pointer [color-scheme:dark]"
                    />
                  </div>

                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10 space-y-4">
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                      <Sparkles className="size-4" /> Vos Coordonnées
                    </h4>
                    <Input
                      placeholder="Nom Complet *"
                      className="bg-transparent border-white/10 text-white focus:border-white/40 rounded-lg"
                      name="nom" value={formData.nom} onChange={handleChange} required
                    />
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        type="tel" placeholder="Téléphone *"
                        pattern="^(?:(?:\+33|0033|0)\s*[1-9])(?:[\s.-]*\d{2}){4}$"
                        title="Numéro de téléphone français (ex: 06 12 34 56 78)"
                        className="bg-transparent border-white/10 text-white focus:border-white/40 rounded-lg"
                        name="telephone" value={formData.telephone} onChange={handleChange} required
                      />
                      <Input
                        type="email" placeholder="Email *"
                        className="bg-transparent border-white/10 text-white focus:border-white/40 rounded-lg"
                        name="email" value={formData.email} onChange={handleChange} required
                      />
                    </div>
                  </div>

                  <div className="bg-amber-500/10 rounded-2xl p-5 border border-amber-500/30">
                    <div className="flex gap-3">
                      <AlertTriangle className="size-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <p className="text-amber-200/90 text-sm leading-relaxed">
                        En validant ce formulaire, vous vous engagez à disposer du budget indiqué au moment de la livraison du véhicule.
                        Aucun paiement en plusieurs fois n'est proposé. Pour plus de détails, voir les conditions sur le mandat de recherche que vous recevrez par mail.
                      </p>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-white text-black hover:bg-white/90 py-8 text-xl font-black uppercase tracking-tighter rounded-2xl transition-all transform hover:scale-[1.02] active:scale-95 disabled:opacity-50 shadow-xl"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Lancer la recherche →'}
                  </Button>

                  {submitStatus && (
                    <div className={`p-4 rounded-xl text-center font-bold animate-in fade-in slide-in-from-top-4 ${submitStatus.type === 'success' ? 'bg-green-500/20 text-green-400 border border-green-500/50' : 'bg-red-500/20 text-red-400 border border-red-500/50'}`}>
                      {submitStatus.message}
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Steps Section */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 tracking-tight">Le processus <br/><span className="text-white/40 italic font-serif">M3 Automobile</span></h2>
              
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

            {/* Pourquoi nous faire confiance ? */}
            <Card className="border border-white/20 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-2xl rounded-3xl p-4 overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-2">
                  <Badge className="bg-white text-black">TOP SERVICE</Badge> Pourquoi nous ?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Gain de temps : Zéro visite inutile",
                  "Accès au réseau pro : Véhicules non accessibles au grand public",
                  "Expertise technique : Pas de mauvaises surprises",
                  "Négociation : Nous obtenons le meilleur prix",
                  "Tranquillité : Garantie 3 mois avec extension possible sur organe et durée"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-200">
                    <CheckCircle2 className="size-5 text-white flex-shrink-0" />
                    <span className="text-lg font-medium">{benefit}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact direct - FOOTER CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
           <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 flex flex-col items-center text-center group hover:bg-white/10 transition-all">
              <Phone className="size-8 text-white mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-white font-bold mb-2">Discutons de vive voix</h4>
              <a href="tel:0783269802" className="text-2xl font-black text-white hover:underline uppercase tracking-tighter">07 83 26 98 02</a>
           </div>
           <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 flex flex-col items-center text-center group hover:bg-white/10 transition-all">
              <Mail className="size-8 text-white mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-white font-bold mb-2">Par Email</h4>
              <a href="mailto:m3.automobil@gmail.com" className="text-lg font-medium text-white/70 hover:text-white break-all">m3.automobil@gmail.com</a>
           </div>
        </div>
      </div>
    </div>
  );
}