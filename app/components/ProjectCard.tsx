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
      <div className="bg-surface rounded-lg p-4 hover:bg-surface/80 transition-colors cursor-pointer border border-white/5">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-fg mb-1">{project.title}</h3>
            <p className="text-sm text-fg/60 line-clamp-2">{project.description}</p>
          </div>
          <span className={`px-2 py-1 rounded-md text-xs font-medium ${PROJECT_STATUS_COLORS[project.status]} text-white ml-2`}>
            {project.status}
          </span>
        </div>

        <div className="space-y-2 mb-3">
          <div className="flex items-center gap-2 text-sm text-fg/80">
            <DollarSign size={16} />
            <span>${project.totalAmount.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-fg/80">
            <CheckCircle2 size={16} />
            <span>{project.completedMilestones} / {project.milestones.length} milestones</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-fg/80">
            <Calendar size={16} />
            <span>{new Date(project.creationTimestamp).toLocaleDateString()}</span>
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex items-center justify-between text-xs text-fg/60">
            <span>Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-bg rounded-full h-2 overflow-hidden">
            <div
              className="bg-primary h-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
