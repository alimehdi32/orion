import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import React, { useState } from 'react'
import SimulationOutput from './SimulationOutput';


interface CodeDisplayProps {
  code: string
}

export default function CodeDisplay({ code }: CodeDisplayProps) {
  const [clicked, setClicked] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code', err);
    }
  };

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

        <div className="flex flex-col items-center justify-between px-4 py-2">
          <button
            onClick={handleCopy}
            className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-1 px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
          >
            {copied ? "Copied" : "Copy"}
          </button>
          <SyntaxHighlighter
            className="rounded-lg border border-gray-300 w-full max-w-full text-sm overflow-x-auto whitespace-pre-wrap break-words"
            language="rust"
            showLineNumbers
            wrapLines
            style={vscDarkPlus}
            customStyle={{
              margin: 0,
              borderRadius: '0.5rem',
              fontSize: '0.875rem',
              lineHeight: '1.6',
              wordBreak: 'break-word',
              whiteSpace: 'pre-wrap',
              overflowX: 'auto',
            }}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      )}
    </div>

  )
} 