import { GoogleGenAI } from "@google/genai";
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import ComparisonSection from './components/ComparisonSection';
import MarketInsights from './components/MarketInsights';
import GettingStarted from './components/GettingStarted';
import PackagesPricing from './components/PackagesPricing';
import OfferSection from './components/OfferSection';
import LeadForm from './components/LeadForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';

export const GHL_CONFIG = {
  rootDomain: "bloomlinkaiagency.com", 
  subdomainPrefix: "aiagencywebs",
  formId: "CZBgH0rz9dpgHKrOhRVh",
  formUrl: "#initialize-ai",
  bookingUrl: "https://aiagencywebs.bloomlinkaiagency.com/booking-page",
  buttonText: "Start booking more listings",
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'privacy'>('home');

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
    handleHashChange();
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
        <ComparisonSection />
        <Benefits />
        <MarketInsights />
        <GettingStarted />
        <PackagesPricing />
        <OfferSection />
        <LeadForm />
        <FAQ />
      </main>
      <Footer onPrivacyClick={navigateToPrivacy} />
    </div>
  );
};

export default App;