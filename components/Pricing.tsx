import React from 'react';
import { Check } from 'lucide-react';
import { GHL_CONFIG } from '../App';

const packages = [
  {
    title: "Paid Ads + AI Appointment Setter",
    subtitle: "Upfront Package",
    price: "$5,000",
    period: "full 90-day term",
    features: [
      "Targeting 10 booked appointments in 90 days as a conservative minimum.",
      "Up to ~$30/day Recommended Ad Spend",
      "Full Meta & Instagram Ad Setup",
      "AI Appointment Setter System",
      "Comprehensive CRM Onboarding"
    ]
  },
  {
    title: "Paid Ads + AI Appointment Setter",
    subtitle: "Split Payment",
    price: "$2,000",
    period: "/month x 3 months",
    features: [
      "Targeting 10 booked appointments in 90 days as a conservative minimum.",
      "Up to ~$30/day Recommended Ad Spend",
      "Full Meta & Instagram Ad Setup",
      "AI Appointment Setter System",
      "Comprehensive CRM Onboarding"
    ]
  },
  {
    title: "AI Appointment Setter",
    subtitle: "Upfront Package",
    price: "$2,500",
    period: "full 90-day term",
    features: [
      "AI Appointment Setter System",
      "Comprehensive CRM Onboarding",
      "Custom Conversation Flow Design",
      "Lead Response Optimization",
      "Seamless Lead Handoff"
    ]
  },
  {
    title: "AI Appointment Setter",
    subtitle: "Split Payment",
    price: "$950",
    period: "/month x 3 months",
    features: [
      "AI Appointment Setter System",
      "Comprehensive CRM Onboarding",
      "Custom Conversation Flow Design",
      "Lead Response Optimization",
      "Seamless Lead Handoff"
    ]
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Transparent, Performance-Driven Pricing
          </h2>
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-black uppercase tracking-widest mb-6 border border-blue-100">
            90-Day Performance Terms Apply to All Plans
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Select the growth engine that fits your current business stage. All plans include our proprietary AI technology and expert support for the next 3 months.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {packages.map((pkg, idx) => (
            <div 
              key={idx} 
              className="relative flex flex-col p-8 rounded-[2.5rem] border border-slate-100 bg-white shadow-sm hover:shadow-lg hover:border-blue-100 transition-all duration-300"
            >
              <div className="mb-8">
                <p className="text-xs font-black text-blue-600 uppercase tracking-widest mb-2">{pkg.subtitle}</p>
                <h3 className="text-xl font-bold text-slate-900 mb-1 leading-tight">{pkg.title}</h3>
              </div>

              <div className="mb-8 border-b border-slate-50 pb-8">
                <span className="text-3xl sm:text-4xl font-black text-slate-900 font-garet">{pkg.price}</span>
                <span className="text-slate-500 text-sm font-medium ml-1">{pkg.period}</span>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start text-sm text-slate-700">
                    <Check className="w-4 h-4 mr-3 flex-shrink-0 mt-0.5 text-blue-600" />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href={GHL_CONFIG.formUrl}
                className="w-full py-4 rounded-xl text-center text-sm font-black uppercase tracking-widest transition-all bg-slate-900 text-white hover:bg-slate-800 shadow-md"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-slate-50 rounded-3xl p-8 border border-slate-100 text-center">
          <p className="text-sm text-slate-500 font-medium leading-relaxed italic">
            <span className="text-slate-900 font-bold uppercase tracking-widest mr-2">Note:</span>
            Ad spend can scale up depending on your performance goals, and we can discuss the right budget and overall pricing based on your market, lead volume, and desired appointment targets. All packages listed above represent a standard 3-month (90-day) service commitment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;