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
      <div className="bg-surface rounded-lg p-3 border border-primary/20">
        <div className="flex items-center gap-2">
          <Award size={20} className="text-primary" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-fg truncate">{data.projectTitle}</p>
            <p className="text-xs text-fg/60">{credential.type}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg p-6 border border-primary/30">
      <div className="flex items-start justify-between mb-4">
        <Award size={32} className="text-primary" />
        <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
          <Share2 size={20} className="text-fg" />
        </button>
      </div>

      <h3 className="text-xl font-bold text-fg mb-2">{data.projectTitle}</h3>
      <p className="text-sm text-fg/80 mb-4">Completed for {data.clientName}</p>

      <div className="flex items-center justify-between text-sm">
        <span className="text-fg/60">
          {new Date(data.completionDate).toLocaleDateString()}
        </span>
        {data.rating && (
          <div className="flex items-center gap-1">
            <span className="text-warning">★</span>
            <span className="text-fg font-medium">{data.rating}/5</span>
          </div>
        )}
      </div>

      <div className="mt-4 pt-4 border-t border-white/10">
        <p className="text-xs text-fg/60">Credential ID: {credential.credentialId}</p>
      </div>
    </div>
  );
}
