'use client';

import { useEffect } from 'react';
import { AlertCircle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <AlertCircle size={64} className="text-error mx-auto animate-pulse shadow-neon-pink" />
        <div>
          <h2 className="text-2xl font-bold text-error mb-2 font-orbitron uppercase neon-text-pink glitch">
            System Error!
          </h2>
          <p className="text-fg/60 font-mono">
            We encountered an error while loading this page.
          </p>
        </div>
        <button
          onClick={reset}
          className="retro-button text-bg px-6 py-3 rounded-md font-bold transition-all font-orbitron"
        >
          TRY AGAIN
        </button>
      </div>
    </div>
  );
}
