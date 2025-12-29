import React, { useState } from 'react';
import { ShieldCheck, Send, CheckCircle2 } from 'lucide-react';

const LeadForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <section id="initialize-ai" className="py-24 bg-white relative min-h-[600px] flex items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-blue-50 rounded-[3rem] p-8 sm:p-16 border border-blue-100 shadow-xl inline-block text-left">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-8 shadow-lg shadow-green-200">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6">Thank you for your interest in Bloom Link AI Agency!</h2>
            <div className="space-y-4 text-slate-700 leading-relaxed font-medium">
              <p>
                We've received your request and appreciate you taking the time to share your information with us. Someone from our team will reach out to you within the next 24 business hours to discuss how we can help scale your real estate business.
              </p>
              <p>
                In the meantime, feel free to explore our website to learn more about how our AI-powered appointment setting system is helping real estate professionals book more qualified listing appointments.
              </p>
              <p>
                We look forward to speaking with you soon!
              </p>
              <div className="pt-4">
                <p className="text-slate-900 font-bold">Warm regards,</p>
                <p className="text-[#2563EB] font-bold">The Bloom Link AI Team</p>
              </div>
            </div>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="mt-8 text-sm text-slate-400 font-semibold hover:text-[#2563EB] transition-colors"
            >
              ← Back to form
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="initialize-ai" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Initialize Your AI Appointment System
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-4">
            Complete the form below to secure your territory and start your onboarding process.
          </p>
          <div className="flex items-center justify-center text-blue-600 font-semibold text-sm">
            <ShieldCheck className="w-4 h-4 mr-2" />
            Your information is encrypted and secure
          </div>
        </div>

        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl overflow-hidden p-8 sm:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Contact Information Section */}
            <div>
              <h3 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-6 border-b border-slate-100 pb-2">
                Step 1: Contact Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">First Name *</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Last Name *</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none" placeholder="Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address *</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number *</label>
                  <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none" placeholder="(555) 000-0000" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Organization (Optional)</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none" placeholder="Agency or Brokerage Name" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">City *</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none" placeholder="Los Angeles" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">State *</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none" placeholder="CA" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Postal Code *</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none" placeholder="90210" />
                  </div>
                </div>
              </div>
            </div>

            {/* Qualifying Questions Section */}
            <div>
              <h3 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-6 border-b border-slate-100 pb-2">
                Step 2: Let's Get to Know Your Goals
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">How did you hear about us?</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 transition-all outline-none bg-white">
                    <option>Instagram Ads</option>
                    <option>Facebook Ads</option>
                    <option>Referral</option>
                    <option>Google Search</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">What interests you most?</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 transition-all outline-none bg-white">
                    <option>Paid Ad Management</option>
                    <option>AI Appointment Setter</option>
                    <option>Paid Ad Management & AI Appointment Setter</option>
                    <option>Other AI automation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Current monthly advertising spend?</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 transition-all outline-none bg-white">
                    <option>Not currently running ads</option>
                    <option>Under $1,000</option>
                    <option>$1,000 - $3,000</option>
                    <option>$3,000 - $5,000</option>
                    <option>$5,000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">How soon are you looking to implement a growth system?</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 transition-all outline-none bg-white">
                    <option>Immediately</option>
                    <option>Within 30 days</option>
                    <option>Within 60 days</option>
                    <option>Just researching</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">What's your biggest challenge in scaling your real estate business? (Optional)</label>
                  <textarea rows={3} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-500 transition-all outline-none" placeholder="e.g. Inconsistent lead flow, spending too much time on follow-up..." />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-blue py-5 rounded-2xl text-white text-xl font-bold shadow-xl shadow-blue-200 flex items-center justify-center disabled:opacity-70"
            >
              {isSubmitting ? (
                <div className="h-6 w-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  Submit Information
                  <Send className="w-5 h-5 ml-3" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;