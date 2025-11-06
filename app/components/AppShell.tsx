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

      <nav className="fixed bottom-0 left-0 right-0 bg-surface border-t border-white/10 px-4 py-3 safe-area-inset-bottom">
        <div className="max-w-md mx-auto flex items-center justify-around">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center gap-1 transition-colors ${
                  isActive ? 'text-primary' : 'text-fg/60 hover:text-fg'
                }`}
              >
                <Icon size={24} />
                <span className="text-xs">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
