import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <style>{`
        .privacy-content [data-custom-class='body'], .privacy-content [data-custom-class='body'] * {
          background: transparent !important;
        }
        .privacy-content [data-custom-class='title'], .privacy-content [data-custom-class='title'] * {
          font-family: Arial !important;
          font-size: 26px !important;
          color: #000000 !important;
          font-weight: 900;
        }
        .privacy-content [data-custom-class='subtitle'], .privacy-content [data-custom-class='subtitle'] * {
          font-family: Arial !important;
          color: #595959 !important;
          font-size: 14px !important;
        }
        .privacy-content [data-custom-class='heading_1'], .privacy-content [data-custom-class='heading_1'] * {
          font-family: Arial !important;
          font-size: 19px !important;
          color: #000000 !important;
          font-weight: 700;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .privacy-content [data-custom-class='heading_2'], .privacy-content [data-custom-class='heading_2'] * {
          font-family: Arial !important;
          font-size: 17px !important;
          color: #000000 !important;
          font-weight: 700;
          margin-top: 1.25rem;
          margin-bottom: 0.5rem;
        }
        .privacy-content [data-custom-class='body_text'], .privacy-content [data-custom-class='body_text'] * {
          color: #595959 !important;
          font-size: 14px !important;
          font-family: Arial !important;
          line-height: 1.6 !important;
        }
        .privacy-content [data-custom-class='link'], .privacy-content [data-custom-class='link'] * {
          color: #3030F1 !important;
          font-size: 14px !important;
          font-family: Arial !important;
          word-break: break-word !important;
          text-decoration: underline;
        }
        .privacy-content ul {
          list-style-type: disc;
          margin-left: 1.5rem;
          margin-bottom: 1rem;
        }
        .privacy-content table {
          border-collapse: collapse;
          width: 100%;
          margin: 1.5rem 0;
        }
        .privacy-content th, .privacy-content td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: left;
        }
      `}</style>
      
      <div className="max-w-4xl mx-auto privacy-content">
        <div data-custom-class="body">
          <div>
            <strong><span data-custom-class="title"><h1>PRIVACY POLICY</h1></span></strong>
          </div>
          <div>
            <span style={{ color: 'rgb(127, 127, 127)' }}>
              <strong><span style={{ fontSize: '15px' }}><span data-custom-class="subtitle">Last updated January 04, 2026</span></span></strong>
            </span>
          </div>
          
          <div className="mt-10" style={{ lineHeight: '1.5' }}>
            <span data-custom-class="body_text">
              This Privacy Notice for Bloom Link AI Agency ("<strong>we</strong>," "<strong>us</strong>," or "<strong>our</strong>"), describes how and why we might access, collect, store, use, and/or share ("<strong>process</strong>") your personal information when you use our services ("<strong>Services</strong>"), including when you:
            </span>
          </div>
          
          <ul>
            <li data-custom-class="body_text">
              Visit our website at <a target="_blank" data-custom-class="link" href="https://www.bloomlinkaiagency.com/">https://www.bloomlinkaiagency.com/</a> or any website of ours that links to this Privacy Notice
            </li>
            <li data-custom-class="body_text">
              Engage with us in other related ways, including any marketing or events
            </li>
          </ul>

          <div style={{ lineHeight: '1.5' }}>
            <span data-custom-class="body_text">
              <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services.
            </span>
          </div>

          <div className="mt-10">
            <strong><span data-custom-class="heading_1"><h2>SUMMARY OF KEY POINTS</h2></span></strong>
            <p data-custom-class="body_text" className="italic mb-4">
              This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.
            </p>
            
            <p data-custom-class="body_text" className="mb-4">
              <strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.
            </p>
            
            <p data-custom-class="body_text" className="mb-4">
              <strong>Do we process any sensitive personal information?</strong> We do not process sensitive personal information.
            </p>
            
            <p data-custom-class="body_text" className="mb-4">
              <strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.
            </p>
            
            <p data-custom-class="body_text" className="mb-4">
              <strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.
            </p>
            
            <p data-custom-class="body_text" className="mb-4">
              <strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties.
            </p>
            
            <p data-custom-class="body_text" className="mb-4">
              <strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.
            </p>
            
            <p data-custom-class="body_text">
              <strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by submitting a data subject access request, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
            </p>
          </div>

          <div id="toc" className="mt-10 border-t pt-10">
            <strong><span data-custom-class="heading_1"><h2>TABLE OF CONTENTS</h2></span></strong>
            <ul className="space-y-2">
              <li><a data-custom-class="link" href="#infocollect">1. WHAT INFORMATION DO WE COLLECT?</a></li>
              <li><a data-custom-class="link" href="#infouse">2. HOW DO WE PROCESS YOUR INFORMATION?</a></li>
              <li><a data-custom-class="link" href="#whoshare">3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a></li>
              <li><a data-custom-class="link" href="#ai">4. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</a></li>
              <li><a data-custom-class="link" href="#inforetain">5. HOW LONG DO WE KEEP YOUR INFORMATION?</a></li>
              <li><a data-custom-class="link" href="#privacyrights">6. WHAT ARE YOUR PRIVACY RIGHTS?</a></li>
              <li><a data-custom-class="link" href="#DNT">7. CONTROLS FOR DO-NOT-TRACK FEATURES</a></li>
              <li><a data-custom-class="link" href="#uslaws">8. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</a></li>
              <li><a data-custom-class="link" href="#policyupdates">9. DO WE MAKE UPDATES TO THIS NOTICE?</a></li>
              <li><a data-custom-class="link" href="#contact">10. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a></li>
              <li><a data-custom-class="link" href="#request">11. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</a></li>
            </ul>
          </div>

          <div id="infocollect" className="mt-10">
            <strong><span data-custom-class="heading_1"><h2>1. WHAT INFORMATION DO WE COLLECT?</h2></span></strong>
            <strong><span data-custom-class="heading_2"><h3>Personal information you disclose to us</h3></span></strong>
            <p data-custom-class="body_text"><strong><em>In Short:</em></strong> <em>We collect personal information that you provide to us.</em></p>
            <p data-custom-class="body_text" className="mt-4">
              We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
            </p>
            <p data-custom-class="body_text" className="mt-4">
              <strong>Personal Information Provided by You.</strong> The personal information that we collect may include:
            </p>
            <ul>
              <li data-custom-class="body_text">names</li>
              <li data-custom-class="body_text">phone numbers</li>
              <li data-custom-class="body_text">email addresses</li>
              <li data-custom-class="body_text">mailing addresses</li>
            </ul>
            <p data-custom-class="body_text">
              <strong>Sensitive Information.</strong> We do not process sensitive information.
            </p>
          </div>

          <div id="infouse" className="mt-10">
            <strong><span data-custom-class="heading_1"><h2>2. HOW DO WE PROCESS YOUR INFORMATION?</h2></span></strong>
            <p data-custom-class="body_text"><strong><em>In Short:</em></strong> <em>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.</em></p>
            <p data-custom-class="body_text" className="mt-4">
              We process your personal information for a variety of reasons, depending on how you interact with our Services, including to provide the core functions of the appointment generation system.
            </p>
          </div>

          <div id="whoshare" className="mt-10">
            <strong><span data-custom-class="heading_1"><h2>3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2></span></strong>
            <p data-custom-class="body_text"><strong><em>In Short:</em></strong> <em>We may share information in specific situations described in this section and/or with the following third parties.</em></p>
            <p data-custom-class="body_text" className="mt-4">
              We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business.
            </p>
          </div>

          <div id="ai" className="mt-10">
            <strong><span data-custom-class="heading_1"><h2>4. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</h2></span></strong>
            <p data-custom-class="body_text"><strong><em>In Short:</em></strong> <em>We offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies.</em></p>
            <p data-custom-class="body_text" className="mt-4">
              As part of our Services, we offer products powered by AI. We provide these through AI Service Providers, including <strong>n8n</strong>, <strong>Anthropic</strong> and <strong>OpenAI</strong>. Your input and personal information will be shared with these providers to enable your use of our AI Products.
            </p>
          </div>

          <div id="inforetain" className="mt-10">
            <strong><span data-custom-class="heading_1"><h2>5. HOW LONG DO WE KEEP YOUR INFORMATION?</h2></span></strong>
            <p data-custom-class="body_text"><strong><em>In Short:</em></strong> <em>We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.</em></p>
          </div>

          <div id="privacyrights" className="mt-10">
            <strong><span data-custom-class="heading_1"><h2>6. WHAT ARE YOUR PRIVACY RIGHTS?</h2></span></strong>
            <p data-custom-class="body_text"><strong><em>In Short:</em></strong> <em>You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.</em></p>
            <p data-custom-class="body_text" className="mt-4">
              <strong>No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Information sharing to subcontractors in support services, such as customer service, is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with third parties.</strong>
            </p>
          </div>

          <div id="contact" className="mt-10 border-t pt-10">
            <strong><span data-custom-class="heading_1"><h2>10. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2></span></strong>
            <p data-custom-class="body_text">
              If you have questions or comments about this notice, you may email us at <a target="_blank" data-custom-class="link" href="mailto:lawong323@gmail.com">lawong323@gmail.com</a> or contact us by post at:
            </p>
            <p data-custom-class="body_text" className="mt-4">
              Bloom Link AI Agency<br />
              USA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;