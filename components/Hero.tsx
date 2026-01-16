import React from 'react';
import { Phone, CheckCircle, MessageSquare, Calendar, Instagram, Facebook } from 'lucide-react';
import { GHL_CONFIG } from '../App';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Headline & Subtext Area */}
          <div className="max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-[900] text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Stop Chasing Leads. Let AI Book the Appointment for <span className="text-blue-600">Realtors.</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
              Our AI engages leads in authentic conversations, qualifies them properly, and books showings directly to your calendar. Use your current leads—or we can run the ads too.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a 
                href={GHL_CONFIG.formUrl}
                className="btn-blue w-full sm:w-auto px-8 py-5 rounded-full text-white text-lg font-black shadow-xl shadow-blue-200 text-center uppercase tracking-wider"
              >
                {GHL_CONFIG.buttonText} →
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:text-sm text-slate-500 font-bold uppercase tracking-widest">
              <span className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" aria-hidden="true" /> Appointment-Focused</span>
              <span className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" aria-hidden="true" /> 24/7 AI Coverage</span>
              <span className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" aria-hidden="true" /> Fully Managed Ads</span>
            </div>
          </div>

          {/* Visual Aid Area - Moved to Bottom and Made Bigger */}
          <div className="relative w-full max-w-3xl mt-4" aria-label="Visual representation of the AI lead conversion process">
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-10 space-y-4 sm:space-y-6">
              
              {/* Step 1: Ad Discovery */}
              <div className="relative p-4 sm:p-6 rounded-2xl bg-blue-50 border border-blue-100 transform transition-transform hover:scale-[1.02] duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-[#1877F2] rounded-full flex items-center justify-center text-white ring-4 ring-white">
                      <Facebook className="w-4 h-4 fill-current" />
                    </div>
                    <div className="w-8 h-8 bg-gradient-to-tr from-[#FFB13D] via-[#DD2A7B] to-[#8134AF] rounded-full flex items-center justify-center text-white ring-4 ring-white">
                      <Instagram className="w-4 h-4" />
                    </div>
                  </div>
                  <span className="text-[10px] sm:text-xs font-black text-blue-600 uppercase tracking-[0.2em] bg-blue-100/50 px-3 py-1 rounded-full">High Performance Ad</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm border border-slate-100">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">New Seller Lead Detected</p>
                    <p className="font-black text-slate-900 text-sm sm:text-lg">Sarah Jenkins • 742 Evergreen Terrace</p>
                  </div>
                </div>
              </div>

              {/* Step 2: AI Qualification */}
              <div className="relative p-5 sm:p-8 rounded-2xl bg-[#F0F9FF] border border-blue-100 shadow-inner transform transition-transform hover:scale-[1.02] duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-md">
                      <Phone className="w-6 h-6 text-[#2563EB] animate-pulse" />
                    </div>
                    <div className="ml-4 text-left">
                      <p className="text-[10px] font-black text-[#2563EB] uppercase tracking-[0.2em] leading-none mb-1">AI Agent Calling...</p>
                      <p className="font-black text-slate-900 text-base sm:text-xl">Qualifying Motivation</p>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-white/80 rounded-full text-xs sm:text-sm font-mono font-black text-[#2563EB]">00:42</div>
                </div>
                <div className="bg-white/60 p-4 rounded-xl border border-blue-50">
                  <p className="text-xs sm:text-base text-slate-800 font-bold italic leading-relaxed">
                    "Hi Sarah! We saw your interest in an Evergreen Terrace valuation. I've confirmed your property details—would Friday at 4:00 PM work for a professional walkthrough?"
                  </p>
                </div>
              </div>

              {/* Step 3: Confirmed Appointment */}
              <div className="flex items-center space-x-4 sm:space-x-6 p-5 sm:p-8 rounded-2xl border-2 border-green-200 bg-green-50 transform transition-transform hover:scale-[1.02] duration-300">
                <div className="h-14 w-14 bg-green-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-200">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-[10px] sm:text-xs text-green-600 font-black uppercase tracking-[0.2em] mb-1">Appointment Confirmed & Booked</p>
                  <p className="font-black text-slate-900 text-lg sm:text-2xl">Friday, Dec 12th @ 4:00 PM</p>
                  <p className="text-xs sm:text-sm text-slate-500 font-bold mt-1">Synced to Google & Outlook Calendars</p>
                </div>
              </div>

            </div>
            
            {/* Background Decorations */}
            <div className="absolute -top-12 -right-12 w-72 h-72 bg-blue-100 rounded-full blur-[100px] opacity-60 -z-10 animate-blob"></div>
            <div className="absolute -bottom-12 -left-12 w-72 h-72 bg-indigo-50 rounded-full blur-[100px] opacity-60 -z-10 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;