import { useState, useEffect } from 'react';

export interface Avis {
  id: string;
  nom: string;
  note: number;
  texte: string;
  vehicule: string;
  date: string;
  visible: boolean;
}

const API_URL = '/data/avis.json';

export function useAvis() {
  const [avis, setAvis] = useState<Avis[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchAvis() {
      try {
        const res = await fetch(API_URL);
        if (res.ok) {
          const data = await res.json();
          if (!cancelled) {
            setAvis(data);
          }
        }
      } catch {
        console.log('Erreur lors du chargement des avis');
        setError('Impossible de charger les avis');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchAvis();
    return () => { cancelled = true; };
  }, []);

  return { avis, loading, error };
}
