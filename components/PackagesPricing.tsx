import React from 'react';
import { Check, Sparkles, Target, Zap, Megaphone, Bot } from 'lucide-react';
import { GHL_CONFIG } from '../App';

const PackagesPricing: React.FC = () => {
  return (
    <section id="packages-pricing" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-[900] text-slate-900 mb-6 tracking-tight">
            Choose the Package That Matches Your <br className="hidden sm:block" />
            <span className="text-blue-600 underline decoration-blue-200 decoration-4 underline-offset-8">Appointment Goal + Budget</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto font-medium leading-relaxed">
            Whether you need more qualified appointments booked or you already have leads and simply need them converted into meetings, BloomLink gives you a clear path based on what you’re trying to achieve.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          
          {/* Package 1: Paid Ads + AI Appointment Setter */}
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-600 rounded-[3rem] blur-2xl opacity-5 group-hover:opacity-10 transition-opacity"></div>
            <div className="relative bg-white border border-slate-100 rounded-[3.5rem] p-8 sm:p-12 shadow-2xl shadow-blue-50 flex flex-col h-full overflow-hidden">
              <div className="absolute top-0 right-0 pt-8 pr-8">
                <Sparkles className="w-10 h-10 text-blue-100" />
              </div>
              
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                  Complete Growth Engine
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-2">Paid Ads + AI Appointment Setter</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-black text-slate-900">$2,000 - $3,000</span>
                  <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">/ Month</span>
                </div>
                <p className="text-sm font-bold text-blue-500 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded inline-block">
                  Next 3 Months
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-5 mb-8 border border-slate-100">
                <div className="flex items-center gap-3 text-slate-900 font-bold mb-1">
                  <Target className="w-5 h-5 text-blue-600" />
                  Performance Goal
                </div>
                <p className="text-sm text-slate-600 font-medium">
                  Targeting <span className="text-slate-900 font-black">10 appointments in 90 days</span> as a conservative minimum.
                </p>
              </div>

              <div className="space-y-8 flex-1">
                {/* Section A: Paid Ads */}
                <div>
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-4 flex items-center">
                    <Megaphone className="w-4 h-4 mr-2 text-blue-600" /> Paid Ads
                  </h4>
                  <ul className="space-y-3">
                    {["Meta (Facebook/Instagram) campaign setup + launch", "Ad creative + copy creation (multiple variations)", "Audience targeting (geo + interest)", "Weekly optimization", "Ad spend included up to your stated daily cap"].map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-slate-700 font-medium">
                        <Check className="w-4 h-4 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Section B: AI Setter */}
                <div>
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-4 flex items-center">
                    <Bot className="w-4 h-4 mr-2 text-blue-600" /> AI Appointment Setter
                  </h4>
                  <ul className="space-y-3">
                    {["AI inbound answering + qualification + booking", "Missed-call SMS", "Lead capture setup", "Calendar integration", "Weekly Reporting"].map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-slate-700 font-medium">
                        <Check className="w-4 h-4 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-12">
                <a href={GHL_CONFIG.formUrl} className="w-full bg-slate-900 text-white py-5 rounded-2xl text-center font-black uppercase tracking-widest hover:bg-slate-800 transition-colors block">
                  Select Package
                </a>
              </div>
            </div>
          </div>

          {/* Package 2: AI Appointment Setter Standalone */}
          <div className="relative group">
            <div className="relative bg-white border-4 border-slate-100 rounded-[3.5rem] p-8 sm:p-12 shadow-sm flex flex-col h-full overflow-hidden">
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-50 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                  Automation Only
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-2">AI Appointment Setter</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-black text-slate-900">$950</span>
                  <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">/ Month</span>
                </div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-3 py-1 rounded inline-block">
                  Next 3 Months
                </p>
              </div>

              <div className="space-y-8 flex-1">
                <div className="bg-blue-50/50 p-6 rounded-3xl border border-blue-100">
                  <p className="text-sm text-blue-700 font-bold italic leading-relaxed">
                    "Perfect if you already have a consistent flow of leads but need a system to ensure none go cold."
                  </p>
                </div>
                
                <ul className="space-y-5">
                  {[
                    { text: "AI inbound answering + qualification + booking", icon: Bot },
                    { text: "Missed-call SMS", icon: Zap },
                    { text: "Lead capture setup", icon: Target },
                    { text: "Calendar integration", icon: Check },
                    { text: "Weekly Reporting", icon: Check }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-slate-700 font-bold text-base">
                      <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mr-4">
                        <item.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12">
                <a href={GHL_CONFIG.formUrl} className="w-full border-4 border-slate-100 text-slate-900 py-5 rounded-2xl text-center font-black uppercase tracking-widest hover:bg-slate-50 transition-colors block">
                  Get Started
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Closing Sub-section */}
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-[3rem] p-10 sm:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-black mb-6">Need a Custom Strategy?</h3>
            <p className="text-lg text-slate-400 font-medium leading-relaxed mb-10">
              If you’re aiming for higher appointment targets, expanding into multiple markets, adding new agent teams, or want to scale your ad spend + booking volume, we can hop on a quick call to map out the right strategy and build a custom plan for your growth goals.
            </p>
            <a href={GHL_CONFIG.formUrl} className="inline-flex items-center btn-blue px-10 py-5 rounded-2xl text-white font-black uppercase tracking-widest">
              Book Your Growth Call →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PackagesPricing;