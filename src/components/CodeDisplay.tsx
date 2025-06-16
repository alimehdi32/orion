import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import React, { useState } from 'react'
import SimulationOutput from './SimulationOutput';

interface CodeDisplayProps {
  code: string
}

export default function CodeDisplay({ code }: CodeDisplayProps) {
  const [clicked, setClicked] = useState(false);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    // handle click event here
    setClicked(!clicked);
  };

  return (
    <div className="rounded-lg overflow-hidden w-full max-w-screen-lg mx-auto">
      <div className="px-4 py-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="text-sm font-medium text-gray-700">Rust/anchor</div>
        <button
          onClick={handleClick}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-sm font-medium shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200 ease-in-out"
        >
          {clicked ? 'Stop' : 'Run'}
        </button>
      </div>

      {clicked ? (
        <SimulationOutput />
      ) : (
        <SyntaxHighlighter
          language="Rust/anchor"
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            borderRadius: 0,
            fontSize: '0.875rem',
            lineHeight: '1.5',
          }}
        >
          {code}
        </SyntaxHighlighter>
      )}
    </div>

  )
} 