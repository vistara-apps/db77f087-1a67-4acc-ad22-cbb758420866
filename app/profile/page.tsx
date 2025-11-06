'use client';

import { AppShell } from '../components/AppShell';
import { Header } from '../components/Header';
import { CredentialBadge } from '../components/CredentialBadge';
import { mockUserProfile } from '@/lib/mockData';
import { Award, Briefcase, DollarSign, Star } from 'lucide-react';

export default function ProfilePage() {
  const profile = mockUserProfile;

  return (
    <AppShell>
      <Header title="Profile" showSettings={true} />

      <div className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Profile Header */}
        <div className="holographic rounded-lg p-6 border-2 border-primary/50 shadow-neon-cyan">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-20 h-20 bg-gradient-retro rounded-full flex items-center justify-center text-3xl font-bold text-bg border-2 border-primary shadow-neon-cyan pulse-glow font-orbitron">
              {profile.displayName.charAt(0)}
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-primary font-orbitron neon-text-cyan">{profile.displayName}</h2>
              <p className="text-accent font-mono">@{profile.username}</p>
              <div className="flex items-center gap-1 mt-2">
                <Star size={16} className="text-warning fill-warning animate-pulse" />
                <span className="text-neon-green font-bold font-mono">{profile.rating}</span>
                <span className="text-fg/60 text-sm ml-1 font-mono">({profile.completedProjects} projects)</span>
              </div>
            </div>
          </div>
          
          {profile.bio && (
            <p className="text-fg/80 text-sm">{profile.bio}</p>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="retro-card rounded-lg p-4 text-center group hover:scale-105 transition-transform">
            <Briefcase size={24} className="text-primary mx-auto mb-2 group-hover:animate-pulse" />
            <p className="text-2xl font-bold text-primary font-orbitron">{profile.completedProjects}</p>
            <p className="text-xs text-fg/60 mt-1 uppercase font-mono">Projects</p>
          </div>
          
          <div className="retro-card rounded-lg p-4 text-center group hover:scale-105 transition-transform">
            <DollarSign size={24} className="text-neon-green mx-auto mb-2 group-hover:animate-pulse" />
            <p className="text-2xl font-bold text-neon-green font-orbitron">${(profile.totalEarned / 1000).toFixed(0)}K</p>
            <p className="text-xs text-fg/60 mt-1 uppercase font-mono">Earned</p>
          </div>
          
          <div className="retro-card rounded-lg p-4 text-center group hover:scale-105 transition-transform">
            <Award size={24} className="text-accent mx-auto mb-2 group-hover:animate-pulse" />
            <p className="text-2xl font-bold text-accent font-orbitron">{profile.credentials.length}</p>
            <p className="text-xs text-fg/60 mt-1 uppercase font-mono">Credentials</p>
          </div>
        </div>

        {/* Credentials */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-primary font-orbitron uppercase tracking-wider neon-text-cyan">Credentials</h3>
            <button className="text-sm text-accent hover:text-accent/80 font-mono uppercase hover:neon-text-pink transition-all">
              View All →
            </button>
          </div>
          
          <div className="space-y-3">
            {profile.credentials.map((credential) => (
              <CredentialBadge
                key={credential.credentialId}
                credential={credential}
                variant="large"
              />
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <button className="w-full retro-button text-bg px-6 py-3 rounded-md font-bold transition-all font-orbitron">
            EDIT PROFILE
          </button>
          <button className="w-full bg-surface hover:bg-surface/80 text-primary px-6 py-3 rounded-md font-bold transition-all border-2 border-accent/50 hover:border-accent hover:shadow-neon-pink font-orbitron uppercase">
            SHARE PROFILE
          </button>
        </div>
      </div>
    </AppShell>
  );
}
