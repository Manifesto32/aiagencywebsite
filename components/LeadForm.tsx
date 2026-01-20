import React, { useState, useEffect } from 'react';
import { ShieldCheck, Send, CheckCircle2, Globe, ArrowRight, Loader2 } from 'lucide-react';
import { GHL_CONFIG } from '../App';

const GHL_WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/Y5zsNn2xY4yBhOcBzCel/webhook-trigger/490b0dd3-56fe-46b7-a0b0-08cd29f1dc1e";

const LeadForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    city: '',
    state: '',
    postalCode: '',
    source: '',
    interest: '',
    impact: '',
    adSpend: '',
    timeline: '',
    challenge: ''
  });

  // Handle redirection logic
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        window.location.href = GHL_CONFIG.bookingUrl;
      }, 4000); 
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      full_name: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email,
      phone: formData.phone,
      company_name: formData.organization,
      city: formData.city,
      state: formData.state,
      postal_code: formData.postalCode,
      lead_source: formData.source,
      service_interest: formData.interest,
      business_impact_goal: formData.impact,
      current_ad_spend: formData.adSpend,
      implementation_timeline: formData.timeline,
      business_challenge: formData.challenge,
      submission_date: new Date().toISOString()
    };

    try {
      await fetch(GHL_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload),
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="initialize-ai" className="py-24 bg-slate-50 relative min-h-[600px] flex items-center" aria-live="polite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-[3rem] p-8 sm:p-16 border-4 border-blue-600 shadow-2xl inline-block text-left relative overflow-hidden">
            <div className="absolute top-0 left-0 h-1.5 bg-blue-600 animate-progress-shrink w-full origin-left" aria-hidden="true"></div>
            
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-8 shadow-lg shadow-green-200">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Application Received!</h2>
            
            <div className="space-y-4 text-slate-700 leading-relaxed font-medium mb-10">
              <p>We've successfully received your request and territory reservation details.</p>
              <p className="text-blue-600 font-bold">Redirecting you to our Booking Page to schedule your free consultation call...</p>
              
              <div className="pt-4 flex items-center gap-2 text-slate-400 text-sm">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Redirecting in 4 seconds...</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <a 
                href={GHL_CONFIG.bookingUrl}
                className="btn-blue px-8 py-4 rounded-2xl text-white font-black uppercase tracking-widest text-sm inline-flex items-center shadow-lg shadow-blue-200"
              >
                Continue to Booking
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-sm text-slate-400 font-semibold hover:text-[#2563EB] transition-colors uppercase tracking-widest"
              >
                ← Edit Application
              </button>
            </div>
          </div>
        </div>
        <style>{`
          @keyframes progress-shrink {
            from { transform: scaleX(1); }
            to { transform: scaleX(0); }
          }
          .animate-progress-shrink {
            animation: progress-shrink 4s linear forwards;
          }
        `}</style>
      </section>
    );
  }

  return (
    <section id="initialize-ai" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative bg-white rounded-[4rem] border-8 border-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden ring-1 ring-slate-200">
          
          <div className="bg-slate-900 py-16 sm:py-20 px-8 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full filter blur-[150px] opacity-20 -mr-48 -mt-48" aria-hidden="true"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500 rounded-full filter blur-[100px] opacity-10 -ml-32 -mb-32" aria-hidden="true"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/30 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]">
                  <Globe className="w-4 h-4 mr-2" />
                  Territory Registration Active
                </div>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-blue-400 mb-6 tracking-tight leading-[1.2] uppercase">
                Secure Your Territory & <br className="hidden sm:block" /> Book a Free Consultation
              </h2>
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed mb-8 opacity-90">
                Complete the form below to secure your exclusive market territory. Once submitted, you'll be redirected to our calendar to pick a time for your growth call.
              </p>
              <div className="flex items-center justify-center text-white/60 font-bold text-[10px] tracking-widest uppercase bg-white/5 py-4 px-8 rounded-2xl border border-white/10 inline-flex">
                <ShieldCheck className="w-4 h-4 mr-3 text-blue-400" />
                Secure End-to-End Encrypted Portal
              </div>
            </div>
          </div>

          <div className="py-16 px-6 sm:px-12 lg:px-24 bg-white">
            <div className="max-w-4xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-12" id="reservation-form">
                <div className="bg-slate-50/50 p-8 sm:p-12 rounded-[2.5rem] border border-slate-100">
                  <h3 className="text-lg font-black text-blue-600 uppercase tracking-[0.3em] mb-10 flex items-center">
                    <span className="w-8 h-px bg-blue-600 mr-4"></span>
                    Step 1: Identity & Contact
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="block text-sm font-black text-slate-900 uppercase tracking-widest ml-1">First Name *</label>
                      <input 
                        required 
                        id="firstName"
                        name="firstName"
                        type="text" 
                        value={formData.firstName}
                        onChange={handleChange}
                        autoComplete="given-name"
                        className="w-full px-6 py-4 rounded-xl border-2 border-slate-200 bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all outline-none text-slate-900 font-extrabold text-lg" 
                        placeholder="John" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="block text-sm font-black text-slate-900 uppercase tracking-widest ml-1">Last Name *</label>
                      <input 
                        required 
                        id="lastName"
                        name="lastName"
                        type="text" 
                        value={formData.lastName}
                        onChange={handleChange}
                        autoComplete="family-name"
                        className="w-full px-6 py-4 rounded-xl border-2 border-slate-200 bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all outline-none text-slate-900 font-extrabold text-lg" 
                        placeholder="Doe" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-black text-slate-900 uppercase tracking-widest ml-1">Email Address *</label>
                      <input 
                        required 
                        id="email"
                        name="email"
                        type="email" 
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                        className="w-full px-6 py-4 rounded-xl border-2 border-slate-200 bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all outline-none text-slate-900 font-extrabold text-lg" 
                        placeholder="john@example.com" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-black text-slate-900 uppercase tracking-widest ml-1">Phone Number *</label>
                      <input 
                        required 
                        id="phone"
                        name="phone"
                        type="tel" 
                        value={formData.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                        className="w-full px-6 py-4 rounded-xl border-2 border-slate-200 bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all outline-none text-slate-900 font-extrabold text-lg" 
                        placeholder="(555) 000-0000" 
                      />
                    </div>
                    <div className="sm:col-span-2 space-y-2">
                      <label htmlFor="organization" className="block text-sm font-black text-slate-900 uppercase tracking-widest ml-1">Organization (Optional)</label>
                      <input 
                        id="organization"
                        name="organization"
                        type="text" 
                        value={formData.organization}
                        onChange={handleChange}
                        autoComplete="organization"
                        className="w-full px-6 py-4 rounded-xl border-2 border-slate-200 bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all outline-none text-slate-900 font-extrabold text-lg" 
                        placeholder="Agency or Brokerage Name" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="city" className="block text-sm font-black text-slate-900 uppercase tracking-widest ml-1">City *</label>
                      <input 
                        required 
                        id="city"
                        name="city"
                        type="text" 
                        value={formData.city}
                        onChange={handleChange}
                        autoComplete="address-level2"
                        className="w-full px-6 py-4 rounded-xl border-2 border-slate-200 bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all outline-none text-slate-900 font-extrabold text-lg" 
                        placeholder="Los Angeles" 
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="state" className="block text-sm font-black text-slate-900 uppercase tracking-widest ml-1">State *</label>
                        <input 
                          required 
                          id="state"
                          name="state"
                          type="text" 
                          value={formData.state}
                          onChange={handleChange}
                          autoComplete="address-level1"
                          className="w-full px-6 py-4 rounded-xl border-2 border-slate-200 bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all outline-none text-slate-900 font-extrabold text-lg" 
                          placeholder="CA" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="postalCode" className="block text-sm font-black text-slate-900 uppercase tracking-widest ml-1">Postal Code *</label>
                        <input 
                          required 
                          id="postalCode"
                          name="postalCode"
                          type="text" 
                          value={formData.postalCode}
                          onChange={handleChange}
                          autoComplete="postal-code"
                          className="w-full px-6 py-4 rounded-xl border-2 border-slate-200 bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all outline-none text-slate-900 font-extrabold text-lg" 
                          placeholder="90210" 
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50/50 p-8 sm:p-12 rounded-[2.5rem] border border-slate-100">
                  <h3 className="text-lg font-black text-blue-600 uppercase tracking-[0.3em] mb-10 flex items-center">
                    <span className="w-8 h-px bg-blue-600 mr-4"></span>
                    Step 2: Business Goals
                  </h3>
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <label htmlFor="source" className="block text-sm font-black text-slate-900 uppercase tracking-widest ml-1">How did you hear about us? *</label>
                      <select 
                        required
                        id="source"
                        name="source"
                        value={formData.source}
                        onChange={handleChange}
                        className="w-full px-6 py-4 rounded-xl border-2 border-slate-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all outline-none bg-white text-slate-900 font-extrabold text-lg"
                      >
                        <option value="" disabled>Please select...</option>
                        <option>Instagram Ads</option>
                        <option>Facebook Ads</option>
                        <option>Referral</option>
                        <option>Google Search</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="interest" className="block text-sm font-black text-slate-900 uppercase tracking-widest ml-1">What interests you most? *</label>
                      <select 
                        required
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full px-6 py-4 rounded-xl border-2 border-slate-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all outline-none bg-white text-slate-900 font-extrabold text-lg"
                      >
                        <option value="" disabled>Please select...</option>
                        <option>Managed Paid Ads</option>
                        <option>AI Appointment Setter</option>
                        <option>Managed Paid Ads & AI Appointment Setter</option>
                        <option>Other AI automation</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="impact" className="block text-sm font-black text-slate-900 uppercase tracking-widest ml-1">What would have the biggest impact on your business right now if you had an AI handling your calls? *</label>
                      <select 
                        required
                        id="impact"
                        name="impact"
                        value={formData.impact}
                        onChange={handleChange}
                        className="w-full px-6 py-4 rounded-xl border-2 border-slate-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all outline-none bg-white text-slate-900 font-extrabold text-lg"
                      >
                        <option value="" disabled>Please select...</option>
                        <option>Responding to leads faster (I'm getting leads but missing opportunities)</option>
                        <option>Getting more qualified leads in the first place (I need more appointments)</option>
                        <option>Both - I need a complete system</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="adSpend" className="block text-sm font-black text-slate-900 uppercase tracking-widest ml-1">Current monthly advertising spend? *</label>
                      <select 
                        required
                        id="adSpend"
                        name="adSpend"
                        value={formData.adSpend}
                        onChange={handleChange}
                        className="w-full px-6 py-4 rounded-xl border-2 border-slate-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all outline-none bg-white text-slate-900 font-extrabold text-lg"
                      >
                        <option value="" disabled>Please select...</option>
                        <option>Not currently running ads</option>
                        <option>Under $1,000</option>
                        <option>$1,000 - $3,000</option>
                        <option>$3,000 - $5,000</option>
                        <option>$5,000+</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="timeline" className="block text-sm font-black text-slate-900 uppercase tracking-widest ml-1">Implementation Timeline *</label>
                      <select 
                        required
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-6 py-4 rounded-xl border-2 border-slate-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all outline-none bg-white text-slate-900 font-extrabold text-lg"
                      >
                        <option value="" disabled>Please select...</option>
                        <option>Immediately</option>
                        <option>Within 30 days</option>
                        <option>Within 60 days</option>
                        <option>Just researching</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="challenge" className="block text-sm font-black text-slate-900 uppercase tracking-widest ml-1">Biggest Challenge in Scaling? (Optional)</label>
                      <textarea 
                        id="challenge"
                        name="challenge"
                        rows={4} 
                        value={formData.challenge}
                        onChange={handleChange}
                        className="w-full px-6 py-4 rounded-xl border-2 border-slate-200 bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all outline-none text-slate-900 font-extrabold text-lg resize-none" 
                        placeholder="e.g. Inconsistent lead flow..." 
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 py-6 rounded-2xl text-white text-2xl font-black uppercase tracking-widest shadow-xl shadow-blue-200 flex items-center justify-center transition-all hover:bg-blue-700 hover:-translate-y-1 active:scale-[0.98] disabled:opacity-70 disabled:hover:translate-y-0"
                    aria-label={isSubmitting ? "Submitting Application" : "Secure My Territory and Continue"}
                  >
                    {isSubmitting ? (
                      <div className="h-8 w-8 border-4 border-white border-t-transparent rounded-full animate-spin" aria-hidden="true"></div>
                    ) : (
                      <>
                        Secure My Territory
                        <Send className="w-6 h-6 ml-5" aria-hidden="true" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-slate-400 mt-6 font-bold uppercase tracking-[0.2em]">
                    Your information is protected. We will only contact you regarding this application.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;