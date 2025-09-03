import React from 'react';
import { sections } from '../constants';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 p-8 flex-col justify-between hidden lg:flex">
      <div>
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 font-serif">Astra</h2>
          <span className="text-sm text-gray-500">Digital Roadmap</span>
        </div>
        <nav>
          <ul>
            {sections.map((section) => (
              <li key={section.id} className="mb-2">
                <a
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onSectionChange(section.id);
                  }}
                  className={`flex items-center py-2.5 px-4 rounded-lg transition-all duration-200 text-sm font-medium ${
                    activeSection === section.id
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
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
      <div className="text-xs text-gray-400">
        <p>Omni Astra &copy; 2024</p>
        <p>Confidential Proposal</p>
      </div>
    </aside>
  );
};

export default Sidebar;
