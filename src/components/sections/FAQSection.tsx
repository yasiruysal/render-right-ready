
import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => (
  <div className="bg-white border border flex w-full flex-col items-stretch justify-center mt-4 sm:mt-5 px-4 sm:px-[25px] py-4 sm:py-[21px] rounded-xl border-solid max-md:max-w-full">
    <button
      className="flex w-full items-center gap-3 sm:gap-5 justify-between px-px py-[5px] max-md:max-w-full text-left"
      onClick={onToggle}
      aria-expanded={isOpen}
    >
      <span className="text-black text-lg sm:text-xl font-normal leading-tight">
        {question}
      </span>
      <div className="flex min-h-5 items-center overflow-hidden justify-center flex-shrink-0">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff70eb0f3da672d062873a7519b538f89c10fc48?placeholderIfAbsent=true"
          className={`aspect-[0.85] object-contain w-[17px] self-stretch my-auto transition-transform ${isOpen ? 'rotate-180' : ''}`}
          alt={isOpen ? "Collapse" : "Expand"}
        />
      </div>
    </button>
    {isOpen && (
      <div className="mt-3 sm:mt-4 px-1 sm:px-2 pb-2">
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed whitespace-pre-line">
          {answer}
        </p>
      </div>
    )}
  </div>
);

export const FAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const faqItems = [
    {
      question: "TSA safety?",
      answer: "Yes — Nuvé is TSA-compliant. Each refill pod contains under 30 mL of foam-concentrated toothpaste, making it perfectly safe to carry in your hand luggage for air travel."
    },
    {
      question: "Uses per pod?",
      answer: "Each pod delivers approximately 50–60 uses, depending on how much foam is dispensed per brushing. That's about 2–3 weeks of daily use."
    },
    {
      question: "Organic vs fluoride?",
      answer: "We offer two formulas to match your preference:\n\nOrganic: 100% botanical ingredients, fluoride-free. Ideal for natural care.\n\nWhitening / Fresh: Balanced fluoride included for enamel strength and whitening."
    },
    {
      question: "Recycling info?",
      answer: "Our pods are made from recyclable, BPA-free plastic. You can either:\n\nDrop them in your local recycling bin (check local rules), or\n\nReturn used pods to us for closed-loop recycling via our takeback program."
    },
    {
      question: "Battery-free details?",
      answer: "Nuvé's dispensing system is battery-free and powered by a CO₂ pressure capsule integrated into each cartridge. That means fewer electronics, no charging, and a more eco-friendly footprint."
    }
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
    <section id="faq" className="bg-[rgba(243,233,222,1)] flex w-full flex-col items-center justify-center mt-2.5 px-4 sm:px-8 lg:px-20 py-8 sm:py-12 lg:py-20 max-md:max-w-full">
      <div className="flex w-full max-w-[672px] flex-col items-stretch pt-[7px]">
        <h2 className="text-black text-2xl sm:text-[32px] font-normal leading-none text-center self-center">
          FAQ
        </h2>
        <div className="mt-8 sm:mt-[47px] max-md:max-w-full">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openItems.has(index)}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
