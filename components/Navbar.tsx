import React from 'react';
import { GHL_CONFIG } from '../App';
import Logo from './Logo';

interface NavbarProps {
  onLogoClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLogoClick }) => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-100 py-2.5" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <button 
            onClick={(e) => { e.preventDefault(); onLogoClick?.(); }}
            className="flex items-center hover:opacity-90 transition-opacity outline-none"
            aria-label="Return to Homepage"
          >
            <Logo className="h-8 sm:h-10" />
          </button>
          
          <div className="hidden md:flex items-center space-x-5 text-[13px] font-bold text-slate-600" role="menubar">
            <a href="/#how-it-works" className="hover:text-[#2563EB] transition-colors" role="menuitem">How It Works</a>
            <a href="/#benefits" className="hover:text-[#2563EB] transition-colors" role="menuitem">Benefits</a>
            <a href="/#faq" className="hover:text-[#2563EB] transition-colors" role="menuitem">FAQ</a>
          </div>

          <div>
            <a 
              href={GHL_CONFIG.formUrl}
              className="btn-blue px-5 py-2.5 rounded-full text-white text-[10px] font-black tracking-widest inline-flex items-center uppercase"
              aria-label="Get Started with AI Appointment Generation"
            >
              GET STARTED →
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;