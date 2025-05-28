import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string[];
  iconAlt: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, iconAlt }) => (
  <div className="bg-white shadow-[0px_2px_4px_rgba(0,0,0,0.1)] flex grow flex-col items-stretch font-normal w-full pt-8 pb-[86px] px-8 rounded-2xl max-md:mt-10 max-md:px-5">
    <img
      src={icon}
      className="aspect-[1] object-contain w-[30px] self-center"
      alt={iconAlt}
    />
    <h3 className="text-2xl text-black mt-4 mx-[18px] pt-[5px] pb-[11px] max-md:mx-2.5">
      {title}
    </h3>
    <div className="flex flex-col items-center text-lg text-[rgba(27,27,27,1)] text-center mt-2 pt-1 pb-2.5 px-[15px]">
      {description.map((line, index) => (
        <div key={index} className={index > 0 ? "mt-[11px]" : ""}>
          {line}
        </div>
      ))}
    </div>
  </div>
);

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7d38ea12806f0b059514a7b0f8e40bea643213e6?placeholderIfAbsent=true",
      title: "CO₂ Instant Foam",
      description: ["Micro-foam penetrates", "gum-line for dentist-level", "clean."],
      iconAlt: "CO₂ foam icon"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3d8748a579241d88af6fdd2ac03d21f2ff67ee48?placeholderIfAbsent=true",
      title: "4 Smart Cartridges",
      description: ["Organic, Whitening,", "Smokers, Fresh"],
      iconAlt: "Cartridges icon"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/28219cf99c77a5e1ed7664dd34d2d3e1767c1f83?placeholderIfAbsent=true",
      title: "70% Less Plastic",
      description: ["vs. regular tubes"],
      iconAlt: "Eco-friendly icon"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b052513fdd76cea509984577c5996d55678cad81?placeholderIfAbsent=true",
      title: "Click-to-Dose Control",
      description: ["No leaks, no mess, just press the button"],
      iconAlt: "Control icon"
    }
  ];

  return (
    <section id="features" className="bg-[rgba(243,233,222,1)] flex w-full flex-col items-stretch justify-center mt-2.5 px-[70px] py-[74px] max-md:max-w-full max-md:px-5">
      <div className="pt-0.5 pb-2.5 px-1.5 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {features.map((feature, index) => (
            <div key={index} className="w-3/12 max-md:w-full max-md:ml-0">
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
