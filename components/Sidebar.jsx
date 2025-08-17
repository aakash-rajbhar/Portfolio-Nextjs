import { motion } from "framer-motion";
import Image from "next/image";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

const Sidebar = ({ activeSection, setActiveSection, closeMenu }) => {
  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "miscellaneous", label: "Miscellaneous" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.div
      className="text-neutral-400 w-64 h-screen p-8 flex flex-col shadow-lg"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Profile Section */}
      <motion.section
        className="flex flex-col items-start mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <motion.div
          className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-neutral-700"
          whileHover={{ scale: 1.07 }}
        >
          <Image
            src="/images/profile.webp"
            alt="Profile"
            width={60}
            height={60}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.h2
          className="text-white text-xl font-bold"
          whileHover={{ scale: 1.04 }}
        >
          Aakash Rajbhar
        </motion.h2>
        <p className="text-neutral-400">Full-Stack Developer</p>
      </motion.section>

      {/* Navigation Links (Takes up available space) */}
      <nav className="mb-8 flex-1">
        <ul className="space-y-4">
          {navItems.map((item, idx) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * idx }}
            >
              <motion.button
                onClick={() => {
                  setActiveSection(item.id);
                  closeMenu?.(); // Closes mobile menu if function is passed
                }}
                className={`transition w-full text-left p-2 rounded-md uppercase ${
                  activeSection === item.id
                    ? "text-white font-medium bg-neutral-800"
                    : "hover:text-neutral-300 hover:bg-neutral-800"
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
        className="mt-auto space-y-2"
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
          whileTap={{ scale: 0.97 }}
        >
          akash.kumarajbhar@gmail.com
        </motion.a>
      </motion.section>
    </motion.div>
  );
};

export default Sidebar;
