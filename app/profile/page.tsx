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
        <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg p-6 border border-primary/30">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-20 h-20 bg-primary/30 rounded-full flex items-center justify-center text-3xl font-bold text-primary">
              {profile.displayName.charAt(0)}
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-fg">{profile.displayName}</h2>
              <p className="text-fg/60">@{profile.username}</p>
              <div className="flex items-center gap-1 mt-2">
                <Star size={16} className="text-warning fill-warning" />
                <span className="text-fg font-medium">{profile.rating}</span>
                <span className="text-fg/60 text-sm ml-1">({profile.completedProjects} projects)</span>
              </div>
            </div>
          </div>
          
          {profile.bio && (
            <p className="text-fg/80 text-sm">{profile.bio}</p>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-surface rounded-lg p-4 text-center border border-white/5">
            <Briefcase size={24} className="text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-fg">{profile.completedProjects}</p>
            <p className="text-xs text-fg/60 mt-1">Projects</p>
          </div>
          
          <div className="bg-surface rounded-lg p-4 text-center border border-white/5">
            <DollarSign size={24} className="text-success mx-auto mb-2" />
            <p className="text-2xl font-bold text-fg">${(profile.totalEarned / 1000).toFixed(0)}K</p>
            <p className="text-xs text-fg/60 mt-1">Earned</p>
          </div>
          
          <div className="bg-surface rounded-lg p-4 text-center border border-white/5">
            <Award size={24} className="text-warning mx-auto mb-2" />
            <p className="text-2xl font-bold text-fg">{profile.credentials.length}</p>
            <p className="text-xs text-fg/60 mt-1">Credentials</p>
          </div>
        </div>

        {/* Credentials */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-fg">Credentials</h3>
            <button className="text-sm text-primary hover:text-accent">
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
          <button className="w-full bg-primary hover:bg-accent text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Edit Profile
          </button>
          <button className="w-full bg-surface hover:bg-surface/80 text-fg px-6 py-3 rounded-lg font-medium transition-colors border border-white/10">
            Share Profile
          </button>
        </div>
      </div>
    </AppShell>
  );
}
