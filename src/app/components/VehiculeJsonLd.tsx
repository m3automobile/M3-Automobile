import { useEffect } from 'react';
import type { Vehicule } from '../data/vehicules';

interface VehiculeJsonLdProps {
  vehicule: Vehicule;
}

export default function VehiculeJsonLd({ vehicule }: VehiculeJsonLdProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = `jsonld-${vehicule.id}`;

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Car',
      name: `${vehicule.marque} ${vehicule.modele} ${vehicule.version}`,
      brand: {
        '@type': 'Brand',
        name: vehicule.marque
      },
      model: vehicule.modele,
      vehicleConfiguration: vehicule.version,
      modelDate: String(vehicule.annee),
      mileageFromOdometer: {
        '@type': 'QuantitativeValue',
        value: vehicule.kilometrage,
        unitCode: 'KMT'
      },
      fuelType: vehicule.energie,
      vehicleTransmission: vehicule.boite === 'Manuelle' ? 'ManualTransmission' : 'AutomaticTransmission',
      color: vehicule.couleur,
      numberOfDoors: vehicule.portes,
      seatingCapacity: vehicule.places,
      vehicleEngine: {
        '@type': 'EngineSpecification',
        enginePower: {
          '@type': 'QuantitativeValue',
          value: vehicule.puissanceDin,
          unitCode: 'BHP'
        }
      },
      image: vehicule.images[0]?.startsWith('/')
        ? `https://m3-automobile.fr${vehicule.images[0]}`
        : vehicule.images[0],
      offers: {
        '@type': 'Offer',
        price: vehicule.prix,
        priceCurrency: 'EUR',
        availability: vehicule.statut === 'en_vente'
          ? 'https://schema.org/InStock'
          : 'https://schema.org/SoldOut',
        seller: {
          '@type': 'AutoDealer',
          name: 'M3 Automobile',
          telephone: '+33783269802',
          address: {
            '@type': 'PostalAddress',
            addressLocality: "L'Isle-Adam",
            postalCode: '95290',
            addressCountry: 'FR'
          }
        },
        warranty: {
          '@type': 'WarrantyPromise',
          durationOfWarranty: {
            '@type': 'QuantitativeValue',
            value: 3,
            unitCode: 'MON'
          }
        }
      },
      description: vehicule.description,
      url: `https://m3-automobile.fr/vehicules/${vehicule.id}`
    };

    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById(`jsonld-${vehicule.id}`);
      if (existing) existing.remove();
    };
  }, [vehicule]);

  return null;
}
