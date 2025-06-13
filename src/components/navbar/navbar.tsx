import React from "react";

import Button from "../button";
import Badge from "../badge";
import { Link } from "react-router";

const navLinks = [
  { title: "Features", path: "/features" },
  { title: "Examples", path: "/examples" },
  { title: "Documentation", path: "/docs" },
];

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 w-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="mdi mdi-table text-blue-500 text-2xl" />
              <Link to="/">
                <h1 className="text-xl font-bold text-slate-900">
                  DataTable Pro
                </h1>
              </Link>
            </div>
            <Badge variant="outline" className="hidden sm:inline-flex">
              50+ Features
            </Badge>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) => (
              <Link
                to={item.path}
                key={item.title}
                className="text-slate-700 hover:text-blue-500 font-medium transition-colors"
              >
                {item.title}
              </Link>
            ))}

            <Button variant="primary" className="bg-blue-500">
              Get Started
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
