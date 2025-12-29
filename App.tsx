
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Benefits from './components/Benefits';
import HearYourFutureAI from './components/HearYourFutureAI';
import HowItWorks from './components/HowItWorks';
import StrategicAdvertising from './components/StrategicAdvertising';
import GettingStarted from './components/GettingStarted';
import CTABlock from './components/CTABlock';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

/**
 * GHL_CONFIG: The single source of truth for your GoHighLevel integration.
 */
export const GHL_CONFIG = {
  /**
   * YOUR NEW GHL SUBDOMAIN:
   * Based on your screenshot, your GHL content will live at:
   * https://aiagencywebs.[YOUR-ROOT-DOMAIN].com
   * 
   * REPLACE 'YOURDOMAIN.com' with your actual domain below.
   */
  ghlSubdomain: "aiagencywebs.bloomlinkai.com", // Change this to your actual verified domain
  
  // The specific path to your form or funnel page in GHL
  formPath: "/start", 

  // Calculated URL
  get formUrl() {
    return `https://${this.ghlSubdomain}${this.formPath}`;
  },
  
  buttonText: "Start Booking More Listings",
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <HowItWorks />
        <StrategicAdvertising />
        <Benefits />
        <HearYourFutureAI />
        <GettingStarted />
        <CTABlock />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
