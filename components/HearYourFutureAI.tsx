
import React from 'react';
import { Play, Mic } from 'lucide-react';

const HearYourFutureAI: React.FC = () => {
  return (
    <section id="ai-demo" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Experience Your Future AI Appointment Setter in Action
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Listen to how your customized AI can handle real estate leads 24/7.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-[#F0F9FF] rounded-[2.5rem] p-8 sm:p-12 border border-blue-100 shadow-xl shadow-blue-50/50 relative overflow-hidden group">
            {/* Visual background element */}
            <div className="absolute top-0 right-0 -mt-12 -mr-12 w-48 h-48 bg-white/40 rounded-full blur-3xl group-hover:bg-white/60 transition-colors"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg mb-8 group-hover:scale-105 transition-transform duration-500">
                <Mic className="w-10 h-10 text-[#2563EB]" />
              </div>
              
              {/* Sound Wave Animation Placeholder */}
              <div className="flex items-end justify-center space-x-1.5 mb-10 h-12">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                  <div 
                    key={i}
                    className="w-1.5 bg-[#2563EB]/20 rounded-full"
                    style={{ 
                      height: `${20 + Math.random() * 80}%`,
                      animation: `wave 1.5s ease-in-out infinite alternate`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  ></div>
                ))}
              </div>

              <div className="text-center space-y-8">
                <button 
                  className="btn-blue px-10 py-5 rounded-full text-white text-xl font-bold inline-flex items-center shadow-xl shadow-blue-200"
                  onClick={() => console.log('AI Demo Triggered')}
                >
                  <Play className="w-6 h-6 mr-3 fill-current" />
                  Test AI Voice Demo
                </button>

                <div className="pt-8 border-t border-blue-200/50">
                  <p className="text-sm text-slate-600 leading-relaxed max-w-xl mx-auto font-medium">
                    Each AI assistant is custom-programmed for your specific market, qualifying questions, and brand voice. This demo showcases the natural conversation flow and appointment booking capabilities The AI Appointment System will deliver.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes wave {
          0% { transform: scaleY(1); opacity: 0.3; }
          100% { transform: scaleY(2); opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default HearYourFutureAI;
