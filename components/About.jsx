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
      <div className="relative flex">
        {/* Timeline with shooting star */}
        <div className="relative flex flex-col items-center mr-6 min-h-[200px]">
          {/* Timeline line */}
          <motion.div
            className="w-1 bg-gradient-to-b from-cyan-500 to-transparent flex-1"
            style={{ minHeight: "200px" }}
            initial={{ height: 0 }}
            whileInView={{ height: "200px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          />
          {/* Breakpoint for Experience Card 1 */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_8px_4px_rgba(34,211,238,0.5)] border-2 border-white z-30" />
          {/* Breakpoint for Experience Card 2 */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[52%] w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_8px_4px_rgba(34,211,238,0.5)] border-2 border-white z-30" />
          {/* Shooting star */}
          {/* <motion.div
            className="absolute -left-[2.5px]  -top-1 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_6px_2px_rgba(34,211,238,0.6)] z-20"
            // animate={{ y: [200, 0], opacity: 1 }}
            // transition={{
            //   duration: 2,
            //   ease: "easeInOut",
            //   repeat: Infinity,
            //   repeatType: "loop",
            // }}
            style={{ pointerEvents: "none" }}
          /> */}
        </div>
        <div className="flex flex-col gap-6 flex-1">
          {/* Experience Card 1 */}
          <motion.div
            className="bg-neutral-800 p-4 rounded-lg shadow-md flex-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
              <h4 className="text-white text-lg font-semibold">
                Web Developer Intern{" "}
                <span className="text-indigo-400">| Razorpod</span>
              </h4>
              <span className="text-gray-400 text-sm mt-1 sm:mt-0">
                On-site, Gurugram | July 2025 – Present
              </span>
            </div>
            <ul className="space-y-1">
              <li className="flex items-start gap-2 text-gray-300">
                <span className="text-cyan-400 mt-1">&#10003;</span>
                <span>
                  Enhanced overall website performance score by 30% through code
                  refactoring, image optimization, and industry best practices.
                </span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <span className="text-cyan-400 mt-1">&#10003;</span>
                <span>
                  Developed and maintained responsive web pages using Next.js,
                  ensuring cross-device compatibility and improved
                  accessibility.
                </span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <span className="text-cyan-400 mt-1">&#10003;</span>
                <span>
                  Designed and tested cross-client HTML email templates,
                  boosting engagement for marketing campaigns.
                </span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <span className="text-cyan-400 mt-1">&#10003;</span>
                <span>
                  Integrated Strapi CMS to enable dynamic content management,
                  reducing manual updates and improving content delivery
                  efficiency.
                </span>
              </li>
            </ul>
          </motion.div>
          {/* Experience Card 2 */}
          <motion.div
            className="bg-neutral-800 p-4 rounded-lg shadow-md flex-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, delay: 0.8 }}
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
              <h4 className="text-white text-lg font-semibold">
                MERN Stack Developer Intern{" "}
                <span className="text-indigo-400">| Grid R&amp;D</span>
              </h4>
              <span className="text-gray-400 text-sm mt-1 sm:mt-0">
                Remote | June 2025 – Present
              </span>
            </div>
            <ul className="space-y-1">
              <li className="flex items-start gap-2 text-gray-300">
                <span className="text-cyan-400 mt-1">&#10003;</span>
                <span>
                  Built and deployed scalable web pages using React.js, ensuring
                  modular and reusable code structures.
                </span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <span className="text-cyan-400 mt-1">&#10003;</span>
                <span>
                  Improved UI/UX design, leading to a more intuitive user
                  experience and smoother navigation.
                </span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <span className="text-cyan-400 mt-1">&#10003;</span>
                <span>
                  Resolved critical bugs and implemented new features, improving
                  overall application stability and functionality.
                </span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <span className="text-cyan-400 mt-1">&#10003;</span>
                <span>
                  Developed and integrated RESTful APIs, streamlining
                  backend-frontend communication and reducing data fetch time.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>

    {/* Education Section */}
    <motion.div
      className="mt-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <motion.h3
        className="text-white text-2xl font-medium mb-4"
        whileHover={{ scale: 1.04 }}
      >
        Education
      </motion.h3>
      <div className="space-y-4">
        <motion.div
          className="bg-neutral-800 p-4 rounded-lg shadow-md"
          whileHover={{ scale: 1.03 }}
        >
          <h4 className="text-white text-lg font-semibold flex gap-2 items-center">
            <FcGraduationCap />
            Bachelor of Technology in Information Technology
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
            Higher Secondary Education [PCM]
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
        download="resume.pdf"
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
