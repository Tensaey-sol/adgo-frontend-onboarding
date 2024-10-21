import React from 'react';
import ContentSection from './ContentSection';

interface PrivacyPolicyProps {}

const PrivacyPage: React.FC<PrivacyPolicyProps> = () => {
  return (
    <>
      <div className="flex overflow-hidden flex-col bg-white">
        <main className="flex flex-col self-center mt-32 max-w-full text-base leading-7 text-gray-800 w-[840px] max-md:mt-10">
          <h1 className="self-center text-5xl font-semibold leading-none max-md:text-4xl">
            Privacy Policy
          </h1>
          <p className="self-center mt-4 text-center opacity-70 w-[562px] max-md:max-w-full">
            When you're ready to go beyond prototyping in Figma, Webflow's ready to help you bring your{" "}
          </p>
          <ContentSection
            title="Lorem ipsum dolor."
            content={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
              "Sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            ]}
          />
          <ContentSection
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            content={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."
            ]}
          />
        </main>
      </div>
    </>
  );
};

export default PrivacyPage;