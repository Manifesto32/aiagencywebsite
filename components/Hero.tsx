import React from 'react';
import { Phone, CheckCircle, MessageSquare, Calendar, Instagram, Facebook } from 'lucide-react';
import { GHL_CONFIG } from '../App';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
              We Generate Your Real Estate Leads.<br />
              Our AI Books Appointments Instantly.
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              We run Meta & Instagram paid ads for real estate agents, then our AI instantly calls, qualifies, and books listing appointments—24/7, even while you sleep.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <a 
                href={GHL_CONFIG.formUrl}
                className="btn-blue w-full sm:w-auto px-8 py-4 rounded-full text-white text-lg font-bold shadow-lg shadow-blue-200"
              >
                {GHL_CONFIG.buttonText} →
              </a>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-slate-500 font-medium">
              <span className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Appointment-Focused</span>
              <span className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> 24/7 AI Coverage</span>
              <span className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Fully Managed Ads</span>
            </div>
          </div>

          <div className="relative">
            {/* Visual Dialer Mockup - Designed as a Flow */}
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl border border-slate-100 p-4 sm:p-6 max-w-md mx-auto space-y-4">
              
              {/* Step 1: Meta/Instagram Ad Conversion */}
              <div className="relative p-4 rounded-2xl bg-blue-50 border border-blue-100 animate-in fade-in slide-in-from-right-4 duration-700">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex -space-x-1.5">
                    {/* Facebook Icon */}
                    <div className="w-7 h-7 bg-[#1877F2] rounded-full flex items-center justify-center text-white ring-2 ring-white shadow-sm">
                      <Facebook className="w-4 h-4 fill-current" />
                    </div>
                    {/* Instagram Icon with "Normal Colors" Gradient */}
                    <div className="w-7 h-7 bg-gradient-to-tr from-[#FFB13D] via-[#DD2A7B] to-[#8134AF] rounded-full flex items-center justify-center text-white ring-2 ring-white shadow-sm">
                      <Instagram className="w-4 h-4" />
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-100/50 px-2 py-0.5 rounded-md">Ad Performance: High</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-10 w-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm border border-slate-100">
                    <MessageSquare className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">New Seller Lead • Just Now</p>
                    <p className="font-bold text-slate-900 text-sm">Sarah Jenkins • 742 Evergreen Terrace</p>
                    <p className="text-xs text-slate-500">Goal: "Selling within 3 months"</p>
                  </div>
                </div>
              </div>

              {/* Step 2: AI Dialer Active */}
              <div className="relative p-5 rounded-2xl bg-[#F0F9FF] border border-blue-100 shadow-inner animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-md">
                      <Phone className="w-5 h-5 text-[#2563EB] animate-pulse" />
                    </div>
                    <div className="ml-3">
                      <p className="text-[10px] font-bold text-[#2563EB] uppercase tracking-widest leading-none">AI Agent Calling...</p>
                      <p className="font-bold text-slate-900 text-base">Qualifying Sarah</p>
                    </div>
                  </div>
                  <div className="px-2 py-1 bg-white/60 rounded-md text-[10px] font-mono font-bold text-[#2563EB]">
                    00:42
                  </div>
                </div>
                <div className="bg-white/40 p-3 rounded-xl">
                  <p className="text-[11px] text-slate-800 font-medium leading-relaxed italic">
                    "Hi Sarah! Great property on Evergreen Terrace. Since you're looking to list in the next 90 days, would Friday at 4 PM work for a valuation walk-through?"
                  </p>
                </div>
              </div>

              {/* Step 3: Appointment Booked */}
              <div className="flex items-center space-x-4 p-4 rounded-2xl border-2 border-green-200 bg-green-50 shadow-sm animate-in fade-in slide-in-from-right-12 duration-1000 delay-700">
                <div className="h-10 w-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-200">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[10px] text-green-600 font-bold uppercase tracking-wider">Listing Appointment Booked</p>
                      <p className="font-bold text-slate-900 text-sm">Friday, 4:00 PM</p>
                    </div>
                    <div className="bg-green-100 text-green-700 text-[9px] px-2 py-0.5 rounded-full font-bold">Confirmed</div>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1">Calendar notification sent to your phone</p>
                </div>
              </div>
            </div>
            
            {/* Background Decorations */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#F0F9FF] rounded-full mix-blend-multiply filter blur-3xl opacity-50 -z-10 animate-blob"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -z-10 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;