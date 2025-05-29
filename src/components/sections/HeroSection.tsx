
import React, { useState } from 'react';
import { OutOfStockDialog } from '../OutOfStockDialog';

export const HeroSection: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handlePreOrderClick = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <section className="bg-[rgba(243,233,222,1)] w-full overflow-hidden px-4 sm:px-8 lg:px-[72px] py-8 sm:py-12 lg:py-[89px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-full lg:w-6/12 max-md:w-full max-md:ml-0">
            <div className="flex w-full flex-col self-stretch m-auto py-1.5 max-md:max-w-full max-md:mt-6">
              <div className="self-stretch flex flex-col items-stretch text-black pl-0 sm:pl-4 pr-4 sm:pr-[35px] max-md:max-w-full max-md:pr-5">
                <h1 className="text-[32px] sm:text-[40px] lg:text-[56px] font-bold leading-[36px] sm:leading-[45px] lg:leading-[56px] tracking-[-0.8px] sm:tracking-[-1.06px] text-center lg:text-left">
                  Everyday care, elevated.
                </h1>
                <p className="text-[18px] sm:text-[22px] lg:text-[28px] font-normal leading-6 sm:leading-7 mt-6 sm:mt-8 lg:mt-[62px] max-md:max-w-full text-center lg:text-left">
                  The CO₂-foaming toothbrush that travels light and loves the planet.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-3 sm:gap-4 mt-6 sm:mt-9 pl-0 sm:pl-4 py-[15px]">
                <button 
                  onClick={handlePreOrderClick}
                  className="bg-[rgba(91,114,71,1)] shadow-[0px_2px_16px_rgba(91,114,71,0.1)] text-base sm:text-lg text-white font-normal px-6 sm:px-7 py-4 sm:py-5 rounded-full hover:bg-[rgba(81,104,61,1)] transition-colors w-full sm:w-auto"
                >
                  Pre-Order Nuvé
                </button>
                <button className="border flex items-center justify-center gap-2 px-6 sm:px-[29px] py-4 sm:py-[18px] rounded-full border-[rgba(91,114,71,1)] border-solid hover:bg-[rgba(91,114,71,0.05)] transition-colors w-full sm:w-auto">
                  <div className="flex min-h-[18px] items-center overflow-hidden justify-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/0/375.png?placeholderIfAbsent=true"
                      className="aspect-[1] object-contain w-[18px] self-stretch my-auto"
                      alt="Play icon"
                    />
                  </div>
                  <span className="text-[rgba(91,114,71,1)] text-base sm:text-lg font-normal">
                    Watch 15-sec demo
                  </span>
                </button>
              </div>
              <p className="text-[rgba(91,114,71,1)] text-base sm:text-lg font-normal leading-none ml-0 sm:ml-4 mt-4 sm:mt-[19px] text-center lg:text-left">
                TSA-compliant · 30 mL refill · 70% less plastic
              </p>
            </div>
          </div>
          <div className="w-full lg:w-6/12 lg:ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-center justify-center w-full px-4 sm:px-10 lg:px-20 py-6 sm:py-10 max-md:max-w-full max-md:mt-6">
              <div className="flex flex-col shadow-[0px_4px_6px_rgba(0,0,0,0.1)] relative aspect-[0.81] w-[280px] sm:w-[320px] lg:w-[340px] max-w-full rounded-xl">
                <img
                  src="https://i.hizliresim.com/ijqe69k.png?placeholderIfAbsent=true"
                  className="absolute h-full w-full object-cover inset-0"
                  alt="Nuvé toothbrush background"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e6032e5a03d425ebd8936d63cf89c16a57b6ffa?placeholderIfAbsent=true"
                  className="aspect-[0.81] object-contain w-full rounded-[59px]"
                  alt="Nuvé toothbrush product"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <OutOfStockDialog 
        isOpen={isDialogOpen} 
        onClose={handleCloseDialog} 
      />
    </>
  );
};
