import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/auth-config';

/**
 * Analytics API - Mock data for now (Google Analytics integration later)
 */

function generateMockTrafficData(days: number) {
  const data = [];
  const now = new Date();
  
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    
    // Generate realistic-looking traffic data
    const baseViews = 150 + Math.random() * 100;
    const weekendMultiplier = date.getDay() === 0 || date.getDay() === 6 ? 0.7 : 1;
    
    data.push({
      date: date.toISOString().split('T')[0],
      views: Math.floor(baseViews * weekendMultiplier),
      visitors: Math.floor((baseViews * weekendMultiplier) * 0.75),
      bounceRate: 35 + Math.random() * 20,
    });
  }
  
  return data;
}

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const period = searchParams.get('period') || '7';
  const days = parseInt(period);

  const trafficData = generateMockTrafficData(days);
  const totalViews = trafficData.reduce((sum, d) => sum + d.views, 0);
  const totalVisitors = trafficData.reduce((sum, d) => sum + d.visitors, 0);
  const avgBounceRate = trafficData.reduce((sum, d) => sum + d.bounceRate, 0) / trafficData.length;

  // Mock top pages
  const topPages = [
    { path: '/', title: 'Home', views: Math.floor(totalViews * 0.35), avgTime: '2:45' },
    { path: '/projects/mick-well', title: 'Mick Well Project', views: Math.floor(totalViews * 0.25), avgTime: '3:12' },
    { path: '/investors', title: 'Investors', views: Math.floor(totalViews * 0.15), avgTime: '1:58' },
    { path: '/company', title: 'Company', views: Math.floor(totalViews * 0.12), avgTime: '2:20' },
    { path: '/contact', title: 'Contact', views: Math.floor(totalViews * 0.08), avgTime: '1:30' },
  ];

  // Mock traffic sources
  const sources = [
    { source: 'Direct', visits: Math.floor(totalVisitors * 0.45), percentage: 45 },
    { source: 'Organic Search', visits: Math.floor(totalVisitors * 0.30), percentage: 30 },
    { source: 'Social Media', visits: Math.floor(totalVisitors * 0.15), percentage: 15 },
    { source: 'Referral', visits: Math.floor(totalVisitors * 0.10), percentage: 10 },
  ];

  // Mock devices
  const devices = [
    { device: 'Desktop', visits: Math.floor(totalVisitors * 0.60), percentage: 60 },
    { device: 'Mobile', visits: Math.floor(totalVisitors * 0.32), percentage: 32 },
    { device: 'Tablet', visits: Math.floor(totalVisitors * 0.08), percentage: 8 },
  ];

  return NextResponse.json({
    summary: {
      totalViews,
      totalVisitors,
      avgBounceRate: avgBounceRate.toFixed(1),
      avgSessionDuration: '2:35',
    },
    trafficData,
    topPages,
    sources,
    devices,
  });
}

