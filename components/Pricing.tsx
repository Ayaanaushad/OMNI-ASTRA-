
import React from 'react';
import Section from './Section';
import { pricingTiers } from '../constants';
import { CheckCircleIcon } from './Icons';

const Pricing: React.FC = () => {
  return (
    <Section title="Pricing Packages" subtitle="Investing in a Dominant Digital Future">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {pricingTiers.map((tier) => (
          <div
            key={tier.name}
            className={`bg-gray-800 rounded-3xl p-8 border-2 transition-all duration-300 ease-in-out transform hover:-translate-y-2
              ${tier.isFeatured ? 'border-amber-400 shadow-2xl shadow-amber-500/10' : 'border-gray-700 hover:border-amber-400/50'}
            `}
          >
            <div className="text-center">
              <p className={`font-bold uppercase tracking-wider ${tier.isFeatured ? 'text-amber-300' : 'text-gray-400'}`}>
                {tier.level}
              </p>
              <h3 className="text-3xl font-bold text-white mt-2">{tier.name}</h3>
              <p className="text-4xl font-extrabold text-white my-6">{tier.price.split(' ')[0]}
                <span className="text-base font-medium text-gray-400"> {tier.price.split(' ').slice(1).join(' ')}</span>
              </p>
              <p className="text-gray-400 h-16">{tier.description}</p>
            </div>
            
            <ul className="mt-8 space-y-4">
              {tier.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className={`w-full mt-10 py-3 font-bold rounded-lg transition-colors ${
              tier.isFeatured ? 'bg-amber-400 text-gray-900 hover:bg-amber-300' : 'bg-gray-700 text-white hover:bg-gray-600'
            }`}>
              Select Plan
            </button>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Pricing;
