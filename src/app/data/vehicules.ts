export interface Vehicule {
  id: string;
  marque: string;
  modele: string;
  version: string;
  annee: number;
  kilometrage: number;
  energie: 'Essence' | 'Diesel' | 'Hybride' | 'Électrique';
  boite: 'Manuelle' | 'Automatique';
  puissanceDin: number;
  puissanceFiscale: number;
  couleur: string;
  portes: number;
  places: number;
  finition: string;
  prix: number;
  statut: 'en_vente' | 'vendu';
  description: string;
  pointsForts: string[];
  equipements: string[];
  lienLeboncoin?: string;
  lienLaCentrale?: string;
  images: string[];
  miseEnCirculation: string;
  critAir?: string;
}

export const vehicules: Vehicule[] = [
  // ===== VÉHICULES À VENDRE =====
  {
    id: 'audi-a3-tdi-110-2015',
    marque: 'Audi',
    modele: 'A3 Sportback',
    version: '1.6 TDI 110ch Ambiente',
    annee: 2015,
    kilometrage: 149000,
    energie: 'Diesel',
    boite: 'Manuelle',
    puissanceDin: 110,
    puissanceFiscale: 5,
    couleur: 'Noir',
    portes: 5,
    places: 5,
    finition: 'Ambiente',
    prix: 11299,
    statut: 'en_vente',
    description: "Audi A3 en excellent état, combinant confort de route et économie de carburant. Équipée du moteur 1.6 TDI réputé pour sa robustesse. Moteur ultra sain, tourne comme une horloge. Finition Ambiente, ultra bien entretenue avec pile de factures à l'appui.",
    pointsForts: [
      'Distribution neuve + courroies d\'accessoire',
      'Sièges chauffants',
      'Aide au stationnement',
      'Bluetooth',
      'Contrôle technique valide jusqu\'en 2028',
      'Moteur ultra sain'
    ],
    equipements: ['Sièges chauffants', 'Aide au stationnement', 'Bluetooth', 'Climatisation'],
    lienLeboncoin: 'https://www.leboncoin.fr/ad/voitures/3170691777',
    images: [
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80'
    ],
    miseEnCirculation: '08/2015',
    critAir: '2'
  },
  {
    id: 'citroen-c3-hdi-exclusive-2011',
    marque: 'Citroën',
    modele: 'C3',
    version: '1.4 HDi 70ch Exclusive',
    annee: 2011,
    kilometrage: 184000,
    energie: 'Diesel',
    boite: 'Manuelle',
    puissanceDin: 70,
    puissanceFiscale: 4,
    couleur: 'Autre',
    portes: 5,
    places: 5,
    finition: 'Exclusive',
    prix: 5399,
    statut: 'en_vente',
    description: "Citroën C3 en excellent état, combinant confort de route et économie de carburant. Finition Exclusive avec ses feux ultra rares LED et clignotants dynamiques. Pare-brise panoramique. Parfaite pour jeune conducteur (assurance et consommation faibles).",
    pointsForts: [
      'Distribution neuve',
      'Pare-brise panoramique',
      'Feux LED + clignotants dynamiques',
      'Toit ouvrant / panoramique',
      'Aide au stationnement',
      'Phares LED / Xenon',
      'Contrôle technique valide jusqu\'en 2028'
    ],
    equipements: ['Toit panoramique', 'Aide au stationnement', 'Phares LED/Xenon', 'Bluetooth'],
    lienLeboncoin: 'https://www.leboncoin.fr/ad/voitures/3169754926',
    images: [
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80'
    ],
    miseEnCirculation: '02/2011'
  },

  // ===== VÉHICULES VENDUS =====
  {
    id: 'peugeot-208-vti-120-2011',
    marque: 'Peugeot',
    modele: '208',
    version: '1.6 VTi 120ch Féline',
    annee: 2011,
    kilometrage: 188000,
    energie: 'Essence',
    boite: 'Manuelle',
    puissanceDin: 120,
    puissanceFiscale: 6,
    couleur: 'Autre',
    portes: 5,
    places: 5,
    finition: 'Féline',
    prix: 4099,
    statut: 'vendu',
    description: "Peugeot 208 en finition haut de gamme Féline, équipée du bloc 1.6 VTi 120ch avec distribution par chaîne — le moteur robuste conçu pour durer sans les frais d'une courroie de distribution. Sellerie tout cuir.",
    pointsForts: [
      'Moteur à chaîne (pas de courroie)',
      'Sellerie tout cuir',
      'Sièges chauffants',
      'Régulateur de vitesse',
      'Aide au stationnement',
      'Bluetooth'
    ],
    equipements: ['Cuir intégral', 'Sièges chauffants', 'Régulateur de vitesse', 'Bluetooth'],
    lienLeboncoin: 'https://www.leboncoin.fr/ad/voitures/3163027472',
    images: [
      'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80'
    ],
    miseEnCirculation: '11/2011'
  },
  {
    id: 'renault-clio-iii-dci-2007',
    marque: 'Renault',
    modele: 'Clio III',
    version: '1.5 dCi 70ch Expression',
    annee: 2007,
    kilometrage: 44900,
    energie: 'Diesel',
    boite: 'Manuelle',
    puissanceDin: 70,
    puissanceFiscale: 4,
    couleur: 'Gris',
    portes: 5,
    places: 5,
    finition: 'Expression',
    prix: 6299,
    statut: 'vendu',
    description: "Véritable pépite avec un kilométrage de sortie de concession : seulement 44 000 km certifiés. Excellent état proche du neuf, première main, carnet d'entretien complet. Idéale pour jeune conducteur ou pour rouler des années sans soucis.",
    pointsForts: [
      'Seulement 44 900 km certifiés',
      'Première main',
      'Carnet d\'entretien complet',
      'Excellent état (proche du neuf)',
      'Véhicule non fumeur',
      'Factures disponibles'
    ],
    equipements: ['Climatisation', 'Direction assistée', 'Vitres électriques'],
    lienLeboncoin: 'https://www.leboncoin.fr/ad/voitures/3163015235',
    images: [
      'https://images.unsplash.com/photo-1543796076-c4a1fbd5afc4?w=800&q=80'
    ],
    miseEnCirculation: '06/2007'
  },
  {
    id: 'peugeot-308-hdi-110-2009',
    marque: 'Peugeot',
    modele: '308',
    version: '1.6 HDi 110ch Premium Pack',
    annee: 2009,
    kilometrage: 135000,
    energie: 'Diesel',
    boite: 'Manuelle',
    puissanceDin: 110,
    puissanceFiscale: 6,
    couleur: 'Gris',
    portes: 5,
    places: 5,
    finition: 'Premium Pack',
    prix: 4999,
    statut: 'vendu',
    description: "Peugeot 308 en excellent état, combinant confort de route et économie de carburant. Équipée du moteur 1.6 HDI réputé pour sa robustesse. Berline idéale pour les trajets quotidiens ou les longs voyages. Parfaite pour jeune conducteur.",
    pointsForts: [
      'Distribution neuve à 133 000 km',
      'Régulateur de vitesse',
      'Carnet d\'entretien disponible',
      'Sous garantie garage'
    ],
    equipements: ['Régulateur de vitesse', 'Climatisation', 'Carnet d\'entretien'],
    lienLeboncoin: 'https://www.leboncoin.fr/ad/voitures/3155772110',
    images: [
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80'
    ],
    miseEnCirculation: '12/2009',
    critAir: 'Non classé'
  }
];
