import { FileText, Shield, Info, Globe, Mail, Phone, Landmark } from 'lucide-react';
import { Card } from '../components/ui/card';
import PremiumBackground from '../components/PremiumBackground';

export default function MentionsLegales() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-white">
      <PremiumBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 mb-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <Shield className="size-8 md:size-12 text-white" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight uppercase text-white">
            Mentions <span className="text-white/70 italic font-light font-serif">Légales</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Conformément aux dispositions de l'article 6 de la Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN).
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Identité de l'entreprise */}
          <Card className="border border-white/10 bg-black/40 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/10 p-3 rounded-xl">
                <Landmark className="size-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold uppercase tracking-tighter text-white">Éditeur du site</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 text-gray-300">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 uppercase font-black mb-1">Dénomination Sociale</p>
                  <p className="font-bold text-white">M3 AUTOMOBILE</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase font-black mb-1">Forme Juridique</p>
                  <p>SASU (Société par actions simplifiée à associé unique)</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase font-black mb-1">Siège Social</p>
                  <p>L'Isle-Adam (95290)</p>
                  <p className="text-xs italic text-gray-500">(3 rue de l'abbé breuil, L'isle Adam 95290)</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 uppercase font-black mb-1">Numéro SIRET</p>
                  <p>100 150 168 00019</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase font-black mb-1">Directeur de la publication</p>
                  <p>M. Jobb Mam III</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase font-black mb-1">Capital Social</p>
                  <p>500 €</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Contact & Hébergement */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border border-white/10 bg-black/40 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/10 p-3 rounded-xl">
                  <Phone className="size-6 text-white" />
                </div>
                <h2 className="text-xl font-bold uppercase tracking-tighter text-white">Nous contacter</h2>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <Phone className="size-4 opacity-50 text-white" />
                  <span>07 83 26 98 02</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="size-4 opacity-50 text-white" />
                  <span className="break-all">m3.automobil@gmail.com</span>
                </li>
              </ul>
            </Card>

            <Card className="border border-white/10 bg-black/40 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/10 p-3 rounded-xl">
                  <Globe className="size-6 text-white" />
                </div>
                <h2 className="text-xl font-bold uppercase tracking-tighter text-white">Hébergement</h2>
              </div>
              <div className="text-gray-300 space-y-2">
                <p className="font-bold text-white uppercase tracking-widest text-sm">Netlify Inc.</p>
                <p className="text-sm">44 Montgomery Street, Suite 300</p>
                <p className="text-sm">San Francisco, California 94104</p>
                <p className="text-sm italic">https://www.netlify.com</p>
              </div>
            </Card>
          </div>

          {/* Propriété intellectuelle */}
          <Card className="border border-white/10 bg-black/40 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/10 p-3 rounded-xl">
                <Info className="size-6 text-white" />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tighter text-white">Propriété Intellectuelle</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
              Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
            </p>
          </Card>

          {/* Données personnelles */}
          <Card className="border border-white/10 bg-black/40 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/10 p-3 rounded-xl">
                <FileText className="size-6 text-white" />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tighter text-white">Données Personnelles</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), 
              vous disposez d'un droit d'accès, de rectification et d'opposition aux données personnelles vous concernant. 
              Pour exercer ce droit, vous pouvez nous contacter par email : <strong className="text-white">m3.automobil@gmail.com</strong>.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
