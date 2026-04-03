import { Car, Fuel, Gauge, Calendar, ExternalLink, CheckCircle2, Shield } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Link } from 'react-router';
import type { Vehicule } from '../data/vehicules';

interface VehiculeCardProps {
  vehicule: Vehicule;
}

export default function VehiculeCard({ vehicule }: VehiculeCardProps) {
  const isVendu = vehicule.statut === 'vendu';

  return (
    <Link to={`/vehicules/${vehicule.id}`} className="block">
    <Card className={`border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden hover:border-white/20 transition-all group ${isVendu ? 'opacity-75' : ''}`}>
      {/* Image */}
      <div className="relative h-52 md:h-60 overflow-hidden">
        <img
          src={vehicule.images[0]}
          alt={`${vehicule.marque} ${vehicule.modele}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Badge statut */}
        <div className="absolute top-3 left-3">
          {isVendu ? (
            <Badge className="bg-red-500/90 text-white border-none font-bold text-sm px-3 py-1">
              VENDU
            </Badge>
          ) : (
            <Badge className="bg-green-500/90 text-white border-none font-bold text-sm px-3 py-1">
              EN VENTE
            </Badge>
          )}
        </div>

        {/* Badge garantie */}
        <div className="absolute top-3 right-3">
          <Badge className="bg-white/90 text-gray-900 border-none text-xs px-2 py-1">
            <Shield className="size-3 mr-1" />
            Garantie 3 mois
          </Badge>
        </div>

        {/* Prix en bas de l'image */}
        <div className="absolute bottom-3 left-3">
          <p className={`text-2xl md:text-3xl font-black text-white ${isVendu ? 'line-through opacity-60' : ''}`}>
            {vehicule.prix.toLocaleString('fr-FR')} €
          </p>
        </div>
      </div>

      {/* Contenu */}
      <CardContent className="p-5">
        {/* Titre */}
        <h3 className="text-lg md:text-xl font-bold text-white mb-1">
          {vehicule.marque} {vehicule.modele}
        </h3>
        <p className="text-sm text-gray-400 mb-4">{vehicule.version}</p>

        {/* Specs grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <Calendar className="size-4 text-white/50 flex-shrink-0" />
            <span>{vehicule.annee} · {vehicule.miseEnCirculation}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <Gauge className="size-4 text-white/50 flex-shrink-0" />
            <span>{vehicule.kilometrage.toLocaleString('fr-FR')} km</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <Fuel className="size-4 text-white/50 flex-shrink-0" />
            <span>{vehicule.energie} · {vehicule.boite}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <Car className="size-4 text-white/50 flex-shrink-0" />
            <span>{vehicule.puissanceDin} ch · {vehicule.puissanceFiscale} cv</span>
          </div>
        </div>

        {/* Points forts (les 3 premiers) */}
        <div className="space-y-1.5 mb-4">
          {vehicule.pointsForts.slice(0, 3).map((point, i) => (
            <div key={i} className="flex items-start gap-2 text-gray-400 text-xs">
              <CheckCircle2 className="size-3.5 text-white/50 mt-0.5 flex-shrink-0" />
              <span>{point}</span>
            </div>
          ))}
          {vehicule.pointsForts.length > 3 && (
            <p className="text-gray-500 text-xs ml-5">+ {vehicule.pointsForts.length - 3} autres points forts</p>
          )}
        </div>

        {/* Lien vers la fiche */}
        {!isVendu ? (
          <div className="flex items-center justify-center gap-2 w-full bg-white hover:bg-gray-100 text-gray-900 font-bold py-3 rounded-xl transition-colors text-sm">
            Voir les details
            <ExternalLink className="size-4" />
          </div>
        ) : (
          <div className="text-center py-2 text-gray-500 text-sm font-medium border border-white/10 rounded-xl bg-white/5">
            Ce vehicule a trouve preneur
          </div>
        )}
      </CardContent>
    </Card>
    </Link>
  );
}
