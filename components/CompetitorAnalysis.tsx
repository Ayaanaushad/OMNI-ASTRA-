
import React, { useState } from 'react';
import Section from './Section';
import { competitors, omniAstraData } from '../constants';
import type { Competitor } from '../types';

const allCompetitors = [omniAstraData, ...competitors];

const CompetitorCard: React.FC<{ competitor: Competitor; isSelected: boolean }> = ({ competitor, isSelected }) => (
    <div className={`p-6 rounded-2xl border ${isSelected ? 'bg-gray-800 border-amber-400/50' : 'bg-gray-900 border-gray-700'}`}>
        <div className="flex items-center mb-4">
            {competitor.logo ? (
                <img src={competitor.logo} alt={`${competitor.name} logo`} className="h-8 mr-4 invert brightness-0" style={{filter: 'contrast(0) brightness(2)'}}/>
            ) : (
                <h3 className={`text-2xl font-bold ${isSelected ? 'text-amber-300' : 'text-white'}`}>{competitor.name}</h3>
            )}
        </div>
        <p className="text-sm text-gray-400 mb-6 h-20 overflow-auto">{competitor.positioning}</p>
        
        <div className="grid grid-cols-3 gap-4 text-center mb-6">
            <div>
                <p className="text-xs text-gray-500">SEO Authority</p>
                <p className={`text-2xl font-bold ${isSelected ? 'text-white' : 'text-gray-200'}`}>{competitor.metrics.seoAuthority}</p>
            </div>
            <div>
                <p className="text-xs text-gray-500">IG Followers</p>
                <p className={`text-2xl font-bold ${isSelected ? 'text-white' : 'text-gray-200'}`}>{competitor.metrics.instagramFollowers}</p>
            </div>
            <div>
                <p className="text-xs text-gray-500">Engagement %</p>
                <p className={`text-2xl font-bold ${isSelected ? 'text-white' : 'text-gray-200'}`}>{competitor.metrics.engagementRate}</p>
            </div>
        </div>

        <div className="space-y-4">
            <div>
                <h4 className="font-semibold text-green-400 mb-2">Strengths</h4>
                <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                    {competitor.strengths.map((s, i) => <li key={i}>{s}</li>)}
                </ul>
            </div>
            <div>
                <h4 className="font-semibold text-red-400 mb-2">Weaknesses</h4>
                <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                    {competitor.weaknesses.map((w, i) => <li key={i}>{w}</li>)}
                </ul>
            </div>
        </div>
    </div>
);

const CompetitorAnalysis: React.FC = () => {
  const [selectedCompetitor, setSelectedCompetitor] = useState<Competitor>(omniAstraData);

  return (
    <Section title="Competitor Analysis" subtitle="Benchmarking Against the Titans of Eyewear">
        <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4 space-y-4">
                {allCompetitors.map(c => (
                     <button
                        key={c.name}
                        onClick={() => setSelectedCompetitor(c)}
                        className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${selectedCompetitor.name === c.name ? 'bg-amber-400/10 border-amber-400/50 text-amber-300' : 'bg-gray-800 border-gray-700 text-white hover:bg-gray-700'}`}
                    >
                         <h3 className="font-bold">{c.name}</h3>
                         <p className="text-xs text-gray-400">{c.name === omniAstraData.name ? "Current Standing" : "Global Competitor"}</p>
                     </button>
                ))}
            </div>
            <div className="lg:w-3/4">
                <CompetitorCard competitor={selectedCompetitor} isSelected={true} />
            </div>
        </div>
    </Section>
  );
};

export default CompetitorAnalysis;
