// src/components/Header.jsx
import React from 'react';

const Header = () => (
  <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
    <h1 className="text-lg font-semibold">Clinical Data Management</h1>
    <div className="flex items-center space-x-4">
      <button className="text-gray-600 hover:text-gray-800">🔔</button> {/* Notification Icon */}
      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"> {/* Profile Placeholder */}
        <span>👤</span>
      </div>
    </div>
  </header>
);

export default Header;
