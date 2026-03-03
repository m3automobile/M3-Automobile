import { Outlet, Link, useLocation } from 'react-router';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

export default function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Logos M3 Automobile (placeholders SVG)
  const logoRound = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='48' fill='%23000' stroke='%23fff' stroke-width='2'/%3E%3Ctext x='50' y='60' font-family='Arial' font-size='40' font-weight='bold' fill='%23fff' text-anchor='middle'%3EM3%3C/text%3E%3C/svg%3E";
  const logoHorizontal = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 80'%3E%3Crect width='300' height='80' fill='%23000' rx='8'/%3E%3Ctext x='150' y='55' font-family='Arial' font-size='36' font-weight='bold' fill='%23fff' text-anchor='middle'%3EM3 AUTOMOBILE%3C/text%3E%3C/svg%3E";

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Nos Véhicules', href: '/vehicules' },
    { name: 'Recherche Personnalisée', href: '/recherche-personnalisee' },
    { name: 'Garanties', href: '/garanties' },
    { name: 'Mandat de Vente', href: '/mandat-vente' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-4">
              <img src={logoRound} alt="M3 Automobile" className="h-16 w-16 object-contain" />
              <div>
                <h1 className="text-3xl font-bold text-white">M3 Automobile</h1>
                <p className="text-xs text-gray-300 mt-1">VENTE - RECHERCHE - DÉPÔT/VENTE</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    isActive(item.href)
                      ? 'bg-white/10 text-white font-semibold'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex gap-3">
              <a href="tel:0783269802">
                <Button className="bg-white hover:bg-gray-100 text-gray-900 font-semibold px-6 py-6 text-base shadow-lg">
                  <Phone className="size-5 mr-2" />
                  07 83 26 98 02
                </Button>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="size-8" /> : <Menu className="size-8" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg transition-colors ${
                    isActive(item.href)
                      ? 'bg-white/10 text-white font-semibold'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a href="tel:0783269802" className="mt-2">
                <Button className="w-full bg-white hover:bg-gray-100 text-gray-900 font-semibold py-6">
                  <Phone className="size-5 mr-2" />
                  07 83 26 98 02
                </Button>
              </a>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-md text-white py-12 mt-20 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <img src={logoHorizontal} alt="M3 Automobile" className="h-20 object-contain" />
              </div>
              <p className="text-gray-400">Votre partenaire de confiance pour l'achat de véhicules d'occasion avec garantie.</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Navigation</h4>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-gray-400 hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📍 3 rue de l'Abbé Breuil</li>
                <li className="ml-5">L'Isle-Adam 95290</li>
                <li>📞 <a href="tel:0783269802" className="hover:text-white transition-colors">07 83 26 98 02</a></li>
                <li>✉️ <a href="mailto:m3.automobil@gmail.com" className="hover:text-white transition-colors">m3.automobil@gmail.com</a></li>
                <li>🕒 Lun - Sam : 9h - 19h</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 M3 Automobile - SIRET : 100 150 168 00019</p>
            <p className="text-sm mt-2">Tous droits réservés. Roulez l'esprit libre.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}