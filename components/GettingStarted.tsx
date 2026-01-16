import React from 'react';
import { ClipboardList, Rocket, BarChart } from 'lucide-react';

const phases = [
  {
    phase: "Discovery & Strategy",
    step: "Phase 1",
    icon: ClipboardList,
    details: [
      "We analyze your market and seller profile",
      "Map out your value proposition",
      "Design your custom ad creative"
    ]
  },
  {
    phase: "Creation & Launch",
    step: "Phase 2",
    icon: Rocket,
    details: [
      "Build custom AI conversation flows",
      "Set up CRM and calendar sync",
      "Launch Meta/Instagram campaigns"
    ]
  },
  {
    phase: "Optimize & Scale",
    step: "Phase 3",
    icon: BarChart,
    details: [
      "Monitor performance in real-time",
      "A/B test ad creative and targeting",
      "Optimize to maximize your ROI"
    ]
  }
];

const GettingStarted: React.FC = () => {
  return (
    <section id="getting-started" className="py-12 bg-[#F8FAFC] border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Our Strategic Onboarding Process
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Our proven 3-phase roadmap ensures your agency's AI engine is built for consistent revenue.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {phases.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-[1.5rem] border border-slate-100 shadow-sm relative group hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <item.icon className="w-5 h-5" />
              </div>
              <div className="inline-block px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 text-[8px] font-black mb-3 uppercase tracking-widest border border-blue-100">
                {item.step}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">{item.phase}</h3>
              <ul className="space-y-3">
                {item.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start text-[11px] text-slate-600 leading-relaxed font-medium">
                    <span className="w-1 h-1 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;