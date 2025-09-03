
import React from 'react';
import Section from './Section';
import { executiveSummaryPoints } from '../constants';

const ExecutiveSummary: React.FC = () => {
  return (
    <Section
      title="Executive Summary"
      subtitle="A 30,000-Foot View of the Digital Landscape"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {executiveSummaryPoints.map((point, index) => (
          <div
            key={index}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-amber-400/10 transition-shadow duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-amber-400/10 mb-4">
              <point.icon className="h-6 w-6 text-amber-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{point.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{point.content}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ExecutiveSummary;
