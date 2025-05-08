import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row" data-theme="autumn">
      {/* Sidebar */}
      <nav
        id="sidebar"
        className="w-full md:w-64 h-auto md:h-screen bg-base-content text-base-content custom-sidebar text-white md:sticky md:top-0"
      >
        <div className="p-4">
          {/* Logo and App Name */}
          <div className="flex items-center mb-6">
            <img src="logo.png" alt="Logo" className="h-8 w-8 mr-2" />
            <span className="text-lg font-bold">Ramen App</span>
          </div>

          {/* Menu */}
          <h2 className="text-lg font-bold">Menu</h2>
          <ul className="mt-4">
            <li className="mb-2">
              <Link to="/dashboard" className="block p-2 rounded hover:bg-error">
                Dashboard
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/inventory" className="block p-2 rounded hover:bg-error">
                Inventory
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/mobile-order" className="block p-2 rounded hover:bg-error">
                Mobile Order
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/pos" className="block p-2 rounded hover:bg-error">
                POS
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/sales-report" className="block p-2 rounded hover:bg-error">
                Sales Report
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Top Navigation Bar */}
      <header className="flex flex-wrap justify-between items-center p-4 bg-base-200 text-base-content custom-header sticky top-0 z-10 md:hidden">
        {/* Logo */}
        <div className="flex items-center">
          <img src="logo.png" alt="Logo" className="h-8 w-8 mr-2" />
          <span className="text-lg font-bold">Ramen App</span>
        </div>
        {/* Account Section with Logout */}
        <div className="flex items-center mt-2 md:mt-0">
          <span className="mr-4 hidden sm:inline">Welcome, Admin</span>
          <button id="logoutButton" className="btn btn-error btn-sm">
            Logout
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;