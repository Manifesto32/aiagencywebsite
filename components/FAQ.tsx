
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: "How quickly can this be set up?",
    a: "Our streamlined onboarding process typically takes 10-14 business days from initial consultation to launch. Timeline may extend based on your specific customization requirements and CRM integration complexity."
  },
  {
    q: "Can you make edits to the agents?",
    a: "Yes, absolutely. Your AI Voice Agent is fully customizable. We can adjust conversation scripts, qualifying questions, tone of voice, and response strategies based on your feedback and performance data. Whether you want to refine qualification criteria, add new objection handlers, or adjust the booking process—changes can be implemented quickly."
  },
  {
    q: "Does it sound human-like?",
    a: "Yes. Using advanced voice AI technology, our agents feature natural speech patterns, conversational flow, and human-like intonation. The AI handles interruptions smoothly, uses appropriate pauses, and responds contextually. Most leads won't realize they're speaking with AI—they're simply focused on getting their questions answered and appointments booked."
  },
  {
    q: "What's the minimum ad spend required?",
    a: "We recommend a minimum daily ad budget of $30-50 for Meta/Instagram campaigns. This investment ensures sufficient lead volume for the AI to optimize performance and consistently deliver qualified appointments."
  },
  {
    q: "How do I know the leads will be quality?",
    a: "Our campaigns target specific seller-intent signals and behaviors. Every lead is qualified by our AI using strategic questions about timeline, motivation, and property details. You only receive appointments with pre-vetted, high-intent prospects."
  },
  {
    q: "Can I use just the AI Voice Agent without paid ads?",
    a: "While we offer standalone AI Voice Agent services, we strongly recommend the complete system. Without our optimized paid ad campaigns generating consistent lead flow, we cannot guarantee appointment volume increases. The AI performs best with steady, qualified lead generation."
  },
  {
    q: "Does it integrate with my CRM?",
    a: "Yes. We offer native integration with popular platforms including GoHighLevel, Follow Up Boss, kvCORE, and most major real estate CRMs. Custom API integrations are available for proprietary systems."
  },
  {
    q: "Will this work in my specific market?",
    a: "Absolutely. While real estate is hyperlocal, seller psychology is universal. Our AI adapts to any market—from competitive urban centers to rural territories—by customizing targeting parameters and messaging to match your area's unique dynamics."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">Common questions about the Bloom Link AI Agency system.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`rounded-2xl border transition-all duration-200 ${idx % 2 === 1 ? 'bg-[#F0F9FF] border-blue-100' : 'bg-white border-slate-100'}`}
            >
              <button
                className="w-full text-left p-6 flex justify-between items-center group"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="text-lg font-bold text-slate-800 group-hover:text-[#2563EB] transition-colors">
                  {faq.q}
                </span>
                {openIndex === idx ? (
                  <ChevronUp className="w-5 h-5 text-[#2563EB] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 animate-in fade-in slide-in-from-top-2 duration-300">
                  <p className="text-slate-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
