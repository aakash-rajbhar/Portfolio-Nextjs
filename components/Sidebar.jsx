import Image from 'next/image';
import { SiGithub, SiLinkedin, SiX } from 'react-icons/si';

const Sidebar = ({ activeSection, setActiveSection, closeMenu }) => {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'miscellaneous', label: 'Miscellaneous' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="text-neutral-400 w-64 h-screen p-8 flex flex-col shadow-lg ">
      {/* Profile Section */}
      <section className="flex flex-col items-start mb-8">
        <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-neutral-700">
          <Image
            src="/images/profile-pic.png"
            alt="Profile"
            width={60}
            height={60}
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-white text-xl font-bold">Aakash Rajbhar</h1>
        <p className="text-neutral-400">Full-Stack Developer</p>
      </section>

      {/* Navigation Links (Takes up available space) */}
      <nav className="mb-8 flex-1">
        <ul className="space-y-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => {
                  setActiveSection(item.id);
                  closeMenu?.(); // Closes mobile menu if function is passed
                }}
                className={`transition w-full text-left p-2 rounded-md uppercase ${
                  activeSection === item.id
                    ? 'text-white font-medium bg-neutral-800'
                    : 'hover:text-neutral-300 hover:bg-neutral-800'
                }`}
                aria-label={`Go to ${item.label} section`}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social Links - Always Stays at Bottom */}
      <section className="mt-auto space-y-2">
        <h3 className="text-white text-sm uppercase tracking-wider mb-3">
          Connect
        </h3>
        <div className="flex space-x-4">
          {[
            {
              label: 'LinkedIn',
              url: 'https://linkedin.com/in/aakash-rajbhar',
              icon: <SiLinkedin />,
            },
            {
              label: 'GitHub',
              url: 'https://github.com/aakash-rajbhar',
              icon: <SiGithub />,
            },
            {
              label: 'X',
              url: 'https://x.com/aakashrajbhar25',
              icon: <SiX />,
            },
          ].map(({ label, url, icon }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              title={label}
              className="text-neutral-400 hover:text-white transition"
              aria-label={`${label} Profile`}
            >
              {icon}
            </a>
          ))}
        </div>
        <a
          href="mailto:akash.kumarajbhar@gmail.com"
          target="_blank"
          className="text-neutral-400 hover:text-white transition block text-sm"
        >
          akash.kumarajbhar@gmail.com
        </a>
      </section>
    </div>
  );
};

export default Sidebar;
