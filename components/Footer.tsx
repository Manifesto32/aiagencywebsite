import React from 'react';

interface FooterProps {
  onPrivacyClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onPrivacyClick }) => {
  return (
    <footer className="relative bg-[#2563EB] pt-16 pb-8 text-white overflow-hidden">
      {/* Premium Atmospheric Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-black/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            {/* Text-based branding to replace problematic image logo */}
            <div className="mb-6 flex flex-col font-garet">
              <span className="text-white text-2xl sm:text-3xl font-[900] leading-[0.9] tracking-tight whitespace-nowrap">
                Bloom Link
              </span>
              <span className="text-blue-100/90 text-[11px] font-bold uppercase tracking-[0.3em] leading-none mt-2 whitespace-nowrap">
                AI Agency
              </span>
            </div>
            <p className="text-blue-50 max-w-sm mb-6 font-medium leading-relaxed">
              We create high-converting Paid Ad Campaigns and Appointment Generation Systems that turn those leads into booked appointments—starting with high-intent real estate sellers and buyers.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6 opacity-80">Explore</h4>
            <ul className="space-y-4 text-sm font-medium text-blue-100">
              <li><a href="/#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="/#benefits" className="hover:text-white transition-colors">Benefits</a></li>
              <li><a href="/#getting-started" className="hover:text-white transition-colors">Success Path</a></li>
              <li><a href="/#faq" className="hover:text-white transition-colors">Questions</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6 opacity-80">Contact</h4>
            <ul className="space-y-4 text-sm font-medium text-blue-100">
              <li><a href="mailto:lawong323@gmail.com" className="hover:text-white transition-colors">lawong323@gmail.com</a></li>
              <li><span className="text-blue-200">Based in the USA</span></li>
              <li><a href="#" className="hover:text-white transition-colors">Schedule a Call</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-semibold text-blue-200 tracking-wide uppercase">
          <p>© 2025 Bloom Link AI Agency. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button 
              onClick={(e) => { e.preventDefault(); onPrivacyClick?.(); }}
              className="hover:text-white transition-colors outline-none"
            >
              Privacy Policy
            </button>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;