import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";

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
      className="mb-16"
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
      <div className="grid gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-neutral-900 bg-opacity-50 backdrop-blur-md border border-neutral-800 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 8px 32px 0 rgba(0,0,0,0.25)",
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
          >
            {/* Project Image */}
            <motion.div className="relative group" whileHover={{ scale: 1.02 }}>
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-all" />
            </motion.div>

            {/* Project Info */}
            <div className="p-6">
              <motion.h3 className="text-white text-2xl font-semibold mb-2">
                {project.title}
              </motion.h3>
              <motion.p
                className="text-neutral-300 mb-4 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {project.description}
              </motion.p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.technologies.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    className="bg-zinc-500 bg-opacity-20 text-zinc-400 text-xs font-medium px-3 py-1 rounded-lg border border-zinc-500/50 shadow-sm transition-all duration-300 hover:bg-indigo-500 hover:text-white"
                    whileHover={{ scale: 1.08 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex space-x-4">
                <motion.a
                  href={project.githubUrl}
                  className="text-neutral-300 hover:text-white flex items-center gap-1 transition"
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Github className="h-5 w-5" />
                  Code
                </motion.a>
                <motion.a
                  href={project.liveUrl}
                  className="text-neutral-300 hover:text-white flex items-center gap-1 transition"
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <ExternalLink className="h-5 w-5" />
                  Live Demo
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
