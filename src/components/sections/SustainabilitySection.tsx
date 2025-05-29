
import React from 'react';

export const SustainabilitySection: React.FC = () => {
  return (
    <section id="sustainability" className="bg-[rgba(243,233,222,1)] w-full mt-2.5 px-4 sm:px-8 lg:px-20 py-8 sm:py-12 lg:py-20 max-md:max-w-full">
      <div className="gap-5 flex flex-col lg:flex-row max-md:items-stretch">
        <div className="w-full lg:w-6/12 max-md:w-full max-md:ml-0 order-2 lg:order-1">
          <div className="flex grow flex-col items-center w-full px-4 sm:px-10 lg:px-20 max-md:max-w-full max-md:mt-6">
            <img
              src="https://i.ibb.co/fVL1ZdXG/Chat-GPT-Image-May-28-2025-07-34-50-PM.png%3DplaceholderIfAbsent=true"
              className="aspect-[1.42] object-contain w-full max-w-[340px] rounded-lg"
              alt="Sustainable refill pods"
            />
          </div>
        </div>
        <div className="w-full lg:w-6/12 lg:ml-5 max-md:w-full max-md:ml-0 order-1 lg:order-2">
          <div className="flex flex-col self-stretch items-stretch text-black font-normal w-full my-auto pr-0 lg:pr-[13px] pt-[7px] pb-5 max-md:max-w-full">
            <h2 className="text-2xl sm:text-[32px] leading-none text-center lg:text-left">
              Sustainable by Design.
            </h2>
            <div className="text-base sm:text-[20px] leading-relaxed mt-6 sm:mt-[34px] max-md:max-w-full text-center lg:text-left">
              <p className="mb-4">
                Single-use CO₂ pods crafted for a cleaner planet. Designed for effortless recycling—no rinsing needed
              </p>
              <p>
                Our CO₂ pods are made from recyclable materials, ensuring a sustainable brushing experience. Simply place the used pod in our recycling bag and drop it off at any collection point. It's that easy to make a difference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
