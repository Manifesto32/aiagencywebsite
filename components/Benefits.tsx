
import React from 'react';
import { CalendarCheck, PhoneIncoming, Infinity, Settings } from 'lucide-react';

const benefitCards = [
  {
    title: "Appointments Auto-Booked with Your Calendar",
    icon: CalendarCheck,
    description: "Qualified seller leads scheduled directly into your preferred calendar.",
    bullets: [
      "Two-way sync with Google Calendar or Calendly",
      "No manual data entry required",
      "Automatic reminder texts sent to leads"
    ]
  },
  {
    title: "Instant Dial for Every Lead",
    icon: PhoneIncoming,
    description: "Persistent phone/SMS sequences for leads who don't answer initially.",
    bullets: [
      "Natural conversation that qualifies motivation",
      "Qualifies timeline and property details",
      "Seamless handoff of hot leads to your phone"
    ]
  },
  {
    title: "Works Forever on Autopilot",
    icon: Infinity,
    description: "Set it up once, and the system runs continuously without management.",
    bullets: [
      "AI learns and improves from every chat",
      "No sick days, vacations, or human error",
      "Consistent performance year-round"
    ]
  },
  {
    title: "Fully Managed by Our Team",
    icon: Settings,
    description: "We handle everything—from ad creation to technical AI optimization.",
    bullets: [
      "Custom Meta/Instagram ad campaigns",
      "Full CRM and tech stack integration",
      "Weekly performance reports & strategy calls"
    ]
  }
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            A Complete Listing Growth System
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to transform your Real Estate business into an automated listing machine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefitCards.map((benefit, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 transition-all hover:shadow-md">
              <div className="h-2 bg-[#F0F9FF]"></div>
              <div className="p-8">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-6 h-6 text-[#2563EB]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">{benefit.description}</p>
                <ul className="space-y-3">
                  {benefit.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start text-sm text-slate-700">
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
