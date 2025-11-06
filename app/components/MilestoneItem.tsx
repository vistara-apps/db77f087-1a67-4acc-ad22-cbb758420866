'use client';

import { Milestone } from '@/lib/types';
import { MILESTONE_STATUS_COLORS } from '@/lib/constants';
import { Calendar, DollarSign, CheckCircle2, Clock, XCircle } from 'lucide-react';

interface MilestoneItemProps {
  milestone: Milestone;
  variant?: 'pending' | 'approved' | 'completed';
}

export function MilestoneItem({ milestone, variant = 'pending' }: MilestoneItemProps) {
  const getStatusIcon = () => {
    switch (milestone.status) {
      case 'Approved':
        return <CheckCircle2 size={20} className="text-neon-green animate-pulse" />;
      case 'Rejected':
        return <XCircle size={20} className="text-error animate-pulse" />;
      default:
        return <Clock size={20} className="text-warning animate-pulse" />;
    }
  };

  const isOverdue = milestone.dueDate < Date.now() && milestone.status === 'Pending';

  return (
    <div className="retro-card rounded-lg p-4">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            {getStatusIcon()}
            <h4 className="font-bold text-primary">{milestone.description}</h4>
          </div>
          <span className={`inline-block px-3 py-1 rounded-md text-xs font-bold font-mono uppercase ${MILESTONE_STATUS_COLORS[milestone.status]} text-white border border-white/30`}>
            {milestone.status}
          </span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-neon-green font-mono">
          <DollarSign size={16} className="animate-pulse" />
          <span className="font-bold">${milestone.amount.toLocaleString()}</span>
          <span className={`ml-auto px-2 py-0.5 rounded text-xs font-bold uppercase ${
            milestone.paymentStatus === 'Paid' ? 'bg-neon-green/20 text-neon-green border border-neon-green/30' : 'bg-warning/20 text-warning border border-warning/30'
          }`}>
            {milestone.paymentStatus}
          </span>
        </div>
        
        <div className="flex items-center gap-2 text-sm font-mono">
          <Calendar size={16} className={isOverdue ? 'text-error' : 'text-accent'} />
          <span className={isOverdue ? 'text-error font-bold' : 'text-fg/80'}>
            Due: {new Date(milestone.dueDate).toLocaleDateString()}
            {isOverdue && ' (OVERDUE)'}
          </span>
        </div>

        {milestone.completionProofUrl && (
          <a
            href={milestone.completionProofUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:text-accent underline font-mono uppercase hover:neon-text-cyan transition-all"
          >
            View Proof of Work →
          </a>
        )}
      </div>

      {milestone.status === 'Pending' && variant === 'pending' && (
        <div className="mt-4 flex gap-2">
          <button className="flex-1 retro-button text-bg px-4 py-2 rounded-md text-sm font-bold transition-all font-orbitron">
            APPROVE
          </button>
          <button className="flex-1 bg-error/20 hover:bg-error/30 text-error px-4 py-2 rounded-md text-sm font-bold transition-all border-2 border-error/50 hover:border-error hover:shadow-neon-pink font-orbitron uppercase">
            REJECT
          </button>
        </div>
      )}
    </div>
  );
}
