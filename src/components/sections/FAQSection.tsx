import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, isOpen, onToggle }) => (
  <div className="bg-white border border flex w-full flex-col items-stretch justify-center mt-5 px-[25px] py-[21px] rounded-xl border-solid max-md:max-w-full max-md:px-5">
    <button
      className="flex w-full items-stretch gap-5 flex-wrap justify-between px-px py-[5px] max-md:max-w-full"
      onClick={onToggle}
      aria-expanded={isOpen}
    >
      <span className="text-black text-xl font-normal leading-none text-center">
        {question}
      </span>
      <div className="flex min-h-5 items-center overflow-hidden justify-center">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff70eb0f3da672d062873a7519b538f89c10fc48?placeholderIfAbsent=true"
          className={`aspect-[0.85] object-contain w-[17px] self-stretch my-auto transition-transform ${isOpen ? 'rotate-180' : ''}`}
          alt={isOpen ? "Collapse" : "Expand"}
        />
      </div>
    </button>
  </div>
);

export const FAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const faqItems = [
    "TSA safety?",
    "Uses per pod?",
    "Organic vs fluoride?",
    "Recycling info?",
    "Battery-free details?"
  ];

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="bg-[rgba(243,233,222,1)] flex w-full flex-col items-center justify-center mt-2.5 p-20 max-md:max-w-full max-md:px-5">
      <div className="flex w-[672px] max-w-full flex-col items-stretch pt-[7px]">
        <h2 className="text-black text-[32px] font-normal leading-none text-center self-center">
          FAQ
        </h2>
        <div className="mt-[47px] max-md:max-w-full max-md:mt-10">
          {faqItems.map((question, index) => (
            <FAQItem
              key={index}
              question={question}
              isOpen={openItems.has(index)}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
