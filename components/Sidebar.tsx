
import React from 'react';
import { sections } from '../constants';

interface SidebarProps {
  activeSection: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection }) => {
  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-gray-900 border-r border-gray-700/50 p-8 flex flex-col justify-between">
      <div>
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-amber-300 font-serif">Astra</h2>
          <span className="text-sm text-gray-400">Digital Roadmap</span>
        </div>
        <nav>
          <ul>
            {sections.map((section) => (
              <li key={section.id} className="mb-4">
                <a
                  href={`#${section.id}`}
                  className={`flex items-center py-2 px-4 rounded-lg transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-amber-400/10 text-amber-300'
                      : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <section.icon className="h-5 w-5 mr-3" />
                  <span>{section.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="text-xs text-gray-600">
        <p>Omni Astra &copy; 2024</p>
        <p>Confidential Proposal</p>
      </div>
    </aside>
  );
};

export default Sidebar;
