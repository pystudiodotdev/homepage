import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
              pystudio
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#vision"
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Vision
            </a>
            <a
              href="#products"
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Products
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
