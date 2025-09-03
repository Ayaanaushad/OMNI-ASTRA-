
import React from 'react';
import Section from './Section';
import { postingScheduleData, roadmapData } from '../constants';
import { CheckCircleIcon } from './Icons';

const PostingSchedule: React.FC = () => {
  return (
    <Section title="Posting Schedule & Roadmap" subtitle="A 90-Day Plan for Digital Ascendance">
      <div className="space-y-12">
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">14-Day Content Sprint</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
            {postingScheduleData.map(item => (
              <div key={item.day} className="bg-gray-800 p-4 rounded-lg border border-gray-700 min-h-[150px]">
                <div className="font-bold text-amber-300 text-center mb-2">Day {item.day}</div>
                <ul className="text-xs space-y-2">
                  {item.posts.map((post, index) => (
                    <li key={index} className="flex items-start">
                       <span className={`mr-2 text-xs font-semibold ${post.type === 'Post' ? 'text-cyan-400' : post.type === 'Reel' ? 'text-purple-400' : 'text-yellow-400'}`}>[{post.type}]</span>
                      <span className="text-gray-300">{post.idea}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-4">90-Day Strategic Roadmap</h3>
          <div className="relative border-l-2 border-amber-400/30 ml-4 pl-8 space-y-10">
            {roadmapData.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[42px] top-1 h-6 w-6 bg-gray-900 rounded-full border-2 border-amber-400 flex items-center justify-center">
                   <div className="h-2 w-2 bg-amber-400 rounded-full"></div>
                </div>
                <p className="text-sm font-semibold text-amber-300">{item.phase}</p>
                <h4 className="text-lg font-bold text-white mt-1">{item.title}</h4>
                <p className="text-gray-400 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default PostingSchedule;
