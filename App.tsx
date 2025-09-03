import React, { useState } from 'react';
import ExecutiveSummary from './components/ExecutiveSummary';
import CompetitorAnalysis from './components/CompetitorAnalysis';
import PostingSchedule from './components/PostingSchedule';
import ContentSystem from './components/ContentSystem';
import KpiDashboard from './components/KpiDashboard';
import Pricing from './components/Pricing';
import { sections } from './constants';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(sections[0].id);

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'summary':
        return <ExecutiveSummary />;
      case 'competitors':
        return <CompetitorAnalysis />;
      case 'schedule':
        return <PostingSchedule />;
      case 'content':
        return <ContentSystem />;
      case 'kpis':
        return <KpiDashboard />;
      case 'pricing':
        return <Pricing />;
      default:
        return <ExecutiveSummary />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif">OMNI ASTRA</h1>
          <p className="text-lg text-gray-500 mt-2">Digital Strategy & Market Dominance Roadmap</p>
        </header>

        <nav className="sticky top-4 bg-gray-50/80 backdrop-blur-lg z-10 rounded-xl mb-12 border border-gray-200/80 shadow-sm">
          <ul className="flex justify-center items-center space-x-1 md:space-x-4 overflow-x-auto p-2">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center py-2 px-3 md:px-4 rounded-lg text-sm font-medium transition-all duration-200 ease-in-out whitespace-nowrap ${
                    activeSection === section.id
                      ? 'bg-white shadow-md text-gray-900'
                      : 'text-gray-500 hover:bg-white hover:shadow-sm hover:text-gray-900'
                  }`}
                >
                  <section.icon className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span>{section.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {renderActiveSection()}

        <footer className="text-center py-8 text-gray-400 text-xs mt-16">
          <p>CONFIDENTIAL STRATEGIC PROPOSAL FOR OMNI ASTRA (ASTRA LIFESTYLE) | &copy; 2024</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
