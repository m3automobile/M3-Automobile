import { Lock, Database, Eye, UserCheck, AlertCircle, Cookie, Mail, FileText } from 'lucide-react';
import { Card } from '../components/ui/card';
import PremiumBackground from '../components/PremiumBackground';
import SEO from '../components/SEO';

export default function PolitiqueConfidentialite() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-white">
      <SEO
        title="Politique de Confidentialité"
        description="Politique de confidentialité de M3 Automobile. Protection des données personnelles conforme au RGPD et à la loi informatique et libertés."
        keywords="politique de confidentialité M3 Automobile, RGPD, protection données, confidentialité garage L'Isle-Adam"
      />
      <PremiumBackground />

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 mb-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <Lock className="size-8 md:size-12 text-white" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight uppercase text-white">
            Politique <span className="text-white/70 italic font-light font-serif">de Confidentialité</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Responsable du traitement */}
          <Card className="border border-white/10 bg-black/40 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/10 p-3 rounded-xl">
                <FileText className="size-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold uppercase tracking-tighter text-white">Responsable du Traitement</h2>
            </div>

            <div className="space-y-4 text-gray-300">
              <div>
                <p className="text-sm text-gray-500 uppercase font-black mb-2">Entreprise</p>
                <p className="font-bold text-white">M3 AUTOMOBILE</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase font-black mb-2">Représentant Legal</p>
                <p>M. Jobb Mam III</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase font-black mb-2">SIRET</p>
                <p>100 150 168 00019</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase font-black mb-2">Adresse</p>
                <p>3 rue de l'abbé Breuil</p>
                <p>L'Isle-Adam (95290), France</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase font-black mb-2">Coordonnees</p>
                <p><strong className="text-white">Email :</strong> m3.automobil@gmail.com</p>
                <p><strong className="text-white">Téléphone :</strong> 07 83 26 98 02</p>
              </div>
            </div>
          </Card>

          {/* Données collectées */}
          <Card className="border border-white/10 bg-black/40 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/10 p-3 rounded-xl">
                <Database className="size-6 text-white" />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tighter text-white">Données Collectées</h2>
            </div>

            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-white/50 rounded-full"></span>
                  Formulaire de Contact
                </h3>
                <p className="text-sm leading-relaxed">
                  Lorsque vous nous contactez via le formulaire de contact, nous collectons : nom, prénom, adresse email, numéro de téléphone, sujet du message et contenu du message. Ces informations sont nécessaires pour traiter votre demande et vous répondre.
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-white/50 rounded-full"></span>
                  Recherche Personnalisée
                </h3>
                <p className="text-sm leading-relaxed">
                  Pour notre service de recherche personnalisée de véhicules, nous collectons votre email, vos préférences de marque, modèle, année, gamme de prix et vos critères spécifiques. Ces données permettent de vous proposer les véhicules correspondant à votre recherche.
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-white/50 rounded-full"></span>
                  Données de Navigation
                </h3>
                <p className="text-sm leading-relaxed">
                  Nous recueillons automatiquement certaines informations lors de votre visite : adresse IP, type de navigateur, pages visitées, temps passé sur le site, et données de clics. Ces données nous aident à améliorer l'expérience utilisateur et à analyser l'utilisation du site.
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-white/50 rounded-full"></span>
                  Mandat de Vente
                </h3>
                <p className="text-sm leading-relaxed">
                  Pour les services de dépôt-vente, nous collectons : nom, prénom, adresse, email, téléphone, ainsi que les informations relatives au véhicule à vendre (marque, modèle, immatriculation, kilométrage, etc.).
                </p>
              </div>
            </div>
          </Card>

          {/* Finalités du traitement */}
          <Card className="border border-white/10 bg-black/40 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/10 p-3 rounded-xl">
                <Eye className="size-6 text-white" />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tighter text-white">Finalités du Traitement</h2>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Vos données personnelles sont traitées pour les finalités suivantes :
            </p>

            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-3">
                <span className="inline-block w-1.5 h-1.5 bg-white/50 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong className="text-white">Gestion des demandes :</strong> Traiter et répondre à vos demandes d'information ou de contact</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-1.5 h-1.5 bg-white/50 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong className="text-white">Recherche personnalisée :</strong> Vous proposer des véhicules correspondant à vos critères de recherche</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-1.5 h-1.5 bg-white/50 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong className="text-white">Service de vente :</strong> Gérer et traiter les mandats de vente de véhicules</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-1.5 h-1.5 bg-white/50 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong className="text-white">Amélioration du site :</strong> Analyser l'utilisation du site pour optimiser nos services et votre expérience</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-1.5 h-1.5 bg-white/50 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong className="text-white">Obligations légales :</strong> Respecter nos obligations légales et réglementaires</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-1.5 h-1.5 bg-white/50 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong className="text-white">Communication :</strong> Vous envoyer des informations importantes concernant nos services (avec votre consentement pour les communications marketing)</span>
              </li>
            </ul>
          </Card>

          {/* Base légale */}
          <Card className="border border-white/10 bg-black/40 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/10 p-3 rounded-xl">
                <AlertCircle className="size-6 text-white" />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tighter text-white">Base Légale</h2>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Conformément au RGPD, le traitement de vos données est justifié par :
            </p>

            <div className="space-y-4 text-gray-300 text-sm">
              <div className="border-l-2 border-white/20 pl-4 py-2">
                <p><strong className="text-white">Consentement :</strong> Pour les communications marketing et l'amélioration du site via cookies optionnels.</p>
              </div>
              <div className="border-l-2 border-white/20 pl-4 py-2">
                <p><strong className="text-white">Exécution du contrat :</strong> Pour traiter les mandats de vente et services commandés.</p>
              </div>
              <div className="border-l-2 border-white/20 pl-4 py-2">
                <p><strong className="text-white">Obligations légales :</strong> Pour respecter la loi informatique et libertés et le RGPD.</p>
              </div>
              <div className="border-l-2 border-white/20 pl-4 py-2">
                <p><strong className="text-white">Intérêt légitime :</strong> Pour améliorer nos services, analyser la performance du site et développer nos activités commerciales.</p>
              </div>
            </div>
          </Card>

          {/* Destinataires des données */}
          <Card className="border border-white/10 bg-black/40 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/10 p-3 rounded-xl">
                <UserCheck className="size-6 text-white" />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tighter text-white">Destinataires des Données</h2>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Vos données personnelles peuvent être communiquées à :
            </p>

            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-3">
                <span className="inline-block w-1.5 h-1.5 bg-white/50 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong className="text-white">Notre équipe interne :</strong> Uniquement aux collaborateurs de M3 Automobile ayant besoin d'accès pour traiter votre demande</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-1.5 h-1.5 bg-white/50 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong className="text-white">Prestataires techniques :</strong> Netlify (hébergement du site), Google Analytics (analyse du trafic), et autres prestataires essentiels au fonctionnement du site</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-1.5 h-1.5 bg-white/50 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong className="text-white">Autorités légales :</strong> Si nous y sommes obligés par la loi</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-1.5 h-1.5 bg-white/50 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong className="text-white">Protection des données :</strong> Vos données ne sont pas vendues à des tiers commerciaux</span>
              </li>
            </ul>
          </Card>

          {/* Durée de conservation */}
          <Card className="border border-white/10 bg-black/40 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/10 p-3 rounded-xl">
                <FileText className="size-6 text-white" />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tighter text-white">Durée de Conservation</h2>
            </div>

            <div className="space-y-4 text-gray-300 text-sm">
              <div>
                <p className="text-gray-400 leading-relaxed">
                  Vos données personnelles sont conservées pour la durée nécessaire aux finalités pour lesquelles elles ont été collectées :
                </p>
              </div>

              <div className="border-l-2 border-white/20 pl-4 py-2">
                <p><strong className="text-white">Formulaire de contact :</strong> Conservées 3 ans après la dernière communication</p>
              </div>
              <div className="border-l-2 border-white/20 pl-4 py-2">
                <p><strong className="text-white">Recherche personnalisée :</strong> Conservées tant que vous utilisez le service, puis supprimées sur demande</p>
              </div>
              <div className="border-l-2 border-white/20 pl-4 py-2">
                <p><strong className="text-white">Mandat de vente :</strong> Conservées pendant la durée du contrat plus 3 ans pour les obligations légales</p>
              </div>
              <div className="border-l-2 border-white/20 pl-4 py-2">
                <p><strong className="text-white">Données de navigation :</strong> Conservées entre 13 et 25 mois selon Google Analytics</p>
              </div>

              <p className="text-gray-400 leading-relaxed mt-4">
                Passé ces délais, les données sont supprimées ou rendues anonymes.
              </p>
            </div>
          </Card>

          {/* Droits RGPD */}
          <Card className="border border-white/10 bg-black/40 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/10 p-3 rounded-xl">
                <Lock className="size-6 text-white" />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tighter text-white">Droits des Utilisateurs (RGPD)</h2>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Conformément au Règlement Général sur la Protection des Données, vous disposez des droits suivants :
            </p>

            <div className="space-y-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <h3 className="text-white font-bold mb-2">Droit d'accès</h3>
                <p className="text-gray-400 text-sm">Vous pouvez demander l'accès à vos données personnelles que nous détenons.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <h3 className="text-white font-bold mb-2">Droit de rectification</h3>
                <p className="text-gray-400 text-sm">Vous pouvez demander la correction de données inexactes ou incomplètes vous concernant.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <h3 className="text-white font-bold mb-2">Droit à l'oubli (suppression)</h3>
                <p className="text-gray-400 text-sm">Vous pouvez demander la suppression de vos données personnelles, sauf si nous avons une obligation légale de les conserver.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <h3 className="text-white font-bold mb-2">Droit de limitation du traitement</h3>
                <p className="text-gray-400 text-sm">Vous pouvez demander à limiter l'utilisation de vos données dans certaines circonstances.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <h3 className="text-white font-bold mb-2">Droit à la portabilité</h3>
                <p className="text-gray-400 text-sm">Vous pouvez demander à recevoir vos données dans un format structuré, couramment utilisé et lisible par machine.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <h3 className="text-white font-bold mb-2">Droit d'opposition</h3>
                <p className="text-gray-400 text-sm">Vous pouvez vous opposer au traitement de vos données pour les finalités de marketing direct ou d'intérêt légitime.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <h3 className="text-white font-bold mb-2">Droit de ne pas être soumis à une décision automatisée</h3>
                <p className="text-gray-400 text-sm">Vous pouvez demander à ne pas être soumis à une décision reposant exclusivement sur un traitement automatisé.</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mt-6">
              Pour exercer ces droits, contactez-nous à : <strong className="text-white">m3.automobil@gmail.com</strong>
            </p>
          </Card>

          {/* Cookies et traceurs */}
          <Card className="border border-white/10 bg-black/40 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/10 p-3 rounded-xl">
                <Cookie className="size-6 text-white" />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tighter text-white">Cookies et Traceurs</h2>
            </div>

            <div className="space-y-6 text-gray-300 text-sm">
              <div>
                <h3 className="text-white font-bold mb-3">Qu'est-ce qu'un cookie ?</h3>
                <p className="leading-relaxed">
                  Un cookie est un petit fichier texte stocké sur votre navigateur lors de votre visite de notre site. Les cookies permettent de mémoriser vos préférences, d'améliorer votre expérience et d'analyser l'utilisation du site.
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-3">Cookies utilisés</h3>
                <div className="space-y-3">
                  <div className="border-l-2 border-white/20 pl-4 py-2">
                    <p><strong className="text-white">Cookies essentiels :</strong> Nécessaires au fonctionnement du site (sécurité, langue, etc.)</p>
                  </div>
                  <div className="border-l-2 border-white/20 pl-4 py-2">
                    <p><strong className="text-white">Cookies analytiques :</strong> Google Analytics pour analyser votre utilisation du site</p>
                  </div>
                  <div className="border-l-2 border-white/20 pl-4 py-2">
                    <p><strong className="text-white">Cookies de marketing :</strong> Pour les publicités ciblées et le suivi du comportement (avec votre consentement)</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-white font-bold mb-3">Gestion des cookies</h3>
                <p className="leading-relaxed">
                  Vous pouvez contrôler et supprimer les cookies via les paramètres de votre navigateur. La plupart des navigateurs vous permettent de refuser les cookies ou d'être averti avant qu'un cookie soit stocké. Cependant, refuser les cookies peut affecter votre expérience sur le site.
                </p>
              </div>
            </div>
          </Card>

          {/* Sécurité des données */}
          <Card className="border border-white/10 bg-black/40 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/10 p-3 rounded-xl">
                <Lock className="size-6 text-white" />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tighter text-white">Sécurité des Données</h2>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              M3 Automobile met en place les mesures de sécurité appropriées pour protéger vos données personnelles contre l'accès non autorisé, la modification ou la destruction. Ces mesures incluent : le chiffrement SSL pour les communications, l'accès contrôlé aux serveurs, et l'hébergement sécurisé chez Netlify. Cependant, aucune transmission de données sur Internet n'est absolument sécurisée, et nous ne pouvons pas garantir une sécurité absolue.
            </p>
          </Card>

          {/* Modifications de la politique */}
          <Card className="border border-white/10 bg-black/40 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/10 p-3 rounded-xl">
                <AlertCircle className="size-6 text-white" />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tighter text-white">Modifications de la Politique</h2>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              M3 Automobile se réserve le droit de modifier cette politique de confidentialité à tout moment. Les modifications entreront en vigueur dès leur publication sur le site. Nous vous recommandons de consulter régulièrement cette page pour rester informé des changements. Votre utilisation continue du site après modifications constitue votre acceptation de la nouvelle politique.
            </p>
          </Card>

          {/* Contact DPO */}
          <Card className="border border-white/10 bg-black/40 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/10 p-3 rounded-xl">
                <Mail className="size-6 text-white" />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tighter text-white">Contact et Réclamations</h2>
            </div>

            <div className="space-y-6 text-gray-300 text-sm">
              <div>
                <h3 className="text-white font-bold mb-3">Pour exercer vos droits ou poser une question</h3>
                <div className="space-y-2">
                  <p><strong className="text-white">Email :</strong> <a href="mailto:m3.automobil@gmail.com" className="hover:text-white underline">m3.automobil@gmail.com</a></p>
                  <p><strong className="text-white">Téléphone :</strong> <a href="tel:0783269802" className="hover:text-white underline">07 83 26 98 02</a></p>
                  <p><strong className="text-white">Adresse :</strong> 3 rue de l'abbé Breuil, L'Isle-Adam (95290), France</p>
                </div>
              </div>

              <div>
                <h3 className="text-white font-bold mb-3">Plainte auprès de la CNIL</h3>
                <p className="leading-relaxed">
                  Si vous estimez que M3 Automobile ne respecte pas vos droits relatifs à la protection des données, vous avez le droit de déposer une plainte auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) à l'adresse suivante :
                </p>
                <div className="mt-3 bg-white/5 border border-white/10 rounded-lg p-4">
                  <p><strong className="text-white">CNIL</strong></p>
                  <p>3 Place de Fontenoy</p>
                  <p>75007 Paris, France</p>
                  <p className="mt-2"><a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-gray-300">www.cnil.fr</a></p>
                </div>
              </div>
            </div>
          </Card>

          {/* Dernière mise à jour */}
          <div className="text-center text-gray-400 text-sm mt-12">
            <p>Dernière mise à jour : avril 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}
