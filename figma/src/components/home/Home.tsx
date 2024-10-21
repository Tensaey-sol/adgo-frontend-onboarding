import React from 'react';
import HeroSection from './HeroSection';
import HowWeWork from './HowWeWork';
import Features from './Features';


const HomePage: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col">
      <HeroSection/>
      <HowWeWork />
      <Features />
    </main>
  );
};

export default HomePage;