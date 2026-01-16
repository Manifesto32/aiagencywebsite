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
    description: "More Likely to Qualify Leads Within 5 Minutes",
    icon: Zap,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    stat: "78%",
    label: "Market Dominance",
    description: "Customers Buy From the First Agent to Respond",
    icon: Users,
    color: "text-green-600",
    bgColor: "bg-green-50"
  }
];

const MarketInsights: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-widest mb-3">
            <BarChart2 className="w-3.5 h-3.5 mr-1.5" />
            Market Reality & Data
          </div>
          <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
            The Data Behind Automated Growth
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {insights.map((item, idx) => (
            <div key={idx} className="relative p-6 rounded-[2rem] border border-slate-100 bg-white shadow-md shadow-slate-100/50 flex flex-col items-center text-center group hover:border-blue-200 transition-all duration-300">
              <div className={`w-12 h-12 ${item.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
              
              <div className="mb-2">
                <span className={`text-4xl sm:text-5xl font-black ${item.color} font-garet tracking-tighter`}>
                  {item.stat}
                </span>
              </div>
              
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">
                {item.label}
              </h3>
              
              <p className="text-sm font-bold text-slate-800 leading-snug">
                {item.description}
              </p>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-slate-100 rounded-full group-hover:bg-blue-600 transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketInsights;