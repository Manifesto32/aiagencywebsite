import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'white';
}

/**
 * To ensure the logo is NEVER modified, we use the actual image file.
 * Save your logo as 'logo.png' in the root folder.
 * If you have a different file format (like .svg or .jpg), change the src accordingly.
 */
const Logo: React.FC<LogoProps> = ({ className = "h-16" }) => {
  return (
    <div className="flex items-center">
      <img 
        src="/logo.png" 
        alt="Bloom Link AI Agency" 
        className={`${className} w-auto object-contain block`}
        style={{ maxWidth: 'none' }}
        onError={(e) => {
          // If the image hasn't been uploaded yet, show a clean fallback
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const parent = target.parentElement;
          if (parent) {
            parent.innerHTML = '<span class="text-2xl font-black text-[#0000CC]">Bloom Link <span class="text-slate-800">AI Agency</span></span>';
          }
        }}
      />
    </div>
  );
};

export default Logo;