'use client';

import { useState } from 'react';
import { TrendingUp, Users, Eye, Clock, Globe, Monitor, Smartphone, ExternalLink } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data - in production this would come from Google Analytics API
const pageViewsData = [
  { date: 'Jan 22', views: 1240 },
  { date: 'Jan 23', views: 1580 },
  { date: 'Jan 24', views: 1320 },
  { date: 'Jan 25', views: 1890 },
  { date: 'Jan 26', views: 2100 },
  { date: 'Jan 27', views: 1750 },
  { date: 'Jan 28', views: 1920 },
];

const topPages = [
  { path: '/', views: 5240, avgTime: '2:45' },
  { path: '/projects/mick-well', views: 3120, avgTime: '3:20' },
  { path: '/investors/asx-announcements', views: 2890, avgTime: '2:10' },
  { path: '/why-yugo-metals', views: 1950, avgTime: '2:55' },
  { path: '/contact', views: 1420, avgTime: '1:30' },
];

const trafficSources = [
  { source: 'Direct', visitors: 4200, percentage: 42 },
  { source: 'Organic Search', visitors: 3100, percentage: 31 },
  { source: 'Social Media', visitors: 1500, percentage: 15 },
  { source: 'Referral', visitors: 800, percentage: 8 },
  { source: 'Email', visitors: 400, percentage: 4 },
];

const deviceStats = [
  { device: 'Desktop', users: 6200, percentage: 62 },
  { device: 'Mobile', users: 3200, percentage: 32 },
  { device: 'Tablet', users: 600, percentage: 6 },
];

export default function AnalyticsDashboard() {
  const [timeRange, setTimeRange] = useState('7d');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Analytics</h1>
          <p className="text-slate-600 mt-1">Website traffic and user behavior insights</p>
        </div>
        <div className="flex items-center gap-2">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7B42] focus:border-transparent"
          >
            <option value="24h">Last 24 Hours</option>
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="90d">Last 90 Days</option>
          </select>
          <a
            href="https://analytics.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 font-medium rounded-lg hover:bg-slate-200 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Google Analytics
          </a>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Eye className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-sm font-semibold text-green-600">+12%</span>
          </div>
          <p className="text-sm text-slate-600 mb-1">Page Views</p>
          <p className="text-3xl font-bold text-slate-900">15.2K</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-sm font-semibold text-green-600">+8%</span>
          </div>
          <p className="text-sm text-slate-600 mb-1">Unique Visitors</p>
          <p className="text-3xl font-bold text-slate-900">10.5K</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-sm font-semibold text-red-600">-5%</span>
          </div>
          <p className="text-sm text-slate-600 mb-1">Avg. Session</p>
          <p className="text-3xl font-bold text-slate-900">2:34</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-orange-100 p-3 rounded-lg">
              <TrendingUp className="w-6 h-6 text-orange-600" />
            </div>
            <span className="text-sm font-semibold text-green-600">+15%</span>
          </div>
          <p className="text-sm text-slate-600 mb-1">Bounce Rate</p>
          <p className="text-3xl font-bold text-slate-900">42%</p>
        </div>
      </div>

      {/* Page Views Chart */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Page Views Trend</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={pageViewsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="date" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '0.5rem',
                }}
              />
              <Line
                type="monotone"
                dataKey="views"
                stroke="#FF7B42"
                strokeWidth={3}
                dot={{ fill: '#FF7B42', r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Pages */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Top Pages</h3>
          <div className="space-y-3">
            {topPages.map((page, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-slate-900 truncate">{page.path}</p>
                  <p className="text-xs text-slate-500">Avg time: {page.avgTime}</p>
                </div>
                <span className="text-sm font-semibold text-slate-900 ml-4">
                  {page.views.toLocaleString()} views
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Traffic Sources</h3>
          <div className="space-y-4">
            {trafficSources.map((source, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-700">{source.source}</span>
                  <span className="text-sm text-slate-600">{source.percentage}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className="bg-[#FF7B42] h-2 rounded-full transition-all"
                    style={{ width: `${source.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Device Stats */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Devices</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deviceStats.map((device, idx) => {
            const Icon = device.device === 'Desktop' ? Monitor : device.device === 'Mobile' ? Smartphone : Globe;
            return (
              <div key={idx} className="flex items-center gap-4">
                <div className="bg-slate-100 p-4 rounded-lg">
                  <Icon className="w-8 h-8 text-slate-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-600">{device.device}</p>
                  <p className="text-2xl font-bold text-slate-900">{device.percentage}%</p>
                  <p className="text-xs text-slate-500">{device.users.toLocaleString()} users</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Real-time Stats */}
      <div className="bg-gradient-to-r from-[#FF7B42] to-[#D14D15] rounded-xl shadow-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white/80 mb-1">Active Users Right Now</p>
            <p className="text-4xl font-bold">24</p>
          </div>
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
            <div className="w-12 h-12 bg-white/40 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

