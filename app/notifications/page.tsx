'use client';

import { AppShell } from '../components/AppShell';
import { Header } from '../components/Header';
import { CheckCircle2, Clock, AlertCircle, DollarSign } from 'lucide-react';

export default function NotificationsPage() {
  const notifications = [
    {
      id: '1',
      type: 'success',
      icon: CheckCircle2,
      title: 'Milestone Approved',
      message: 'Your milestone "Design mockups" has been approved',
      time: '2 hours ago',
      unread: true,
    },
    {
      id: '2',
      type: 'info',
      icon: Clock,
      title: 'Milestone Due Soon',
      message: 'Frontend implementation is due in 3 days',
      time: '5 hours ago',
      unread: true,
    },
    {
      id: '3',
      type: 'success',
      icon: DollarSign,
      title: 'Payment Released',
      message: '$1,500 has been released to your wallet',
      time: '1 day ago',
      unread: false,
    },
    {
      id: '4',
      type: 'warning',
      icon: AlertCircle,
      title: 'Action Required',
      message: 'Review milestone submission for Mobile App project',
      time: '2 days ago',
      unread: false,
    },
  ];

  const getIconColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'text-neon-green';
      case 'warning':
        return 'text-warning';
      case 'info':
        return 'text-primary';
      default:
        return 'text-fg';
    }
  };

  return (
    <AppShell>
      <Header title="Notifications" showNotifications={false} />

      <div className="max-w-md mx-auto px-4 py-6">
        <div className="space-y-3">
          {notifications.map((notification) => {
            const Icon = notification.icon;
            return (
              <div
                key={notification.id}
                className={`retro-card rounded-lg p-4 transition-all cursor-pointer ${
                  notification.unread
                    ? 'border-primary/50 shadow-neon-cyan'
                    : ''
                }`}
              >
                <div className="flex items-start gap-3">
                  <Icon size={24} className={`${getIconColor(notification.type)} ${notification.unread ? 'animate-pulse' : ''}`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-bold text-primary font-orbitron">{notification.title}</h3>
                      {notification.unread && (
                        <span className="w-3 h-3 bg-primary rounded-full flex-shrink-0 mt-1 animate-pulse shadow-neon-cyan" />
                      )}
                    </div>
                    <p className="text-sm text-fg/80 mb-2">{notification.message}</p>
                    <p className="text-xs text-fg/60 font-mono">{notification.time}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {notifications.length === 0 && (
          <div className="text-center py-12">
            <p className="text-fg/60 font-mono uppercase">No notifications yet</p>
          </div>
        )}
      </div>
    </AppShell>
  );
}
