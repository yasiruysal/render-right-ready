import React, { useState } from 'react';

export const PricingSection: React.FC = () => {
  const [subscriptionEnabled, setSubscriptionEnabled] = useState(true);
  const [subscriptionInterval, setSubscriptionInterval] = useState('30 days');

  return (
    <section id="pricing" className="bg-white flex w-full flex-col items-center font-normal justify-center mt-2.5 p-20 max-md:max-w-full max-md:px-5">
      <div className="flex w-[684px] max-w-full flex-col items-center pt-[7px] px-1.5">
        <h2 className="text-black text-[32px] leading-none text-center">
          Pricing & Subscription
        </h2>
        <div className="bg-[rgba(243,233,222,1)] shadow-[0px_2px_4px_rgba(0,0,0,0.1)] self-stretch flex w-full flex-col items-stretch mt-9 p-8 rounded-2xl max-md:max-w-full max-md:px-5">
          <div className="self-center flex w-[334px] max-w-full gap-[40px_56px] text-center ml-[17px] px-0.5 py-[13px]">
            <div className="text-[rgba(91,114,71,1)] text-[56px] leading-none grow shrink w-[98px] max-md:text-[40px]">
              €129
            </div>
            <div className="text-[rgba(27,27,27,1)] text-xl leading-5 mt-5">
              Starter Kit (Handle + 4 pods)
            </div>
          </div>
          <div className="flex flex-col items-center text-lg mt-4 px-[68px] max-md:max-w-full max-md:px-5">
            <div className="flex w-[262px] max-w-full flex-col items-stretch">
              <div className="flex items-stretch gap-3 text-center">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={subscriptionEnabled}
                    onChange={(e) => setSubscriptionEnabled(e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${subscriptionEnabled ? 'bg-[rgba(91,114,71,1)] border-[rgba(91,114,71,1)]' : 'border-gray-300'}`}>
                    {subscriptionEnabled && (
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a11553b980ea9d200cf9c174585db127cdd416b0?placeholderIfAbsent=true"
                        className="aspect-[1] object-contain w-3"
                        alt="Checkmark"
                      />
                    )}
                  </div>
                </label>
                <div className="flex items-stretch gap-0.5 px-1 py-1.5">
                  <span className="text-[rgba(27,27,27,1)] grow">
                    Refill subscription
                  </span>
                  <span className="text-[rgba(91,114,71,1)] leading-none">
                    (save 15%)
                  </span>
                </div>
              </div>
              <div className="self-center flex w-[178px] max-w-full items-stretch gap-5 text-black justify-between mt-2 px-px">
                <label htmlFor="subscription-interval" className="leading-none text-center my-auto">
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
        <button className="bg-[rgba(91,114,71,1)] w-[190px] max-w-full text-lg text-white text-center mt-8 px-[33px] py-5 rounded-full max-md:px-5 hover:bg-[rgba(81,104,61,1)] transition-colors">
          Pre-Order Nuvé
        </button>
      </div>
    </section>
  );
};
