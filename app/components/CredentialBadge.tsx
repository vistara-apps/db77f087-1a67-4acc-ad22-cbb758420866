'use client';

import { Credential } from '@/lib/types';
import { Award, Share2 } from 'lucide-react';

interface CredentialBadgeProps {
  credential: Credential;
  variant?: 'small' | 'large' | 'shareable';
}

export function CredentialBadge({ credential, variant = 'small' }: CredentialBadgeProps) {
  const data = JSON.parse(credential.data);

  if (variant === 'small') {
    return (
      <div className="retro-card rounded-lg p-3">
        <div className="flex items-center gap-2">
          <Award size={20} className="text-primary animate-pulse" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-primary truncate">{data.projectTitle}</p>
            <p className="text-xs text-fg/60 uppercase font-mono">{credential.type}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="holographic rounded-lg p-6 border-2 border-primary/50 shadow-neon-cyan scanlines">
      <div className="flex items-start justify-between mb-4">
        <Award size={32} className="text-primary pulse-glow" />
        <button className="p-2 hover:bg-primary/20 rounded-md transition-all border border-accent/30 hover:border-accent hover:shadow-neon-pink group">
          <Share2 size={20} className="text-accent group-hover:rotate-12 transition-transform" />
        </button>
      </div>

      <h3 className="text-xl font-bold text-primary mb-2 font-orbitron neon-text-cyan">{data.projectTitle}</h3>
      <p className="text-sm text-fg/80 mb-4">Completed for <span className="text-accent font-bold">{data.clientName}</span></p>

      <div className="flex items-center justify-between text-sm">
        <span className="text-fg/60 font-mono">
          {new Date(data.completionDate).toLocaleDateString()}
        </span>
        {data.rating && (
          <div className="flex items-center gap-1">
            <span className="text-warning animate-pulse">★</span>
            <span className="text-neon-green font-bold font-mono">{data.rating}/5</span>
          </div>
        )}
      </div>

      <div className="mt-4 pt-4 border-t border-primary/30">
        <p className="text-xs text-fg/60 font-mono">ID: {credential.credentialId}</p>
      </div>
    </div>
  );
}
