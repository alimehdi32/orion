import React from 'react';
import { DocumentIcon } from '@heroicons/react/24/outline'

interface FileTreeProps {
  onSelectFile: (file: string) => void;
  selectedFile: string | null;
  code?: string;
  filename?: string[];
}

export default function FileTree({ filename, onSelectFile, selectedFile }: FileTreeProps) {
  if (!filename || filename.length === 0) {
    return <div className="p-4 text-sm text-gray-500">No files available</div>;
  }


  return (
    <div className="p-4 mt-4 w-full md:mt-[200px] md:fixed md:w-60">
      <div className="text-sm font-medium text-gray-500 mb-2">Files</div>
      <div className="space-y-1 overflow-y-auto max-h-[50vh] md:max-h-none">
        {filename.map((file) => (
          <button
            key={file}
            onClick={() => onSelectFile(file)}
            className={`w-full flex items-center gap-2 px-2 py-1.5 text-sm rounded-md ${selectedFile === file
                ? 'bg-blue-50 text-blue-700'
                : 'text-fuchsia-600 hover:bg-gray-50'
              }`}
          >
            <DocumentIcon className="h-4 w-4" />
            {file}
          </button>
        ))}
      </div>
    </div>

  )
} 