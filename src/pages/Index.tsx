
import React, { useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { CartridgeSection } from '@/components/sections/CartridgeSection';
import { SustainabilitySection } from '@/components/sections/SustainabilitySection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { TransitionSection } from '@/components/sections/TransitionSection';

const Index: React.FC = () => {
  useEffect(() => {
    // Add smooth scrolling behavior to the entire document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <main className="bg-white overflow-hidden rounded-lg border-[rgba(206,212,218,1)] border-solid border-2">
      <Navigation />
      <div className="bg-[rgba(0,0,0,0)] w-full max-md:max-w-full">
        <HeroSection />
        <FeaturesSection />
        <CartridgeSection />
        <SustainabilitySection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <TransitionSection />
      </div>
    </main>
  );
};

export default Index;
