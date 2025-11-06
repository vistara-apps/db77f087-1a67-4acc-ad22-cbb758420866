'use client';

import { Bell, Settings2 } from 'lucide-react';
import Link from 'next/link';

interface HeaderProps {
  title: string;
  showNotifications?: boolean;
  showSettings?: boolean;
}

export function Header({ title, showNotifications = true, showSettings = false }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 bg-bg/95 backdrop-blur-sm border-b border-white/10 px-4 py-4">
      <div className="max-w-md mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-fg">{title}</h1>
        
        <div className="flex items-center gap-2">
          {showNotifications && (
            <Link href="/notifications">
              <button className="p-2 hover:bg-surface rounded-lg transition-colors relative">
                <Bell size={24} className="text-fg" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full" />
              </button>
            </Link>
          )}
          
          {showSettings && (
            <Link href="/settings">
              <button className="p-2 hover:bg-surface rounded-lg transition-colors">
                <Settings2 size={24} className="text-fg" />
              </button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
