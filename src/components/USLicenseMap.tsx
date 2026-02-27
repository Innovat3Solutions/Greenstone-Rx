import { useState } from 'react';

// Licensed states with percentage-based coordinates on a standard US map
const licensedStates = [
  { id: 'AZ', name: 'Arizona', x: 18, y: 62 },
  { id: 'CO', name: 'Colorado', x: 30, y: 50 },
  { id: 'CT', name: 'Connecticut', x: 91, y: 32 },
  { id: 'FL', name: 'Florida', x: 78, y: 85 },
  { id: 'IA', name: 'Iowa', x: 52, y: 38 },
  { id: 'ID', name: 'Idaho', x: 17, y: 25 },
  { id: 'IL', name: 'Illinois', x: 58, y: 45 },
  { id: 'KS', name: 'Kansas', x: 42, y: 52 },
  { id: 'KY', name: 'Kentucky', x: 67, y: 52 },
  { id: 'MD', name: 'Maryland', x: 82, y: 43 },
  { id: 'ME', name: 'Maine', x: 93, y: 15 },
  { id: 'MI', name: 'Michigan', x: 64, y: 30 },
  { id: 'MT', name: 'Montana', x: 25, y: 18 },
  { id: 'ND', name: 'North Dakota', x: 40, y: 18 },
  { id: 'NE', name: 'Nebraska', x: 40, y: 40 },
  { id: 'NJ', name: 'New Jersey', x: 86, y: 38 },
  { id: 'NY', name: 'New York', x: 84, y: 28 },
  { id: 'OK', name: 'Oklahoma', x: 42, y: 60 },
  { id: 'OR', name: 'Oregon', x: 12, y: 22 },
  { id: 'PA', name: 'Pennsylvania', x: 80, y: 35 },
  { id: 'RI', name: 'Rhode Island', x: 92, y: 33 },
  { id: 'SC', name: 'South Carolina', x: 76, y: 62 },
  { id: 'SD', name: 'South Dakota', x: 40, y: 28 },
  { id: 'TX', name: 'Texas', x: 38, y: 75 },
  { id: 'VA', name: 'Virginia', x: 79, y: 48 },
  { id: 'WI', name: 'Wisconsin', x: 56, y: 28 },
  { id: 'WV', name: 'West Virginia', x: 75, y: 46 },
  { id: 'WY', name: 'Wyoming', x: 28, y: 32 },
];

export default function USLicenseMap() {
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Map container */}
      <div className="relative w-full" style={{ aspectRatio: '1.6' }}>
        {/* US Map Image - using a clean outline map */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Blank_US_Map_%28states_only%29.svg/1200px-Blank_US_Map_%28states_only%29.svg.png"
          alt="United States Map"
          className="w-full h-full object-contain opacity-40"
          style={{ filter: 'grayscale(100%)' }}
        />

        {/* Dots overlay */}
        <div className="absolute inset-0">
          {licensedStates.map(({ id, name, x, y }) => (
            <div
              key={id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{ left: `${x}%`, top: `${y}%` }}
              onMouseEnter={() => setHoveredState(id)}
              onMouseLeave={() => setHoveredState(null)}
            >
              {/* Pulse animation */}
              <div className="absolute inset-0 w-7 h-7 -m-0.5 rounded-full bg-green-500 opacity-30 animate-ping" />

              {/* Glow effect */}
              <div className="absolute inset-0 w-8 h-8 -m-1 rounded-full bg-green-400 opacity-40 blur-sm group-hover:opacity-60 transition-opacity" />

              {/* Main dot */}
              <div className="relative w-6 h-6 rounded-full bg-gradient-to-br from-green-400 via-green-500 to-green-700 border-2 border-white shadow-lg flex items-center justify-center group-hover:scale-125 transition-transform">
                <span className="text-white text-[8px] font-bold drop-shadow">{id}</span>
              </div>

              {/* Tooltip */}
              {hoveredState === id && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap z-20 shadow-xl">
                  {name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-6 sm:mt-8">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative">
            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br from-green-400 via-green-500 to-green-700 border-2 border-white shadow" />
            <div className="absolute inset-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-green-500 opacity-30 animate-ping" />
          </div>
          <span className="text-xs sm:text-sm text-gray-600 font-medium">Licensed States (28)</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded bg-gray-200 border border-gray-300" />
          <span className="text-xs sm:text-sm text-gray-600 font-medium">Coming Soon</span>
        </div>
      </div>
    </div>
  );
}
