import React from 'react';

export const SocialHub: React.FC = () => {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col bg-white shadow-lg rounded-l-lg p-2 space-y-4">
      {/* Placeholder icons - In a real app, use SVGs or an icon library like react-icons */}
      <div
        className="w-10 h-10 bg-gray-100 rounded-full hover:bg-amber-100 cursor-pointer flex items-center justify-center text-amber-600 transition-colors"
        title="Twitter"
      >
        <span className="font-bold">X</span>
      </div>
      <div
        className="w-10 h-10 bg-gray-100 rounded-full hover:bg-amber-100 cursor-pointer flex items-center justify-center text-amber-600 transition-colors"
        title="LinkedIn"
      >
        <span className="font-bold">in</span>
      </div>
      <div
        className="w-10 h-10 bg-gray-100 rounded-full hover:bg-amber-100 cursor-pointer flex items-center justify-center text-amber-600 transition-colors"
        title="GitHub"
      >
        <span className="font-bold">Gh</span>
      </div>
    </div>
  );
};
