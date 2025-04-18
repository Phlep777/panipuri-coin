
import React from 'react';
import WalletConnect from './WalletConnect';
import CountdownTimer from './CountdownTimer';

export default function App() {
  return (
    <div className="bg-[#fff8e1] text-[#333] font-sans">
      <header className="bg-[#f8d37d] text-center py-10">
        <h1 className="text-5xl font-bold">PaniPuri Coin</h1>
        <p className="text-2xl mt-4">The Spiciest Coin on the Blockchain 🌶️🪙</p>
        <WalletConnect />
      </header>

      <section className="text-center py-20 px-4">
        <h2 className="text-4xl text-[#7BB661] font-bold mb-4">Presale Countdown</h2>
        <CountdownTimer targetDate={new Date("2025-06-01T00:00:00Z").getTime()} />
      </section>
    </div>
  );
}
