
import React from 'react';

export const TransitionSection: React.FC = () => {
  return (
    <section className="bg-white shadow-[0px_-10px_60px_rgba(91,114,71,0.12)] w-full mt-2.5 px-4 sm:px-8 lg:px-20 py-12 sm:py-16 lg:py-20 rounded-[40px_40px_0px_0px] max-md:max-w-full">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Section */}
          <div className="flex justify-center lg:justify-start order-1 lg:order-1">
            <div className="w-full max-w-md lg:max-w-lg">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9eea4f0d5baf440f2fe4fd5674d982329b51adf1?placeholderIfAbsent=true"
                className="w-full h-auto object-contain rounded-lg shadow-lg"
                alt="Traditional vs Nuvé comparison"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="order-2 lg:order-2 text-center lg:text-left">
            {/* Problems List */}
            <div className="space-y-4 mb-8">
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                <p className="text-lg sm:text-xl font-medium text-gray-800">
                  Leaky tubes & residue
                </p>
              </div>
              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg">
                <p className="text-lg sm:text-xl font-medium text-gray-800">
                  TSA liquid limits
                </p>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <p className="text-lg sm:text-xl font-medium text-gray-800">
                  Plastic waste & outdated design
                </p>
              </div>
            </div>

            {/* Transition Arrow */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
              <span className="text-[rgba(122,168,159,1)] text-lg font-semibold">
                Transition
              </span>
              <div className="flex items-center justify-center w-8 h-8 bg-[rgba(122,168,159,0.1)] rounded-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0fb7545967efa2ec5d8ead5b1dec78599a270b58?placeholderIfAbsent=true"
                  className="w-6 h-6 object-contain"
                  alt="Arrow transition"
                />
              </div>
            </div>

            {/* Solution */}
            <div className="bg-gradient-to-r from-[rgba(91,114,71,0.1)] to-[rgba(122,168,159,0.1)] p-6 rounded-xl border border-[rgba(91,114,71,0.2)]">
              <h3 className="text-2xl sm:text-3xl font-bold text-[rgba(91,114,71,1)] mb-2">
                Clean · Compact · Conscious
              </h3>
              <p className="text-gray-600 text-base sm:text-lg">
                The future of oral care is here
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
