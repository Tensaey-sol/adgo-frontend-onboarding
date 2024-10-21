import React from 'react';
import Number1 from '../../assets/Number 01.svg';
import Number2 from '../../assets/Number 02.svg';
import Number3 from '../../assets/Number 03.svg';
import Number4 from '../../assets/Number 04.svg';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Number1,
    title: "Strategy",
    description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.",
  },
  {
    icon: Number2,
    title: "Wireframing",
    description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.",
  },
  {
    icon: Number3,
    title: "Design",
    description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.",
  },
  {
    icon: Number4,
    title: "Development",
    description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.",
  },
];

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center w-full max-md:w-full">
      <article className="flex flex-col max-sm:items-center text-gray-800 max-md:mt-6">
        <img loading="lazy" src={icon} alt="" className="object-contain rounded-lg aspect-square w-[50px]" />
        <h2 className="mt-4 text-3xl font-medium max-sm:text-center">{title}</h2>
        <p className="mt-2 text-base leading-7 opacity-70 max-sm:w-[70%] mx-auto max-sm:text-center">{description}</p>
      </article>
    </div>
  );
};

const HowWeWork: React.FC = () => {
  return (
    <section className="flex flex-col rounded-none">
      <div className="flex flex-col justify-center items-center px-20 py-40 w-full bg-slate-100 max-md:px-5 max-md:pt-24 max-md:pb-12 max-md:max-w-full">
        <div className="flex flex-col mb-0 w-full max-w-[1178px] max-md:mb-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[34%] max-md:w-full mr-auto">
              <header className="flex flex-col text-gray-800 max-md:mt-10 max-md:text-center">
                <h1 className="text-5xl font-semibold leading-none max-md:mr-2 max-md:text-4xl">
                  How we work
                </h1>
                <p className="mt-4 text-base leading-7 opacity-70">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </p>
              </header>
            </div>
            <div className="flex flex-col w-[50%] max-sm:w-full max-sm:text-center">
              <div className="flex gap-5 flex-col grow max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  {features.slice(0, 2).map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
                  ))}
                </div>
                <div className="flex gap-5 max-md:flex-col">
                  {features.slice(2).map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
