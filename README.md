# ProjectFlow - Decentralized Project Management

A transparent, onchain platform for contractors and clients to manage projects, verify reputations, and facilitate secure, gasless payments on Base and Farcaster.

## Features

- 🔐 **Reputation & Credentialing**: Showcase verified project completions as onchain credentials
- 📊 **Project Management**: Real-time updates and milestone tracking via Farcaster Frames
- 💰 **Milestone-Based Escrow**: Smart contract-powered secure payments
- ⚡ **Gasless Transactions**: Seamless payment experience with sponsored gas
- 🎯 **Social Integration**: Native Farcaster Mini App with notifications and sharing

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (L2 on Ethereum)
- **Wallet**: OnchainKit + Coinbase Wallet
- **Social**: Farcaster Mini App SDK
- **Styling**: Tailwind CSS with Coinbase theme
- **TypeScript**: Full type safety

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
app/
├── components/       # Reusable UI components
├── projects/        # Project detail pages
├── profile/         # User profile
├── notifications/   # Notification center
├── search/          # Search functionality
└── page.tsx         # Home dashboard

lib/
├── types.ts         # TypeScript interfaces
├── constants.ts     # App constants
└── mockData.ts      # Mock data for development
```

## Key Components

- **AppShell**: Main layout with bottom navigation
- **ProjectCard**: Project overview with progress tracking
- **MilestoneItem**: Milestone display with approval actions
- **CredentialBadge**: Shareable reputation credentials
- **ConnectWalletButton**: Wallet connection interface

## Base Mini App Integration

This app is built as a Farcaster Mini App with:
- OnchainKit for wallet and identity
- MiniKit SDK for Farcaster integration
- Gasless transactions via Paymaster
- Social primitives (notifications, sharing, frames)

## License

MIT
