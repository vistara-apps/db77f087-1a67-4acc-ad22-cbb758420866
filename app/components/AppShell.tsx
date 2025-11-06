'use client';

import { ReactNode } from 'react';
import { Home, Search, Bell, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();

  const navItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Search, label: 'Search', href: '/search' },
    { icon: Bell, label: 'Notifications', href: '/notifications' },
    { icon: User, label: 'Profile', href: '/profile' },
  ];

  return (
    <div className="min-h-screen bg-bg flex flex-col">
      <main className="flex-1 pb-20">
        {children}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-surface/90 backdrop-blur-md border-t-2 border-primary/30 px-4 py-3 safe-area-inset-bottom shadow-neon-cyan">
        <div className="max-w-md mx-auto flex items-center justify-around">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center gap-1 transition-all group ${
                  isActive 
                    ? 'text-primary neon-text-cyan' 
                    : 'text-fg/60 hover:text-primary'
                }`}
              >
                <div className={`p-2 rounded-md transition-all ${
                  isActive 
                    ? 'bg-primary/20 border border-primary/50' 
                    : 'group-hover:bg-primary/10 group-hover:border group-hover:border-primary/30'
                }`}>
                  <Icon size={24} className={isActive ? 'animate-pulse' : 'group-hover:scale-110 transition-transform'} />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
