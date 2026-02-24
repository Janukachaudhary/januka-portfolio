
import React from 'react';

function ProfileCard() {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-blue p-8 rounded-lg shadow-md text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-2 gt text-red-700">Januka Chaudhary</h1>
      <p className="text-blue-600 font-medium text-lg mb-4">Software Developer</p>
      <div className="text-gray-600 space-y-1">
      <p>Passionate about creating user-friendly</p>
    <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300">
     Login</button>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;