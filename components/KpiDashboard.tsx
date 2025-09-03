
import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Section from './Section';
import { awarenessKpis, engagementKpis, conversionKpis, followersGrowthData, websiteTrafficData } from '../constants';
import type { KpiData } from '../types';

const KpiCard: React.FC<{ kpi: KpiData }> = ({ kpi }) => {
  const percentageChange = (((kpi.value - kpi.previousValue) / kpi.previousValue) * 100).toFixed(1);
  const isPositive = kpi.value >= kpi.previousValue;

  return (
    <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
      <p className="text-sm text-gray-400">{kpi.name}</p>
      <div className="flex justify-between items-baseline">
        <p className="text-3xl font-bold text-white">{kpi.name.includes('Rate') ? `${kpi.value}%` : kpi.value.toLocaleString()}</p>
        <p className={`text-sm font-semibold ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
          {isPositive ? '+' : ''}{percentageChange}%
        </p>
      </div>
    </div>
  );
};

const KpiDashboard: React.FC = () => {
    const chartData = [
        { name: 'Awareness', value: 400 },
        { name: 'Engagement', value: 300 },
        { name: 'Conversion', value: 200 },
    ];
    const COLORS = ['#FBBF24', '#F59E0B', '#D97706'];

  return (
    <Section title="Measurement & KPI Dashboard" subtitle="Tracking Our Journey to Market Leadership">
      <div className="space-y-8">
        
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-300">Awareness (90-Day Goal)</h3>
            {awarenessKpis.map(kpi => <KpiCard key={kpi.name} kpi={kpi} />)}
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-300">Engagement (90-Day Goal)</h3>
            {engagementKpis.map(kpi => <KpiCard key={kpi.name} kpi={kpi} />)}
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-300">Conversion (90-Day Goal)</h3>
            {conversionKpis.map(kpi => <KpiCard key={kpi.name} kpi={kpi} />)}
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8">
            <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">Follower Growth vs. Industry</h3>
                 <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={followersGrowthData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                        <XAxis dataKey="month" stroke="#9CA3AF" />
                        <YAxis stroke="#9CA3AF"/>
                        <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #4B5563' }} />
                        <Legend />
                        <Line type="monotone" dataKey="Omni Astra" stroke="#FBBF24" strokeWidth={2} />
                        <Line type="monotone" dataKey="Industry Average" stroke="#6B7280" strokeDasharray="5 5" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
             <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">Website Traffic vs. Industry</h3>
                 <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={websiteTrafficData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                        <XAxis dataKey="month" stroke="#9CA3AF" />
                        <YAxis stroke="#9CA3AF"/>
                        <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #4B5563' }} />
                        <Legend />
                        <Bar dataKey="Omni Astra" fill="#FBBF24" />
                        <Bar dataKey="Industry Average" fill="#4B5563" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default KpiDashboard;
