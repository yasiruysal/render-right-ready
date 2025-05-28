import React from 'react';

interface CartridgeCardProps {
  icon: string;
  title: string;
  description: string[];
  borderColor: string;
  iconAlt: string;
}

const CartridgeCard: React.FC<CartridgeCardProps> = ({ icon, title, description, borderColor, iconAlt }) => (
  <div className={`bg-[rgba(243,233,222,1)] shadow-[0px_2px_4px_rgba(0,0,0,0.1)] flex grow flex-col items-center font-normal w-full px-[34px] py-[38px] rounded-2xl border-solid border-2 max-md:mt-8 max-md:px-5 ${borderColor}`}>
    <img
      src={icon}
      className="aspect-[1] object-contain w-[30px]"
      alt={iconAlt}
    />
    <h4 className="text-2xl text-black whitespace-nowrap mt-4 px-px py-2">
      {title}
    </h4>
    <div className="self-stretch flex flex-col items-stretch text-lg text-[rgba(27,27,27,1)] mt-2 pr-[7px] pt-1 pb-2.5">
      {description.map((line, index) => (
        <div key={index} className={index > 0 ? "mt-3" : ""}>
          {line}
        </div>
      ))}
    </div>
  </div>
);

export const CartridgeSection: React.FC = () => {
  const cartridges = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4049e791102287e8c97df6fcf23880eb74bca2de?placeholderIfAbsent=true",
      title: "Organic",
      description: ["100% botanical, fluoride-", "free."],
      borderColor: "border-[rgba(91,114,71,0.1)]",
      iconAlt: "Organic cartridge icon"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7935dd5f70f644e07a4f7b40c39f4ac62ced11ba?placeholderIfAbsent=true",
      title: "Whitening",
      description: ["Gentle silica + peroxide,", "low abrasion."],
      borderColor: "border-[rgba(41,74,94,0.1)]",
      iconAlt: "Whitening cartridge icon"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3d69c65a14286c59256e1dd19cfa621dea99feec?placeholderIfAbsent=true",
      title: "Smokers",
      description: ["Charcoal & mint, odour-", "neutralising."],
      borderColor: "border-[rgba(45,45,45,0.1)]",
      iconAlt: "Smokers cartridge icon"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/03b817029fc9b66870bf231d759c0f46fca944e2?placeholderIfAbsent=true",
      title: "Fresh",
      description: ["Daily mint burst,", "balanced fluoride."],
      borderColor: "border-[rgba(122,168,159,0.1)]",
      iconAlt: "Fresh cartridge icon"
    }
  ];

  return (
    <section className="bg-white w-full overflow-hidden mt-2.5 p-20 max-md:max-w-full max-md:px-5">
      <div className="text-[32px] text-black font-normal text-center leading-none px-[70px] py-2.5 max-md:max-w-full max-md:px-5">
        <h2>Cartridge Collection</h2>
      </div>
      <div className="overflow-hidden mt-8 pr-20 pb-4 max-md:max-w-full max-md:pr-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {cartridges.map((cartridge, index) => (
            <div key={index} className="w-3/12 max-md:w-full max-md:ml-0">
              <CartridgeCard {...cartridge} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
