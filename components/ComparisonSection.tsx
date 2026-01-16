import React from 'react';
import { ShieldCheck, Zap } from 'lucide-react';

const ComparisonSection: React.FC = () => {
  return (
    <section id="why-bloomlink" className="py-24 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Why Choose Bloom Link for Your <br className="hidden sm:block" /> Real Estate Business
          </h2>
          <div className="h-1.5 w-24 bg-[#2563EB] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="relative">
          {/* Visual Accents */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -z-10 animate-blob"></div>
          
          <div className="bg-white rounded-[3rem] overflow-hidden border border-slate-200 shadow-2xl relative">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="px-8 sm:px-12 py-10 text-xl font-bold text-slate-400 w-1/2 border-r border-slate-200">
                      Traditional Lead Gen
                    </th>
                    <th className="px-8 sm:px-12 py-10 text-xl font-black text-blue-600 w-1/2 flex items-center gap-3">
                      <Zap className="w-6 h-6 fill-blue-600" />
                      The Bloom Link System
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {/* Row 1: Speed to Lead */}
                  <tr>
                    <td className="px-8 sm:px-12 py-12 align-top border-r border-slate-100">
                      <p className="text-lg text-slate-600">
                        <span className="font-black text-slate-900 block mb-1">Speed to Lead:</span> 
                        30+ minutes (Lead is cold)
                      </p>
                    </td>
                    <td className="px-8 sm:px-12 py-12 align-top bg-blue-50/20">
                      <p className="text-lg text-slate-900">
                        <span className="font-black block mb-1 text-blue-700">Speed to Lead:</span> 
                        &lt; 60 seconds (Instant engagement)
                      </p>
                    </td>
                  </tr>
                  {/* Row 2: Follow-up */}
                  <tr>
                    <td className="px-8 sm:px-12 py-12 align-top border-r border-slate-100">
                      <p className="text-lg text-slate-600">
                        <span className="font-black text-slate-900 block mb-1">Follow-up:</span> 
                        Manual texts, easily forgotten
                      </p>
                    </td>
                    <td className="px-8 sm:px-12 py-12 align-top bg-blue-50/20">
                      <p className="text-lg text-slate-900">
                        <span className="font-black block mb-1 text-blue-700">Follow-up:</span> 
                        24/7 AI Nurture (Never misses a beat)
                      </p>
                    </td>
                  </tr>
                  {/* Row 3: Qualification */}
                  <tr>
                    <td className="px-8 sm:px-12 py-12 align-top border-r border-slate-100">
                      <p className="text-lg text-slate-600">
                        <span className="font-black text-slate-900 block mb-1">Qualification:</span> 
                        You waste time on "Lookie-loos"
                      </p>
                    </td>
                    <td className="px-8 sm:px-12 py-12 align-top bg-blue-50/20">
                      <p className="text-lg text-slate-900">
                        <span className="font-black block mb-1 text-blue-700">Qualification:</span> 
                        Only pre-vetted leads hit your cal
                      </p>
                    </td>
                  </tr>
                  {/* Row 4: Result */}
                  <tr>
                    <td className="px-8 sm:px-12 py-12 align-top border-r border-slate-100">
                      <p className="text-lg text-slate-600">
                        <span className="font-black text-slate-900 block mb-1">Result:</span> 
                        $0 commission from missed calls
                      </p>
                    </td>
                    <td className="px-8 sm:px-12 py-12 align-top bg-blue-50/20">
                      <div className="flex flex-col">
                        <p className="text-lg text-slate-900">
                          <span className="font-black block mb-1 text-blue-700">Result:</span> 
                          Consistent pipeline of listing appts
                        </p>
                        <div className="mt-4 inline-flex items-center gap-2 text-xs font-black text-green-600 bg-green-50 px-3 py-1 rounded-full uppercase tracking-widest border border-green-100 self-start">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          Performance Guaranteed
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