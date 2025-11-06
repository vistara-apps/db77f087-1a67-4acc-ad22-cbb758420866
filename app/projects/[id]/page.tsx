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
          <p className="text-primary font-orbitron uppercase neon-text-cyan">Project not found</p>
        </div>
      </AppShell>
    );
  }

  const progress = (project.completedMilestones / project.milestones.length) * 100;

  return (
    <AppShell>
      <div className="sticky top-0 z-10 bg-surface/90 backdrop-blur-md border-b-2 border-primary/30 px-4 py-4 shadow-neon-cyan">
        <div className="max-w-md mx-auto flex items-center gap-4">
          <Link href="/">
            <button className="p-2 hover:bg-primary/20 rounded-md transition-all border border-primary/30 hover:border-primary hover:shadow-neon-cyan">
              <ArrowLeft size={24} className="text-primary" />
            </button>
          </Link>
          <h1 className="text-xl font-bold text-primary flex-1 font-orbitron uppercase tracking-wider">Project Details</h1>
          <button className="p-2 hover:bg-accent/20 rounded-md transition-all border border-accent/30 hover:border-accent hover:shadow-neon-pink group">
            <Share2 size={24} className="text-accent group-hover:rotate-12 transition-transform" />
          </button>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Project Header */}
        <div className="holographic rounded-lg p-6 border-2 border-primary/50 shadow-neon-cyan">
          <h2 className="text-2xl font-bold text-primary mb-2 font-orbitron neon-text-cyan">{project.title}</h2>
          <p className="text-fg/80 mb-4">{project.description}</p>
          
          <div className="flex items-center gap-4 text-sm">
            <span className="px-3 py-1 bg-primary/20 text-primary rounded-md font-bold border border-primary/50 font-mono uppercase">
              {project.status}
            </span>
            <span className="text-fg/60 font-mono">
              Created {new Date(project.creationTimestamp).toLocaleDateString()}
            </span>
          </div>
        </div>

        {/* Progress */}
        <div className="retro-card rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-primary font-orbitron uppercase">Overall Progress</h3>
            <span className="text-2xl font-bold text-primary font-orbitron mono neon-text-cyan">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-bg rounded-full h-3 overflow-hidden border border-primary/30">
            <div
              className="bg-gradient-to-r from-primary via-neon-blue to-accent h-full transition-all duration-300 shadow-neon-cyan"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-fg/60 mt-2 font-mono">
            {project.completedMilestones} of {project.milestones.length} milestones completed
          </p>
        </div>

        {/* Budget */}
        <div className="retro-card rounded-lg p-4">
          <h3 className="font-bold text-primary mb-3 font-orbitron uppercase">Budget Overview</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-fg/60 mb-1 uppercase font-mono">Total Budget</p>
              <p className="text-2xl font-bold text-primary font-orbitron">${project.totalAmount.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-fg/60 mb-1 uppercase font-mono">Paid Out</p>
              <p className="text-2xl font-bold text-neon-green font-orbitron">
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
          <h3 className="text-xl font-bold text-primary mb-4 font-orbitron uppercase tracking-wider neon-text-cyan">Milestones</h3>
          <div className="space-y-3">
            {project.milestones.map((milestone) => (
              <MilestoneItem key={milestone.milestoneId} milestone={milestone} />
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-3">
          <button className="retro-button text-bg px-4 py-3 rounded-md font-bold transition-all flex items-center justify-center gap-2 font-orbitron group">
            <MessageSquare size={20} className="group-hover:animate-pulse" />
            MESSAGE
          </button>
          <button className="bg-surface hover:bg-surface/80 text-primary px-4 py-3 rounded-md font-bold transition-all border-2 border-accent/50 hover:border-accent hover:shadow-neon-pink font-orbitron uppercase">
            Add Milestone
          </button>
        </div>
      </div>
    </AppShell>
  );
}
