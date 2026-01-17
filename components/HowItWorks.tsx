import React from 'react';
import { MousePointerClick, PhoneCall, CalendarCheck2, Bot, Sparkles, AudioLines } from 'lucide-react';

const steps = [
  {
    title: "Step 1: We Generate Your Leads",
    description: "Bring your own leads or let us run the ads—your choice. If you want us to generate leads, we launch high-converting Meta & Instagram campaigns targeting local prospects. When someone submits their info through the lead form, they become your lead and flow into our AI booking system.",
    icon: MousePointerClick,
    color: "bg-blue-600",
    glow: "shadow-blue-200",
    visual: (
      <div className="relative h-40 w-full bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden group-hover:border-blue-300 transition-colors p-4 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-3 animate-pulse">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-blue-600" />
          </div>
          <div className="h-2 w-24 bg-blue-100 rounded-full"></div>
        </div>
        <div className="space-y-2">
          <div className="h-2 w-full bg-slate-200 rounded-full"></div>
          <div className="h-2 w-3/4 bg-slate-200 rounded-full"></div>
        </div>
      </div>
    )
  },
  {
    title: "Step 2: AI Qualifies in Seconds",
    description: "The moment a lead is submitted, the AI Appointment Setter triggers an instant call. Our assistant qualifies their motivation and property details, then books the appointment directly into your calendar without you lifting a finger.",
    icon: Bot,
    color: "bg-indigo-600",
    glow: "shadow-indigo-200",
    visual: (
      <div className="relative h-40 w-full bg-slate-900 rounded-2xl overflow-hidden group-hover:ring-4 ring-blue-500/20 transition-all p-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-3 animate-bounce shadow-lg shadow-blue-500/50">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="w-1 bg-blue-400 rounded-full animate-[sound-wave_1s_ease-in-out_infinite]" style={{ height: `${Math.random() * 20 + 10}px`, animationDelay: `${i * 0.1}s` }}></div>
            ))}
          </div>
          <p className="text-[10px] font-black text-blue-400 mt-2 uppercase tracking-[0.2em]">Qualifying Prospect...</p>
        </div>
        <style>{`
          @keyframes sound-wave {
            0%, 100% { transform: scaleY(1); }
            50% { transform: scaleY(2); }
          }
        `}</style>
      </div>
    )
  },
  {
    title: "Step 3: You Close the Listing",
    description: "No more cold calling or chasing old leads. You simply show up to pre-qualified, confirmed appointments. Focus on winning the listing while we manage the technology and lead flow.",
    icon: CalendarCheck2,
    color: "bg-green-600",
    glow: "shadow-green-200",
    visual: (
      <div className="relative h-40 w-full bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden flex items-center justify-center p-6">
        <div className="bg-white p-4 rounded-xl shadow-lg border border-green-100 flex items-center gap-4 animate-in slide-in-from-bottom-4">
          <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white">
            <CalendarCheck2 className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase">Confirmed</p>
            <p className="text-sm font-black text-slate-900">Listing Valuation</p>
          </div>
        </div>
      </div>
    )
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl sm:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            From <span className="text-red-600">Paid Ad</span> to <span className="text-blue-600">Booked Appointment</span> in 3 Steps
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
            Our automated engine handles the heavy lifting of lead generation and follow-up, delivering high-intent buyers and sellers directly to your schedule.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group flex flex-col">
              {/* Step Number Badge */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 ${step.color} rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg ${step.glow}`}>
                  {idx + 1}
                </div>
                <div className="h-0.5 flex-1 bg-slate-100 rounded-full group-hover:bg-blue-100 transition-colors"></div>
              </div>

              {/* Visual Component */}
              <div className="mb-8 transform transition-transform group-hover:-translate-y-2 duration-300">
                {step.visual}
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;