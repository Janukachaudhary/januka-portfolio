import React, { useState, useEffect } from "react";
import { FaRobot } from "react-icons/fa";

const SplashScreen = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Auto-hide after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return <>{children}</>;
  }

  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Robot Icon with Rotation Animation */}
        <FaRobot className="text-9xl text-red-500 mx-auto mb-6 animate-spin-slow" />
        
        <h1 className="text-4xl font-bold text-white mb-2">
          Welcome
        </h1>
        <p className="text-gray-400">Loading Portfolio...</p>
        
        {/* Loading Bar */}
        <div className="w-64 h-2 bg-gray-700 rounded-full mt-6 overflow-hidden">
          <div className="h-full bg-red-500 animate-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;