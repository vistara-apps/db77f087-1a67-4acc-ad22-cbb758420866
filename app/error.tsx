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
        <AlertCircle size={64} className="text-error mx-auto" />
        <div>
          <h2 className="text-2xl font-bold text-fg mb-2">Something went wrong!</h2>
          <p className="text-fg/60">
            We encountered an error while loading this page.
          </p>
        </div>
        <button
          onClick={reset}
          className="bg-primary hover:bg-accent text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
