import React from 'react';

interface ContentSectionProps {
  title: string;
  content: string[];
}

const ContentSection: React.FC<ContentSectionProps> = ({ title, content }) => {
  return (
    <section className="mt-16 max-md:mt-10">
      <h2 className="self-start text-4xl font-semibold leading-none">{title}</h2>
      {content.map((paragraph, index) => (
        <p key={index} className={`mt-${index === 0 ? '8' : '6'} ${index === 0 ? 'text-indigo-700' : ''} opacity-70 max-md:max-w-full`}>
          {paragraph}
        </p>
      ))}
    </section>
  );
};

export default ContentSection;