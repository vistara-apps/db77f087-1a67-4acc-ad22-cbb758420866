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
    <header className="sticky top-0 z-10 bg-surface/90 backdrop-blur-md border-b-2 border-primary/30 px-4 py-4 shadow-neon-cyan">
      <div className="max-w-md mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary neon-text-cyan font-orbitron tracking-wider uppercase">
          {title}
        </h1>
        
        <div className="flex items-center gap-2">
          {showNotifications && (
            <Link href="/notifications">
              <button className="p-2 hover:bg-primary/20 rounded-md transition-all border border-primary/30 hover:border-primary hover:shadow-neon-cyan relative group">
                <Bell size={24} className="text-primary group-hover:animate-pulse" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full animate-pulse shadow-neon-pink" />
              </button>
            </Link>
          )}
          
          {showSettings && (
            <Link href="/settings">
              <button className="p-2 hover:bg-accent/20 rounded-md transition-all border border-accent/30 hover:border-accent hover:shadow-neon-pink group">
                <Settings2 size={24} className="text-accent group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
