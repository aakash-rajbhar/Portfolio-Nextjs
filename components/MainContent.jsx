import React from 'react';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="mb-20">
      <h2 className="text-white text-3xl font-medium mb-6">About Me</h2>
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed">
          I'm a design-focused software engineer with a passion for creating
          elegant, user-centered digital experiences. With 5+ years of
          experience building web and mobile applications, I combine technical
          expertise with an eye for detail.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Currently working as a Senior Frontend Developer at{' '}
          <span className="text-white font-medium">TechVision</span>, where I
          lead development on our flagship product serving over 100,000 monthly
          users.
        </p>
        <p className="text-gray-300 leading-relaxed">
          When I'm not coding, you'll find me making tech videos for my YouTube
          channel, exploring game development with my indie studio Hyperapta, or
          hiking the mountains near my home in Colorado.
        </p>
      </div>

      <div className="mt-8 flex space-x-4">
        <a
          href="#"
          className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition"
        >
          Download Resume
        </a>
        <a
          href="#contact"
          className="bg-transparent text-white border border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        'React',
        'Vue.js',
        'Next.js',
        'Tailwind CSS',
        'JavaScript/TypeScript',
        'HTML/CSS',
      ],
    },
    {
      category: 'Backend',
      skills: [
        'Node.js',
        'Express',
        'Python',
        'Django',
        'REST APIs',
        'GraphQL',
      ],
    },
    {
      category: 'Tools & Others',
      skills: ['Git/GitHub', 'Docker', 'AWS', 'CI/CD', 'Figma', 'Unity'],
    },
  ];

  return (
    <section className="mb-20">
      <h2 className="text-white text-3xl font-medium mb-6">Skills</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-gray-900 bg-opacity-50 p-6 rounded-lg">
            <h3 className="text-white text-xl font-medium mb-4">
              {category.category}
            </h3>
            <ul className="space-y-2">
              {category.skills.map((skill, idx) => (
                <li key={idx} className="text-gray-300 flex items-center">
                  <span className="h-1.5 w-1.5 bg-indigo-500 rounded-full mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: 'StreamVault',
      description:
        'A video content management platform with integrated analytics and monetization tools for creators.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      image: '/api/placeholder/500/300',
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'Hyperapta RPG',
      description:
        'An indie role-playing game featuring procedurally generated worlds and a unique combat system.',
      technologies: ['Unity', 'C#', 'Blender', 'FMOD'],
      image: '/api/placeholder/500/300',
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'DevNotes',
      description:
        'An open-source note-taking app specifically designed for developers with code syntax highlighting and GitHub integration.',
      technologies: ['Vue.js', 'Firebase', 'Electron'],
      image: '/api/placeholder/500/300',
      githubUrl: '#',
      liveUrl: '#',
    },
  ];

  return (
    <section className="mb-20">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-white text-3xl font-medium">Featured Projects</h2>
        <a
          href="#all-projects"
          className="text-indigo-400 flex items-center hover:text-indigo-300 transition"
        >
          View All
          <ArrowUpRight className="ml-1 h-4 w-4" />
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 bg-opacity-50 rounded-lg overflow-hidden"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-6">
              <h3 className="text-white text-xl font-medium mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-800 text-gray-300 px-3 py-1 rounded-md text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <a
                  href={project.githubUrl}
                  className="text-gray-300 hover:text-white flex items-center transition"
                >
                  <Github className="h-5 w-5 mr-1" />
                  Code
                </a>
                <a
                  href={project.liveUrl}
                  className="text-gray-300 hover:text-white flex items-center transition"
                >
                  <ExternalLink className="h-5 w-5 mr-1" />
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

const MainContent = () => {
  return (
    <div className="bg-black text-gray-400 min-h-screen p-8 lg:p-16 max-w-5xl mx-auto overflow-y-scroll">
      <AboutSection />
    </div>
  );
};

export default MainContent;
