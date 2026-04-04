import { useState, useEffect, useCallback } from 'react';

export interface Avis {
  id: string;
  nom: string;
  note: number;
  texte: string;
  vehicule: string;
  date: string;
  visible: boolean;
}

const API_URL = '/api/avis';

export function useAvis() {
  const [avis, setAvis] = useState<Avis[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAvis = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      if (res.ok) {
        const data = await res.json();
        // Côté public : on n'affiche que les avis visibles
        setAvis(data.filter((a: Avis) => a.visible));
        setError(null);
      }
    } catch {
      setError('Impossible de charger les avis');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAvis();
  }, [fetchAvis]);

  return { avis, loading, error, refetch: fetchAvis };
}
