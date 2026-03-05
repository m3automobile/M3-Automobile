import logoHorizontal from './logo-m3-horizontal.png';

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
