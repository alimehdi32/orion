import { useState } from 'react'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import { Loader2 } from 'lucide-react';
import CodeDisplay from './CodeDisplay'
import FileTree from './FileTree'


export default function ChatInterface() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant', content: string }>>([])
  const [files, setFiles] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false);
  



  const handleSendMessage = async (message: string) => {
    setMessages(prev => [...prev, { role: 'user', content: message }])

    // Simulate a response from the assistant
    const response = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({
        messages: [...messages, { role: 'user', content: input }],
      }),
    });

    const { messages: newMessages } = await response.json();
    setMessages(prev => [...prev, {
      role: 'assistant',
      content: newMessages[0].content[0].text,
    }])

    const res = await fetch('/api/fileName', {
      method: 'POST',
      body: JSON.stringify({
        text: newMessages[0].content[0].text,
      }),
    });
    const { messages: fileName} = await res.json();
    setFiles(prev => [...prev, fileName[0].content[0].text]);
    setIsSubmitting(false);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      setIsSubmitting(true);
      handleSendMessage(input.trim())
      setInput('')
      
    }
    
  }

  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const handleSelectFile = (file: string) => {
    setSelectedFile(file);
    const element = document.getElementById(file);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

  };
   



  return (
    <div className='flex justify-between'>
      <div>
        <FileTree filename={files} onSelectFile={handleSelectFile} selectedFile={selectedFile} />
      </div>
      <div className="flex flex-col overflow-auto relative">

        {/* Messages */}
        <div className="flex-1 overflow-y-auto space-y-4 mb-4">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
            >
              <div id={ message.role === 'user' ? `${files[index/2]}` : 'code' } // Use the file name as the ID
                className={`max-w-[80%] rounded-lg ${message.role === 'assistant' ? 'mb-9' : 'my-3.5'} px-4 py-2 ${message.role === 'user'
                  ? 'bg-blue-600 text-white'
                  : ' text-gray-900'
                  }`}
              >
                {message.role === 'user'
                  ? message.content : <CodeDisplay code={message.content} />

                }
              </div>
            </div>
          ))}
        </div>

        {/* Input form */}
        <form onSubmit={handleSubmit} className="flex gap-2 bottom-6 left-[300px] right-1.5 w-[1000px] fixed bg-[#18181b] p-4 rounded-lg shadow-lg z-10">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about Solana smart contracts..."
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button disabled={isSubmitting}
            type="submit"
            className={` rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
          >
            { isSubmitting ? <Loader2 className="w-6 h-6 animate-spin text-blue-500" /> : <PaperAirplaneIcon className="h-5 w-5" />}
          </button>
        </form>
      </div>
    </div>
  )
} 