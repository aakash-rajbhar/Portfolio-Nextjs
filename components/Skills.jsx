import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDjango,
  SiGraphql,
  SiDocker,
  SiFigma,
  SiUnity,
  SiGithub,
  SiGit,
  SiMongodb,
  SiMysql,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiCanva,
} from "react-icons/si";

import { RiJavaFill, RiSeoLine } from "react-icons/ri";
import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: <SiReact className="text-sky-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
      },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-blue-400" />,
      },
      { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <SiCss3 className="text-blue-400" /> },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "Express", icon: <SiExpress className="text-neutral-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
      { name: "GraphQL", icon: <SiGraphql className="text-pink-400" /> },
      { name: "REST APIs", icon: "🔗" }, // Fallback
    ],
  },
  {
    category: "Programming Languages",
    skills: [
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
      },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Python", icon: <SiPython className="text-blue-500" /> },
      { name: "Java", icon: <RiJavaFill className="text-white" /> },
    ],
  },
  {
    category: "Design & UX",
    skills: [
      { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
      {
        name: "Adobe Illustrator",
        icon: <SiAdobeillustrator className="text-orange-800" />,
      }, // Fallback
      {
        name: "Adobe Photoshop",
        icon: <SiAdobephotoshop className="text-blue-900" />,
      },
      {
        name: "Canva",
        icon: <SiCanva className="text-blue-500" />,
      },
    ],
  },

  {
    category: "Tools & Others",
    skills: [
      { name: "Git", icon: <SiGit className="text-orange-500" /> },
      { name: "GitHub", icon: <SiGithub className="text-white" /> },
      { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
      { name: "SEO Practices", icon: <RiSeoLine className="text-blue-400" /> },
    ],
  },
];

const SkillsSection = () => {
  return (
    <motion.section
      id="skills"
      className="mb-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <motion.h2
        className="text-white text-4xl font-medium mb-8"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Skills
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="bg-neutral-900 bg-opacity-60 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-neutral-800 hover:border-zinc-500 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.025,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
          >
            <motion.h3 className="text-white text-2xl font-semibold mb-4">
              {category.category}
            </motion.h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, idx) => (
                <motion.span
                  key={idx}
                  className="flex items-center gap-2 bg-zinc-600 bg-opacity-20 text-zinc-400 text-sm font-medium px-3 py-1.5 rounded-lg border border-zinc-500/50 shadow-sm transition-all duration-300 hover:bg-zinc-500 hover:text-white"
                  whileHover={{ scale: 1.08 }}
                >
                  {skill.icon ? skill.icon : "🔗"} {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default SkillsSection;
