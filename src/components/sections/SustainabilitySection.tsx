import React from 'react';

export const SustainabilitySection: React.FC = () => {
  return (
    <section id="sustainability" className="bg-[rgba(243,233,222,1)] w-full mt-2.5 p-20 max-md:max-w-full max-md:px-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-6/12 max-md:w-full max-md:ml-0">
          <div className="flex grow flex-col items-center w-full px-20 max-md:max-w-full max-md:mt-10 max-md:px-5">
            <img
              src="https://sdmntprpolandcentral.oaiusercontent.com/files/00000000-1ac4-620a-a813-bc1762dfaf13/raw?se=2025-05-28T16%3A04%3A56Z&sp=r&sv=2024-08-04&sr=b&scid=6b44fcb7-10e0-5cdf-938c-5c914cfbe7a6&skoid=76024c37-11e2-4c92-aa07-7e519fbe2d0f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-27T21%3A14%3A15Z&ske=2025-05-28T21%3A14%3A15Z&sks=b&skv=2024-08-04&sig=Tpj30JwE69CujeIMJu9fJ1Q3vJ/s0r670CJj3uzpVxw%3DplaceholderIfAbsent=true"
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
