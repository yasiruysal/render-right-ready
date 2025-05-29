
import React, { useState } from 'react';
import { OutOfStockDialog } from './OutOfStockDialog';

export const Navigation: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="bg-[rgba(243,233,222,1)] flex w-full items-center gap-5 text-base sm:text-lg text-black font-normal flex-wrap justify-between px-4 sm:px-8 py-4 sm:py-5 max-md:max-w-full">
        <div className="text-xl sm:text-2xl font-bold whitespace-nowrap tracking-[-0.98px] leading-none">
          Nuvé
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-stretch gap-6 xl:gap-8 leading-none my-auto py-1.5" role="navigation" aria-label="Main navigation">
          <button 
            onClick={() => scrollToSection('features')} 
            className="hover:text-[rgba(91,114,71,1)] transition-colors cursor-pointer bg-transparent border-none text-lg text-black font-normal"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('sustainability')} 
            className="hover:text-[rgba(91,114,71,1)] transition-colors cursor-pointer bg-transparent border-none text-lg text-black font-normal"
          >
            Sustainability
          </button>
          <button 
            onClick={() => scrollToSection('how-it-works')} 
            className="hover:text-[rgba(91,114,71,1)] transition-colors cursor-pointer bg-transparent border-none text-lg text-black font-normal"
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

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden flex flex-col justify-center items-center w-6 h-6"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-black transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
          <span className={`block w-5 h-0.5 bg-black mt-1 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-5 h-0.5 bg-black mt-1 transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
        </button>

        {/* Desktop Pre-order Button */}
        <button 
          onClick={handlePreOrderClick}
          className="hidden lg:block bg-[rgba(91,114,71,1)] shadow-[0px_2px_16px_rgba(91,114,71,0.07)] text-white pt-3 pb-[19px] px-5 rounded-full hover:bg-[rgba(81,104,61,1)] transition-colors"
        >
          Pre-Order Nuvé
        </button>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[rgba(243,233,222,1)] border-t border-[rgba(91,114,71,0.2)] px-4 py-4">
          <nav className="flex flex-col gap-4" role="navigation" aria-label="Mobile navigation">
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-left hover:text-[rgba(91,114,71,1)] transition-colors cursor-pointer bg-transparent border-none text-base text-black font-normal py-2"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('sustainability')} 
              className="text-left hover:text-[rgba(91,114,71,1)] transition-colors cursor-pointer bg-transparent border-none text-base text-black font-normal py-2"
            >
              Sustainability
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className="text-left hover:text-[rgba(91,114,71,1)] transition-colors cursor-pointer bg-transparent border-none text-base text-black font-normal py-2"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('reviews')} 
              className="text-left hover:text-[rgba(91,114,71,1)] transition-colors cursor-pointer bg-transparent border-none text-base text-black font-normal py-2"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="text-left hover:text-[rgba(91,114,71,1)] transition-colors cursor-pointer bg-transparent border-none text-base text-black font-normal py-2"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="text-left hover:text-[rgba(91,114,71,1)] transition-colors cursor-pointer bg-transparent border-none text-base text-black font-normal py-2"
            >
              FAQ
            </button>
            <button 
              onClick={handlePreOrderClick}
              className="bg-[rgba(91,114,71,1)] text-white px-6 py-3 rounded-full hover:bg-[rgba(81,104,61,1)] transition-colors mt-2 w-full"
            >
              Pre-Order Nuvé
            </button>
          </nav>
        </div>
      )}
      
      <OutOfStockDialog 
        isOpen={isDialogOpen} 
        onClose={handleCloseDialog} 
      />
    </>
  );
};
