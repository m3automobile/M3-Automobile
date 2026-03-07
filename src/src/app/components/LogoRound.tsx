import logoRound from "figma:asset/95ebf21484d5e14302a6fb0724a2aa1a76aeb13a.png";

interface LogoRoundProps {
  className?: string;
  alt?: string;
}

export default function LogoRound({ className = "h-16 w-16", alt = "M3 Automobile" }: LogoRoundProps) {
  return (
    <img 
      src={logoRound} 
      alt={alt} 
      className={className}
    />
  );
}
