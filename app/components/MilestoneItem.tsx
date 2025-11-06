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
        return <CheckCircle2 size={20} className="text-success" />;
      case 'Rejected':
        return <XCircle size={20} className="text-error" />;
      default:
        return <Clock size={20} className="text-warning" />;
    }
  };

  const isOverdue = milestone.dueDate < Date.now() && milestone.status === 'Pending';

  return (
    <div className="bg-surface rounded-lg p-4 border border-white/5">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            {getStatusIcon()}
            <h4 className="font-medium text-fg">{milestone.description}</h4>
          </div>
          <span className={`inline-block px-2 py-1 rounded-md text-xs font-medium ${MILESTONE_STATUS_COLORS[milestone.status]} text-white`}>
            {milestone.status}
          </span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-fg/80">
          <DollarSign size={16} />
          <span>${milestone.amount.toLocaleString()}</span>
          <span className={`ml-auto px-2 py-0.5 rounded text-xs ${
            milestone.paymentStatus === 'Paid' ? 'bg-success/20 text-success' : 'bg-warning/20 text-warning'
          }`}>
            {milestone.paymentStatus}
          </span>
        </div>
        
        <div className="flex items-center gap-2 text-sm">
          <Calendar size={16} className={isOverdue ? 'text-error' : 'text-fg/80'} />
          <span className={isOverdue ? 'text-error' : 'text-fg/80'}>
            Due: {new Date(milestone.dueDate).toLocaleDateString()}
            {isOverdue && ' (Overdue)'}
          </span>
        </div>

        {milestone.completionProofUrl && (
          <a
            href={milestone.completionProofUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:text-accent underline"
          >
            View Proof of Work →
          </a>
        )}
      </div>

      {milestone.status === 'Pending' && variant === 'pending' && (
        <div className="mt-4 flex gap-2">
          <button className="flex-1 bg-primary hover:bg-accent text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Approve
          </button>
          <button className="flex-1 bg-error/20 hover:bg-error/30 text-error px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Reject
          </button>
        </div>
      )}
    </div>
  );
}
