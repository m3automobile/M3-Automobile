import { useState } from 'react';
import { useParams, Link } from 'react-router';
import {
  ArrowLeft, ExternalLink, Shield, CheckCircle2, Car, Fuel, Gauge, Calendar,
  ChevronLeft, ChevronRight, Palette, DoorOpen, Users, Zap, FileText, Phone
} from 'lucide-react';
import { Badge } from '../components/ui/badge';
import PremiumBackground from '../components/PremiumBackground';
import SEO from '../components/SEO';
import VehiculeJsonLd from '../components/VehiculeJsonLd';
import { useVehicules } from '../hooks/useVehicules';

export default function VehiculeDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { vehicules } = useVehicules();
  const vehicule = vehicules.find(v => v.id === id);
  const [currentImage, setCurrentImage] = useState(0);

  if (!vehicule) {
    return (
      <div className="relative min-h-screen overflow-x-hidden">
        <PremiumBackground />
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <Car className="size-20 text-gray-600 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-white mb-4">Véhicule introuvable</h1>
          <p className="text-gray-400 mb-8">Ce véhicule n'existe pas ou a été retiré de notre catalogue.</p>
          <Link to="/vehicules" className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">
            <ArrowLeft className="size-4" />
            Retour aux véhicules
          </Link>
        </div>
      </div>
    );
  }

  const isVendu = vehicule.statut === 'vendu';

  const prevImage = () => {
    setCurrentImage(prev => prev === 0 ? vehicule.images.length - 1 : prev - 1);
  };

  const nextImage = () => {
    setCurrentImage(prev => prev === vehicule.images.length - 1 ? 0 : prev + 1);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SEO
        title={`${vehicule.marque} ${vehicule.modele} ${vehicule.version} - ${vehicule.prix.toLocaleString('fr-FR')} €`}
        description={vehicule.description}
        keywords={`${vehicule.marque} ${vehicule.modele} occasion, ${vehicule.marque} occasion L'Isle-Adam, voiture occasion ${vehicule.energie.toLowerCase()} ${vehicule.annee}`}
        canonicalPath={`/vehicules/${vehicule.id}`}
      />
      <VehiculeJsonLd vehicule={vehicule} />
      <PremiumBackground />

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-16">
        {/* Retour */}
        <Link
          to="/vehicules"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 md:mb-10 text-sm"
        >
          <ArrowLeft className="size-4" />
          Retour aux véhicules
        </Link>

        {/* Layout principal */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">

          {/* Colonne gauche - Galerie photos (3/5) */}
          <div className="lg:col-span-3">
            {/* Image principale */}
            <div className="relative rounded-2xl overflow-hidden bg-black/40 border border-white/10 mb-3">
              <div className="relative aspect-[4/3]">
                <img
                  src={vehicule.images[currentImage]}
                  alt={`${vehicule.marque} ${vehicule.modele} - Photo ${currentImage + 1}`}
                  className="w-full h-full object-cover"
                />

                {/* Badge statut */}
                <div className="absolute top-4 left-4">
                  {isVendu ? (
                    <Badge className="bg-red-500/90 text-white border-none font-bold text-sm px-4 py-1.5">
                      VENDU
                    </Badge>
                  ) : (
                    <Badge className="bg-green-500/90 text-white border-none font-bold text-sm px-4 py-1.5">
                      EN VENTE
                    </Badge>
                  )}
                </div>

                {/* Badge garantie */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-gray-900 border-none text-xs px-3 py-1.5">
                    <Shield className="size-3 mr-1" />
                    Garantie 3 mois
                  </Badge>
                </div>

                {/* Navigation fleches */}
                {vehicule.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors backdrop-blur-sm"
                    >
                      <ChevronLeft className="size-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors backdrop-blur-sm"
                    >
                      <ChevronRight className="size-6" />
                    </button>
                  </>
                )}

                {/* Compteur photos */}
                <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm">
                  {currentImage + 1} / {vehicule.images.length}
                </div>
              </div>
            </div>

            {/* Thumbnails */}
            {vehicule.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
                {vehicule.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      i === currentImage
                        ? 'border-white opacity-100'
                        : 'border-transparent opacity-50 hover:opacity-80'
                    }`}
                  >
                    <img src={img} alt={`Miniature ${i + 1}`} loading="lazy" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Description - visible sur mobile sous la galerie */}
            <div className="mt-8 bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10 lg:block">
              <h2 className="text-xl font-bold text-white mb-4">Description</h2>
              <p className="text-gray-300 leading-relaxed">{vehicule.description}</p>
            </div>

            {/* Points forts */}
            <div className="mt-6 bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10">
              <h2 className="text-xl font-bold text-white mb-5">Points forts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {vehicule.pointsForts.map((point, i) => (
                  <div key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                    <CheckCircle2 className="size-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Equipements */}
            {vehicule.equipements.length > 0 && (
              <div className="mt-6 bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10">
                <h2 className="text-xl font-bold text-white mb-5">Equipements</h2>
                <div className="flex flex-wrap gap-2">
                  {vehicule.equipements.map((equip, i) => (
                    <Badge key={i} className="bg-white/10 text-gray-300 border border-white/10 px-3 py-1.5 text-sm">
                      {equip}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Colonne droite - Infos (2/5) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Titre et prix */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10">
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-1">
                {vehicule.marque} {vehicule.modele}
              </h1>
              <p className="text-gray-400 mb-6">{vehicule.version}</p>

              <div className="flex items-baseline gap-3 mb-6">
                <p className={`text-3xl md:text-4xl font-black text-white ${isVendu ? 'line-through opacity-60' : ''}`}>
                  {vehicule.prix.toLocaleString('fr-FR')} €
                </p>
              </div>

              {/* CTA Leboncoin */}
              {!isVendu && vehicule.lienLeboncoin && (
                <a
                  href={vehicule.lienLeboncoin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 rounded-xl transition-colors text-base"
                >
                  Voir sur Leboncoin
                  <ExternalLink className="size-4" />
                </a>
              )}

              {isVendu && (
                <div className="text-center py-3 text-gray-500 text-sm font-medium border border-white/10 rounded-xl bg-white/5">
                  Ce véhicule a trouvé preneur
                </div>
              )}

              {/* CTA Essai routier */}
              <Link
                to="/rendez-vous"
                className="flex items-center justify-center gap-2 w-full mt-3 bg-white/10 hover:bg-white/20 text-white font-bold py-4 rounded-xl transition-colors text-base border border-white/10"
              >
                Prendre RDV pour un essai
              </Link>

              {/* Contact rapide */}
              <a
                href="tel:0783269802"
                className="flex items-center justify-center gap-2 w-full mt-3 bg-white/10 hover:bg-white/20 text-white font-bold py-4 rounded-xl transition-colors text-base border border-white/10"
              >
                <Phone className="size-4" />
                07 83 26 98 02
              </a>
            </div>

            {/* Fiche technique */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10">
              <h2 className="text-xl font-bold text-white mb-5">Fiche technique</h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-white/5">
                  <div className="flex items-center gap-3 text-gray-400">
                    <Calendar className="size-4" />
                    <span className="text-sm">Année</span>
                  </div>
                  <span className="text-white font-medium">{vehicule.annee}</span>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-white/5">
                  <div className="flex items-center gap-3 text-gray-400">
                    <Calendar className="size-4" />
                    <span className="text-sm">Mise en circulation</span>
                  </div>
                  <span className="text-white font-medium">{vehicule.miseEnCirculation}</span>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-white/5">
                  <div className="flex items-center gap-3 text-gray-400">
                    <Gauge className="size-4" />
                    <span className="text-sm">Kilométrage</span>
                  </div>
                  <span className="text-white font-medium">{vehicule.kilometrage.toLocaleString('fr-FR')} km</span>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-white/5">
                  <div className="flex items-center gap-3 text-gray-400">
                    <Fuel className="size-4" />
                    <span className="text-sm">Energie</span>
                  </div>
                  <span className="text-white font-medium">{vehicule.energie}</span>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-white/5">
                  <div className="flex items-center gap-3 text-gray-400">
                    <Car className="size-4" />
                    <span className="text-sm">Boite de vitesses</span>
                  </div>
                  <span className="text-white font-medium">{vehicule.boite}</span>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-white/5">
                  <div className="flex items-center gap-3 text-gray-400">
                    <Zap className="size-4" />
                    <span className="text-sm">Puissance</span>
                  </div>
                  <span className="text-white font-medium">{vehicule.puissanceDin} ch ({vehicule.puissanceFiscale} cv fiscaux)</span>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-white/5">
                  <div className="flex items-center gap-3 text-gray-400">
                    <Palette className="size-4" />
                    <span className="text-sm">Couleur</span>
                  </div>
                  <span className="text-white font-medium">{vehicule.couleur}</span>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-white/5">
                  <div className="flex items-center gap-3 text-gray-400">
                    <DoorOpen className="size-4" />
                    <span className="text-sm">Portes</span>
                  </div>
                  <span className="text-white font-medium">{vehicule.portes}</span>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-white/5">
                  <div className="flex items-center gap-3 text-gray-400">
                    <Users className="size-4" />
                    <span className="text-sm">Places</span>
                  </div>
                  <span className="text-white font-medium">{vehicule.places}</span>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-white/5">
                  <div className="flex items-center gap-3 text-gray-400">
                    <FileText className="size-4" />
                    <span className="text-sm">Finition</span>
                  </div>
                  <span className="text-white font-medium">{vehicule.finition}</span>
                </div>

                {vehicule.critAir && (
                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-3 text-gray-400">
                      <Shield className="size-4" />
                      <span className="text-sm">Crit'Air</span>
                    </div>
                    <span className="text-white font-medium">{vehicule.critAir}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Garantie */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="size-6 text-white" />
                <h3 className="text-lg font-bold text-white">Garantie 3 mois incluse</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Couverture moteur & boite de vitesses. Zéro avance de frais. Valable dans le garage de votre choix, partout en France.
              </p>
              <Link
                to="/garanties"
                className="inline-block mt-4 text-sm text-white/70 hover:text-white underline underline-offset-4 transition-colors"
              >
                En savoir plus sur nos garanties
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
