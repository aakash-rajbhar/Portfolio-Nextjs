"use client";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

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
    <motion.header
      className="fixed top-0 left-0 w-full flex justify-between items-center bg-neutral-900 text-white p-4 z-50"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Profile Section */}
      <motion.div
        className="flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <motion.div
          className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-700"
          whileHover={{ scale: 1.07 }}
        >
          <Image
            src="/images/profile.webp"
            alt="Profile"
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div>
          <motion.h2
            className="text-lg font-semibold"
            whileHover={{ scale: 1.04 }}
          >
            Aakash Rajbhar
          </motion.h2>
          <p className="text-sm text-gray-400">Full-Stack Developer</p>
        </div>
      </motion.div>

      {/* Menu Button - only on small screens */}
      <motion.button
        onClick={() => setMobileMenuOpen(true)}
        className="lg:hidden text-white bg-gray-800 p-2 rounded-md"
        aria-label="Open Menu"
        whileHover={{ scale: 1.13 }}
        whileTap={{ scale: 0.97 }}
      >
        <Menu className="w-6 h-6" />
      </motion.button>

      {/* Overlay (Backdrop) - only on small screens */}
      {mobileMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-[2px] z-40 block lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        ></motion.div>
      )}

      {/* Sliding Mobile Menu - only on small screens */}
      <motion.div
        className="fixed top-0 right-0 h-full w-64 rounded-tl-xl rounded-bl-xl bg-neutral-900/30 backdrop-blur-md shadow-lg z-50  lg:hidden flex flex-col"
        initial={{ x: "100%" }}
        animate={{ x: mobileMenuOpen ? 0 : "100%" }}
        transition={{
          duration: 0.35,
          ease: "easeInOut",
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
        style={{ willChange: "transform" }}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700 z-50">
          <h2 className="text-white text-lg font-medium">Menu</h2>
          <motion.button
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-400 hover:text-white"
            aria-label="Close Menu"
            whileHover={{ scale: 1.13 }}
            whileTap={{ scale: 0.97 }}
          >
            <X className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Navigation Links */}
        <nav className="p-6">
          <ul className="space-y-4">
            {navItems.map((item, idx) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * idx }}
              >
                <motion.button
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
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {item.label}
                </motion.button>
              </motion.li>
            ))}
          </ul>
        </nav>
        {/* Social Links - Always Stays at Bottom */}
        <motion.section
          className="w-full space-y-2 p-6 mt-4 mb-2 absolute bottom-0 left-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h3 className="text-white text-sm uppercase tracking-wider mb-3">
            Connect
          </h3>
          <div className="flex space-x-4">
            {[
              {
                label: "LinkedIn",
                url: "https://linkedin.com/in/aakash-rajbhar",
                icon: <SiLinkedin />,
              },
              {
                label: "GitHub",
                url: "https://github.com/aakash-rajbhar",
                icon: <SiGithub />,
              },
              {
                label: "X",
                url: "https://x.com/aakashrajbhar25",
                icon: <SiX />,
              },
            ].map(({ label, url, icon }) => (
              <motion.a
                key={label}
                href={url}
                target="_blank"
                title={label}
                className="text-neutral-400 hover:text-cyan-600 transition duration-200"
                aria-label={`${label} Profile`}
                whileHover={{ scale: 1.13 }}
                whileTap={{ scale: 0.97 }}
              >
                {icon}
              </motion.a>
            ))}
          </div>
          <motion.a
            href="mailto:akash.kumarajbhar@gmail.com"
            target="_blank"
            className="text-neutral-400 hover:text-cyan-600 transition block text-sm"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.99 }}
          >
            akash.kumarajbhar@gmail.com
          </motion.a>
        </motion.section>
      </motion.div>
    </motion.header>
  );
};

export default SmallNav;
