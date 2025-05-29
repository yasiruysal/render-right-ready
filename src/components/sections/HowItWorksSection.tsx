
import React from 'react';

interface StepProps {
  number: string;
  description: string;
  bgColor: string;
}

const Step: React.FC<StepProps> = ({ number, description, bgColor }) => (
  <div className="flex items-start gap-4 sm:gap-6 mt-4 sm:mt-6 pr-4 sm:pr-20">
    <div className={`${bgColor} text-white whitespace-nowrap w-8 h-8 sm:w-10 sm:h-10 pt-1.5 sm:pt-2.5 pb-3 sm:pb-[17px] px-3 sm:px-[15px] rounded-full flex-shrink-0 text-sm sm:text-base flex items-center justify-center`}>
      {number}
    </div>
    <div className="text-black leading-relaxed text-base sm:text-xl py-1 sm:py-1.5">
      {description}
    </div>
  </div>
);

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: "1",
      description: "Press button → CO₂ mixes with paste",
      bgColor: "bg-[rgba(91,114,71,1)]"
    },
    {
      number: "2",
      description: "Foam expands instantly (3× volume)",
      bgColor: "bg-[rgba(41,74,94,1)]"
    },
    {
      number: "3",
      description: "Duckbill valve prevents backflow",
      bgColor: "bg-[rgba(122,168,159,1)]"
    }
  ];

  return (
    <section id="how-it-works" className="bg-white w-full mt-2.5 px-4 sm:px-8 lg:px-20 py-8 sm:py-12 lg:py-20 max-md:max-w-full">
      <div className="text-2xl sm:text-[32px] text-black font-normal text-center leading-none pt-[7px] pb-6 sm:pb-[18px] px-4 sm:px-[70px] max-md:max-w-full">
        <h2>How Nuvé Works</h2>
      </div>
      <div className="mt-8 sm:mt-12 max-md:max-w-full">
        <div className="gap-5 flex flex-col lg:flex-row max-md:items-stretch">
          <div className="w-full lg:w-6/12 max-md:w-full max-md:ml-0">
            <div className="w-full self-stretch text-base sm:text-xl font-normal m-auto max-md:max-w-full lg:max-md:mt-10">
              {steps.map((step, index) => (
                <Step key={index} {...step} />
              ))}
            </div>
          </div>
          <div className="w-full lg:w-6/12 lg:ml-5 max-md:w-full max-md:ml-0 mt-8 lg:mt-0">
            <div className="flex grow flex-col items-center w-full px-4 sm:px-10 lg:px-20 max-md:max-w-full">
              <img
                src="https://i.hizliresim.com/phs7ti3.png?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-64 sm:w-72 lg:w-80 max-w-full rounded-[45px]"
                alt="How Nuvé works demonstration"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
