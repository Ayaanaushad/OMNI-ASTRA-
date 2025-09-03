
import React, { useState } from 'react';
import Section from './Section';
import { contentPillars, voiceGuidelines, visualGuidelines } from '../constants';
import type { ContentGuideline } from '../types';

const Modal: React.FC<{ guideline: ContentGuideline; onClose: () => void }> = ({ guideline, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-gray-900 border border-amber-400/30 rounded-2xl shadow-2xl p-8 max-w-2xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
        <h3 className="text-2xl font-bold text-amber-300 mb-4 font-serif">{guideline.title}</h3>
        <ul className="space-y-3 text-gray-300">
          {guideline.points.map((point, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
          ))}
        </ul>
        <button
          onClick={onClose}
          className="mt-6 bg-amber-400 text-gray-900 font-bold py-2 px-4 rounded-lg hover:bg-amber-300 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const ContentSystem: React.FC = () => {
  const [modalContent, setModalContent] = useState<ContentGuideline | null>(null);

  return (
    <Section title="Content System" subtitle="Defining a Cohesive and Compelling Brand Narrative">
      {modalContent && <Modal guideline={modalContent} onClose={() => setModalContent(null)} />}
      <div className="grid md:grid-cols-3 gap-8">
        {contentPillars.map((pillar, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-2xl border border-gray-700 text-center flex flex-col items-center">
            <div className="h-16 w-16 flex items-center justify-center rounded-full bg-amber-400/10 mb-4">{pillar.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{pillar.title}</h3>
            <p className="text-gray-400 flex-grow">{pillar.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center gap-6">
        <button onClick={() => setModalContent(voiceGuidelines)} className="bg-gray-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-600 transition-colors">
          View Voice & Tone Guidelines
        </button>
        <button onClick={() => setModalContent(visualGuidelines)} className="bg-amber-400 text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-amber-300 transition-colors">
          View Visual Identity Guidelines
        </button>
      </div>
    </Section>
  );
};

export default ContentSystem;
