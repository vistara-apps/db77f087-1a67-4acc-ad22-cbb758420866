'use client';

import { useEffect, useState } from 'react';
import { sdk } from '@farcaster/miniapp-sdk';
import { AppShell } from './components/AppShell';
import { Header } from './components/Header';
import { ProjectCard } from './components/ProjectCard';
import { ConnectWalletButton } from './components/ConnectWalletButton';
import { mockProjects } from '@/lib/mockData';
import { Plus, TrendingUp, Users, DollarSign } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // CRITICAL: Call sdk.actions.ready() to prevent infinite loading
    sdk.actions.ready();
    setIsReady(true);
  }, []);

  if (!isReady) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <div className="animate-pulse text-fg">Loading ProjectFlow...</div>
      </div>
    );
  }

  const stats = [
    { icon: TrendingUp, label: 'Active Projects', value: '2' },
    { icon: Users, label: 'Collaborators', value: '5' },
    { icon: DollarSign, label: 'Total Value', value: '$13K' },
  ];

  return (
    <AppShell>
      <Header title="ProjectFlow" />

      <div className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-surface rounded-lg p-4 text-center">
                <Icon size={24} className="text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-fg">{stat.value}</p>
                <p className="text-xs text-fg/60 mt-1">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg p-4 border border-primary/30">
          <h2 className="text-lg font-semibold text-fg mb-3">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            <Link href="/projects/new">
              <button className="w-full bg-primary hover:bg-accent text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                <Plus size={20} />
                New Project
              </button>
            </Link>
            <Link href="/credentials">
              <button className="w-full bg-surface hover:bg-surface/80 text-fg px-4 py-3 rounded-lg font-medium transition-colors border border-white/10">
                View Credentials
              </button>
            </Link>
          </div>
        </div>

        {/* Wallet Connection */}
        <div className="bg-surface rounded-lg p-4 border border-white/5">
          <h3 className="text-sm font-medium text-fg/80 mb-3">Wallet Status</h3>
          <ConnectWalletButton />
        </div>

        {/* Active Projects */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-fg">Active Projects</h2>
            <Link href="/projects" className="text-sm text-primary hover:text-accent">
              View All →
            </Link>
          </div>
          
          <div className="space-y-3">
            {mockProjects.map((project) => (
              <ProjectCard key={project.projectId} project={project} />
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h2 className="text-xl font-bold text-fg mb-4">Recent Activity</h2>
          <div className="space-y-3">
            <div className="bg-surface rounded-lg p-4 border border-white/5">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-success rounded-full mt-2" />
                <div className="flex-1">
                  <p className="text-sm text-fg">Milestone approved for <span className="font-medium">E-commerce Website</span></p>
                  <p className="text-xs text-fg/60 mt-1">2 hours ago</p>
                </div>
              </div>
            </div>
            
            <div className="bg-surface rounded-lg p-4 border border-white/5">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <div className="flex-1">
                  <p className="text-sm text-fg">New project created: <span className="font-medium">Mobile App Development</span></p>
                  <p className="text-xs text-fg/60 mt-1">1 day ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
