interface LogoHorizontalProps {
  className?: string;
  alt?: string;
}

export default function LogoHorizontal({ className = "h-20", alt = "M3 Automobile" }: LogoHorizontalProps) {
  return (
    <div className={`${className} flex items-center`}>
      <svg 
        viewBox="0 0 280 80" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-full"
        role="img"
        aria-label={alt}
      >
        {/* M3 en premium */}
        <text 
          x="10" 
          y="55" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontSize="48" 
          fontWeight="700" 
          fill="url(#gradient)"
          letterSpacing="-0.02em"
        >
          M3
        </text>
        
        {/* Ligne verticale séparatrice */}
        <line 
          x1="95" 
          y1="20" 
          x2="95" 
          y2="60" 
          stroke="url(#gradient)" 
          strokeWidth="1.5"
          opacity="0.6"
        />
        
        {/* AUTOMOBILE */}
        <text 
          x="110" 
          y="42" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontSize="24" 
          fontWeight="300" 
          fill="#E5E7EB"
          letterSpacing="0.15em"
        >
          AUTOMOBILE
        </text>
        
        {/* Dégradé premium */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}