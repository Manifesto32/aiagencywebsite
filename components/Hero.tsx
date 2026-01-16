import React from 'react';
import { Phone, CheckCircle, MessageSquare, Calendar, Instagram, Facebook } from 'lucide-react';
import { GHL_CONFIG } from '../App';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-12 lg:pt-12 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-3 tracking-tight">
              Stop Chasing Leads. Let AI Book the Appointment for Realtors.
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mb-5 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Our AI engages leads in authentic conversations, qualifies them properly, and books showings directly to your calendar. Use your current leads—or we can run the ads too.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-5">
              <a 
                href={GHL_CONFIG.formUrl}
                className="btn-blue w-full sm:w-auto px-5 py-3 rounded-full text-white text-sm font-bold shadow-md shadow-blue-200 text-center"
              >
                {GHL_CONFIG.buttonText} →
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1.5 text-[10px] text-slate-500 font-semibold">
              <span className="flex items-center"><CheckCircle className="w-3 h-3 text-green-500 mr-1" aria-hidden="true" /> Appointment-Focused</span>
              <span className="flex items-center"><CheckCircle className="w-3 h-3 text-green-500 mr-1" aria-hidden="true" /> 24/7 AI Coverage</span>
              <span className="flex items-center"><CheckCircle className="w-3 h-3 text-green-500 mr-1" aria-hidden="true" /> Fully Managed Ads</span>
            </div>
          </div>

          <div className="relative mt-4 lg:mt-0" aria-label="Visual representation of the AI lead conversion process">
            <div className="relative z-10 bg-white rounded-xl shadow-lg border border-slate-100 p-3 sm:p-4 max-w-xs mx-auto space-y-2">
              <div className="relative p-2.5 rounded-lg bg-blue-50 border border-blue-100">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex -space-x-1">
                    <div className="w-5 h-5 bg-[#1877F2] rounded-full flex items-center justify-center text-white ring-2 ring-white">
                      <Facebook className="w-2.5 h-2.5 fill-current" />
                    </div>
                    <div className="w-5 h-5 bg-gradient-to-tr from-[#FFB13D] via-[#DD2A7B] to-[#8134AF] rounded-full flex items-center justify-center text-white ring-2 ring-white">
                      <Instagram className="w-2.5 h-2.5" />
                    </div>
                  </div>
                  <span className="text-[8px] font-bold text-blue-600 uppercase tracking-widest bg-blue-100/50 px-1 py-0.5 rounded">Ad Performance High</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="h-7 w-7 bg-white rounded flex items-center justify-center flex-shrink-0 border border-slate-100">
                    <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-[7px] text-slate-400 font-bold uppercase tracking-wider">New Seller Lead • Just Now</p>
                    <p className="font-bold text-slate-900 text-[10px]">Sarah Jenkins • 742 Evergreen</p>
                  </div>
                </div>
              </div>

              <div className="relative p-3 rounded-lg bg-[#F0F9FF] border border-blue-100 shadow-inner">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center">
                    <div className="h-7 w-7 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <Phone className="w-3.5 h-3.5 text-[#2563EB] animate-pulse" />
                    </div>
                    <div className="ml-1.5">
                      <p className="text-[7px] font-bold text-[#2563EB] uppercase tracking-widest leading-none">AI Agent Calling...</p>
                      <p className="font-bold text-slate-900 text-xs">Qualifying Sarah</p>
                    </div>
                  </div>
                  <div className="px-1 py-0.5 bg-white/60 rounded text-[8px] font-mono font-bold text-[#2563EB]">00:42</div>
                </div>
                <div className="bg-white/40 p-1.5 rounded-md">
                  <p className="text-[9px] text-slate-800 font-medium italic leading-tight">
                    "Hi Sarah! Great property on Evergreen Terrace. Would Friday work for a valuation?"
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2 p-2.5 rounded-lg border border-green-200 bg-green-50">
                <div className="h-7 w-7 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[7px] text-green-600 font-bold uppercase tracking-wider">Appointment Booked</p>
                      <p className="font-bold text-slate-900 text-[10px]">Friday, 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-40 h-40 bg-[#F0F9FF] rounded-full blur-2xl opacity-40 -z-10 animate-blob"></div>
            <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-blue-100 rounded-full blur-2xl opacity-40 -z-10 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;