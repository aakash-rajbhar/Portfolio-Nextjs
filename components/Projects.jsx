import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const ProjectsSection = () => {
  const projects = [
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
    <section id="projects" className="mb-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-white text-4xl font-medium">Projects</h2>
      </div>

      {/* Project Cards Grid */}
      <div className="grid  gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-neutral-900 bg-opacity-50 backdrop-blur-md border border-neutral-800 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden"
          >
            {/* Project Image */}
            <div className="relative group">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-all" />
            </div>

            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-white text-2xl font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-neutral-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-zinc-500 bg-opacity-20 text-zinc-400 text-xs font-medium px-3 py-1 rounded-lg border border-zinc-500/50 shadow-sm transition-all duration-300 hover:bg-indigo-500 hover:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex space-x-4">
                <a
                  href={project.githubUrl}
                  className="text-neutral-300 hover:text-white flex items-center gap-1 transition"
                >
                  <Github className="h-5 w-5" />
                  Code
                </a>
                <a
                  href={project.liveUrl}
                  className="text-neutral-300 hover:text-white flex items-center gap-1 transition"
                >
                  <ExternalLink className="h-5 w-5" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
