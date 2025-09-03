
import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './components/Sidebar';
import ExecutiveSummary from './components/ExecutiveSummary';
import CompetitorAnalysis from './components/CompetitorAnalysis';
import PostingSchedule from './components/PostingSchedule';
import ContentSystem from './components/ContentSystem';
import KpiDashboard from './components/KpiDashboard';
import Pricing from './components/Pricing';
import { sections } from './constants';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(sections[0].id);
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px', threshold: 0.1 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      Object.values(sectionRefs.current).forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div className="flex min-h-screen bg-black font-sans">
      <Sidebar activeSection={activeSection} />
      <main className="flex-1 ml-64 p-8 md:p-12 space-y-12 overflow-y-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-300 font-serif">OMNI ASTRA</h1>
          <p className="text-lg text-gray-400 mt-2">Digital Strategy & Market Dominance Roadmap</p>
        </header>

        {/* FIX: The ref callback should not return a value. Using a block body to prevent implicit return. */}
        <div id="summary" ref={(el) => { sectionRefs.current['summary'] = el; }}>
          <ExecutiveSummary />
        </div>
        {/* FIX: The ref callback should not return a value. Using a block body to prevent implicit return. */}
        <div id="competitors" ref={(el) => { sectionRefs.current['competitors'] = el; }}>
          <CompetitorAnalysis />
        </div>
        {/* FIX: The ref callback should not return a value. Using a block body to prevent implicit return. */}
        <div id="schedule" ref={(el) => { sectionRefs.current['schedule'] = el; }}>
          <PostingSchedule />
        </div>
        {/* FIX: The ref callback should not return a value. Using a block body to prevent implicit return. */}
        <div id="content" ref={(el) => { sectionRefs.current['content'] = el; }}>
          <ContentSystem />
        </div>
        {/* FIX: The ref callback should not return a value. Using a block body to prevent implicit return. */}
        <div id="kpis" ref={(el) => { sectionRefs.current['kpis'] = el; }}>
          <KpiDashboard />
        </div>
        {/* FIX: The ref callback should not return a value. Using a block body to prevent implicit return. */}
        <div id="pricing" ref={(el) => { sectionRefs.current['pricing'] = el; }}>
          <Pricing />
        </div>

        <footer className="text-center py-8 text-gray-500">
          <p>CONFIDENTIAL STRATEGIC PROPOSAL FOR OMNI ASTRA (ASTRA LIFESTYLE) | &copy; 2024</p>
        </footer>
      </main>
    </div>
  );
};

export default App;