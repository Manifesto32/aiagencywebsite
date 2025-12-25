
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import GettingStarted from './components/GettingStarted';
import CTABlock from './components/CTABlock';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <Benefits />
        <HowItWorks />
        <GettingStarted />
        <CTABlock />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
