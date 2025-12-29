import { GoogleGenAI } from "@google/genai";
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
  formUrl: "#onboarding-form",
  
  buttonText: "Start booking more listings",
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-100 selection:text-blue-900">
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