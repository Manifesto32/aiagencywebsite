
import React from 'react';
import { GHL_CONFIG } from '../App';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-100 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="h-8 w-8 bg-[#F0F9FF] rounded-lg mr-2 flex items-center justify-center">
              <span className="text-[#2563EB] font-bold">B</span>
            </div>
            <span className="text-xl font-bold tracking-tight">Bloom Link <span className="text-slate-500">AI Agency</span></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
            <a href="#how-it-works" className="hover:text-[#2563EB] transition-colors">How It Works</a>
            <a href="#benefits" className="hover:text-[#2563EB] transition-colors">Benefits</a>
            <a href="#strategic-ads" className="hover:text-[#2563EB] transition-colors">Strategic Ads</a>
            <a href="#faq" className="hover:text-[#2563EB] transition-colors">FAQ</a>
          </div>

          <div>
            <a 
              href={GHL_CONFIG.formUrl}
              className="ghl-cta-button btn-blue px-5 py-2.5 rounded-full text-white text-sm font-semibold inline-flex items-center"
            >
              Get Started Now →
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
