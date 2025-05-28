
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
      <section className="bg-[rgba(243,233,222,1)] w-full overflow-hidden px-[72px] py-[89px] max-md:max-w-full max-md:px-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <div className="flex w-full flex-col self-stretch m-auto py-1.5 max-md:max-w-full max-md:mt-10">
              <div className="self-stretch flex flex-col items-stretch text-black pl-4 pr-[35px] max-md:max-w-full max-md:pr-5">
                <h1 className="text-[56px] font-bold leading-[56px] tracking-[-1.06px] max-md:text-[40px] max-md:leading-[45px]">
                  Everyday care, elevated.
                </h1>
                <p className="text-[28px] font-normal leading-7 mt-[62px] max-md:max-w-full max-md:mt-10">
                  The CO₂-foaming toothbrush that travels light and loves the planet.
                </p>
              </div>
              <div className="flex items-stretch gap-4 mt-9 pl-4 py-[15px]">
                <button 
                  onClick={handlePreOrderClick}
                  className="bg-[rgba(91,114,71,1)] shadow-[0px_2px_16px_rgba(91,114,71,0.1)] text-lg text-white font-normal px-7 py-5 rounded-full max-md:px-5 hover:bg-[rgba(81,104,61,1)] transition-colors"
                >
                  Pre-Order Nuvé
                </button>
                <button className="border flex items-stretch gap-2 grow shrink basis-auto px-[29px] py-[18px] rounded-full border-[rgba(91,114,71,1)] border-solid max-md:px-5 hover:bg-[rgba(91,114,71,0.05)] transition-colors">
                  <div className="flex min-h-[18px] items-center overflow-hidden justify-center">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/357a62a656ba11d88fdac734e1bd943ba0c60c67?placeholderIfAbsent=true"
                      className="aspect-[1] object-contain w-[18px] self-stretch my-auto"
                      alt="Play icon"
                    />
                  </div>
                  <span className="text-[rgba(91,114,71,1)] text-lg font-normal basis-auto">
                    Watch 15-sec demo
                  </span>
                </button>
              </div>
              <p className="text-[rgba(91,114,71,1)] text-lg font-normal leading-none ml-4 mt-[19px] max-md:ml-2.5">
                TSA-compliant · 30 mL refill · 70% less plastic
              </p>
            </div>
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-center justify-center w-full px-20 py-10 max-md:max-w-full max-md:mt-10 max-md:px-5">
              <div className="flex flex-col shadow-[0px_4px_6px_rgba(0,0,0,0.1)] relative aspect-[0.81] w-[340px] max-w-full rounded-xl">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/faa5574346da09584a7dc984c540357c97ce1bee?placeholderIfAbsent=true"
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
