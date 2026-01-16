
import React from 'react';
import { Check, Sparkles, Target, Zap, Megaphone, Bot, Clock, Database } from 'lucide-react';
import { GHL_CONFIG } from '../App';

// Complete component definition for PackagesPricing
const PackagesPricing: React.FC = () => {
  return (
    <section id="packages-pricing" className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight">
            Choose Your <span className="text-blue-600 underline decoration-blue-200 decoration-2 underline-offset-4">Goal + Budget</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
            BloomLink gives you a clear path based on your targets.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          
          {/* AI Appointment Setter Standalone */}
          <div className="relative group">
            <div className="relative bg-white border-2 border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col h-full overflow-hidden text-left">
              <div className="mb-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-50 text-slate-500 text-[8px] font-black uppercase tracking-widest mb-4">
                  Growth Starter
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">AI Appointment Setter</h3>
                <p className="text-xs text-slate-500 font-medium">Standalone System</p>
              </div>

              <div className="mb-8 border-b border-slate-50 pb-8">
                <div className="flex items-baseline">
                  <span className="text-3xl font-black text-slate-900">$2,500</span>
                  <span className="text-slate-500 text-xs font-bold ml-2">/ 90-day term</span>
                </div>
                <p className="text-[10px] text-slate-400 mt-2 font-medium italic">Or 3 monthly payments of $950</p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {[
                  "Custom AI Voice Agent Configuration",
                  "24/7 Instant Lead Qualification",
                  "Direct Calendar Integration",
                  "Automatic SMS Follow-ups",
                  "Standard CRM Connection"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-xs text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-blue-600 mr-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <a 
                href={GHL_CONFIG.formUrl}
                className="w-full py-4 rounded-xl bg-slate-900 text-white text-xs font-black uppercase tracking-widest text-center hover:bg-slate-800 transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Managed Ads + AI Setter (Premium) */}
          <div className="relative group">
            {/* Guarantee Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
              <div className="bg-blue-600 text-white text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                Performance Guarantee
              </div>
            </div>

            <div className="relative bg-white border-2 border-blue-600 rounded-2xl p-6 sm:p-8 shadow-xl shadow-blue-50 flex flex-col h-full overflow-hidden text-left">
              <div className="mb-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[8px] font-black uppercase tracking-widest mb-4">
                  Elite Scale
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Managed Ads + AI Setter</h3>
                <p className="text-xs text-blue-600 font-bold">The Complete System</p>
              </div>

              <div className="mb-8 border-b border-blue-50 pb-8">
                <div className="flex items-baseline">
                  <span className="text-3xl font-black text-slate-900">$5,000</span>
                  <span className="text-slate-500 text-xs font-bold ml-2">/ 90-day term</span>
                </div>
                <p className="text-[10px] text-slate-400 mt-2 font-medium italic">Or 3 monthly payments of $2,000</p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {[
                  "7 Guaranteed Listing Appts or Work for Free",
                  "Custom Meta & Instagram Ad Campaigns",
                  "High-Converting Ad Creative Lab Assets",
                  "AI Appointment Setter Full Suite",
                  "VIP CRM & Tech Stack Integration",
                  "Daily Campaign Optimization"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-xs text-slate-700 font-bold">
                    <Check className="w-4 h-4 text-blue-600 mr-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <a 
                href={GHL_CONFIG.formUrl}
                className="w-full py-4 rounded-xl bg-blue-600 text-white text-xs font-black uppercase tracking-widest text-center hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all hover:-translate-y-0.5"
              >
                Claim Territory Now
              </a>
            </div>
          </div>

        </div>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[10px] text-slate-400 font-medium leading-relaxed italic">
            *Performance guarantee applies exclusively to the "Managed Paid Ads + AI Appointment Setter" package. Minimum recommended ad spend of $30/day applies.
          </p>
        </div>
      </div>
    </section>
  );
};

// Fixed missing default export
export default PackagesPricing;
