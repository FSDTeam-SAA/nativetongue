import React from 'react';
import { Search, Bell, Wallet } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full mb-4 bg-[#0A0A0ACC] border-b border-[#FFFFFF0D] py-3 flex items-center justify-between">
      {/* Search Bar - Left Side */}
      <div className="relative w-full max-w-sm">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-gray-500" />
        </div>
        <input
          type="text"
          placeholder="Search events, teams, or bettors..."
          className="block w-full bg-[#1a1a1a] placeholder:text-[#CCCCCC] border border-gray-800 text-gray-300 text-sm rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-700 transition-all "
        />
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-6 ml-4">
        {/* Notification Bell */}
        <button className="relative text-gray-400 hover:text-white transition-colors">
          <Bell size={20} />
          {/* Red Notification Dot */}
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 border border-[#0d0d0d]"></span>
        </button>

        {/* Connect Wallet Button */}
        <button className="flex items-center gap-2 text-gray-300 hover:text-white text-sm font-semibold transition-colors">
          <Wallet size={18} />
          <span>Connect Wallet</span>
        </button>
      </div>
    </header>
  );
};

export default Header;