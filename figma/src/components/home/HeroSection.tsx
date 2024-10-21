import React from 'react';
import BackgroundImage from '../../assets/BG Image.svg';

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col rounded-none">
      <div className="flex flex-col justify-center items-center px-16 py-36 w-full bg-blue-950 max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="-mb-8 w-full max-w-screen-xl max-md:mb-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {/* Hero Content */}
            <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-white max-md:mt-10 max-md:max-w-full">
                <h1 className="text-6xl font-semibold leading-[74px] max-md:mr-2.5 max-md:max-w-full max-md:text-4xl max-md:leading-[60px]">
                  Building stellar websites for early startups
                </h1>
                <p className="mt-6 text-base leading-7 opacity-70 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
            {/* Hero Image */}
            <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src={BackgroundImage}
                alt="Illustration of a startup website"
                className="object-contain grow mt-6 w-full rounded-none aspect-[1.77] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
