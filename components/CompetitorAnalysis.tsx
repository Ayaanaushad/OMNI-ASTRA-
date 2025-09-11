import React, { useState } from 'react';
import Section from './Section';
import { competitors, omniAstraData } from '../constants';
import type { Competitor } from '../types';

const allCompetitors = [omniAstraData, ...competitors];

const CompetitorCard: React.FC<{ competitor: Competitor }> = ({ competitor }) => {
    const needsBg = ['Kering Eyewear', 'Safilo Group'].includes(competitor.name);

    return (
        <div className="p-6 rounded-2xl border bg-white border-gray-200/80 shadow-md transition-shadow duration-300 hover:shadow-xl">
            <div className="flex items-center mb-4 min-h-[40px]">
                {competitor.logo ? (
                    <img 
                        src={competitor.logo} 
                        alt={`${competitor.name} logo`} 
                        className={`h-8 mr-4 ${needsBg ? 'bg-gray-800 p-1 rounded' : ''}`}
                    />
                ) : (
                    <h3 className="text-2xl font-bold text-gray-900">{competitor.name}</h3>
                )}
            </div>
            <p className="text-sm text-gray-600 mb-6 h-20 overflow-auto">{competitor.positioning}</p>
            
            <div className="grid grid-cols-3 gap-4 text-center mb-6">
                <div>
                    <p className="text-xs text-gray-500 uppercase">{competitor.name === omniAstraData.name ? 'SEO Authority score' : 'SEO Authority'}</p>
                    <p className="text-3xl font-bold text-gray-900">{competitor.metrics.seoAuthority}</p>
                </div>
                <div>
                    <p className="text-xs text-gray-500 uppercase">IG Followers</p>
                    <p className="text-3xl font-bold text-gray-900">{competitor.metrics.instagramFollowers}</p>
                </div>
                <div>
                    <p className="text-xs text-gray-500 uppercase">Engagement %</p>
                    <p className="text-3xl font-bold text-gray-900">{competitor.metrics.engagementRate}</p>
                </div>
            </div>

            <div className="space-y-4">
                <div>
                    <h4 className="font-semibold text-green-600 mb-2">Strengths</h4>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        {competitor.strengths.map((s, i) => <li key={i}>{s}</li>)}
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-red-600 mb-2">Weaknesses</h4>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        {competitor.weaknesses.map((w, i) => <li key={i}>{w}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
};

const CompetitorAnalysis: React.FC = () => {
  const [selectedCompetitor, setSelectedCompetitor] = useState<Competitor>(omniAstraData);

  return (
    <Section title="Competitor Analysis" subtitle="Benchmarking Against the Titans of Eyewear">
        <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4 space-y-2">
                {allCompetitors.map(c => (
                     <button
                        key={c.name}
                        onClick={() => setSelectedCompetitor(c)}
                        className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${selectedCompetitor.name === c.name ? 'bg-gray-900 text-white shadow-md' : 'bg-white border-gray-200/80 text-gray-700 hover:border-gray-400 hover:shadow-sm'}`}
                    >
                         <h3 className="font-bold">{c.name}</h3>
                         <p className={`text-xs ${selectedCompetitor.name === c.name ? 'text-gray-300' : 'text-gray-500'}`}>{c.name === omniAstraData.name ? "Current Standing" : "Global Competitor"}</p>
                     </button>
                ))}
            </div>
            <div className="lg:w-3/4">
                <CompetitorCard competitor={selectedCompetitor} />
            </div>
        </div>
    </Section>
  );
};

export default CompetitorAnalysis;