import React from 'react';
import { GHL_CONFIG } from '../App';
import { ShieldCheck } from 'lucide-react';

const LeadForm: React.FC = () => {
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

        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl overflow-hidden p-0 sm:p-2 min-h-[600px]">
           <iframe
                src={`https://api.leadconnectorhq.com/widget/form/${GHL_CONFIG.formId}`}
                style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
                id={`inline-${GHL_CONFIG.formId}`}
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Onboarding Form"
                data-height="1109"
                data-layout-iframe-id={`inline-${GHL_CONFIG.formId}`}
                data-form-id={GHL_CONFIG.formId}
                title="Onboarding Form"
            />
        </div>
      </div>
    </section>
  );
};

export default LeadForm;