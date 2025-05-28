import React from 'react';

export const TransitionSection: React.FC = () => {
  return (
    <section className="bg-white shadow-[0px_-10px_60px_rgba(91,114,71,0.12)] w-full mt-2.5 p-20 rounded-[40px_40px_0px_0px] max-md:max-w-full max-md:px-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-6/12 max-md:w-full max-md:ml-0">
          <div className="flex grow flex-col items-center w-full px-20 max-md:max-w-full max-md:mt-10 max-md:px-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9eea4f0d5baf440f2fe4fd5674d982329b51adf1?placeholderIfAbsent=true"
              className="aspect-[1.45] object-contain w-80 max-w-full rounded-lg"
              alt="Traditional vs Nuvé comparison"
            />
          </div>
        </div>
        <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <div className="w-full self-stretch m-auto max-md:max-w-full max-md:mt-10">
            <ul className="text-[22px] text-black font-normal max-md:max-w-full list-none">
              <li className="px-[29px] py-[7px] max-md:max-w-full max-md:px-5">
                Leaky tubes & residue
              </li>
              <li className="mt-3 px-[29px] py-[7px] max-md:max-w-full max-md:px-5">
                TSA liquid limits
              </li>
              <li className="mt-3 px-[29px] py-[7px] max-md:max-w-full max-md:px-5">
                Plastic waste & outdated design
              </li>
            </ul>
            <div className="flex w-full items-stretch gap-3 flex-wrap mt-5 py-0.5 max-md:max-w-full">
              <span className="text-[rgba(122,168,159,1)] text-lg font-normal leading-none">
                Transition
              </span>
              <div className="flex min-h-6 items-center overflow-hidden justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0fb7545967efa2ec5d8ead5b1dec78599a270b58?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-6 self-stretch my-auto"
                  alt="Arrow transition"
                />
              </div>
              <span className="text-[rgba(91,114,71,1)] text-base font-normal leading-none grow shrink w-[461px] my-auto max-md:max-w-full">
                Clean · Compact · Conscious
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
