import React from 'react';

export const SustainabilitySection: React.FC = () => {
  return (
    <section id="sustainability" className="bg-[rgba(243,233,222,1)] w-full mt-2.5 p-20 max-md:max-w-full max-md:px-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-6/12 max-md:w-full max-md:ml-0">
          <div className="flex grow flex-col items-center w-full px-20 max-md:max-w-full max-md:mt-10 max-md:px-5">
            <img
              src="https://i.ibb.co/7xPzLYdx/Chat-GPT-Image-May-28-2025-07-08-08-PM-1.png%3DplaceholderIfAbsent=true"
              className="aspect-[1.42] object-contain w-[340px] max-w-full rounded-lg"
              alt="Sustainable refill pods"
            />
          </div>
        </div>
        <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col self-stretch items-stretch text-black font-normal w-full my-auto pr-[13px] pt-[7px] pb-5 max-md:max-w-full max-md:mt-10">
            <h2 className="text-[32px] leading-none">
              Sustainable by Design.
            </h2>
            <p className="text-xs leading-loose mt-[34px] max-md:max-w-full">
              <span className="text-[20px] text-black">
                Single-use CO₂ pods crafted for a cleaner planet. Designed for effortless recycling—no rinsing needed <br />
              </span>
              <span className="text-[20px] text-black">
                Our CO₂ pods are made from recyclable materials, ensuring a sustainable brushing experience. Simply place the used pod in our recycling bag and drop it off at any collection point. It's that easy to make a difference.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
