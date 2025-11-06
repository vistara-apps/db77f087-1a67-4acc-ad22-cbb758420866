'use client';

import { Project } from '@/lib/types';
import { PROJECT_STATUS_COLORS } from '@/lib/constants';
import { Calendar, DollarSign, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
  variant?: 'overview' | 'detailed';
}

export function ProjectCard({ project, variant = 'overview' }: ProjectCardProps) {
  const progress = (project.completedMilestones / project.milestones.length) * 100;

  return (
    <Link href={`/projects/${project.projectId}`}>
      <div className="retro-card rounded-lg p-4 cursor-pointer scanlines group">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-primary font-orbitron mb-1 group-hover:neon-text-cyan transition-all">
              {project.title}
            </h3>
            <p className="text-sm text-fg/70 line-clamp-2">{project.description}</p>
          </div>
          <span className={`px-3 py-1 rounded-md text-xs font-bold font-mono uppercase ${PROJECT_STATUS_COLORS[project.status]} text-white ml-2 border border-white/30 shadow-neon-cyan`}>
            {project.status}
          </span>
        </div>

        <div className="space-y-2 mb-3">
          <div className="flex items-center gap-2 text-sm text-neon-green font-mono">
            <DollarSign size={16} className="animate-pulse" />
            <span className="font-bold">${project.totalAmount.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-primary">
            <CheckCircle2 size={16} />
            <span>{project.completedMilestones} / {project.milestones.length} milestones</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-accent">
            <Calendar size={16} />
            <span className="font-mono">{new Date(project.creationTimestamp).toLocaleDateString()}</span>
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex items-center justify-between text-xs text-fg/60 font-mono uppercase">
            <span>Progress</span>
            <span className="text-primary font-bold">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-bg rounded-full h-2 overflow-hidden border border-primary/30">
            <div
              className="h-full transition-all duration-300 bg-gradient-to-r from-primary via-neon-blue to-accent shadow-neon-cyan"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
