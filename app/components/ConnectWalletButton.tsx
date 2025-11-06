'use client';

import { Wallet } from 'lucide-react';

export function ConnectWalletButton() {
  return (
    <button className="w-full retro-button text-bg px-6 py-3 rounded-md font-bold transition-all flex items-center justify-center gap-2 font-orbitron group">
      <Wallet size={20} className="group-hover:animate-pulse" />
      CONNECT WALLET
    </button>
  );
}
