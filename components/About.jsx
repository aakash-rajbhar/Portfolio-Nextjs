import { motion } from "framer-motion";
import { FcGraduationCap } from "react-icons/fc";
import { FaSchool } from "react-icons/fa";

const AboutSection = () => (
  <motion.section
    id="about"
    className="mb-12 md:mb-0"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    <motion.h2
      className="text-white text-3xl font-medium mb-6"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      About Me
    </motion.h2>
    <motion.div
      className="space-y-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.7 }}
    >
      <p className="text-gray-300 leading-relaxed">
        I’m a design-focused Full-Stack Web Developer specializing in the MERN
        stack and Next.js. I love crafting scalable, high-performance, and
        user-friendly applications with clean code and seamless UI/UX.
        Passionate about building impactful digital experiences, I continuously
        explore modern web technologies to turn ideas into reality.
      </p>
    </motion.div>

    {/* Experience Section */}
    <motion.div
      className="mt-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.15 }}
    >
      <motion.h3 className="text-white text-2xl font-medium mb-4">
        Experience
      </motion.h3>
      {/* Experience Data Array */}
      {(() => {
        const experiences = [
          {
            title: "Web Developer Intern",
            company: "Razorpod",
            location: "On-site, Gurugram",
            date: "July 2025 – Present",
            points: [
              "Enhanced overall website performance score by 30% through code refactoring, image optimization, and industry best practices.",
              "Developed and maintained responsive web pages using Next.js, ensuring cross-device compatibility and improved accessibility.",
              "Designed and tested cross-client HTML email templates, boosting engagement for marketing campaigns.",
              "Integrated Strapi CMS to enable dynamic content management, reducing manual updates and improving content delivery efficiency.",
            ],
          },
          {
            title: "MERN Stack Developer Intern",
            company: "Grid R&D",
            location: "Remote",
            date: "June 2025 – Present",
            points: [
              "Built and deployed scalable web pages using React.js, ensuring modular and reusable code structures.",
              "Improved UI/UX design, leading to a more intuitive user experience and smoother navigation.",
              "Resolved critical bugs and implemented new features, improving overall application stability and functionality.",
              "Developed and integrated RESTful APIs, streamlining backend-frontend communication and reducing data fetch time.",
            ],
          },
        ];

        // Timeline height and star animation
        const timelineHeight = 200 + (experiences.length - 2) * 100;
        // Calculate breakpoints as a percentage of the timeline
        const breakpoints = experiences.map((_, i) =>
          i === 0
            ? 0
            : i === experiences.length - 1
            ? 100
            : (i / (experiences.length - 1)) * 100
        );

        return (
          <div className="relative flex">
            {/* Timeline with shooting star */}
            <div
              className="relative flex flex-col items-center mr-6"
              style={{ minHeight: timelineHeight }}
            >
              {/* Timeline line */}
              <motion.div
                className="w-1 bg-gradient-to-b from-cyan-500 to-transparent flex-1"
                style={{ minHeight: timelineHeight }}
                initial={{ height: 0 }}
                whileInView={{ height: timelineHeight }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
              />
              {/* Dynamic Breakpoints */}
              {breakpoints.map((percent, idx) => (
                <div
                  key={idx}
                  className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_4px_rgba(34,211,238,0.5)] border-2 border-white z-30"
                  style={{
                    top: `calc(${percent}%)`,
                    transform: "translate(-50%, -50%)",
                  }}
                />
              ))}
              {/* Shooting star */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_6px_2px_rgba(34,211,238,0.6)] z-20"
                animate={{
                  top: ["100%", "0%"],
                  opacity: [0, 1],
                }}
                transition={{
                  duration: 2.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                style={{ pointerEvents: "none" }}
              />
            </div>
            <div className="flex flex-col gap-6 flex-1">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={exp.title + exp.company}
                  className="bg-neutral-800 p-4 rounded-lg shadow-md flex-1"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                    <h4 className="text-white text-lg font-semibold">
                      {exp.title}{" "}
                      <span className="text-indigo-400">| {exp.company}</span>
                    </h4>
                    <span className="text-gray-400 text-[10px] mt-1 sm:mt-0">
                      {exp.location} | {exp.date}
                    </span>
                  </div>
                  <ul className="space-y-1">
                    {exp.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-300"
                      >
                        <span className="text-cyan-400 mt-1">&#10003;</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        );
      })()}
    </motion.div>

    {/* Education Section */}
    <motion.div
      className="mt-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <motion.h3 className="text-white text-2xl font-medium mb-4">
        Education
      </motion.h3>
      <div className="space-y-4">
        <motion.div
          className="bg-neutral-800 p-4 rounded-lg shadow-md"
          whileHover={{ scale: 1.03 }}
        >
          <h4 className="text-white text-lg font-semibold flex gap-2 items-center">
            <FcGraduationCap />
            Bachelor of Technology in Information Technology - [9.1 CGPA]
          </h4>
          <p className="text-gray-400">
            Guru Gobind Singh Indraprastha University - Delhi, India
          </p>
          <p className="text-gray-500 text-sm">2022 - 2026</p>
        </motion.div>
        <motion.div
          className="bg-neutral-800 p-4 rounded-lg shadow-md"
          whileHover={{ scale: 1.03 }}
        >
          <h4 className="text-white text-lg font-semibold flex gap-2 items-center">
            <FaSchool />
            Higher Secondary Education [PCM] - [85%]
          </h4>
          <p className="text-gray-400">
            Govt. Boys Senior Secondary School No.2 Kalkaji - Delhi, India
          </p>
          <p className="text-gray-500 text-sm">2019 - 2021</p>
        </motion.div>
      </div>
    </motion.div>

    {/* Download Resume Button */}
    <motion.div
      className="mt-8 mb-20 sm:mb-0 flex space-x-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
      <motion.a
        href="/Aakash_Resume.pdf"
        download="aakash_resume.pdf"
        className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition"
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.97 }}
      >
        Download Resume
      </motion.a>
    </motion.div>
  </motion.section>
);

export default AboutSection;
