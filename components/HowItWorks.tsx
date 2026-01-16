import React from 'react';
import { MousePointerClick, PhoneCall, CalendarCheck2, Bot, Sparkles, AudioLines } from 'lucide-react';

const steps = [
  {
    title: "Step 1: We Generate Your Leads",
    description: "Bring your own leads or let us run the ads. We launch high-converting Meta campaigns. When someone submits their info, they become your lead and flow into our AI system.",
    icon: MousePointerClick,
    color: "bg-blue-600",
    glow: "shadow-blue-200",
    visual: (
      <div className="relative h-32 w-full bg-slate-50 rounded-xl border border-slate-200 overflow-hidden group-hover:border-blue-300 transition-colors p-3 flex flex-col justify-center">
        <div className="flex items-center gap-2 mb-2 animate-pulse">
          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
            <Sparkles className="w-3 h-3 text-blue-600" />
          </div>
          <div className="h-1.5 w-16 bg-blue-100 rounded-full"></div>
        </div>
        <div className="space-y-1.5">
          <div className="h-1.5 w-full bg-slate-200 rounded-full"></div>
          <div className="h-1.5 w-3/4 bg-slate-200 rounded-full"></div>
        </div>
      </div>
    )
  },
  {
    title: "Step 2: AI Qualifies in Seconds",
    description: "The moment a lead is submitted, the AI Setter triggers a call, qualifies motivation and property details, and books the appointment directly into your calendar.",
    icon: Bot,
    color: "bg-indigo-600",
    glow: "shadow-indigo-200",
    visual: (
      <div className="relative h-32 w-full bg-slate-900 rounded-xl overflow-hidden group-hover:ring-2 ring-blue-500/20 transition-all p-3">
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mb-2 animate-bounce shadow-lg shadow-blue-500/50">
            <Bot className="w-4 h-4 text-white" />
          </div>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="w-0.5 bg-blue-400 rounded-full animate-[sound-wave_1s_ease-in-out_infinite]" style={{ height: `${Math.random() * 12 + 6}px`, animationDelay: `${i * 0.1}s` }}></div>
            ))}
          </div>
          <p className="text-[8px] font-black text-blue-400 mt-1.5 uppercase tracking-widest">Qualifying...</p>
        </div>
      </div>
    )
  },
  {
    title: "Step 3: You Close the Listing",
    description: "No more cold calling. You simply show up to pre-qualified, confirmed appointments. Focus on winning the listing while we manage the tech.",
    icon: CalendarCheck2,
    color: "bg-green-600",
    glow: "shadow-green-200",
    visual: (
      <div className="relative h-32 w-full bg-slate-50 rounded-xl border border-slate-200 overflow-hidden flex items-center justify-center p-4">
        <div className="bg-white p-3 rounded-lg shadow-md border border-green-100 flex items-center gap-3">
          <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center text-white">
            <CalendarCheck2 className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[8px] font-black text-slate-400 uppercase">Confirmed</p>
            <p className="text-xs font-black text-slate-900">Listing Valuation</p>
          </div>
        </div>
      </div>
    )
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 bg-white overflow-hidden border-t border-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight">
            From <span className="text-red-600">Paid Ad</span> to <span className="text-blue-600">Booked Appointment</span> in 3 Steps
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Our automated engine handles the heavy lifting of lead generation and follow-up.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-8 h-8 ${step.color} rounded-lg flex items-center justify-center text-white font-black text-sm shadow-md`}>
                  {idx + 1}
                </div>
                <div className="h-px flex-1 bg-slate-100 rounded-full"></div>
              </div>

              <div className="mb-4 transform transition-transform group-hover:-translate-y-1 duration-300">
                {step.visual}
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes sound-wave {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(2); }
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;