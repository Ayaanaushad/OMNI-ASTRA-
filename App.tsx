import React, { useState } from 'react';
import ExecutiveSummary from './components/ExecutiveSummary';
import CompetitorAnalysis from './components/CompetitorAnalysis';
import PostingSchedule from './components/PostingSchedule';
import ContentSystem from './components/ContentSystem';
import KpiDashboard from './components/KpiDashboard';
import { sections } from './constants';
import { MailIcon, PhoneIcon } from './components/Icons';

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
      default:
        return <ExecutiveSummary />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-12 relative flex justify-center items-center">
            {/* Logo for medium screens and up */}
            <div className="hidden md:block absolute left-0">
                <img 
                    src="https://static.wixstatic.com/media/481a8e_35300858fcff4e04ace05b8e87c89d09~mv2.png/v1/fill/w_186,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/481a8e_35300858fcff4e04ace05b8e87c89d09~mv2.png" 
                    alt="Omni Astra Logo" 
                    className="h-12"
                />
            </div>

            {/* Text content */}
            <div className="text-center">
                {/* Logo for small screens, stacked on top */}
                <img 
                    src="https://static.wixstatic.com/media/481a8e_35300858fcff4e04ace05b8e87c89d09~mv2.png/v1/fill/w_186,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/481a8e_35300858fcff4e04ace05b8e87c89d09~mv2.png" 
                    alt="Omni Astra Logo" 
                    className="h-12 mx-auto mb-4 md:hidden"
                />
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif">OMNI ASTRA</h1>
                <p className="text-lg text-gray-500 mt-2">Digital Strategy & Market Dominance Roadmap</p>
            </div>
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

        <footer className="flex flex-col md:flex-row justify-between items-center text-center md:text-left py-8 text-gray-500 text-sm mt-16 border-t border-gray-200">
          <p>Copyright © 2025 AD-Ityaadi Creative Solutions. All Rights Reserved</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="tel:8100108145" className="flex items-center hover:text-gray-900 transition-colors">
              <PhoneIcon className="h-4 w-4 mr-2" />
              <span>8100 108 145</span>
            </a>
            <a href="mailto:info@adityaadi.in" className="flex items-center hover:text-gray-900 transition-colors">
              <MailIcon className="h-4 w-4 mr-2" />
              <span>info@adityaadi.in</span>
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;