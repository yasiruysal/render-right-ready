
import React, { useState } from 'react';
import { OutOfStockDialog } from './OutOfStockDialog';

export const Navigation: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handlePreOrderClick = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="bg-[rgba(243,233,222,1)] flex w-full items-center gap-5 text-lg text-black font-normal flex-wrap justify-between px-8 py-5 max-md:max-w-full max-md:px-5">
        <div className="self-stretch text-2xl font-bold whitespace-nowrap tracking-[-0.98px] leading-none my-auto pt-px pb-3">
          Nuvé
        </div>
        <nav className="self-stretch flex items-stretch gap-8 leading-none flex-wrap my-auto py-1.5 max-md:max-w-full" role="navigation" aria-label="Main navigation">
          <button 
            onClick={() => scrollToSection('features')} 
            className="grow hover:text-[rgba(91,114,71,1)] transition-colors cursor-pointer bg-transparent border-none text-lg text-black font-normal"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('sustainability')} 
            className="basis-auto hover:text-[rgba(91,114,71,1)] transition-colors cursor-pointer bg-transparent border-none text-lg text-black font-normal"
          >
            Sustainability
          </button>
          <button 
            onClick={() => scrollToSection('how-it-works')} 
            className="basis-auto hover:text-[rgba(91,114,71,1)] transition-colors cursor-pointer bg-transparent border-none text-lg text-black font-normal"
          >
            How It Works
          </button>
          <button 
            onClick={() => scrollToSection('reviews')} 
            className="hover:text-[rgba(91,114,71,1)] transition-colors cursor-pointer bg-transparent border-none text-lg text-black font-normal"
          >
            Reviews
          </button>
          <button 
            onClick={() => scrollToSection('pricing')} 
            className="hover:text-[rgba(91,114,71,1)] transition-colors cursor-pointer bg-transparent border-none text-lg text-black font-normal"
          >
            Pricing
          </button>
          <button 
            onClick={() => scrollToSection('faq')} 
            className="hover:text-[rgba(91,114,71,1)] transition-colors cursor-pointer bg-transparent border-none text-lg text-black font-normal"
          >
            FAQ
          </button>
        </nav>
        <button 
          onClick={handlePreOrderClick}
          className="bg-[rgba(91,114,71,1)] shadow-[0px_2px_16px_rgba(91,114,71,0.07)] self-stretch text-white pt-3 pb-[19px] px-5 rounded-full hover:bg-[rgba(81,104,61,1)] transition-colors"
        >
          Pre-Order Nuvé
        </button>
      </header>
      
      <OutOfStockDialog 
        isOpen={isDialogOpen} 
        onClose={handleCloseDialog} 
      />
    </>
  );
};
