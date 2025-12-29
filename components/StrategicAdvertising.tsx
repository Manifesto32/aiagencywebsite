import React from 'react';
import { 
  BarChart3, 
  Target, 
  LayoutGrid, 
  FileText, 
  Bot, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Monitor,
  Share2,
  Calendar,
  MoreHorizontal,
  Home,
  Tag
} from 'lucide-react';
import { GHL_CONFIG } from '../App';

const StrategicAdvertising: React.FC = () => {
  return (
    <section id="strategic-ads" className="py-24 bg-[#F0F9FF] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 inline-block relative">
            Transform Your Lead Generation with Strategic Paid Advertising
            <div className="h-1.5 w-1/2 bg-[#2563EB] mx-auto mt-4 rounded-full"></div>
          </h2>
        </div>

        {/* Sub-sections with Visual Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
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
              Consider this: <span className="font-bold text-slate-900 text-lg">75% of real estate agents</span> use social media, yet only a fraction generate consistent leads from their efforts. The difference? Strategic paid advertising with optimized lead form objectives that convert scrollers into scheduled appointments.
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
              Traditional lead generation relies on chance—waiting for referrals, hoping for walk-ins, competing for expired listings. Paid advertising flips this model entirely. Instead of waiting for business to find you, you're <span className="font-bold text-slate-900">actively creating opportunities</span> through targeted campaigns that speak directly to buyer and seller needs.
            </p>
          </div>
        </div>

        {/* The Power of Lead Form Optimization */}
        <div className="bg-white rounded-[3rem] p-8 sm:p-12 mb-24 border border-blue-50 shadow-lg">
          <h3 className="text-2xl font-black text-slate-900 mb-8">The Power of Lead Form Optimization</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-6 h-6 bg-green-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Reduce Friction</p>
                  <p className="text-sm text-slate-600">Streamlined forms that capture essential information without overwhelming prospects.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-green-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Offer Clear Value</p>
                  <p className="text-sm text-slate-600">Prospects understand exactly what they'll receive in exchange for their information.</p>
                </div>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-6 h-6 bg-green-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Build Trust</p>
                  <p className="text-sm text-slate-600">Professional design and clear privacy assurances increase submission rates.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-green-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Get Leads That Actually Convert</p>
                  <p className="text-sm text-slate-600">Stop wasting time on tire-kickers and curiosity seekers. Our optimized lead forms act as your first line of qualification, filtering prospects before they ever reach you.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* The Bloom Link Advantage - Main Feature Section */}
        <div className="mb-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-extrabold text-slate-900 mb-4">The Bloom Link Advantage</h3>
          </div>

          {/* Static Workflow Visual */}
          <div className="hidden lg:flex items-center justify-between mb-20 px-4">
            {[
              { label: 'Ad', icon: Share2, color: 'bg-blue-600' },
              { label: 'Landing Page', icon: Monitor, color: 'bg-indigo-600' },
              { label: 'Lead Form', icon: FileText, color: 'bg-blue-500' },
              { label: 'AI Call', icon: Bot, color: 'bg-indigo-500' },
              { label: 'Appointment', icon: Calendar, color: 'bg-green-500' }
            ].map((step, idx, arr) => (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center group">
                  <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center text-white shadow-lg transform transition-transform group-hover:scale-110`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  <span className="mt-3 text-xs font-bold text-slate-500 uppercase tracking-widest">{step.label}</span>
                </div>
                {idx < arr.length - 1 && (
                  <div className="flex-1 flex items-center justify-center px-4">
                    <ArrowRight className="w-6 h-6 text-slate-300" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Three Feature Boxes */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Box 1: Strategic Ad Creation */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mr-4">
                  <LayoutGrid className="w-6 h-6 text-[#2563EB]" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Strategic Ad Creation</h4>
              </div>
              
              <div className="bg-white border border-slate-100 rounded-xl shadow-lg overflow-hidden mb-6 group/ad">
                <div className="flex items-center justify-between p-3 border-b border-slate-50">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-[10px] text-white font-bold">LE</div>
                    <div className="ml-2">
                      <p className="text-[9px] font-bold text-slate-900 leading-tight">Local Expert Realty</p>
                      <p className="text-[7px] text-slate-500 leading-tight">Sponsored</p>
                    </div>
                  </div>
                  <MoreHorizontal className="w-4 h-4 text-slate-400" />
                </div>
                
                <div className="relative aspect-video bg-slate-100 overflow-hidden">
                  <div className="absolute inset-0 flex">
                    <div className="flex-1 bg-slate-200 flex items-center justify-center">
                      <Home className="w-8 h-8 text-slate-400 opacity-20" />
                    </div>
                    <div className="w-px bg-white z-10"></div>
                    <div className="flex-1 bg-blue-50 flex items-center justify-center">
                      <Tag className="w-8 h-8 text-blue-600 opacity-20" />
                    </div>
                  </div>
                  
                  <div className="absolute top-2 left-2 bg-green-500 text-white text-[7px] font-black px-2 py-0.5 rounded shadow-lg uppercase tracking-tight">
                    SOLD for $50K Over Asking
                  </div>
                  
                  <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm p-2 rounded border border-blue-100 shadow-sm">
                    <p className="text-[7px] font-black text-blue-600 uppercase text-center leading-none mb-0.5">Find Out Your</p>
                    <p className="text-[8px] font-black text-slate-900 uppercase text-center leading-none">Home's Value</p>
                  </div>
                </div>

                <div className="p-3 bg-white">
                  <p className="text-[8px] font-bold text-slate-900 mb-1 leading-tight">What's Your Home Really Worth in 2025?</p>
                  <p className="text-[7px] text-slate-500 mb-3 leading-tight line-clamp-2">
                    The market has changed. Get your FREE detailed valuation report with recent sales data...
                  </p>
                  <div className="flex items-center justify-between px-3 py-1.5 bg-slate-50 rounded border border-slate-100">
                    <span className="text-[8px] font-bold text-slate-400 uppercase">meta-lead-form</span>
                    <button className="bg-blue-600 text-white text-[8px] font-bold px-3 py-1 rounded inline-block" disabled>
                      Get Free Valuation
                    </button>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 text-sm">Professional image and video ads featuring compelling offers that attract ready-to-act buyers and sellers—not just clicks, but leads with clear intent.</p>
            </div>

            {/* Box 2: Value-First Lead Forms */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mr-4">
                  <FileText className="w-6 h-6 text-[#2563EB]" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Value-First Lead Forms</h4>
              </div>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-6 relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-1">
                    <div className="w-8 h-1 bg-blue-600 rounded-full"></div>
                    <div className="w-8 h-1 bg-slate-200 rounded-full"></div>
                    <div className="w-8 h-1 bg-slate-200 rounded-full"></div>
                  </div>
                  <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">Question 1 of 3</span>
                </div>
                
                <p className="text-[10px] font-bold text-slate-800 mb-3 text-center">How soon are you looking to list your property?</p>
                
                <div className="space-y-2">
                  <div className="p-2 bg-white border border-blue-600 rounded-lg flex items-center justify-between">
                    <span className="text-[9px] font-bold text-blue-600">Within 30 Days</span>
                    <div className="w-2.5 h-2.5 rounded-full border-2 border-blue-600 flex items-center justify-center">
                      <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-2 bg-white border border-slate-200 rounded-lg flex items-center justify-between">
                    <span className="text-[9px] font-medium text-slate-500">1-3 Months</span>
                    <div className="w-2.5 h-2.5 rounded-full border border-slate-300"></div>
                  </div>
                  <div className="p-2 bg-white border border-slate-200 rounded-lg flex items-center justify-between">
                    <span className="text-[9px] font-medium text-slate-500">Just Curious</span>
                    <div className="w-2.5 h-2.5 rounded-full border border-slate-300"></div>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-center">
                  <button className="px-4 py-1.5 bg-blue-600 rounded-full text-[9px] text-white font-bold uppercase tracking-wider shadow-sm inline-block" disabled>
                    Next Step
                  </button>
                </div>
              </div>

              <p className="text-slate-600 text-sm">Optimized landing pages with intelligent lead forms designed to filter and pre-qualify prospects, ensuring you receive genuinely interested buyers and sellers ready for conversation.</p>
            </div>

            {/* Box 3: Systematic AI Follow-Up */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mr-4">
                  <Bot className="w-6 h-6 text-[#2563EB]" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Systematic AI Follow-Up</h4>
              </div>
              <div className="flex justify-center mb-6">
                <div className="w-24 h-40 bg-slate-900 rounded-2xl p-2 relative">
                  <div className="w-8 h-1 bg-slate-700 mx-auto rounded-full mb-4"></div>
                  <div className="bg-blue-600 h-6 w-full rounded flex items-center justify-center text-[8px] text-white font-bold">Incoming AI Call</div>
                  <div className="mt-4 space-y-2">
                    <div className="h-1 bg-slate-700 w-full rounded"></div>
                    <div className="h-1 bg-slate-700 w-2/3 rounded"></div>
                  </div>
                </div>
              </div>
              <p className="text-slate-600 text-sm">Our AI technology ensures every lead submitted through your forms receives prompt, professional engagement and appointment booking.</p>
            </div>
          </div>
        </div>

        {/* Visual Comparison Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-extrabold text-slate-900">The Strategic Difference</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-slate-200 rounded-[2rem] overflow-hidden border border-slate-200 shadow-xl">
            <div className="bg-slate-50 p-10">
              <h4 className="text-xl font-bold text-slate-400 mb-8 flex items-center uppercase tracking-widest">
                Traditional Approach
              </h4>
              <ul className="space-y-6">
                {[
                  { text: 'Generic, uninspired ads', icon: XCircle },
                  { text: 'Basic, clunky contact forms', icon: XCircle },
                  { text: 'Slow, manual follow-up', icon: XCircle },
                  { text: 'Inconsistent, unpredictable results', icon: XCircle }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-slate-500">
                    <item.icon className="w-5 h-5 mr-4 text-slate-300" />
                    <span className="font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <div className="bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg">Proven</div>
              </div>
              <h4 className="text-xl font-black text-blue-600 mb-8 flex items-center uppercase tracking-widest">
                The Bloom Link System
              </h4>
              <ul className="space-y-6">
                {[
                  { text: 'Value-driven, custom ads', icon: CheckCircle2 },
                  { text: 'Optimized high-conversion forms', icon: CheckCircle2 },
                  { text: 'Instant AI-powered follow-up', icon: CheckCircle2 },
                  { text: 'Systematic, scalable process', icon: CheckCircle2 }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-slate-900">
                    <item.icon className="w-5 h-5 mr-4 text-blue-600" />
                    <span className="font-bold">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicAdvertising;