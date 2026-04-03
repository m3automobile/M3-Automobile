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
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/1e/e5/b0/1ee5b07687217a1665485fa3c8476d13035abdd8.jpg?rule=ad-large',
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/d0/73/35/d07335a2d87e61949fb8f51e1b6974281d68564e.jpg?rule=ad-large',
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/79/fd/d9/79fdd9248037900729270248167cdd802bc3c9d0.jpg?rule=ad-large',
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/7c/d9/92/7cd9924889cc0b5bbbfca3e4ad4e183c3fae5336.jpg?rule=ad-large',
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/19/52/14/19521451f9f62ff5331228562766e6adc22b5fcb.jpg?rule=ad-large',
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/bc/c2/0d/bcc20df287096cf503662d128d0ddacaad3cf068.jpg?rule=ad-large',
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/df/ab/3e/dfab3e08ac21117a0f66d7a7145cc2f8091c1177.jpg?rule=ad-large',
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/f4/d3/b5/f4d3b58ef8c12c6ac73bfc11960c9116fe5e6bf4.jpg?rule=ad-large',
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/74/98/37/749837631a17448a2fcb0356ebed06f8009e1398.jpg?rule=ad-large'
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
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/15/cb/6e/15cb6e10bc0fe4b2791aadc577e59c4373953e2f.jpg?rule=ad-large',
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/3c/e8/64/3ce8644fd78e42f106771ebb07c7f45411d9cc19.jpg?rule=ad-large',
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/57/8a/6f/578a6f7fc37440aaa41ae7b55b69e298eecd856c.jpg?rule=ad-large',
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/82/12/50/821250c8caf3351dc9102c5dc8166e9f3e54cc11.jpg?rule=ad-large',
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/6c/be/f0/6cbef0c41d86abd6da7037dacd26c968b5c45650.jpg?rule=ad-large',
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/0e/50/67/0e506750041229fb8e1515e4969157861840c0f6.jpg?rule=ad-large',
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/04/51/cf/0451cfc9afbaf3e9759a506eda5b36659ed4ce14.jpg?rule=ad-large',
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/23/33/43/2333431b8062d3e8598fca43c2b8a282c81c1d9b.jpg?rule=ad-large',
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/dc/f8/a7/dcf8a77336678fbc7ecc8d76e6cf34e0df86b7a1.jpg?rule=ad-large',
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/69/d8/f7/69d8f7f5b0fa4bf9efc37b69e2e2ebee62b96b5a.jpg?rule=ad-large'
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
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/2a/66/72/2a6672a0d4dc14cc5590c9183ef3c09f76a02446.jpg?rule=ad-large',
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/f7/24/ef/f724efc8574158e2a7dc8e4cc204977c3458f0ad.jpg?rule=ad-large',
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/48/d1/1c/48d11cf284a7bcc961286f17562d9d02036b6ace.jpg?rule=ad-large',
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/d3/5d/aa/d35daa83f8a4775ecf7db17c4111b958c7648c04.jpg?rule=ad-large',
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/d7/40/a4/d740a4142f8e71f13f91386156a26b8e29f10587.jpg?rule=ad-large',
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/1c/a5/9a/1ca59a3130f2ac2099e89d50e24f175bae4e6c73.jpg?rule=ad-large',
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/ec/bb/82/ecbb82d51ae68547f5ac179bdc192cc03f2fa588.jpg?rule=ad-large',
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/bf/4b/ed/bf4bed076427407e8cd51eccef345e443fcd7965.jpg?rule=ad-large',
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/f3/55/03/f355037666d8250a9097cfccfd997c0bbb4f9a67.jpg?rule=ad-large',
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/0b/6f/c2/0b6fc2265ffb944dc1a96fda43eb3f00c4e1949a.jpg?rule=ad-large'
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
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/22/61/a4/2261a477f72cadbd5bca66a9ff0c9b23c6b2c983.jpg?rule=ad-large',
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/c4/2a/49/c42a49dae03c05044957870c551c29dc579be81e.jpg?rule=ad-large',
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/5f/e8/03/5fe80361166e27d3c8d79861333ad2c83c275e1c.jpg?rule=ad-large',
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/22/80/55/2280556aa89cc7dbf8b5c1b9260ff53ccd1375f4.jpg?rule=ad-large',
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/b5/02/27/b50227f1e3570c7a90c479742b60348427336018.jpg?rule=ad-large',
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/40/a4/84/40a4847b4ff3b9ff5579ab504b4ccdb1bf1ed39b.jpg?rule=ad-large',
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/93/64/34/936434d5123c01172112507d13a2b012c8698555.jpg?rule=ad-large',
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/8b/3f/af/8b3faff1c711351ecfc68c5aba25345d8659fa41.jpg?rule=ad-large',
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/74/50/84/74508441cc8e8c50bafed0b6e74e4f4a3ad7b4e3.jpg?rule=ad-large',
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/cd/92/5c/cd925c4f87ec7a75acbd3a73f55c3e6edd3a48f6.jpg?rule=ad-large'
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
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/5e/59/89/5e5989d5937d82f6ef7fa78d8d3f936340dbb17a.jpg?rule=ad-large',
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/9d/5b/4f/9d5b4f644455c66cb132eefb365682bdda5b2f25.jpg?rule=ad-large',
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/df/e6/c4/dfe6c48fe56f0c1fdbf654b49e3f20bf0cdce7e4.jpg?rule=ad-large',
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/ec/28/59/ec28591ee5f37216b07e8664162d89b8edcab397.jpg?rule=ad-large',
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/e7/93/24/e79324a72489672c0b246377b08192582a95c660.jpg?rule=ad-large',
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/25/2c/b2/252cb277fdaefa1ce4e08aa7c68ede70d1b5cab5.jpg?rule=ad-large',
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/59/0c/43/590c43d09988a2b3063baab74fc606323e459040.jpg?rule=ad-large',
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/dc/77/6f/dc776fe224e2d6b68403aad04d3e672b30b28522.jpg?rule=ad-large',
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/4f/08/ce/4f08ce3bb826562b45b32d85e2cea1f44fb69a55.jpg?rule=ad-large',
      'https://img.leboncoin.fr/api/v1/lbcpb1/images/23/a1/d3/23a1d33edbf88c2f088e13a82b8fab55b8c3b0ea.jpg?rule=ad-large'
    ],
    miseEnCirculation: '12/2009',
    critAir: 'Non classé'
  }
];
