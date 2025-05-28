
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const TestimonialsSection: React.FC = () => {
  const reviews = [
    {
      name: "Taylor R. – Travel Consultant",
      rating: "4.5 / 5",
      text: "Finally, a toothbrush I can toss in my carry-on—no leaks, instant foam, and way less plastic.",
      image: "https://i.ibb.co/5hDBqQDZ/Chat-GPT-Image-May-28-2025-05-57-25-PM-1.png?placeholderIfAbsent=true"
    },
    {
      name: "Leo D. – Travel Consultant", 
      rating: "5 / 5",
      text: "Finally, a toothbrush I can toss in my bag—no leaks, no hassle, and so much less plastic.",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c1a91a8337e17795824435b6cec0c743820cd410?placeholderIfAbsent=true"
    },
    {
      name: "Monica S. – Product Designer",
      rating: "5 / 5", 
      text: "Nuvé looks gorgeous on my sink, but more importantly the CO₂ foam leaves my mouth squeaky clean.",
      image: "https://i.ibb.co/TDTw724R/Chat-GPT-Image-May-28-2025-05-55-36-PM-1.png?placeholderIfAbsent=true"
    }
  ];

  return (
    <section id="reviews" className="bg-[rgba(243,233,222,1)] flex w-full flex-col items-stretch font-normal text-center mt-2.5 px-20 py-[68px] max-md:max-w-full max-md:px-5">
      <div className="text-[32px] text-black leading-none px-[70px] py-2.5 max-md:max-w-full max-md:px-5">
        <h2>What Travelers Say</h2>
      </div>
      <div className="self-center w-[774px] max-w-full mt-[35px]">
        <Carousel className="w-full">
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={index}>
                <div className="flex items-center gap-5 flex-wrap justify-between pt-[5px] pb-[25px] px-[3px]">
                  <article className="bg-white shadow-[0px_4px_6px_rgba(0,0,0,0.1)] flex flex-col items-center px-10 py-8 rounded-2xl max-md:max-w-full max-md:px-5 mx-auto w-full max-w-[680px]">
                    <img
                      src={review.image}
                      className="aspect-[1] object-contain w-14 rounded-full"
                      alt={`${review.name} profile`}
                    />
                    <blockquote className="flex flex-col items-stretch text-xl text-black mt-7 px-[15px] py-1.5 max-md:max-w-full">
                      <p className="max-md:max-w-full text-center">
                        "{review.text}"
                      </p>
                    </blockquote>
                    <cite className="w-52 max-w-full text-lg text-[rgba(122,168,159,1)] mt-5 pt-1 pb-2.5 px-px not-italic">
                      {review.name}
                    </cite>
                    <div className="flex gap-1 mt-5" role="group" aria-label={`${review.rating} star rating`}>
                      <div className="text-lg text-[rgba(122,168,159,1)]">
                        ★★★★★ {review.rating}
                      </div>
                    </div>
                  </article>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </section>
  );
};
