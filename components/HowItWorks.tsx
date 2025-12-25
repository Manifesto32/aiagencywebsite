
import React from 'react';

const steps = [
  {
    title: "We Launch Your Seller Ads",
    description: "High-converting Meta/Instagram campaigns targeting local real estate prospects. We position you as the neighborhood expert with ads optimized for high-intent lead forms",
  },
  {
    title: "AI Instantly Responds & Qualifies",
    description: "Our AI instantly initiates contact after lead submission. The agent asks key qualifying questions about timeline and motivation, booking appointments directly into your calendar.",
  },
  {
    title: "You Close More Listings",
    description: "Show up to pre-qualified, confirmed appointments. Focus on winning the listing while we manage the tech and track everything.",
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Our 3-Step Growth Engine
          </h2>
          <p className="text-lg text-slate-600">How we turn scrolling sellers into booked appointments.</p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {steps.map((step, idx) => (
              <div key={idx} className="relative text-center lg:text-left">
                <div className="flex flex-col items-center lg:items-start">
                  <div className="w-16 h-16 bg-[#F0F9FF] rounded-full flex items-center justify-center text-2xl font-black text-[#2563EB] mb-6 shadow-sm ring-8 ring-white">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
