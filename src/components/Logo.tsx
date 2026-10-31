import React from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'dark', className = '' }) => {
  const isLight = variant === 'light';
  return (
    <Link href="/" className={`inline-flex items-center gap-3 ${className}`} aria-label="Valve Bridge Home">
      <div className="relative flex items-center justify-center">
        <svg className="w-10 h-10" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="44" height="44" rx="10" fill={isLight ? "#f59e0b" : "#0b1f3a"} />
          <path d="M12 28C15 21 29 21 32 28" stroke={isLight ? "#0b1f3a" : "#f59e0b"} strokeWidth="3" strokeLinecap="round" />
          <path d="M22 13V25" stroke={isLight ? "#0b1f3a" : "#f59e0b"} strokeWidth="3" strokeLinecap="round" />
          <circle cx="22" cy="13" r="3.5" fill={isLight ? "#0b1f3a" : "#38bdf8"} />
          <path d="M17 13H27" stroke={isLight ? "#0b1f3a" : "#38bdf8"} strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className={`font-display text-xl font-extrabold tracking-tight ${isLight ? 'text-white' : 'text-navy'}`}>
          VALVE<span className="text-amber">BRIDGE</span>
        </span>
        <span className={`text-[9px] font-bold tracking-[0.25em] uppercase -mt-1 ${isLight ? 'text-white/60' : 'text-muted-foreground'}`}>
          Global Sourcing
        </span>
      </div>
    </Link>
  );
};
