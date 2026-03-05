import { Outlet, Link, useLocation } from 'react-router';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import LogoHorizontal from './LogoHorizontal';

export default function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-x-hidden">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-700">
        <div className="container mx-auto px-3 md:px-6 py-2 md:py-3">
          <div className="flex items-center justify-between lg:justify-between">
            {/* Mobile menu button - Left side on mobile */}
            <button
              className="lg:hidden text-white p-1 -ml-1 order-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="size-6 md:size-7" /> : <Menu className="size-6 md:size-7" />}
            </button>

            {/* Logo - Center on mobile, left on desktop */}
            <Link to="/" className="flex items-center gap-2 md:gap-3 order-2 lg:order-1 absolute left-1/2 -translate-x-1/2 lg:relative lg:left-auto lg:translate-x-0">
              <LogoHorizontal className="h-12 md:h-16 object-contain" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 order-3 lg:order-2">
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

            <div className="hidden lg:flex gap-3 order-4 lg:order-3">
              <a href="tel:0783269802">
                <Button className="bg-white hover:bg-gray-100 text-gray-900 font-semibold px-4 py-2 text-sm shadow-lg">
                  <Phone className="size-4 mr-2" />
                  07 83 26 98 02
                </Button>
              </a>
            </div>

            {/* Spacer for mobile to balance layout */}
            <div className="lg:hidden w-8 order-3"></div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg transition-colors text-sm md:text-base ${
                    isActive(item.href)
                      ? 'bg-white/10 text-white font-semibold'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a href="tel:0783269802" className="mt-2">
                <Button className="w-full bg-white hover:bg-gray-100 text-gray-900 font-semibold py-5 md:py-6">
                  <Phone className="size-4 md:size-5 mr-2" />
                  07 83 26 98 02
                </Button>
              </a>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="overflow-x-hidden">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-md text-white py-8 md:py-12 mt-12 md:mt-20 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            <div>
              <div className="mb-4">
                <LogoHorizontal className="h-20 object-contain" />
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
                <li>L'Isle-Adam (95290)</li>
                <li><a href="tel:0783269802" className="hover:text-white transition-colors">07 83 26 98 02</a></li>
                <li><a href="mailto:m3.automobil@gmail.com" className="hover:text-white transition-colors">m3.automobil@gmail.com</a></li>
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