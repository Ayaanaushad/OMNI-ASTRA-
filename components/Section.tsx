import React from 'react';

interface SectionProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, subtitle, children }) => {
  return (
    <section className="py-8 animate-fade-in">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 tracking-tight">{title}</h2>
        <p className="text-gray-500 font-serif mt-1">{subtitle}</p>
      </div>
      <div>{children}</div>
    </section>
  );
};

export default Section;
