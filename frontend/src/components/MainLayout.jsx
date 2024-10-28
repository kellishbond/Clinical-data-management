// src/components/MainLayout.jsx
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const MainLayout = ({ children }) => (
  <div className="flex h-screen">
    <Sidebar />  {/* Sidebar on the left */}
    <div className="flex flex-col flex-grow">
      <Header />  {/* Header at the top */}
      <main className="flex-grow p-6 bg-gray-100 overflow-y-auto">
        {children}  {/* This is where each page's content will render */}
      </main>
    </div>
  </div>
);

export default MainLayout;
