import { GoogleGenAI } from "@google/genai";
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Benefits from './components/Benefits';
import HearYourFutureAI from './components/HearYourFutureAI';
import HowItWorks from './components/HowItWorks';
import StrategicAdvertising from './components/StrategicAdvertising';
import LeadQualification from './components/LeadQualification';
import MarketInsights from './components/MarketInsights';
import GettingStarted from './components/GettingStarted';
import PackagesPricing from './components/PackagesPricing';
import Pricing from './components/Pricing';
import OfferSection from './components/OfferSection';
import CTABlock from './components/CTABlock';
import LeadForm from './components/LeadForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';

/**
 * GHL_CONFIG: The central hub for your GoHighLevel connection.
 */
export const GHL_CONFIG = {
  // 1. YOUR CUSTOM DOMAIN
  rootDomain: "bloomlinkaiagency.com", 
  
  // 2. THE SUBDOMAIN YOU CREATED
  subdomainPrefix: "aiagencywebs",

  // 3. THE FORM ID
  formId: "CZBgH0rz9dpgHKrOhRVh",

  // 4. URL to anchor section
  formUrl: "#initialize-ai",

  // 5. Success Redirection URL
  bookingUrl: "https://aiagencywebs.bloomlinkaiagency.com/booking-page",
  
  buttonText: "Start booking more listings",
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'privacy'>('home');

  // Simple "router" effect to handle browser back button or direct hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#privacy') {
        setCurrentView('privacy');
        window.scrollTo(0, 0);
      } else {
        setCurrentView('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check on initial load

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToPrivacy = () => {
    window.location.hash = 'privacy';
  };

  const navigateToHome = () => {
    window.location.hash = '';
  };

  if (currentView === 'privacy') {
    return (
      <div className="min-h-screen flex flex-col selection:bg-blue-100 selection:text-blue-900 bg-white">
        <Navbar onLogoClick={navigateToHome} />
        <main className="flex-1">
          <PrivacyPolicy />
        </main>
        <Footer onPrivacyClick={navigateToPrivacy} />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-100 selection:text-blue-900">
      <Navbar onLogoClick={navigateToHome} />
      <main>
        <Hero />
        <Solutions />
        <HowItWorks />
        <LeadQualification />
        <StrategicAdvertising />
        <Benefits />
        {/* <HearYourFutureAI /> */}
        <MarketInsights />
        <GettingStarted />
        <PackagesPricing />
        {/* <Pricing /> */}
        <OfferSection />
        <LeadForm />
        <FAQ />
      </main>
      <Footer onPrivacyClick={navigateToPrivacy} />
    </div>
  );
};

export default App;