import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '33783269802';
  const message = encodeURIComponent('Bonjour, je vous contacte via votre site M3 Automobile. Je suis intéressé par un de vos véhicules.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-all duration-300 group"
      aria-label="Nous contacter sur WhatsApp"
    >
      <MessageCircle className="size-7" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-gray-900 text-sm font-semibold px-4 py-2 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Discutons sur WhatsApp
      </span>
    </a>
  );
}
