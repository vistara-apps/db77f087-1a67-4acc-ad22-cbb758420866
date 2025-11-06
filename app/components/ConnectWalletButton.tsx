'use client';

import { Wallet } from 'lucide-react';

export function ConnectWalletButton() {
  return (
    <button className="w-full bg-primary hover:bg-accent text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
      <Wallet size={20} />
      Connect Wallet
    </button>
  );
}
