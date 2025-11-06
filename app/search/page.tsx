'use client';

import { AppShell } from '../components/AppShell';
import { Header } from '../components/Header';
import { Search, TrendingUp, Users, Briefcase } from 'lucide-react';
import { useState } from 'react';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const trendingSearches = [
    'Web3 Developers',
    'Smart Contract Auditors',
    'UI/UX Designers',
    'Mobile App Development',
  ];

  const categories = [
    { icon: Briefcase, label: 'Projects', count: 24 },
    { icon: Users, label: 'Contractors', count: 156 },
    { icon: TrendingUp, label: 'Trending', count: 12 },
  ];

  return (
    <AppShell>
      <Header title="Search" showNotifications={false} />

      <div className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Search Input */}
        <div className="relative">
          <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary animate-pulse" />
          <input
            type="text"
            placeholder="SEARCH PROJECTS, CONTRACTORS..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-surface text-fg pl-12 pr-4 py-3 rounded-md border-2 border-primary/30 focus:border-primary focus:outline-none focus:shadow-neon-cyan transition-all font-mono placeholder:text-fg/40 placeholder:uppercase"
          />
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-lg font-bold text-primary mb-3 font-orbitron uppercase tracking-wider neon-text-cyan">
            Browse by Category
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.label}
                  className="retro-card rounded-lg p-4 text-center transition-all hover:scale-105 group"
                >
                  <Icon size={24} className="text-primary mx-auto mb-2 group-hover:animate-pulse" />
                  <p className="text-sm font-bold text-primary font-orbitron">{category.label}</p>
                  <p className="text-xs text-fg/60 mt-1 font-mono">{category.count}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Trending Searches */}
        <div>
          <h2 className="text-lg font-bold text-primary mb-3 font-orbitron uppercase tracking-wider neon-text-cyan">
            Trending Searches
          </h2>
          <div className="space-y-2">
            {trendingSearches.map((search, index) => (
              <button
                key={index}
                className="w-full retro-card rounded-lg p-3 text-left transition-all hover:border-primary/60 hover:shadow-neon-cyan flex items-center gap-3 group"
              >
                <TrendingUp size={16} className="text-accent group-hover:animate-pulse" />
                <span className="text-fg group-hover:text-primary transition-colors">{search}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
