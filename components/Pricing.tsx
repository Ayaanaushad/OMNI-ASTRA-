import React from 'react';
import Section from './Section';
import { pricingTiers } from '../constants';
import { CheckCircleIcon } from './Icons';

const Pricing: React.FC = () => {
  return (
    <Section title="Pricing Packages" subtitle="Investing in a Dominant Digital Future">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {pricingTiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative bg-white rounded-3xl p-8 border transition-all duration-300 ease-in-out
              ${tier.isFeatured 
                ? 'border-gray-900 shadow-2xl shadow-gray-400/20 transform lg:-translate-y-4' 
                : 'border-gray-200/80 hover:border-gray-400/50 hover:shadow-lg'}
            `}
          >
            {tier.isFeatured && (
                <div className="absolute -top-3 right-6">
                    <span className="bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">Suggested</span>
                </div>
            )}
            <div className="text-center">
              <p className={`font-bold uppercase tracking-wider ${tier.isFeatured ? 'text-gray-800' : 'text-gray-500'}`}>
                {tier.level}
              </p>
              <h3 className="text-3xl font-bold text-gray-900 mt-2">{tier.name}</h3>
              <p className="text-4xl font-extrabold text-gray-900 my-6">{tier.price.split(' ')[0]}
                <span className="text-base font-medium text-gray-500"> {tier.price.split(' ').slice(1).join(' ')}</span>
              </p>
              <p className="text-gray-600 h-16">{tier.description}</p>
            </div>
            
            <ul className="mt-8 space-y-4">
              {tier.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className={`w-full mt-10 py-3 font-bold rounded-lg transition-colors ${
              tier.isFeatured ? 'bg-gray-900 text-white hover:bg-gray-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
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
