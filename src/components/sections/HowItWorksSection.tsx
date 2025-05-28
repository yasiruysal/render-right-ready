import React from 'react';

interface StepProps {
  number: string;
  description: string;
  bgColor: string;
}

const Step: React.FC<StepProps> = ({ number, description, bgColor }) => (
  <div className="flex items-stretch gap-6 flex-wrap mt-6 pr-20 max-md:pr-5">
    <div className={`${bgColor} text-white whitespace-nowrap w-10 h-10 pt-2.5 pb-[17px] px-[15px] rounded-full`}>
      {number}
    </div>
    <div className="text-black leading-none grow shrink-0 basis-0 w-fit py-1.5">
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
    <section id="how-it-works" className="bg-white w-full mt-2.5 p-20 max-md:max-w-full max-md:px-5">
      <div className="text-[32px] text-black font-normal text-center leading-none pt-[7px] pb-[18px] px-[70px] max-md:max-w-full max-md:px-5">
        <h2>How Nuvé Works</h2>
      </div>
      <div className="mt-12 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <div className="w-full self-stretch text-xl font-normal m-auto max-md:max-w-full max-md:mt-10">
              <div className="flex items-stretch gap-6 flex-wrap pr-20 max-md:pr-5">
                <div className="bg-[rgba(91,114,71,1)] text-white whitespace-nowrap w-10 h-10 pt-2.5 pb-[17px] px-[15px] rounded-full max-md:pr-5">
                  1
                </div>
                <div className="text-black leading-none grow shrink-0 basis-0 w-fit py-1.5">
                  Press button → CO₂ mixes with paste
                </div>
              </div>
              {steps.slice(1).map((step, index) => (
                <Step key={index + 1} {...step} />
              ))}
            </div>
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-center w-full px-20 max-md:max-w-full max-md:mt-10 max-md:px-5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d36afd7c45ccc4bbf0f790e97b6ca26527b5f0da?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-80 max-w-full rounded-[45px]"
                alt="How Nuvé works demonstration"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
