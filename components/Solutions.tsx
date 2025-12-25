
import React from 'react';
import { Target, Zap, Calendar, Moon } from 'lucide-react';

const solutions = [
  { icon: Target, text: "Convert more leads into listing appointments" },
  { icon: Zap, text: "Respond to every lead instantly with automated AI" },
  { icon: Calendar, text: "Auto-book qualified leads directly to your calendar" },
  { icon: Moon, text: "Capture after-hours leads while competitors sleep" }
];

const Solutions: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-[#F0F9FF] rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                <item.icon className="w-8 h-8 text-[#2563EB]" />
              </div>
              <p className="text-sm font-bold text-slate-800 leading-tight px-2">
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
