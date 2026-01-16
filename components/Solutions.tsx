import React from 'react';
import { Target, Zap, Calendar, Moon } from 'lucide-react';

const solutions = [
  { icon: Target, text: "Convert more leads into listings" },
  { icon: Zap, text: "Respond to every lead instantly" },
  { icon: Calendar, text: "Auto-book directly to calendar" },
  { icon: Moon, text: "Capture leads while you sleep" }
];

const Solutions: React.FC = () => {
  return (
    <section className="py-8 bg-white border-t border-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {solutions.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 bg-[#F0F9FF] rounded-xl flex items-center justify-center mb-2 transition-transform group-hover:scale-105">
                <item.icon className="w-6 h-6 text-[#2563EB]" />
              </div>
              <p className="text-[11px] font-bold text-slate-800 leading-tight px-1 uppercase tracking-tight">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;