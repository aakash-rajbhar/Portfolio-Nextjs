import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { ProjectCards } from "./ui/ProjectCards";

const ProjectsSection = () => {
  const projects = [
    {
      title: "SecureKeep: Password Manager",
      description:
        "Built a secure full-stack password manager with AES-256 encryption, JWT auth, search, and CSV export.",
      technologies: [
        "Next JS",
        "Tailwind CSS",
        "MongoDB",
        "Node.js",
        "Crypto",
        "JWT",
      ],
      image: "/images/dashboard-preview.webp",
      githubUrl:
        "https://github.com/aakash-rajbhar/SecureKeep-Password-Manager.git",
      liveUrl: "https://securekeep.vercel.app/",
    },

    {
      title: "Price Lytic: Price Tracker App",
      description:
        "A price tracker app that allows users to track the price of products on e-commerce websites. Built using Next JS, Tailwind CSS, and BrightData.",
      technologies: ["Next JS", "Tailwind Css", "BrightData"],
      image: "/images/price-tracker.webp",
      githubUrl: "#",
      liveUrl: "https://price-lytic.vercel.app/",
    },
    {
      title: "Storely - Cloud Storage App",
      description:
        "A cloud storage app that allows users to upload, download, and manage files. Built using Next JS, Tailwind CSS, and Appwrite.",
      technologies: ["Next JS", "Tailwind Css", "Appwrite"],
      image: "/images/project5.webp",
      githubUrl: "#",
      liveUrl: "https://storely-web.vercel.app/",
    },
    {
      title: "Online Code Editor (IDE) ",
      description:
        "A fully functional code editor with a live preview, built using React, Tailwind CSS, and Monaco Editor.",
      technologies: ["React", "Tailwind Css", "Monaco Editor", "Chakra UI"],
      image: "/images/project2.webp",
      githubUrl: "#",
      liveUrl: "https://my-online-code-editor.vercel.app/",
    },
    {
      title: "Recipe Website - YumBites",
      description:
        "A recipe website with search, and filtering features, built using React.js and Tailwind CSS.",
      technologies: ["React", "Tailwind Css"],
      image: "/images/project1.webp",
      githubUrl: "#",
      liveUrl: "https://aakash-rajbhar.github.io/Recipe-Website/",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="mb-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Header */}
      <motion.div
        className="flex justify-between items-center mb-8"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h2 className="text-white text-4xl font-medium">Projects</h2>
      </motion.div>

      {/* Project Cards Grid */}

      <ProjectCards projects={projects} />
    </motion.section>
  );
};

export default ProjectsSection;
