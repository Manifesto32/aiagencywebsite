
import React from 'react';
import { GHL_CONFIG } from '../App';

const phases = [
  {
    phase: "Discovery & Strategy",
    step: "Phase 1",
    details: [
      "We analyze your market and ideal seller profile",
      "Map out your unique value proposition",
      "Design your custom ad creative and messaging"
    ]
  },
  {
    phase: "Creation & Launch",
    step: "Phase 2",
    details: [
      "Build your custom AI conversation flows",
      "Set up CRM and calendar integrations",
      "Launch your first Meta/Instagram campaigns"
    ]
  },
  {
    phase: "Optimize & Scale",
    step: "Phase 3",
    details: [
      "Monitor performance in real-time",
      "A/B test ad creative and targeting",
      "Follow up optimization calls to maximize results"
    ]
  }
];

const GettingStarted: React.FC = () => {
  return (
    <section id="getting-started" className="py-24 bg-[#F0F9FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Our Strategic Onboarding Process
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">
            Our proven onboarding process ensures The AI Appointment System is built for long-term scalability and consistent results.
          </p>
          
          {/* Optional GHL Form Direct Embed Placeholder */}
          {GHL_CONFIG.formUrl.startsWith('http') && (
            <div className="mb-20 max-w-2xl mx-auto bg-white p-2 rounded-3xl shadow-xl border border-blue-100 overflow-hidden">
               <div className="bg-blue-600 text-white py-3 px-6 text-sm font-bold uppercase tracking-widest">
                  Secure Onboarding Application
               </div>
               {/* This is where you would paste the GHL Iframe code if you want it on-page */}
               <iframe 
                src={GHL_CONFIG.formUrl} 
                style={{ width: '100%', height: '600px', border: 'none' }}
                title="GHL Form"
               />
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-blue-100 shadow-sm relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="text-8xl font-black leading-none text-[#2563EB]">{idx + 1}</span>
              </div>
              <div className="inline-block px-3 py-1 rounded-full bg-[#F0F9FF] text-[#2563EB] text-xs font-bold mb-4 uppercase tracking-widest">
                {item.step}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">{item.phase}</h3>
              <ul className="space-y-4">
                {item.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start text-sm text-slate-600 leading-relaxed">
                    <span className="w-1.5 h-1.5 bg-[#2563EB] rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
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
