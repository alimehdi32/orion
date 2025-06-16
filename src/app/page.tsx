'use client'
import ChatInterface from '@/components/ChatInterface'
import { useState } from 'react';

export default function Home() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    !click ? (
      <main className="flex flex-col items-center justify-center min-h-[80vh] overflow-auto w-full px-4">
        
        <div className="w-full max-w-2xl flex flex-col items-center gap-6 mt-16">
          <span className="badge self-center mt-4">New The Solana Playground is in beta.</span>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-center mt-2 mb-2">
            What can I help you build?
          </h1>
          <p className="text-lg text-gray-400 text-center mb-4 max-w-xl">
            Ask about Solana smart contracts, generate code, or simulate results. No code required.
          </p>
        </div>
        <button
          onClick={handleClick}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-sm font-medium shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200 ease-in-out"
        >
          Get Started
        </button>

      </main>
    ) : (
      <main className="flex flex-col items-center justify-center min-h-[80vh] overflow-auto w-full px-4">
        <div className=" w-[1500px] p-6 flex flex-col gap-4">
          <ChatInterface />
        </div>
      </main>
    )
  )
}
