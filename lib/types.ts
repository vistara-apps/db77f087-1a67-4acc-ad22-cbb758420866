export type ProjectStatus = 'Initiated' | 'InProgress' | 'Completed' | 'Disputed';
export type MilestoneStatus = 'Pending' | 'Approved' | 'Rejected';
export type PaymentStatus = 'Outstanding' | 'Paid';
export type CredentialType = 'Completion' | 'Testimonial';

export interface Project {
  projectId: string;
  clientId: string;
  contractorId: string;
  title: string;
  description: string;
  status: ProjectStatus;
  creationTimestamp: number;
  milestones: Milestone[];
  escrowContractAddress?: string;
  totalAmount: number;
  completedMilestones: number;
}

export interface Milestone {
  milestoneId: string;
  projectId: string;
  description: string;
  amount: number;
  dueDate: number;
  status: MilestoneStatus;
  completionProofUrl?: string;
  approvalTimestamp?: number;
  paymentStatus: PaymentStatus;
}

export interface Credential {
  credentialId: string;
  fid: string;
  projectId: string;
  type: CredentialType;
  data: string;
  issuedAt: number;
}

export interface UserProfile {
  fid: string;
  username: string;
  displayName: string;
  pfpUrl?: string;
  bio?: string;
  completedProjects: number;
  totalEarned: number;
  rating: number;
  credentials: Credential[];
}
