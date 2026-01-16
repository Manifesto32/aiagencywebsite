import React from 'react';
import { GHL_CONFIG } from '../App';
import Logo from './Logo';

interface NavbarProps {
  onLogoClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLogoClick }) => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-100 py-3" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <button 
            onClick={(e) => { e.preventDefault(); onLogoClick?.(); }}
            className="flex items-center hover:opacity-90 transition-opacity outline-none"
            aria-label="Return to Homepage"
          >
            <Logo className="h-10 sm:h-12" />
          </button>
          
          <div className="hidden md:flex items-center space-x-6 text-sm font-bold text-slate-600" role="menubar">
            <a href="/#how-it-works" className="hover:text-[#2563EB] transition-colors" role="menuitem">How It Works</a>
            <a href="/#ai-qualification" className="hover:text-[#2563EB] transition-colors" role="menuitem">AI Appointment Setter</a>
            <a href="/#strategic-ads" className="hover:text-[#2563EB] transition-colors" role="menuitem">Strategic Ads</a>
            <a href="/#benefits" className="hover:text-[#2563EB] transition-colors" role="menuitem">Benefits</a>
            <a href="/#faq" className="hover:text-[#2563EB] transition-colors" role="menuitem">FAQ</a>
          </div>

          <div>
            <a 
              href={GHL_CONFIG.formUrl}
              className="btn-blue px-6 py-3 rounded-full text-white text-xs font-black tracking-widest inline-flex items-center uppercase"
              aria-label="Get Started with AI Appointment Generation"
            >
              GET STARTED NOW →
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;