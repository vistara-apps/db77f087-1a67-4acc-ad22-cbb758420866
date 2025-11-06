import type { Metadata } from 'next';
import { Providers } from './components/Providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'ProjectFlow - Decentralized Project Management',
  description: 'Transparent, onchain platform for contractors and clients to manage projects, verify reputations, and facilitate secure payments on Base.',
  openGraph: {
    title: 'ProjectFlow',
    description: 'Decentralized project management & payments on Base and Farcaster',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
