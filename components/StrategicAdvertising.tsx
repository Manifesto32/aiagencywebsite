import React from 'react';
import { 
  BarChart3, 
  Target
} from 'lucide-react';

const StrategicAdvertising: React.FC = () => {
  return (
    <section id="strategic-ads" className="py-24 bg-[#F0F9FF] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Heading Styled to match 'The Strategic Difference' */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 leading-tight">
            Transform Your Lead Generation with Strategic Managed Paid Advertising
          </h2>
          <div className="h-1.5 w-24 bg-[#2563EB] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Sub-sections with Visual Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 - The Market Reality */}
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-10 shadow-xl shadow-blue-100/50 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <BarChart3 className="w-32 h-32 text-[#2563EB]" />
            </div>
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
              <BarChart3 className="w-7 h-7 text-[#2563EB]" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">The Market Reality</h3>
            <p className="text-slate-600 leading-relaxed relative z-10">
              Consider this: <span className="font-bold text-slate-900 text-lg">75% of real estate agents</span> use social media, yet only a fraction generate consistent leads from their efforts. The difference? Strategic managed paid advertising with optimized lead form objectives that convert scrollers into scheduled appointments.
            </p>
          </div>

          {/* Card 2 - From Passive to Proactive */}
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-10 shadow-xl shadow-blue-100/50 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Target className="w-32 h-32 text-[#2563EB]" />
            </div>
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-[#2563EB]" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">From Passive to Proactive</h3>
            <p className="text-slate-600 leading-relaxed relative z-10">
              Traditional lead generation relies on chance—waiting for referrals, hoping for walk-ins, competing for expired listings. Managed paid advertising flips this model entirely. Instead of waiting for business to find you, you're <span className="font-bold text-slate-900">actively creating opportunities</span> through targeted campaigns that speak directly to buyer and seller needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicAdvertising;