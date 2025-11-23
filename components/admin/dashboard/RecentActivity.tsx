import { FileEdit, Mail, Image, Settings } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

// Mock data - in production, this would come from an API
const activities = [
  {
    id: 1,
    type: 'content',
    title: 'Updated Mick Well Project',
    description: 'Changed project description and images',
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    icon: FileEdit,
    color: 'bg-blue-500',
  },
  {
    id: 2,
    type: 'email',
    title: 'Sent Newsletter Campaign',
    description: 'Monthly investor update - 1,234 recipients',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    icon: Mail,
    color: 'bg-green-500',
  },
  {
    id: 3,
    type: 'media',
    title: 'Uploaded Hero Image',
    description: 'New mining site photo for homepage',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5), // 5 hours ago
    icon: Image,
    color: 'bg-purple-500',
  },
  {
    id: 4,
    type: 'settings',
    title: 'Updated Site Configuration',
    description: 'Changed contact email address',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    icon: Settings,
    color: 'bg-orange-500',
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h3 className="text-lg font-semibold text-slate-900 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3">
            <div className={`${activity.color} p-2 rounded-lg flex-shrink-0`}>
              <activity.icon className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900">{activity.title}</p>
              <p className="text-xs text-slate-500 mt-0.5">{activity.description}</p>
              <p className="text-xs text-slate-400 mt-1">
                {formatDistanceToNow(activity.timestamp, { addSuffix: true })}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-4 w-full text-center text-sm font-medium text-[#FF7B42] hover:text-[#D14D15] transition-colors py-2">
        View All Activity
      </button>
    </div>
  );
}

