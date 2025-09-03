import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Section from './Section';
import { awarenessKpis, engagementKpis, conversionKpis, followersGrowthData, websiteTrafficData } from '../constants';
import type { KpiData } from '../types';

const KpiCard: React.FC<{ kpi: KpiData }> = ({ kpi }) => {
  const percentageChange = kpi.previousValue === 0 ? 100 : (((kpi.value - kpi.previousValue) / kpi.previousValue) * 100);
  const isPositive = kpi.value >= kpi.previousValue;
  const isPercentage = kpi.name.includes('Rate') || kpi.name.includes('Growth');

  return (
    <div className="bg-white p-4 rounded-2xl border border-gray-200/80">
      <p className="text-sm text-gray-500">{kpi.name}</p>
      <div className="flex justify-between items-baseline mt-1">
        <p className="text-3xl font-bold text-gray-900">
            {kpi.value.toLocaleString()}
            {isPercentage ? '%' : ''}
        </p>
        <p className={`text-sm font-semibold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? '▲' : '▼'} {Math.abs(percentageChange).toFixed(1)}%
        </p>
      </div>
    </div>
  );
};

const KpiDashboard: React.FC = () => {
  return (
    <Section title="Measurement & KPI Dashboard" subtitle="Tracking Our Journey to Market Leadership">
      <div className="space-y-8">
        
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Awareness (90-Day Goal)</h3>
            {awarenessKpis.map(kpi => <KpiCard key={kpi.name} kpi={kpi} />)}
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Engagement (90-Day Goal)</h3>
            {engagementKpis.map(kpi => <KpiCard key={kpi.name} kpi={kpi} />)}
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Conversion (90-Day Goal)</h3>
            {conversionKpis.map(kpi => <KpiCard key={kpi.name} kpi={kpi} />)}
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8">
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Follower Growth vs. Industry</h3>
                 <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={followersGrowthData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis dataKey="month" stroke="#6b7280" />
                        <YAxis stroke="#6b7280"/>
                        <Tooltip contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb' }} />
                        <Legend />
                        <Line type="monotone" dataKey="Omni Astra" stroke="#111827" strokeWidth={2} />
                        <Line type="monotone" dataKey="Industry Average" stroke="#9ca3af" strokeDasharray="5 5" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
             <div className="bg-white p-6 rounded-2xl border border-gray-200/80">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Website Traffic vs. Industry</h3>
                 <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={websiteTrafficData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis dataKey="month" stroke="#6b7280" />
                        <YAxis stroke="#6b7280"/>
                        <Tooltip contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb' }} />
                        <Legend />
                        <Bar dataKey="Omni Astra" fill="#111827" />
                        <Bar dataKey="Industry Average" fill="#d1d5db" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default KpiDashboard;
