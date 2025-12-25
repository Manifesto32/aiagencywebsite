
import React from 'react';
import { ShieldCheck, Cpu, FastForward } from 'lucide-react';

const CTABlock: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[3rem] p-8 sm:p-16 text-center text-white relative overflow-hidden">
          {/* Subtle Background Art */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full filter blur-[100px] opacity-20 -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F0F9FF] rounded-full filter blur-[100px] opacity-10 -ml-32 -mb-32"></div>

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-5xl font-black mb-6 leading-tight">
              Ready to Never Miss Another Seller Lead?
            </h2>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
              Transform your lead response with cutting-edge AI that works 24/7. Join the first-to-market agents using Bloom Link AI Agency to automate their listings.
            </p>
            
            <div className="mb-12">
              <a 
                href="#getting-started"
                className="btn-blue px-10 py-5 rounded-full text-white text-xl font-bold inline-block shadow-xl shadow-blue-900/40"
              >
                Claim Your AI System Now →
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-400">
              <div className="flex items-center"><ShieldCheck className="w-5 h-5 mr-2 text-blue-400" /> No long-term contracts</div>
              <div className="flex items-center"><Cpu className="w-5 h-5 mr-2 text-blue-400" /> Seamless Integration</div>
              <div className="flex items-center"><FastForward className="w-5 h-5 mr-2 text-blue-400" /> Scalable Framework</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABlock;
