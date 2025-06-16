import React, { useState, useEffect } from 'react';

export default function SimulationOutput() {
  // Define all the simulation output lines.
  // Each object contains the text content and a class for styling (e.g., green for commands, gray for output).
  const simulationLines = [
    { text: '$ anchor build', className: 'text-green-400' },
    { text: 'Building program...', className: 'text-gray-400' },
    { text: '$ anchor deploy', className: 'text-green-400' },
    { text: 'Deploying program...', className: 'text-gray-400' },
    { text: 'Program deployed successfully!', className: 'text-green-400' },
    { text: 'Program ID: Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS', className: 'text-gray-400' },
    { text: '$ anchor test', className: 'text-green-400' },
    { text: 'Running tests...', className: 'text-gray-400' },
    { text: '✓ Counter program tests passed', className: 'text-green-400' },
  ];

  // State to keep track of how many lines are currently visible.
  // Initially, 0 lines are visible.
  const [visibleLinesCount, setVisibleLinesCount] = useState(0);

  // useEffect hook to manage the animation sequence.
  // This effect runs once when the component mounts and sets up the timed rendering.
  useEffect(() => {
    // Check if there are more lines to display.
    if (visibleLinesCount < simulationLines.length) {
      // Set a timeout to increment the visibleLinesCount after 0.3 seconds.
      // This will cause the next line to appear.
      const timer = setTimeout(() => {
        setVisibleLinesCount((prevCount) => prevCount + 1);
      }, 300); // 300 milliseconds = 0.3 seconds

      // Cleanup function: Clear the timeout if the component unmounts
      // or if the effect re-runs before the timer completes.
      return () => clearTimeout(timer);
    }
  }, [visibleLinesCount, simulationLines.length]); // Dependencies: re-run effect when visibleLinesCount changes
                                                // or if the total number of lines changes (though it's static here).

  return (
    <div className="h-full flex flex-col"> {/* Use flex-col for better layout control */}
      <div className="text-sm font-medium text-gray-700 mb-2">Simulation Output</div>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-auto flex-grow"> {/* flex-grow to take available height */}
        <div className="space-y-1">
          {/* Map over the simulationLines array and render only the lines up to visibleLinesCount. */}
          {simulationLines.slice(0, visibleLinesCount).map((line, index) => (
            // Use a key for efficient list rendering in React.
            // The key should be stable and unique, index is fine here since lines don't reorder.
            <div key={index} className={line.className}>
              {line.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
