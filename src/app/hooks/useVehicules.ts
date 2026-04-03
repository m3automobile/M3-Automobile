import { useState, useEffect } from 'react';
import { vehicules as staticVehicules, type Vehicule } from '../data/vehicules';

const API_URL = '/api/vehicules';

export function useVehicules() {
  const [vehicules, setVehicules] = useState<Vehicule[]>(staticVehicules);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchVehicules() {
      try {
        const res = await fetch(API_URL);
        if (res.ok) {
          const data = await res.json();
          if (!cancelled && data.length > 0) {
            setVehicules(data);
          }
        }
      } catch {
        // API not available (dev mode or error), keep static data
        console.log('API non disponible, utilisation des données statiques');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchVehicules();
    return () => { cancelled = true; };
  }, []);

  return { vehicules, loading, error };
}
