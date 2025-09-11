import React from 'react';
import Section from './Section';
import { executiveSummaryPoints } from '../constants';

const ExecutiveSummary: React.FC = () => {
  return (
    <Section
      title="Executive Summary"
      subtitle="A 30,000-Foot View of the Digital Landscape"
    >
      <p className="mb-10 max-w-4xl text-gray-600 leading-relaxed">
        Omni Astra Pvt. Ltd. stands as a prestigious and trusted brand with strong authority in its space. However, your digital identity does not yet reflect the same level of influence and excellence. This gap limits growth and engagement opportunities. With the right digital transformation, your online presence can truly mirror the strength and stature your brand already commands.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {executiveSummaryPoints.map((point, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200/80 p-6 rounded-2xl shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gray-100 mb-4">
              <point.icon className="h-6 w-6 text-gray-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{point.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{point.content}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ExecutiveSummary;