import React, { useState } from 'react';
import { ShieldCheck, Send, CheckCircle2 } from 'lucide-react';

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
    adSpend: '',
    timeline: '',
    challenge: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Standardize payload for CRM auto-mapping
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
      <section id="initialize-ai" className="py-24 bg-white relative min-h-[600px] flex items-center">
        <div className="max-w-4xl auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-blue-50 rounded-[3rem] p-8 sm:p-16 border border-blue-100 shadow-xl inline-block text-left">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-8 shadow-lg shadow-green-200">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6">Thank you for your interest in Bloom Link AI Agency!</h2>
            <div className="space-y-4 text-slate-700 leading-relaxed font-medium">
              <p>
                We've received your request and appreciate you taking the time to share your information with us.
              </p>
              <p>
                In the meantime, feel free to explore our website to learn more about how our Appointment Generation System is helping real estate professionals book more qualified listing appointments.
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
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.95]">
            Start Here: Secure Your Territory & Book a Free Consultation
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-4">
            Complete the form below to secure your territory and begin onboarding—once submitted, you’ll be taken to schedule a free consultation call.
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
                  <input 
                    required 
                    name="firstName"
                    type="text" 
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none" 
                    placeholder="John" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Last Name *</label>
                  <input 
                    required 
                    name="lastName"
                    type="text" 
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none" 
                    placeholder="Doe" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address *</label>
                  <input 
                    required 
                    name="email"
                    type="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none" 
                    placeholder="john@example.com" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number *</label>
                  <input 
                    required 
                    name="phone"
                    type="tel" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none" 
                    placeholder="(555) 000-0000" 
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Organization (Optional)</label>
                  <input 
                    name="organization"
                    type="text" 
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none" 
                    placeholder="Agency or Brokerage Name" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">City *</label>
                  <input 
                    required 
                    name="city"
                    type="text" 
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none" 
                    placeholder="Los Angeles" 
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">State *</label>
                    <input 
                      required 
                      name="state"
                      type="text" 
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none" 
                      placeholder="CA" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Postal Code *</label>
                    <input 
                      required 
                      name="postalCode"
                      type="text" 
                      value={formData.postalCode}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none" 
                      placeholder="90210" 
                    />
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
                  <label className="block text-sm font-bold text-slate-700 mb-2">How did you hear about us? *</label>
                  <select 
                    required
                    name="source"
                    value={formData.source}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 transition-all outline-none bg-white"
                  >
                    <option value="" disabled>Please select...</option>
                    <option>Instagram Ads</option>
                    <option>Facebook Ads</option>
                    <option>Referral</option>
                    <option>Google Search</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">What interests you most? *</label>
                  <select 
                    required
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 transition-all outline-none bg-white"
                  >
                    <option value="" disabled>Please select...</option>
                    <option>Paid Ad Management</option>
                    <option>AI Appointment Setter</option>
                    <option>Paid Ad Management & AI Appointment Setter</option>
                    <option>Other AI automation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Current monthly advertising spend? *</label>
                  <select 
                    required
                    name="adSpend"
                    value={formData.adSpend}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 transition-all outline-none bg-white"
                  >
                    <option value="" disabled>Please select...</option>
                    <option>Not currently running ads</option>
                    <option>Under $1,000</option>
                    <option>$1,000 - $3,000</option>
                    <option>$3,000 - $5,000</option>
                    <option>$5,000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">How soon are you looking to implement an Appointment Generation System? *</label>
                  <select 
                    required
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 transition-all outline-none bg-white"
                  >
                    <option value="" disabled>Please select...</option>
                    <option>Immediately</option>
                    <option>Within 30 days</option>
                    <option>Within 60 days</option>
                    <option>Just researching</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">What's your biggest challenge in scaling your real estate business? (Optional)</label>
                  <textarea 
                    name="challenge"
                    rows={3} 
                    value={formData.challenge}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-500 transition-all outline-none" 
                    placeholder="e.g. Inconsistent lead flow, spending too much time on follow-up..." 
                  />
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