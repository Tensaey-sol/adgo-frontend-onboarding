import React from 'react';
import PenAndRuler from '../../assets/Pen and Ruler Image.svg';
import Clock from '../../assets/Clock Image.svg';
import Chat from '../../assets/Chat Image.svg';

interface Feature {
  title: string;
  description: string;
  icon?: string;
}

const featuresData: Feature[] = [
  {
    title: "Hands-on approach",
    description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
  },
  {
    title: "Two Free Revision Round",
    description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
  },
  {
    title: "Template Customization",
    description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
    icon: PenAndRuler
  },
  {
    title: "24/7 Support",
    description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
    icon: Chat
  },
  {
    title: "Quick Delivery",
    description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
    icon: Clock
  }
];

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => (
  <div className="flex flex-col justify-start p-6 w-full h-full text-gray-800 bg-white border rounded-lg shadow-md">
    {icon && <img loading="lazy" src={icon} alt="" className="object-contain aspect-square w-[35px]" />}
    <h3 className={`${icon ? 'mt-6' : ''} text-2xl`}>{title}</h3>
    <p className="mt-3 text-base leading-7 opacity-70">{description}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center px-20 py-12 w-full bg-slate-100 max-md:px-5 max-md:pt-12 max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1279px] max-md:max-w-full">
        <h2 className="sr-only">Features</h2>
        <p className="self-center text-base font-medium leading-7 text-center text-gray-800">Features</p>
        <h3 className="self-center mt-3 text-5xl font-semibold text-center text-gray-800 leading-[64px] w-[630px] max-md:max-w-full max-md:text-4xl max-md:leading-[60px]">
          Design that solves problems, one product at a time
        </h3>
        {/* Grid Layout for Features */}
        <div className="grid grid-cols-3 gap-6 mt-12 max-md:grid-cols-1 max-md:gap-5">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
