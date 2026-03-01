import React, { useState } from "react";

const WelcomeScreen = ({ children }) => {
  const [showContent, setShowContent] = useState(false);

  const handleEnter = () => {
    setShowContent(true);
  };

  if (showContent) {
    return <>{children}</>;
  }

  return (
    <div 
      // Fixed: Changed gradient to solid black (bg-black)
      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 cursor-pointer transition-colors duration-700"
      onClick={handleEnter}
    >
      {/* AI Robot Animation - Smaller Size */}
      <div className="relative mb-6" style={{ transform: 'scale(0.7)' }}>
        
        {/* Robot Head */}
        <div className="relative w-24 h-24 mx-auto">
          {/* Head - Darker Metallic Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-600 to-gray-800 rounded-xl shadow-[0_0_20px_rgba(34,211,238,0.2)] border border-gray-700">
            {/* Eyes - Glowing Cyan */}
            <div className="absolute top-5 left-4 w-5 h-5 bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee] animate-pulse">
              <div className="absolute top-1 left-0.5 w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
            <div className="absolute top-5 right-4 w-5 h-5 bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee] animate-pulse">
              <div className="absolute top-1 right-0.5 w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
            {/* Mouth */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-3 bg-black/40 rounded-full overflow-hidden border border-gray-700">
              <div className="absolute top-0.5 left-1.5 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping"></div>
              <div className="absolute top-0.5 left-4.5 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping delay-100"></div>
              <div className="absolute top-0.5 left-7.5 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping delay-200"></div>
            </div>
            {/* Antenna */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-1.5 h-4 bg-gray-600"></div>
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-3 h-3 bg-red-500 rounded-full shadow-[0_0_10px_#ef4444] animate-pulse"></div>
          </div>
        </div>

        {/* Robot Body */}
        <div className="w-28 h-14 bg-gradient-to-b from-gray-600 to-gray-800 rounded-b-2xl mx-auto -mt-1 relative border-x border-b border-gray-700">
          {/* Chest Panel */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-14 h-7 bg-black/50 rounded-md border border-gray-700">
            <div className="flex gap-1.5 justify-center mt-1.5">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-100"></div>
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse delay-200"></div>
            </div>
          </div>
        </div>

        {/* Arms */}
        <div className="absolute top-26 -left-5 w-6 h-14 bg-gray-600 rounded-full origin-top animate-wiggle border border-gray-700">
          <div className="absolute bottom-0 w-7 h-7 bg-gray-500 rounded-full"></div>
        </div>
        <div className="absolute top-26 -right-5 w-6 h-14 bg-gray-600 rounded-full origin-top animate-wiggle delay-150 border border-gray-700">
          <div className="absolute bottom-0 w-7 h-7 bg-gray-500 rounded-full"></div>
        </div>

        {/* Computer */}
        <div className="absolute -bottom-3 -right-12 w-20 h-16 bg-zinc-900 rounded-md p-1 shadow-2xl border border-gray-800">
          <div className="w-full h-full bg-blue-900/40 rounded flex items-center justify-center overflow-hidden border border-blue-500/30">
            <div className="space-y-0.5">
              <div className="w-12 h-1.5 bg-green-400/80 rounded animate-pulse"></div>
              <div className="w-10 h-1.5 bg-yellow-400/80 rounded ml-1"></div>
              <div className="w-14 h-1.5 bg-pink-400/80 rounded ml-2"></div>
              <div className="w-8 h-1.5 bg-cyan-400/80 rounded ml-3 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-4xl md:text-6xl font-bold text-white mb-3 tracking-wider drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
        WELCOME
      </h1>
      
      <p className="text-lg md:text-xl text-gray-500 mb-8 font-light tracking-widest uppercase">
        to My Portfolio
      </p>

      <div className="inline-flex items-center gap-3 px-8 py-3 bg-white text-black rounded-full hover:bg-cyan-400 transition-all duration-300 hover:scale-110 active:scale-95 animate-bounce shadow-[0_0_20px_rgba(255,255,255,0.2)]">
        <span className="font-bold uppercase text-xs tracking-widest">Click Me</span>
        <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </div>
    </div>
  );
};

export default WelcomeScreen;
