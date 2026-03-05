import logoHorizontal from "figma:asset/ad1a7cc2539a2df89fc694c8cddfeed609c1852a.png";

interface LogoHorizontalProps {
  className?: string;
  alt?: string;
}

export default function LogoHorizontal({ className = "h-20", alt = "M3 Automobile" }: LogoHorizontalProps) {
  return (
    <img 
      src={logoHorizontal} 
      alt={alt} 
      className={className}
    />
  );
}
