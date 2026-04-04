import { Car, ArrowLeft, Search } from 'lucide-react';
import { Link } from 'react-router';
import PremiumBackground from '../components/PremiumBackground';

export default function NotFoundPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <PremiumBackground />
      <div className="relative z-10 container mx-auto px-4 py-24 md:py-40 text-center">
        <div className="max-w-lg mx-auto">
          <Car className="size-24 text-gray-600 mx-auto mb-8" />
          <h1 className="text-6xl md:text-8xl font-black text-white mb-4">404</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-2">Page introuvable</p>
          <p className="text-gray-500 mb-10">La page que vous recherchez n'existe pas ou a été déplacée.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors"
            >
              <ArrowLeft className="size-4" />
              Retour à l'accueil
            </Link>
            <Link
              to="/vehicules"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/20 transition-colors border border-white/10"
            >
              <Search className="size-4" />
              Voir nos véhicules
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
