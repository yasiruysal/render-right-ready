
import React, { useState } from 'react';
import { OutOfStockDialog } from '../OutOfStockDialog';

export const PricingSection: React.FC = () => {
  const [subscriptionEnabled, setSubscriptionEnabled] = useState(true);
  const [subscriptionInterval, setSubscriptionInterval] = useState('30 days');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handlePreOrderClick = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <section id="pricing" className="bg-white flex w-full flex-col items-center font-normal justify-center mt-2.5 px-4 sm:px-8 lg:px-20 py-8 sm:py-12 lg:py-20 max-md:max-w-full">
        <div className="flex w-full max-w-[684px] flex-col items-center pt-[7px] px-1.5">
          <h2 className="text-black text-2xl sm:text-[32px] leading-none text-center">
            Pricing & Subscription
          </h2>
          <div className="bg-[rgba(243,233,222,1)] shadow-[0px_2px_4px_rgba(0,0,0,0.1)] self-stretch flex w-full flex-col items-stretch mt-6 sm:mt-9 p-4 sm:p-8 rounded-2xl max-md:max-w-full">
            <div className="self-center flex flex-col sm:flex-row w-full max-w-[334px] gap-4 sm:gap-[40px_56px] text-center px-0.5 py-[13px]">
              <div className="text-[rgba(91,114,71,1)] text-[40px] sm:text-[56px] leading-none max-md:text-[40px]">
                €129
              </div>
              <div className="text-[rgba(27,27,27,1)] text-lg sm:text-xl leading-5 sm:mt-5">
                Starter Kit (Handle + 4 pods)
              </div>
            </div>
            <div className="flex flex-col items-center text-base sm:text-lg mt-4 px-2 sm:px-[68px] max-md:max-w-full">
              <div className="flex w-full max-w-[262px] flex-col items-stretch">
                <div className="flex items-start sm:items-center gap-3 text-left sm:text-center">
                  <label className="flex items-center cursor-pointer mt-1 sm:mt-0">
                    <input
                      type="checkbox"
                      checked={subscriptionEnabled}
                      onChange={(e) => setSubscriptionEnabled(e.target.checked)}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${subscriptionEnabled ? 'bg-[rgba(91,114,71,1)] border-[rgba(91,114,71,1)]' : 'border-gray-300'}`}>
                      {subscriptionEnabled && (
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a11553b980ea9d200cf9c174585db127cdd416b0?placeholderIfAbsent=true"
                          className="aspect-[1] object-contain w-3"
                          alt="Checkmark"
                        />
                      )}
                    </div>
                  </label>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0.5 px-1 py-1.5">
                    <span className="text-[rgba(27,27,27,1)]">
                      Refill subscription
                    </span>
                    <span className="text-[rgba(91,114,71,1)] leading-none">
                      (save 15%)
                    </span>
                  </div>
                </div>
                <div className="self-center flex w-full max-w-[178px] items-center gap-3 sm:gap-5 text-black justify-center mt-3 sm:mt-2 px-px">
                  <label htmlFor="subscription-interval" className="leading-none text-center">
                    Every
                  </label>
                  <div className="relative">
                    <select
                      id="subscription-interval"
                      value={subscriptionInterval}
                      onChange={(e) => setSubscriptionInterval(e.target.value)}
                      className="bg-white border flex items-stretch gap-[9px] px-2.5 py-1.5 rounded-full border-[rgba(91,114,71,0.3)] border-solid appearance-none pr-8 cursor-pointer"
                      disabled={!subscriptionEnabled}
                    >
                      <option value="30 days">30 days</option>
                      <option value="60 days">60 days</option>
                      <option value="90 days">90 days</option>
                    </select>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a08b63c81488ff70edfba6632c6ebe3f3045dbc?placeholderIfAbsent=true"
                      className="aspect-[1] object-contain w-[19px] absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
                      alt="Dropdown arrow"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button 
            onClick={handlePreOrderClick}
            className="bg-[rgba(91,114,71,1)] w-full max-w-[190px] text-base sm:text-lg text-white text-center mt-6 sm:mt-8 px-6 sm:px-[33px] py-4 sm:py-5 rounded-full hover:bg-[rgba(81,104,61,1)] transition-colors"
          >
            Pre-Order Nuvé
          </button>
        </div>
      </section>
      
      <OutOfStockDialog 
        isOpen={isDialogOpen} 
        onClose={handleCloseDialog} 
      />
    </>
  );
};
