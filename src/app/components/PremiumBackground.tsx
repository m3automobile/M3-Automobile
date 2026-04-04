import { ImageWithFallback } from './figma/ImageWithFallback';

export default function PremiumBackground() {
  return (
    <div className="fixed inset-0 z-0 bg-[#060B12]">
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1760553120264-98dd3d59fc02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwYWJzdHJhY3QlMjBsdXh1cnklMjBhdXRvbW90aXZlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzI1NzA1MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
        alt="Abstract automotive background"
        className="w-full h-full object-cover opacity-10"
      />
      {/* Overlay gradient pour garder la lisibilité et le côté sombre */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060B12]/95 via-[#0A1019]/90 to-[#060B12]/95"></div>

      {/* Effet de profondeur subtil avec teinte dorée très légère */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#8B2D3A]/3 via-transparent to-[#060B12]/40"></div>
    </div>
  );
}
