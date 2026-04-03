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
      '/images/vehicules/audi-a3-tdi-2015/IMG_6429.jpeg',
      '/images/vehicules/audi-a3-tdi-2015/IMG_6445.jpeg',
      '/images/vehicules/audi-a3-tdi-2015/IMG_6447.jpeg',
      '/images/vehicules/audi-a3-tdi-2015/IMG_6450.jpeg',
      '/images/vehicules/audi-a3-tdi-2015/IMG_6455.jpeg',
      '/images/vehicules/audi-a3-tdi-2015/IMG_6458.jpeg',
      '/images/vehicules/audi-a3-tdi-2015/IMG_6459.jpeg',
      '/images/vehicules/audi-a3-tdi-2015/IMG_6460.jpeg',
      '/images/vehicules/audi-a3-tdi-2015/IMG_6461.jpeg',
      '/images/vehicules/audi-a3-tdi-2015/IMG_6462.jpeg',
      '/images/vehicules/audi-a3-tdi-2015/IMG_6463.jpeg',
      '/images/vehicules/audi-a3-tdi-2015/IMG_6465.jpeg',
      '/images/vehicules/audi-a3-tdi-2015/IMG_6466.jpeg',
      '/images/vehicules/audi-a3-tdi-2015/IMG_6472.jpeg',
      '/images/vehicules/audi-a3-tdi-2015/IMG_6480.jpeg',
      '/images/vehicules/audi-a3-tdi-2015/IMG_6490.jpeg',
      '/images/vehicules/audi-a3-tdi-2015/IMG_6492.jpeg',
      '/images/vehicules/audi-a3-tdi-2015/IMG_6501.jpeg',
      '/images/vehicules/audi-a3-tdi-2015/IMG_6503.jpeg',
      '/images/vehicules/audi-a3-tdi-2015/IMG_6510.jpeg',
      '/images/vehicules/audi-a3-tdi-2015/IMG_6542.jpeg',
      '/images/vehicules/audi-a3-tdi-2015/IMG_6549.jpeg',
      '/images/vehicules/audi-a3-tdi-2015/IMG_6550.jpeg',
      '/images/vehicules/audi-a3-tdi-2015/IMG_6551.jpeg',
      '/images/vehicules/audi-a3-tdi-2015/IMG_6557.jpeg'
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
      '/images/vehicules/citroen-c3-hdi-2011/IMG_6342.jpeg',
      '/images/vehicules/citroen-c3-hdi-2011/IMG_6348.jpeg',
      '/images/vehicules/citroen-c3-hdi-2011/IMG_6354.jpeg',
      '/images/vehicules/citroen-c3-hdi-2011/IMG_6382.jpeg',
      '/images/vehicules/citroen-c3-hdi-2011/IMG_6389.jpeg',
      '/images/vehicules/citroen-c3-hdi-2011/IMG_6393.jpeg',
      '/images/vehicules/citroen-c3-hdi-2011/IMG_6396.jpeg',
      '/images/vehicules/citroen-c3-hdi-2011/IMG_6399.jpeg'
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
      '/images/vehicules/peugeot-208-vti-2011/2a6672a0d4dc14cc5590c9183ef3c09f76a02446.jpg',
      '/images/vehicules/peugeot-208-vti-2011/f724efc8574158e2a7dc8e4cc204977c3458f0ad.jpg',
      '/images/vehicules/peugeot-208-vti-2011/48d11cf284a7bcc961286f17562d9d02036b6ace.jpg',
      '/images/vehicules/peugeot-208-vti-2011/35cebfb6dee338669296cdb87331d0bd4cb2fdcd.jpg',
      '/images/vehicules/peugeot-208-vti-2011/9fb8b5f4c989e5992158f69c778aeb80205952a4.jpg'
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
      '/images/vehicules/renault-clio-iii-dci-2007/2261a477f72cadbd5bca66a9ff0c9b23c6b2c983.jpg',
      '/images/vehicules/renault-clio-iii-dci-2007/c42a49dae03c05044957870c551c29dc579be81e.jpg',
      '/images/vehicules/renault-clio-iii-dci-2007/5fe80361166e27d3c8d79861333ad2c83c275e1c.jpg',
      '/images/vehicules/renault-clio-iii-dci-2007/6764e583e407151c8071f1e954a4779875ebc69c.jpg',
      '/images/vehicules/renault-clio-iii-dci-2007/e2b61c023e03b55c2ee46d0806cf13f4122b4fa7.jpg'
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
      '/images/vehicules/peugeot-308-hdi-2009/5e5989d5937d82f6ef7fa78d8d3f936340dbb17a.jpg',
      '/images/vehicules/peugeot-308-hdi-2009/9d5b4f644455c66cb132eefb365682bdda5b2f25.jpg',
      '/images/vehicules/peugeot-308-hdi-2009/dfe6c48fe56f0c1fdbf654b49e3f20bf0cdce7e4.jpg',
      '/images/vehicules/peugeot-308-hdi-2009/45040ba18e65f965c018ce27e52b9d285efc8960.jpg',
      '/images/vehicules/peugeot-308-hdi-2009/f4732f4af495292b94972106a713332bb512d386.jpg'
    ],
    miseEnCirculation: '12/2009',
    critAir: 'Non classé'
  }
];
