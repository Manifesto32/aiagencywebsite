import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2563EB] pt-16 pb-8 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <Logo className="h-12" variant="white" />
            </div>
            <p className="text-blue-50 max-w-sm mb-6 font-medium leading-relaxed">
              We create high-converting Paid Ad Campaigns and Appointment Generation Systems that turn those leads into booked appointments—starting with high-intent real estate sellers and buyers.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6 opacity-80">Explore</h4>
            <ul className="space-y-4 text-sm font-medium text-blue-100">
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#benefits" className="hover:text-white transition-colors">Benefits</a></li>
              <li><a href="#getting-started" className="hover:text-white transition-colors">Success Path</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Questions</a></li>
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
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;