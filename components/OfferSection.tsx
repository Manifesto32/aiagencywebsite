import React from 'react';
import { ShieldCheck, Trophy, Sparkles } from 'lucide-react';
import { GHL_CONFIG } from '../App';

const OfferSection: React.FC = () => {
  return (
    <section id="offer" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 bg-blue-50/50 rounded-[4rem] -rotate-1 transform scale-105 -z-10"></div>
          <div className="absolute inset-0 border-4 border-dashed border-blue-200 rounded-[4rem] z-0"></div>

          <div className="relative z-10 p-8 sm:p-20 text-center">
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-black uppercase tracking-[0.2em] shadow-lg shadow-blue-200">
                <Trophy className="w-4 h-4 mr-2" />
                Exclusive Performance Guarantee
              </div>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-[900] text-slate-900 leading-[1.1] mb-10 tracking-tight">
              Get <span className="text-[#2563EB]">7 Qualified Listing Appointments</span> in <span className="text-[#2563EB]">90 days</span> or We <span className="text-red-600">WORK FOR FREE</span> until you do
            </h2>

            <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto font-medium leading-relaxed mb-12">
              Our AI instantly calls, qualifies, and books <span className="text-slate-900 font-bold underline decoration-blue-500 decoration-4">appointments 24/7</span> — while you focus on closing deals.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href={GHL_CONFIG.formUrl}
                className="btn-blue w-full sm:w-auto px-12 py-6 rounded-2xl text-white text-2xl font-black shadow-2xl shadow-blue-300 flex items-center justify-center"
              >
                <Sparkles className="w-6 h-6 mr-3" />
                Secure Your Market Now
              </a>
              <div className="flex items-center text-slate-500 font-bold text-lg">
                <ShieldCheck className="w-6 h-6 text-green-500 mr-2" />
                Risk-Free Performance Partnership
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;