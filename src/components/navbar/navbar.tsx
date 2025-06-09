import React from "react";
import { Link } from "react-router";

const navLinks = [
  { title: "Features", path: "/features" },
  { title: "Examples", path: "/examples" },
  { title: "Documentation", path: "/docs" },
];

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4"
        aria-label="Main navigation"
      >
        <div className="flex gap-5 items-center">
          <Link
            to="/"
            className="flex items-center space-x-2"
            aria-label="Homepage"
          >
            <div className="h-8 w-8 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold">
              <span>D</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">
              DataTable Pro
            </span>
          </Link>
          <span className="bg-gray-200 rounded-full px-2 border border-gray-200 text-sm">
            50+ Features
          </span>
        </div>

        <ul
          className="hidden md:flex space-x-6 text-sm font-medium text-gray-700 items-center"
          role="menubar"
        >
          {navLinks.map((link) => (
            <li key={link.path} role="none">
              <Link
                to={link.path}
                role="menuitem"
                className="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              >
                {link.title}
              </Link>
            </li>
          ))}
          <Link
            to="/get-started"
            className="bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Get Started
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
