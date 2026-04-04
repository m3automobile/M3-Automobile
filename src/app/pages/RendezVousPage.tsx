import { Calendar, Clock, Phone, Mail, Car, CheckCircle2, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import PremiumBackground from '../components/PremiumBackground';
import SEO from '../components/SEO';
import { useState } from 'react';
import { useVehicules } from '../hooks/useVehicules';
import { projectId, publicAnonKey } from '/utils/supabase/info'

export default function RendezVousPage() {
  const { vehicules } = useVehicules();
  const [formData, setFormData] = useState({
    nomComplet: '',
    telephone: '',
    email: '',
    vehicule: '',
    dateSouhaitee: '',
    creneauHoraire: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  // Get minimum date (tomorrow)
  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

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

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-cc861502/rendez-vous`,
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
          message: 'Votre demande de rendez-vous a été envoyée avec succès ! Nous vous recontacterons sous 24h pour confirmer.'
        });
        setFormData({
          nomComplet: '', telephone: '', email: '', vehicule: '', dateSouhaitee: '', creneauHoraire: '', message: ''
        });
      } else {
        // Fallback to mailto if API fails
        fallbackToMailto();
      }
    } catch (error) {
      // Fallback to mailto on network error
      fallbackToMailto();
    } finally {
      setIsSubmitting(false);
    }
  };

  const fallbackToMailto = () => {
    const mailtoBody = encodeURIComponent(
      `Demande de rendez-vous pour un essai routier\n\n` +
      `Nom complet: ${formData.nomComplet}\n` +
      `Téléphone: ${formData.telephone}\n` +
      `Email: ${formData.email}\n` +
      `Véhicule souhaité: ${formData.vehicule}\n` +
      `Date souhaitée: ${formData.dateSouhaitee}\n` +
      `Créneau horaire: ${formData.creneauHoraire}\n` +
      `Message: ${formData.message}`
    );
    window.location.href = `mailto:m3.automobil@gmail.com?subject=Demande%20de%20rendez-vous%20essai&body=${mailtoBody}`;
    setSubmitStatus({
      type: 'success',
      message: 'Redirection vers votre email en cours. Complétez et envoyez le message.'
    });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <PremiumBackground />

      <SEO
        title="Prendre rendez-vous pour un essai routier"
        description="Prenez rendez-vous facilement pour essayer votre véhicule chez M3 Automobile à L'Isle-Adam (95290). Sélectionnez votre créneau et validez votre réservation."
        keywords="essai routier, rendez-vous automobile, test drive, réservation essai, M3 Automobile rendez-vous, essai voiture L'Isle-Adam"
      />
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-24">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center justify-center p-3 mb-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl animate-pulse">
            <Calendar className="size-8 md:size-12 text-white" />
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Réservez votre essai
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Prenez rendez-vous pour essayer le véhicule de vos rêves. <br className="hidden md:block" /> Notre équipe vous accueillera dans les meilleurs délais.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-7xl mx-auto mb-20">
          {/* Formulaire stylisé */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-transparent blur-xl opacity-50 rounded-3xl"></div>
            <Card className="relative border border-white/20 bg-black/40 backdrop-blur-2xl rounded-3xl overflow-hidden shadow-2xl">
              <CardHeader className="bg-white/5 border-b border-white/10 p-8">
                <CardTitle className="text-2xl md:text-3xl text-white flex items-center gap-3">
                  <Calendar className="size-6 text-white/70" />
                  Votre Rendez-vous
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Coordonnées */}
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10 space-y-4">
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                      <Sparkles className="size-4" /> Vos Coordonnées
                    </h4>
                    <Input
                      placeholder="Nom complet *"
                      className="bg-transparent border-white/10 text-white focus:border-white/40 rounded-lg"
                      name="nomComplet"
                      value={formData.nomComplet}
                      onChange={handleChange}
                      required
                    />
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        type="tel"
                        placeholder="Téléphone *"
                        className="bg-transparent border-white/10 text-white focus:border-white/40 rounded-lg"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        required
                      />
                      <Input
                        type="email"
                        placeholder="Email *"
                        className="bg-transparent border-white/10 text-white focus:border-white/40 rounded-lg"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Véhicule */}
                  <div className="space-y-2">
                    <label className="text-white/90 text-sm font-bold uppercase tracking-widest ml-1">Véhicule souhaité *</label>
                    <select
                      name="vehicule"
                      value={formData.vehicule}
                      onChange={handleChange}
                      required
                      className="w-full h-14 bg-white/5 border border-white/10 text-white rounded-xl px-4 focus:border-white/40 focus:bg-white/10 transition-all outline-none appearance-none cursor-pointer"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%239CA3AF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '20px' }}
                    >
                      <option value="" disabled className="bg-black text-gray-400">Sélectionnez un véhicule</option>
                      {vehicules.map((v) => (
                        <option key={v.id} value={`${v.marque} ${v.modele} - ${v.prix}€`} className="bg-black text-white">
                          {v.marque} {v.modele} - {v.prix.toLocaleString('fr-FR')}€
                        </option>
                      ))}
                      <option value="Autre - Non listé" className="bg-black text-white">Autre véhicule (à préciser)</option>
                    </select>
                  </div>

                  {/* Date et créneau */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-white/90 text-sm font-bold uppercase tracking-widest ml-1">Date souhaitée *</label>
                      <Input
                        type="date"
                        className="h-14 bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-white/40 focus:bg-white/10 transition-all rounded-xl"
                        name="dateSouhaitee"
                        value={formData.dateSouhaitee}
                        onChange={handleChange}
                        min={getTomorrowDate()}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-white/90 text-sm font-bold uppercase tracking-widest ml-1">Créneau horaire *</label>
                      <select
                        name="creneauHoraire"
                        value={formData.creneauHoraire}
                        onChange={handleChange}
                        required
                        className="w-full h-14 bg-white/5 border border-white/10 text-white rounded-xl px-4 focus:border-white/40 focus:bg-white/10 transition-all outline-none appearance-none cursor-pointer"
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%239CA3AF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '20px' }}
                      >
                        <option value="" disabled className="bg-black text-gray-400">Sélectionnez un créneau</option>
                        <option value="Matin (9h-12h)" className="bg-black text-white">Matin (9h-12h)</option>
                        <option value="Après-midi (14h-17h)" className="bg-black text-white">Après-midi (14h-17h)</option>
                        <option value="Fin de journée (17h-19h)" className="bg-black text-white">Fin de journée (17h-19h)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message optionnel */}
                  <div className="space-y-2">
                    <label className="text-white/90 text-sm font-bold uppercase tracking-widest ml-1 text-xs">Message / Précisions</label>
                    <Textarea
                      placeholder="Des questions spécifiques ? Précisions sur l'essai..."
                      className="bg-white/5 border-white/10 text-white min-h-[100px] focus:border-white/40 rounded-xl resize-none p-4"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <Button
                    className="w-full bg-white text-black hover:bg-white/90 py-8 text-xl font-black uppercase tracking-tighter rounded-2xl transition-all transform hover:scale-[1.02] active:scale-95 disabled:opacity-50 shadow-xl"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Réservation en cours...' : 'Réserver mon essai →'}
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

          {/* Infos utiles */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 tracking-tight">Prêt à essayer ?<br/><span className="text-white/40 italic font-serif">M3 Automobile</span></h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full size-12 flex items-center justify-center flex-shrink-0 border border-white/20">
                    <Calendar className="size-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Choisissez votre date</h3>
                    <p className="text-gray-400">
                      Sélectionnez le jour et le créneau horaire qui vous convient le mieux
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full size-12 flex items-center justify-center flex-shrink-0 border border-white/20">
                    <Car className="size-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Nous vous accueillons</h3>
                    <p className="text-gray-400">
                      Notre équipe sera présente pour vous présenter le véhicule et répondre à vos questions
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full size-12 flex items-center justify-center flex-shrink-0 border border-white/20">
                    <Clock className="size-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Essai complet</h3>
                    <p className="text-gray-400">
                      Prenez le temps qu'il faut pour tester le véhicule en condition réelle
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full size-12 flex items-center justify-center flex-shrink-0 border border-white/20">
                    <CheckCircle2 className="size-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Confirmation rapide</h3>
                    <p className="text-gray-400">
                      Nous vous confirmons votre rendez-vous par téléphone ou email sous 24h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Infos de contact */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-4">
              <h3 className="text-lg font-bold text-white">Questions ?</h3>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="size-5 text-white/70 flex-shrink-0" />
                <a href="tel:0783269802" className="hover:text-white transition-colors font-medium">
                  07 83 26 98 02
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="size-5 text-white/70 flex-shrink-0" />
                <a href="mailto:m3.automobil@gmail.com" className="hover:text-white transition-colors font-medium">
                  m3.automobil@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact direct - FOOTER CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 flex flex-col items-center text-center group hover:bg-white/10 transition-all">
            <Phone className="size-8 text-white mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="text-white font-bold mb-2">Appelez-nous</h4>
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
