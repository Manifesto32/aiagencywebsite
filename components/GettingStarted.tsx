import React from 'react';
import { ClipboardList, Rocket, BarChart } from 'lucide-react';

const phases = [
  {
    phase: "Discovery & Strategy",
    step: "Phase 1",
    icon: ClipboardList,
    details: [
      "We analyze your market and ideal seller profile",
      "Map out your unique value proposition",
      "Design your custom ad creative and messaging"
    ]
  },
  {
    phase: "Creation & Launch",
    step: "Phase 2",
    icon: Rocket,
    details: [
      "Build your custom AI conversation flows",
      "Set up CRM and calendar integrations",
      "Launch your first Meta/Instagram campaigns"
    ]
  },
  {
    phase: "Optimize & Scale",
    step: "Phase 3",
    icon: BarChart,
    details: [
      "Monitor performance in real-time",
      "A/B test ad creative and targeting",
      "Follow up optimization calls to maximize results"
    ]
  }
];

const GettingStarted: React.FC = () => {
  return (
    <section id="getting-started" className="py-24 bg-[#F8FAFC] border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Our Strategic Onboarding Process
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our proven 3-phase roadmap ensures your agency's AI engine is built for scale, compliance, and consistent revenue.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {phases.map((item, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm relative group hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <item.icon className="w-7 h-7" />
              </div>
              <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black mb-4 uppercase tracking-widest border border-blue-100">
                {item.step}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">{item.phase}</h3>
              <ul className="space-y-5">
                {item.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start text-sm text-slate-600 leading-relaxed font-medium">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
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