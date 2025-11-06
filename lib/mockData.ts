import { Project, UserProfile, Credential } from './types';

export const mockProjects: Project[] = [
  {
    projectId: '1',
    clientId: '12345',
    contractorId: '67890',
    title: 'E-commerce Website Redesign',
    description: 'Complete redesign of the company e-commerce platform with modern UI/UX',
    status: 'InProgress',
    creationTimestamp: Date.now() - 7 * 24 * 60 * 60 * 1000,
    totalAmount: 5000,
    completedMilestones: 2,
    milestones: [
      {
        milestoneId: '1-1',
        projectId: '1',
        description: 'Design mockups and wireframes',
        amount: 1500,
        dueDate: Date.now() - 5 * 24 * 60 * 60 * 1000,
        status: 'Approved',
        paymentStatus: 'Paid',
        completionProofUrl: 'https://figma.com/mockup',
        approvalTimestamp: Date.now() - 4 * 24 * 60 * 60 * 1000,
      },
      {
        milestoneId: '1-2',
        projectId: '1',
        description: 'Frontend implementation',
        amount: 2000,
        dueDate: Date.now() + 3 * 24 * 60 * 60 * 1000,
        status: 'Pending',
        paymentStatus: 'Outstanding',
      },
      {
        milestoneId: '1-3',
        projectId: '1',
        description: 'Backend integration and testing',
        amount: 1500,
        dueDate: Date.now() + 10 * 24 * 60 * 60 * 1000,
        status: 'Pending',
        paymentStatus: 'Outstanding',
      },
    ],
  },
  {
    projectId: '2',
    clientId: '12345',
    contractorId: '54321',
    title: 'Mobile App Development',
    description: 'Native iOS and Android app for fitness tracking',
    status: 'Initiated',
    creationTimestamp: Date.now() - 2 * 24 * 60 * 60 * 1000,
    totalAmount: 8000,
    completedMilestones: 0,
    milestones: [
      {
        milestoneId: '2-1',
        projectId: '2',
        description: 'App architecture and setup',
        amount: 2000,
        dueDate: Date.now() + 7 * 24 * 60 * 60 * 1000,
        status: 'Pending',
        paymentStatus: 'Outstanding',
      },
    ],
  },
];

export const mockCredentials: Credential[] = [
  {
    credentialId: 'cred-1',
    fid: '67890',
    projectId: '1',
    type: 'Completion',
    data: JSON.stringify({
      projectTitle: 'E-commerce Website Redesign',
      clientName: 'TechCorp Inc.',
      completionDate: Date.now() - 30 * 24 * 60 * 60 * 1000,
      rating: 5,
    }),
    issuedAt: Date.now() - 30 * 24 * 60 * 60 * 1000,
  },
];

export const mockUserProfile: UserProfile = {
  fid: '67890',
  username: 'alexdev',
  displayName: 'Alex Developer',
  pfpUrl: 'https://i.imgur.com/placeholder.jpg',
  bio: 'Full-stack developer specializing in Web3 and DeFi',
  completedProjects: 12,
  totalEarned: 45000,
  rating: 4.8,
  credentials: mockCredentials,
};
