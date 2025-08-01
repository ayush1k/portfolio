import React, { useContext } from 'react';
import Button from './Button';
import { ThemeContext } from '../context/ThemeContext';

// Project Card Component
const ProjectCard = ({ project }) => {
  const { theme } = useContext(ThemeContext);
  const cardClasses = theme === 'dark'
    ? 'bg-gray-800 hover:bg-gray-700 text-white'
    : 'bg-white hover:bg-gray-100 text-gray-800';

  const buttonLinkClasses = theme === 'dark'
    ? 'bg-blue-600 hover:bg-blue-700 text-white'
    : 'bg-[#007bff] hover:bg-[#0056b3] text-white';

  const descriptionClasses = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';

  return (
    <div className={`rounded-lg shadow-xl p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 ${cardClasses}`}>
      <div className={`w-full h-48 rounded-md mb-4 flex items-center justify-center text-center text-sm ${theme === 'dark' ? 'bg-gray-600 text-gray-400' : 'bg-gray-300 text-gray-600'}`}>
        {project.title} Image Placeholder
      </div>
      <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
      <p className={`mb-4 ${descriptionClasses}`}>{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies && project.technologies.map((tech, index) => (
          <span key={index} className="bg-blue-600 px-3 py-1 rounded-full text-xs font-medium text-white">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-between">
        {project.liveUrl && (
          <Button href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={buttonLinkClasses}>
            Live Demo
          </Button>
        )}
        {project.githubUrl && (
          <Button href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={buttonLinkClasses}>
            GitHub
          </Button>
        )}
      </div>
    </div>
  );
};

// Projects Section
const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const sectionClasses = theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-[#DFEAF6] text-gray-800';

  // Static project data for now
  const projects = [
    {
      id: 1,
      title: "E-commerce Store",
      description: "A full-stack e-commerce platform with user authentication, product listings, and a shopping cart.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      liveUrl: "#", // Placeholder URL
      githubUrl: "#" // Placeholder URL
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A simple task management application with drag-and-drop functionality and real-time updates.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application fetching real-time weather data from an external API.",
      technologies: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "AI Chatbot",
      description: "A conversational AI chatbot built using natural language processing and machine learning.",
      technologies: ["Python", "TensorFlow", "Flask"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className={`min-h-screen p-4 sm:p-8 pt-24 ${sectionClasses}`}>
      <div className="container mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-10 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.length > 0 ? (
            projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <div className="col-span-full text-center">
              <p className="text-lg mb-4">No projects found. You can add them manually in this component.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
