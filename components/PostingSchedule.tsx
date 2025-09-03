import React from 'react';
import Section from './Section';
import { postingScheduleData, roadmapData } from '../constants';
import { CheckCircleIcon } from './Icons';

const PostingSchedule: React.FC = () => {
  return (
    <Section title="Posting Schedule & Roadmap" subtitle="A 90-Day Plan for Digital Ascendance">
      <div className="space-y-12">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">14-Day Content Sprint</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
            {postingScheduleData.map(item => (
              <div key={item.day} className="bg-white p-4 rounded-2xl border border-gray-200 min-h-[150px]">
                <div className="font-bold text-gray-800 text-center mb-2">Day {item.day}</div>
                <ul className="text-xs space-y-2">
                  {item.posts.map((post, index) => (
                    <li key={index} className="flex items-start">
                       <span className={`mr-1.5 text-xs font-semibold ${post.type === 'Post' ? 'text-blue-500' : post.type === 'Reel' ? 'text-purple-500' : 'text-amber-500'}`}>[{post.type}]</span>
                      <span className="text-gray-600">{post.idea}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">90-Day Strategic Roadmap</h3>
          <div className="relative border-l-2 border-gray-200 ml-4 pl-8 space-y-10">
            {roadmapData.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[42px] top-1 h-6 w-6 bg-white rounded-full border-2 border-gray-800 flex items-center justify-center">
                   <div className="h-2 w-2 bg-gray-800 rounded-full"></div>
                </div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{item.phase}</p>
                <h4 className="text-lg font-bold text-gray-900 mt-1">{item.title}</h4>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default PostingSchedule;