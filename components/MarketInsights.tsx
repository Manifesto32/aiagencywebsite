import React from 'react';
import { Clock, Zap, Users, BarChart2 } from 'lucide-react';

const insights = [
  {
    stat: "60%",
    label: "Efficiency Gap",
    description: "of Agent Time is Wasted on Unqualified Leads",
    icon: Clock,
    color: "text-red-500",
    bgColor: "bg-red-50"
  },
  {
    stat: "21X",
    label: "Speed to Lead",
    description: "More Likely to Qualify Leads When Responding in 5 Minutes vs. 30 Minutes",
    icon: Zap,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    stat: "78%",
    label: "Market Dominance",
    description: "of Customers Buy From the First Agent to Respond",
    icon: Users,
    color: "text-green-600",
    bgColor: "bg-green-50"
  }
];

const MarketInsights: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-widest mb-4">
            <BarChart2 className="w-4 h-4 mr-2" />
            Market Reality & Data
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            The Data Behind Automated Growth
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Traditional follow-up is the silent killer of real estate growth. Here is why elite agents are switching to AI-driven systems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((item, idx) => (
            <div key={idx} className="relative p-10 rounded-[3rem] border border-slate-100 bg-white shadow-xl shadow-slate-100/50 flex flex-col items-center text-center group hover:border-blue-200 transition-all duration-300">
              <div className={`w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                <item.icon className={`w-8 h-8 ${item.color}`} />
              </div>
              
              <div className="mb-4">
                <span className={`text-5xl sm:text-6xl font-black ${item.color} font-garet tracking-tighter`}>
                  {item.stat}
                </span>
              </div>
              
              <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
                {item.label}
              </h3>
              
              <p className="text-lg font-bold text-slate-800 leading-snug">
                {item.description}
              </p>

              {/* Decorative accent */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-12 h-1 bg-slate-100 rounded-full group-hover:bg-blue-600 transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketInsights;