import { FcGraduationCap } from 'react-icons/fc';
import { FaSchool } from 'react-icons/fa';

const AboutSection = () => (
  <section id="about">
    <h2 className="text-white text-3xl font-medium mb-6">About Me</h2>
    <div className="space-y-4">
      <p className="text-gray-300 leading-relaxed">
        Design focused Full-Stack Web Developer from India specializing in the
        MERN stack and Next.js. With a strong foundation in modern web
        technologies, I focus on building high-performance, scalable, and
        user-friendly applications.
      </p>
      <p className="text-gray-300 leading-relaxed">
        Currently working as a Technical Head at E-Cell ADGIPS, New Delhi. Where
        I led event management and technical teams to organize hackathons,
        workshops, and tech talks. I also mentor students in web and app
        development.
      </p>
    </div>

    {/* Education Section */}
    <div className="mt-12">
      <h3 className="text-white text-2xl font-medium mb-4">Education</h3>
      <div className="space-y-4">
        <div className="bg-neutral-800 p-4 rounded-lg shadow-md">
          <h4 className="text-white text-lg font-semibold flex gap-2 items-center">
            <FcGraduationCap />
            Bachelor of Technology in Information Technology
          </h4>
          <p className="text-gray-400">
            Guru Gobind Singh Indraprastha University - Delhi, India
          </p>
          <p className="text-gray-500 text-sm">2022 - 2026</p>
        </div>

        <div className="bg-neutral-800 p-4 rounded-lg shadow-md">
          <h4 className="text-white text-lg font-semibold flex gap-2 items-center">
            <FaSchool />
            Higher Secondary Education [PCM]
          </h4>
          <p className="text-gray-400">
            Govt. Boys Senior Secondary School No.2 Kalkaji - Delhi, India
          </p>
          <p className="text-gray-500 text-sm">2019 - 2021</p>
        </div>
      </div>
    </div>

    <div className="mt-8 flex space-x-4">
      <a
        href="/resume.pdf"
        download="resume.pdf"
        className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition"
      >
        Download Resume
      </a>
    </div>
  </section>
);

export default AboutSection;
