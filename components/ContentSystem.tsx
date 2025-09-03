import React, { useState } from 'react';
import Section from './Section';
import { contentPillars, voiceGuidelines, visualGuidelines, captionTemplates, ctaGuidelines } from '../constants';
import type { ContentGuideline } from '../types';

const Modal: React.FC<{ guideline: ContentGuideline; onClose: () => void }> = ({ guideline, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-900/30 backdrop-blur-sm flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white border border-gray-200 rounded-2xl shadow-2xl p-8 max-w-2xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
        <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">{guideline.title}</h3>
        <ul className="space-y-3 text-gray-600">
          {guideline.points.map((point, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: point.replace(/<strong>/g, '<strong class="text-gray-800">') }} className="prose prose-sm" />
          ))}
        </ul>
        <button
          onClick={onClose}
          className="mt-6 bg-gray-900 text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-700 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const ContentSystem: React.FC = () => {
  const [modalContent, setModalContent] = useState<ContentGuideline | null>(null);

  const guidelines = [
      { data: voiceGuidelines, label: "Voice & Tone" },
      { data: visualGuidelines, label: "Visual Identity" },
      { data: captionTemplates, label: "Caption Templates" },
      { data: ctaGuidelines, label: "CTA Examples" },
  ]

  return (
    <Section title="Content System" subtitle="Defining a Cohesive and Compelling Brand Narrative">
      {modalContent && <Modal guideline={modalContent} onClose={() => setModalContent(null)} />}
      <div className="grid md:grid-cols-3 gap-8">
        {contentPillars.map((pillar, index) => (
          <div key={index} className="bg-white border border-gray-200/80 p-6 rounded-2xl text-center flex flex-col items-center">
            <div className="h-16 w-16 flex items-center justify-center rounded-full bg-gray-100 mb-4">{pillar.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{pillar.title}</h3>
            <p className="text-gray-600 flex-grow">{pillar.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <h3 className="text-xl font-bold text-gray-800 text-center mb-6">Brand Guidelines & Templates</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {guidelines.map((guideline, index) => (
                <button 
                    key={index} 
                    onClick={() => setModalContent(guideline.data)} 
                    className="bg-white text-gray-800 font-bold py-3 px-4 text-sm rounded-lg border border-gray-300 hover:bg-gray-100 hover:shadow-md transition-all duration-200"
                >
                    View {guideline.label}
                </button>
            ))}
        </div>
      </div>
    </Section>
  );
};

export default ContentSystem;
