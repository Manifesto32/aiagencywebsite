import React from 'react';
import { ShieldCheck, Zap } from 'lucide-react';

const ComparisonSection: React.FC = () => {
  return (
    <section id="why-bloomlink" className="py-10 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
            Why Choose Bloom Link for Your <br className="hidden sm:block" /> Real Estate Business
          </h2>
          <div className="h-1 w-12 bg-[#2563EB] mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="relative">
          <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-lg relative">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[450px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="px-4 py-3 text-[10px] sm:text-xs font-bold text-slate-400 w-1/2 border-r border-slate-200 uppercase tracking-wider">
                      Traditional Lead Gen
                    </th>
                    <th className="px-4 py-3 text-[10px] sm:text-xs font-black text-blue-600 w-1/2 flex items-center gap-1.5 uppercase tracking-wider">
                      <Zap className="w-3 h-3 fill-blue-600" />
                      The Bloom Link System
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-4 py-4 align-top border-r border-slate-100">
                      <p className="text-xs text-slate-600">
                        <span className="font-black text-slate-900 block mb-0.5">Speed to Lead:</span> 
                        30+ mins (Lead is cold)
                      </p>
                    </td>
                    <td className="px-4 py-4 align-top bg-blue-50/20">
                      <p className="text-xs text-slate-900">
                        <span className="font-black block mb-0.5 text-blue-700">Speed to Lead:</span> 
                        &lt; 60 seconds (Instant)
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 align-top border-r border-slate-100">
                      <p className="text-xs text-slate-600">
                        <span className="font-black text-slate-900 block mb-0.5">Follow-up:</span> 
                        Manual, easily forgotten
                      </p>
                    </td>
                    <td className="px-4 py-4 align-top bg-blue-50/20">
                      <p className="text-xs text-slate-900">
                        <span className="font-black block mb-0.5 text-blue-700">Follow-up:</span> 
                        24/7 AI (Never misses)
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 align-top border-r border-slate-100">
                      <p className="text-xs text-slate-600">
                        <span className="font-black text-slate-900 block mb-0.5">Qualification:</span> 
                        Wasted time on "lookers"
                      </p>
                    </td>
                    <td className="px-4 py-4 align-top bg-blue-50/20">
                      <p className="text-xs text-slate-900">
                        <span className="font-black block mb-0.5 text-blue-700">Qualification:</span> 
                        Only pre-vetted leads
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 align-top border-r border-slate-100">
                      <p className="text-xs text-slate-600">
                        <span className="font-black text-slate-900 block mb-0.5">Result:</span> 
                        $0 from missed calls
                      </p>
                    </td>
                    <td className="px-4 py-4 align-top bg-blue-50/20">
                      <div className="flex flex-col">
                        <p className="text-xs text-slate-900">
                          <span className="font-black block mb-0.5 text-blue-700">Result:</span> 
                          Consistent listing appts
                        </p>
                        <div className="mt-1.5 inline-flex items-center gap-1 text-[7px] font-black text-green-600 bg-green-50 px-1.5 py-0.5 rounded-full uppercase tracking-widest border border-green-100 self-start">
                          <ShieldCheck className="w-2.5 h-2.5" />
                          Guaranteed
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;