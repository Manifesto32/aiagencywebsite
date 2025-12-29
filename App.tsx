
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
  // Option A: Direct Link to a GHL Form/Funnel (Most Common)
  formUrl: "#getting-started", 
  
  // Option B: If you use the GHL 'Popup' feature, set this to true
  // and use 'ghl-popup-trigger' as your class in GHL settings.
  usePopup: false, 
  
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
