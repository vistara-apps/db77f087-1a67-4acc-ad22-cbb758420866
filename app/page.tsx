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
        <div className="animate-pulse text-primary neon-text-cyan font-orbitron text-xl">
          LOADING PROJECTFLOW...
        </div>
      </div>
    );
  }

  const stats = [
    { icon: TrendingUp, label: 'Active Projects', value: '2', color: 'text-primary' },
    { icon: Users, label: 'Collaborators', value: '5', color: 'text-accent' },
    { icon: DollarSign, label: 'Total Value', value: '$13K', color: 'text-neon-green' },
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
              <div key={stat.label} className="retro-card rounded-lg p-4 text-center group hover:scale-105 transition-transform">
                <Icon size={24} className={`${stat.color} mx-auto mb-2 group-hover:animate-pulse`} />
                <p className={`text-2xl font-bold ${stat.color} font-orbitron mono`}>{stat.value}</p>
                <p className="text-xs text-fg/60 mt-1 uppercase font-mono">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="holographic rounded-lg p-4 border-2 border-primary/50 shadow-neon-cyan">
          <h2 className="text-lg font-bold text-primary mb-3 font-orbitron uppercase tracking-wider neon-text-cyan">
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <Link href="/projects/new">
              <button className="w-full retro-button text-bg px-4 py-3 rounded-md font-bold transition-all flex items-center justify-center gap-2 font-orbitron">
                <Plus size={20} />
                New Project
              </button>
            </Link>
            <Link href="/credentials">
              <button className="w-full bg-surface hover:bg-surface/80 text-primary px-4 py-3 rounded-md font-bold transition-all border-2 border-accent/50 hover:border-accent hover:shadow-neon-pink font-orbitron uppercase">
                Credentials
              </button>
            </Link>
          </div>
        </div>

        {/* Wallet Connection */}
        <div className="retro-card rounded-lg p-4">
          <h3 className="text-sm font-bold text-accent/80 mb-3 uppercase font-mono tracking-wider">
            Wallet Status
          </h3>
          <ConnectWalletButton />
        </div>

        {/* Active Projects */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-primary font-orbitron uppercase tracking-wider neon-text-cyan">
              Active Projects
            </h2>
            <Link href="/projects" className="text-sm text-accent hover:text-accent/80 font-mono uppercase hover:neon-text-pink transition-all">
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
          <h2 className="text-xl font-bold text-primary mb-4 font-orbitron uppercase tracking-wider neon-text-cyan">
            Recent Activity
          </h2>
          <div className="space-y-3">
            <div className="retro-card rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-success rounded-full mt-2 animate-pulse shadow-neon-green" />
                <div className="flex-1">
                  <p className="text-sm text-fg">
                    Milestone approved for <span className="font-bold text-primary">E-commerce Website</span>
                  </p>
                  <p className="text-xs text-fg/60 mt-1 font-mono">2 hours ago</p>
                </div>
              </div>
            </div>
            
            <div className="retro-card rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 animate-pulse shadow-neon-cyan" />
                <div className="flex-1">
                  <p className="text-sm text-fg">
                    New project created: <span className="font-bold text-accent">Mobile App Development</span>
                  </p>
                  <p className="text-xs text-fg/60 mt-1 font-mono">1 day ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
