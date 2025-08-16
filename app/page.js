"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import AboutSection from "@/components/About";
import SkillsSection from "@/components/Skills";
import ProjectsSection from "@/components/Projects";
import ContactSection from "@/components/Contact";
import SmallNav from "@/components/SmallNav";
import MiscellaneousSection from "@/components/Miscellaneous";

export function reportWebVitals(metric) {
  console.log(metric);
}

const App = () => {
  const [activeSection, setActiveSection] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("activeSection") || "about";
    }
    return "about";
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Persist activeSection to localStorage
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("activeSection", activeSection);
    }
  }, [activeSection]);

  const renderActiveSection = () => {
    switch (activeSection) {
      case "about":
        return <AboutSection />;
      case "skills":
        return <SkillsSection />;
      case "projects":
        return <ProjectsSection />;
      case "miscellaneous":
        return <MiscellaneousSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="bg-neutral-950 h-screen overflow-hidden">
      <div className="max-w-5xl mx-auto flex">
        {/* Sidebar - Hidden on Small Screens */}
        <div className="hidden md:block w-64 text-white h-screen fixed">
          <Sidebar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </div>
        <div className="block md:hidden">
          <SmallNav
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </div>

        {/* Scrollable Main Content */}
        <main className="flex-1 md:ml-64 text-gray-400 h-screen overflow-y-auto mt-20 md:mt-0 p-8 lg:p-16">
          {renderActiveSection()}
        </main>
      </div>
    </div>
  );
};

export default App;
