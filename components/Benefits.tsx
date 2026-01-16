import React from 'react';
import { CalendarCheck, PhoneIncoming, Megaphone, Infinity } from 'lucide-react';

const benefitCards = [
  {
    title: "Meta & Instagram Ad Campaigns",
    icon: Megaphone,
    description: "Done-for-you advertising targeting ready-to-move prospects.",
    bullets: [
      "Custom ad creative and brand focus",
      "Proven buyer/seller templates",
      "Daily optimization for low CPL"
    ]
  },
  {
    title: "Appointments Auto-Booked",
    icon: CalendarCheck,
    description: "Qualified seller leads scheduled directly into your calendar.",
    bullets: [
      "Google/Calendly two-way sync",
      "No manual data entry required",
      "Auto reminder texts sent to leads"
    ]
  },
  {
    title: "Instant Qualification",
    icon: PhoneIncoming,
    description: "Conversation flows that feel natural and human - 24/7 engagement.",
    bullets: [
      "Qualifies motivation and timeline",
      "Collects key property details",
      "Seamless phone handoff"
    ]
  },
  {
    title: "Works Forever on Autopilot",
    icon: Infinity,
    description: "A system that scales without increasing your personal workload.",
    bullets: [
      "24/7/365 lead engagement",
      "Never takes a sick day or holiday",
      "Peak performance at any volume"
    ]
  }
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Your Complete Generation System
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From ads to qualified appointments—we handle the tech, you handle the deals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {benefitCards.map((benefit, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 transition-all hover:shadow-md flex flex-col h-full group">
              <div className="h-1 bg-blue-50 group-hover:bg-[#2563EB] transition-colors"></div>
              <div className="p-6 sm:p-8 flex-1">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <benefit.icon className="w-5 h-5 text-[#2563EB]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-xs text-slate-600 mb-6 leading-relaxed">{benefit.description}</p>
                <ul className="space-y-2.5">
                  {benefit.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start text-xs text-slate-700 font-medium">
                      <span className="text-[#2563EB] mr-2 font-bold">✓</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;