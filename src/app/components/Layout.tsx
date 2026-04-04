import { Outlet, Link, useLocation } from 'react-router';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useState, useEffect } from 'react';
import LogoHorizontal from './LogoHorizontal.png';
import WhatsAppButton from './WhatsAppButton';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"

export default function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);

  // Remonter en haut de page à chaque changement de route
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Nos Véhicules', href: '/vehicules' },
    { name: 'Recherche Personnalisée', href: '/recherche-personnalisee' },
    { name: 'Prendre RDV', href: '/rendez-vous' },
    { name: 'Garanties', href: '/garanties' },
    { name: 'Mandat de Vente', href: '/mandat-vente' },
    { name: 'Qui sommes-nous', href: '/qui-sommes-nous' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#060B12] via-[#0A1019] to-[#060B12] overflow-x-hidden">
      {/* Header FIXE - toujours visible */}
      <header className="bg-[#060B12]/50 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
  <div className="container mx-auto px-3 md:px-6 py-4 md:py-3">
    <div className="flex items-center justify-between">
      
      {/* SPACER GAUCHE (pour équilibrer le bouton à droite) */}
      <div className="lg:hidden w-8 order-1"></div>

      {/* Logo - CENTRÉ */}
      <Link to="/" className="flex flex-col items-center gap-1 order-2 absolute left-1/2 -translate-x-1/2 lg:relative lg:left-auto lg:translate-x-0">
        <img src={LogoHorizontal} className="h-14 md:h-14 lg:h-16 object-contain" alt="M3 Automobile" />
        <p className="text-[10px] text-gray-400 italic hidden md:block">Le bon sens automobile.</p>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-1 order-3">
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

      {/* Bouton téléphone Desktop */}
      <div className="hidden lg:flex gap-3 order-4">
        <a href="tel:0783269802">
          <Button className="bg-[#8B2D3A] hover:bg-[#A63D4D] text-white font-semibold px-4 py-2 text-sm shadow-lg transition-all">
            <Phone className="size-4 mr-2" />
            07 83 26 98 02
          </Button>
        </a>
      </div>

      {/* BOUTON MENU - À DROITE sur mobile */}
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger asChild>
          <button
            className="lg:hidden text-white p-1 -mr-1 order-3"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="size-7 md:size-8" /> : <Menu className="size-7 md:size-8" />}
          </button>
        </SheetTrigger>
        
        <SheetContent side="right" className="w-[300px] bg-[#0A1019] border-white/10">
          <SheetHeader>
            <SheetTitle className="text-white text-left">Menu</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-2 mt-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => {
                  setMobileMenuOpen(false);
                  setSheetOpen(false);
                }}
                className={`px-4 py-3 rounded-lg transition-colors text-base ${
                  isActive(item.href)
                    ? 'bg-white/10 text-white font-semibold'
                  : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a href="tel:0783269802" className="mt-4" onClick={() => setSheetOpen(false)}>
              <Button className="w-full bg-[#8B2D3A] hover:bg-[#A63D4D] text-white font-semibold py-6">
                <Phone className="size-5 mr-2" />
                07 83 26 98 02
              </Button>
            </a>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  </div>
</header>

      {/* Main Content avec padding-top pour compenser le header fixe */}
      <main className="overflow-x-hidden pt-20 md:pt-24">
        <Outlet />
      </main>

      {/* WhatsApp flottant */}
      <WhatsAppButton />

      {/* Footer */}
      <footer className="bg-[#040810]/80 backdrop-blur-md text-white py-8 md:py-12 mt-12 md:mt-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            <div>
              <div className="mb-4">
                <img src={LogoHorizontal} className="h-10 md:h-14 lg:h-16 object-contain " alt="M3 Automobile" />
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
            <div className="flex flex-wrap justify-center gap-4 mt-2 text-sm">
              <p>Tous droits réservés. Roulez l'esprit libre.</p>
              <Link to="/mentions-legales" className="hover:text-white underline underline-offset-4 transition-colors">
                Mentions Légales
              </Link>
              <Link to="/politique-de-confidentialite" className="hover:text-white underline underline-offset-4 transition-colors">
                Politique de Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
