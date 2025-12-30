import React from 'react';
import { GHL_CONFIG } from '../App';
import Logo from './Logo';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-100 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center hover:opacity-90 transition-opacity">
            <Logo className="h-10 sm:h-12" />
          </a>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-bold text-slate-600">
            <a href="#how-it-works" className="hover:text-[#2563EB] transition-colors">How It Works</a>
            <a href="#benefits" className="hover:text-[#2563EB] transition-colors">Benefits</a>
            <a href="#strategic-ads" className="hover:text-[#2563EB] transition-colors">Strategic Ads</a>
            <a href="#faq" className="hover:text-[#2563EB] transition-colors">FAQ</a>
          </div>

          <div>
            <a 
              href={GHL_CONFIG.formUrl}
              className="btn-blue px-6 py-3 rounded-full text-white text-xs font-black tracking-widest inline-flex items-center uppercase"
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