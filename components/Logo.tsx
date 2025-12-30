import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'white';
}

/**
 * Logo component for Bloom Link AI Agency.
 * Optimized for seamless integration into various backgrounds.
 */
const Logo: React.FC<LogoProps> = ({ className = "h-10 sm:h-12", variant = 'default' }) => {
  const [hasError, setHasError] = useState(false);
  
  const isWhite = variant === 'white';
  
  // Logic-driven asset selection
  const logoUrl = isWhite 
    ? "https://lh3.googleusercontent.com/d/1fEZ9a3_0-eF2EFz-vWp5U8iGb3zgkcWX" 
    : "https://lh3.googleusercontent.com/d/1Aotb1REPz267bngjDimyGAtg5yQMQ849";

  const brandTextColor = isWhite ? 'text-white' : 'text-[#2563EB]';
  const agencyTextColor = isWhite ? 'text-blue-100/90' : 'text-slate-900';

  /**
   * SEAMLESS BACKGROUND REMOVAL LOGIC:
   * To hide the 'darker blue square' on the logo icon in the footer:
   * 
   * 1. 'mix-blend-mode: screen' makes anything black 100% transparent.
   * 2. We apply 'grayscale(100%)' and 'brightness(0.6)'. This turns the blue background 
   *    into a very dark gray/black that is darker than the footer's #2563EB blue.
   * 3. Because it's now darker than the background, the 'screen' mode effectively 
   *    replaces those pixels with the footer's blue, creating a perfect, uniform blend.
   * 4. This preserves the high-quality anti-aliased edges of the white icon.
   */
  const imgStyle: React.CSSProperties = isWhite ? { 
    maxWidth: 'none', 
    display: 'block',
    mixBlendMode: 'screen',
    filter: 'grayscale(100%) brightness(0.6) contrast(1.1)',
    opacity: 1,
    transition: 'opacity 0.3s ease'
  } : { 
    maxWidth: 'none', 
    display: 'block' 
  };

  return (
    <div className="flex items-center gap-3 select-none">
      {/* The Graphic Mark */}
      {!hasError && (
        <img 
          src={logoUrl} 
          alt="Bloom Link Icon" 
          className={`${className} w-auto object-contain block shrink-0`}
          style={imgStyle}
          loading="eager"
          onError={() => setHasError(true)}
        />
      )}

      {/* Fallback Icon */}
      {hasError && (
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-xl ${isWhite ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'}`}>
          B
        </div>
      )}
      
      {/* Brand Typography */}
      <div className="flex flex-col justify-center font-garet">
        <span className={`${brandTextColor} text-lg sm:text-2xl font-[900] leading-[0.9] tracking-tight whitespace-nowrap transition-colors duration-300`}>
          Bloom Link
        </span>
        <span className={`${agencyTextColor} text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] leading-none mt-1.5 whitespace-nowrap transition-colors duration-300`}>
          AI Agency
        </span>
      </div>
    </div>
  );
};

export default Logo;