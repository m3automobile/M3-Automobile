export default function PremiumBackground() {
  return (
    <div className="fixed inset-0 z-0 bg-[#060B12]">
      {/* Image de fond subtile — visible sur toutes les pages sauf accueil (qui a son propre hero par-dessus) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1920&q=80')`
        }}
      />

      {/* Overlay gradient léger pour garder la lisibilité du texte */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060B12]/60 via-[#0A1019]/50 to-[#060B12]/70"></div>

      {/* Effet de profondeur subtil bordeaux */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#8B2D3A]/3 via-transparent to-[#060B12]/40"></div>
    </div>
  );
}
