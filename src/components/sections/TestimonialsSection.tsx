import React from 'react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="bg-[rgba(243,233,222,1)] flex w-full flex-col items-stretch font-normal text-center mt-2.5 px-20 py-[68px] max-md:max-w-full max-md:px-5">
      <div className="text-[32px] text-black leading-none px-[70px] py-2.5 max-md:max-w-full max-md:px-5">
        <h2>What Travelers Say</h2>
      </div>
      <div className="self-center w-[774px] max-w-full mt-[35px]">
        <div className="flex items-center gap-5 flex-wrap justify-between pt-[5px] pb-[25px] px-[3px]">
          <button 
            className="aspect-[0.81] object-contain w-[26px] shadow-[0px_1px_2px_rgba(0,0,0,0.1)] self-stretch shrink-0 my-auto rounded-full hover:opacity-80 transition-opacity"
            aria-label="Previous testimonial"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/71a52c7cac67739c0778c8b062256a97dbf4ce85?placeholderIfAbsent=true"
              alt="Previous"
              className="w-full h-full"
            />
          </button>
          <article className="bg-white shadow-[0px_4px_6px_rgba(0,0,0,0.1)] self-stretch flex flex-col items-center px-10 py-8 rounded-2xl max-md:max-w-full max-md:px-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1a91a8337e17795824435b6cec0c743820cd410?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-14 rounded-full"
              alt="Leo D. profile"
            />
            <blockquote className="self-stretch flex flex-col items-stretch text-xl text-black mt-7 px-[15px] py-1.5 max-md:max-w-full">
              <p className="max-md:max-w-full">
                "Finally, a toothbrush I can toss in my bag—no leaks, no hassle,
              </p>
              <p className="self-center mt-3">
                and so much less plastic."
              </p>
            </blockquote>
            <cite className="w-52 max-w-full text-lg text-[rgba(122,168,159,1)] mt-5 pt-1 pb-2.5 px-px not-italic">
              Leo D. – Travel Consultant
            </cite>
            <div className="flex gap-1 mt-5" role="group" aria-label="5 star rating">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9dd6dd5e37bcc0a346a4f257571601f72c853aec?placeholderIfAbsent=true"
                className="aspect-[6.76] object-contain w-[108px] max-w-full"
                alt="5 star rating"
              />
            </div>
          </article>
          <button 
            className="aspect-[0.81] object-contain w-[26px] shadow-[0px_1px_2px_rgba(0,0,0,0.1)] self-stretch shrink-0 my-auto rounded-full hover:opacity-80 transition-opacity"
            aria-label="Next testimonial"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6944aac9821eaed187c899c79ac8d016d08f12bf?placeholderIfAbsent=true"
              alt="Next"
              className="w-full h-full"
            />
          </button>
        </div>
      </div>
    </section>
  );
};
