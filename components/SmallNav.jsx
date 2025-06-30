"use client";

import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";

const SmallNav = ({ activeSection, setActiveSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "miscellaneous", label: "Miscellaneous" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center bg-neutral-900 text-white p-4 z-50">
      {/* Profile Section */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-700">
          <Image
            src="/images/profile-pic.webp"
            alt="Profile"
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-lg font-semibold">Aakash Rajbhar</h2>
          <p className="text-sm text-gray-400">Full-Stack Developer</p>
        </div>
      </div>

      {/* Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(true)}
        className="lg:hidden text-white bg-gray-800 p-2 rounded-md"
        aria-label="Open Menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Overlay (Backdrop) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}

      {/* Sliding Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-neutral-900/30 backdrop-blur-md shadow-lg transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-white text-lg font-medium">Menu</h2>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-400 hover:text-white"
            aria-label="Close Menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-6">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    setActiveSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left p-2 rounded-md transition uppercase ${
                    activeSection === item.id
                      ? "text-white font-medium bg-neutral-800"
                      : "hover:text-gray-300 hover:bg-neutral-800"
                  }`}
                  aria-label={`Go to ${item.label} section`}
                  aria-current={activeSection === item.id ? "page" : undefined}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default SmallNav;
