// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaUserMd, FaChartBar } from 'react-icons/fa';

const Sidebar = () => (
  <aside className="w-64 bg-blue-800 text-white h-screen shadow-lg transition-transform duration-300">
    <div className="flex items-center justify-center h-16 border-b border-blue-600">
      <h1 className="text-2xl font-bold">Health Hub</h1>
    </div>
    <nav className="flex flex-col p-4">
      <Link to="/" className="flex items-center py-2 hover:bg-blue-700 rounded transition duration-200">
        <FaTachometerAlt className="mr-3" />
        Dashboard
      </Link>
      <Link to="/patient-records" className="flex items-center py-2 hover:bg-blue-700 rounded transition duration-200">
        <FaUserMd className="mr-3" />
        Patient Records
      </Link>
      <Link to="/data-analysis" className="flex items-center py-2 hover:bg-blue-700 rounded transition duration-200">
        <FaChartBar className="mr-3" />
        Data Analysis
      </Link>
    </nav>
  </aside>
);

export default Sidebar;
