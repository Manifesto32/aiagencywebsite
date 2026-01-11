import React from 'react';
import { MessageSquareText, PhoneForwarded, Clock, CheckCircle2 } from 'lucide-react';

const LeadQualification: React.FC = () => {
  return (
    <section id="ai-qualification" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-[900] text-slate-900 mb-6 tracking-tight">
            24/7 Lead Qualification That <br className="hidden sm:block" />
            <span className="text-blue-600">Actually Sounds Human</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto font-medium">
            Stop losing leads to bad timing or slow follow-up. Our AI Appointment Setter handles the initial contact with the empathy of a top producer and the precision of a computer.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Benefit 1: Instant Qualification */}
          <div className="relative group p-8 sm:p-12 bg-slate-50 rounded-[3rem] border border-slate-100 hover:border-blue-200 transition-all duration-300">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <MessageSquareText className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">
              Instant Qualification, Real Conversations
            </h3>
            <p className="text-slate-600 leading-relaxed font-medium mb-6">
              Our AI engages in natural dialogue that uncovers timeline, motivation, and budget without feeling scripted. No more wondering if a lead is serious—you'll know before they hit your calendar. The AI handles objections, answers questions, and builds genuine rapport that gets prospects to open up about what really matters.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="flex items-center text-[10px] font-bold text-slate-500 bg-white px-3 py-1.5 rounded-full border border-slate-100">
                <CheckCircle2 className="w-3 h-3 mr-1.5 text-green-500" /> Natural Speech
              </span>
              <span className="flex items-center text-[10px] font-bold text-slate-500 bg-white px-3 py-1.5 rounded-full border border-slate-100">
                <CheckCircle2 className="w-3 h-3 mr-1.5 text-green-500" /> Active Listening
              </span>
              <span className="flex items-center text-[10px] font-bold text-slate-500 bg-white px-3 py-1.5 rounded-full border border-slate-100">
                <CheckCircle2 className="w-3 h-3 mr-1.5 text-green-500" /> Contextual Awareness
              </span>
            </div>
          </div>

          {/* Benefit 2: Missed Calls */}
          <div className="relative group p-8 sm:p-12 bg-blue-600 rounded-[3rem] text-white shadow-2xl shadow-blue-200 overflow-hidden">
            {/* Background Decorative Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -mr-32 -mt-32"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <PhoneForwarded className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
                From Missed Calls to Booked Appointments
              </h3>
              <p className="text-blue-50 leading-relaxed font-medium mb-6">
                While your competitors' leads go to voicemail, yours are having conversations at midnight, during Sunday open houses, or when you're with clients. Our AI never sleeps, never takes a break, and never sounds tired. Every qualified lead gets booked directly to your calendar with full context, so you're only talking to ready buyers and motivated sellers who've already been pre-qualified.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-[10px] font-black uppercase tracking-widest bg-white/10 px-4 py-2 rounded-full border border-white/20">
                  <Clock className="w-4 h-4 mr-2" />
                  Always Active
                </div>
                <div className="h-1 w-12 bg-white/20 rounded-full"></div>
                <div className="text-[10px] font-black uppercase tracking-widest text-blue-200">
                  Zero Latency
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LeadQualification;