import React from 'react';
import CompanyLogo2 from '../../assets/Company Logo 2.svg';
import SocialMediaIcons from '../../assets/Social Media Icons.svg';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="flex flex-col items-start px-20 pt-24 w-full bg-blue-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[1059px]">
        <div className="flex flex-wrap gap-10 max-md:max-w-full">
          <div className="flex flex-col flex-1 self-start mt-2 text-base font-medium leading-7 text-white">
            <img loading="lazy" src={CompanyLogo2} className="object-contain w-40 max-w-full aspect-[5]" alt="Company logo" />
            <p className="mt-6 opacity-80">We are always open to discuss your project and improve your online presence.</p>
          </div>
          <div className="flex flex-col flex-1 items-start">
            <h2 className="text-5xl font-semibold leading-none text-white max-md:text-4xl">Lets Talk!</h2>
            <p className="self-stretch mt-3.5 text-base leading-7 opacity-80 text-slate-100">
              We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.
            </p>
            <img loading="lazy" src={SocialMediaIcons} className="object-contain mt-7 w-36 max-w-full aspect-[9.01]" alt="Social media icons" />
          </div>
        </div>
        <div className="flex flex-wrap gap-7 self-start py-4 pr-20 pl-9 text-gray-800 bg-amber-200 max-md:px-5">
          <div className="flex flex-col">
            <h3 className="self-start text-lg font-medium leading-8">Email me at</h3>
            <p className="text-base leading-7 opacity-80">contact@website.com</p>
          </div>
          <div className="flex flex-col">
            <h3 className="self-start text-lg font-medium leading-8">Call us</h3>
            <p className="text-base leading-7 opacity-80">0927 6277 28525</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;