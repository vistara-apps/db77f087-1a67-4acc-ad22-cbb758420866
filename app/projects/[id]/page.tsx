'use client';

import { AppShell } from '@/app/components/AppShell';
import { Header } from '@/app/components/Header';
import { MilestoneItem } from '@/app/components/MilestoneItem';
import { mockProjects } from '@/lib/mockData';
import { ArrowLeft, Share2, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { use } from 'react';

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const project = mockProjects.find(p => p.projectId === id);

  if (!project) {
    return (
      <AppShell>
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-fg">Project not found</p>
        </div>
      </AppShell>
    );
  }

  const progress = (project.completedMilestones / project.milestones.length) * 100;

  return (
    <AppShell>
      <div className="sticky top-0 z-10 bg-bg/95 backdrop-blur-sm border-b border-white/10 px-4 py-4">
        <div className="max-w-md mx-auto flex items-center gap-4">
          <Link href="/">
            <button className="p-2 hover:bg-surface rounded-lg transition-colors">
              <ArrowLeft size={24} className="text-fg" />
            </button>
          </Link>
          <h1 className="text-xl font-bold text-fg flex-1">Project Details</h1>
          <button className="p-2 hover:bg-surface rounded-lg transition-colors">
            <Share2 size={24} className="text-fg" />
          </button>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Project Header */}
        <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg p-6 border border-primary/30">
          <h2 className="text-2xl font-bold text-fg mb-2">{project.title}</h2>
          <p className="text-fg/80 mb-4">{project.description}</p>
          
          <div className="flex items-center gap-4 text-sm">
            <span className="px-3 py-1 bg-primary/20 text-primary rounded-full font-medium">
              {project.status}
            </span>
            <span className="text-fg/60">
              Created {new Date(project.creationTimestamp).toLocaleDateString()}
            </span>
          </div>
        </div>

        {/* Progress */}
        <div className="bg-surface rounded-lg p-4 border border-white/5">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-fg">Overall Progress</h3>
            <span className="text-2xl font-bold text-primary">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-bg rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-primary to-accent h-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-fg/60 mt-2">
            {project.completedMilestones} of {project.milestones.length} milestones completed
          </p>
        </div>

        {/* Budget */}
        <div className="bg-surface rounded-lg p-4 border border-white/5">
          <h3 className="font-semibold text-fg mb-3">Budget Overview</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-fg/60 mb-1">Total Budget</p>
              <p className="text-2xl font-bold text-fg">${project.totalAmount.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-fg/60 mb-1">Paid Out</p>
              <p className="text-2xl font-bold text-success">
                ${(project.milestones
                  .filter(m => m.paymentStatus === 'Paid')
                  .reduce((sum, m) => sum + m.amount, 0)
                ).toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        {/* Milestones */}
        <div>
          <h3 className="text-xl font-bold text-fg mb-4">Milestones</h3>
          <div className="space-y-3">
            {project.milestones.map((milestone) => (
              <MilestoneItem key={milestone.milestoneId} milestone={milestone} />
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-primary hover:bg-accent text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
            <MessageSquare size={20} />
            Message
          </button>
          <button className="bg-surface hover:bg-surface/80 text-fg px-4 py-3 rounded-lg font-medium transition-colors border border-white/10">
            Add Milestone
          </button>
        </div>
      </div>
    </AppShell>
  );
}
