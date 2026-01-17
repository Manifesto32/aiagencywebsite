import React from 'react';
import { CalendarCheck, PhoneIncoming, Megaphone, Infinity } from 'lucide-react';

const benefitCards = [
  {
    title: "Professional Ad Campaigns That Convert",
    icon: Megaphone,
    description: "Done-for-you Meta & Instagram advertising targeting ready-to-move prospects.",
    bullets: [
      "Custom ad creative featuring your brand and listings",
      "Proven templates for both buyer and seller campaigns",
      "Daily optimization for lower cost-per-lead"
    ]
  },
  {
    title: "Appointments Auto-Booked with Your Calendar",
    icon: CalendarCheck,
    description: "Qualified leads scheduled directly into your preferred calendar.",
    bullets: [
      "Two-way sync with Google Calendar or Calendly",
      "No manual data entry required",
      "Automatic reminder texts sent to leads"
    ]
  },
  {
    title: "Instant Dial for Every Lead",
    icon: PhoneIncoming,
    description: "Structured conversation flows that feel natural and human - your leads won't know they're talking to AI",
    bullets: [
      "Natural conversation that qualifies motivation",
      "Qualifies timeline and property details",
      "Seamless handoff of hot leads to your phone"
    ]
  },
  {
    title: "Works Forever on Autopilot",
    icon: Infinity,
    description: "A system that scales without increasing your personal workload.",
    bullets: [
      "24/7/365 lead engagement and qualification",
      "Never takes a sick day or holiday",
      "Maintains peak performance regardless of volume"
    ]
  }
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Your Complete Appointment Generation System
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From social media ads to qualified appointments in your calendar—we handle the technology, you handle the conversations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {benefitCards.map((benefit, idx) => (
            <div key={idx} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-200 transition-all hover:shadow-xl hover:-translate-y-1 flex flex-col h-full group">
              <div className="h-2 bg-[#F0F9FF] group-hover:bg-[#2563EB] transition-colors"></div>
              <div className="p-8 sm:p-10 flex-1">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-7 h-7 text-[#2563EB]" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-600 mb-8 text-base leading-relaxed">{benefit.description}</p>
                <ul className="space-y-4">
                  {benefit.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start text-base text-slate-700 font-medium">
                      <span className="text-[#2563EB] mr-3 font-bold">✓</span>
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