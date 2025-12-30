import React from 'react';
import { MousePointerClick, PhoneCall, CalendarCheck2 } from 'lucide-react';

const steps = [
  {
    title: "Step 1: We Generate Your Leads",
    description: "We launch high-converting Meta & Instagram campaigns targeting local real estate prospects. When they click your ad and submit their details via our optimized lead forms, they officially become your exclusive lead.",
    icon: MousePointerClick,
    color: "bg-blue-500",
    glow: "shadow-blue-200"
  },
  {
    title: "Step 2: AI Qualifies in Seconds",
    description: "The moment a lead is submitted, the Appointment Generation System triggers an instant call. Our assistant qualifies their motivation and property details, then books the appointment directly into your calendar without you lifting a finger.",
    icon: PhoneCall,
    color: "bg-indigo-500",
    glow: "shadow-indigo-200"
  },
  {
    title: "Step 3: You Close the Listing",
    description: "No more cold calling or chasing old leads. You simply show up to pre-qualified, confirmed appointments. Focus on winning the listing while we manage the technology and lead flow.",
    icon: CalendarCheck2,
    color: "bg-green-500",
    glow: "shadow-green-200"
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            From Ad Click to <span className="text-[#2563EB]">Booked Appointment</span> in 3 Steps
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our automated engine handles the heavy lifting of lead generation and follow-up, delivering high-intent sellers directly to your schedule.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 w-full h-1 bg-slate-100 -z-10"></div>
          
          <div className="grid lg:grid-cols-3 gap-16 lg:gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center lg:items-start group">
                {/* Visual Icon with Animation */}
                <div className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center mb-8 shadow-2xl ${step.glow} transform transition-transform group-hover:scale-110 group-hover:-rotate-3 duration-300 relative`}>
                  <step.icon className="w-10 h-10 text-white" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center text-sm font-black text-slate-900 shadow-sm">
                    {idx + 1}
                  </div>
                </div>

                <div className="text-center lg:text-left">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 group-hover:text-[#2563EB] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-base lg:text-lg">
                    {step.description}
                  </p>
                </div>
                
                {/* Decorative background pulse for step focus */}
                <div className="absolute top-0 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 w-32 h-32 bg-slate-100/50 rounded-full blur-3xl -z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;