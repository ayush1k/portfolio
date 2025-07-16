    import React, { useContext } from 'react';
    import Button from './Button'; // Import the reusable Button component
    import { ThemeContext } from '../context/ThemeContext'; // Import ThemeContext for button styling

    // Project Card Component
    const ProjectCard = ({ project }) => {
      const { theme } = useContext(ThemeContext);
      const cardClasses = theme === 'dark'
        ? 'bg-gray-800 hover:bg-gray-700 text-white'
        : 'bg-white hover:bg-gray-100 text-gray-800'; // Adjusted for light theme

      const buttonLinkClasses = theme === 'dark'
        ? 'bg-blue-600 hover:bg-blue-700 text-white'
        : 'bg-[#007bff] hover:bg-[#0056b3] text-white'; // Consistent button style

      return (
        <div className={`rounded-lg shadow-xl p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 ${cardClasses}`}>
          {/* Using a placeholder image for now, as per previous instructions not to use external images */}
          <div className="w-full h-48 bg-gray-300 rounded-md mb-4 flex items-center justify-center text-gray-600 text-center text-sm">
            {project.title} Image Placeholder
          </div>
          <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-4">{project.description}</p> {/* Text color adjusted for readability */}
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
        <section id="projects" className="min-h-screen p-4 sm:p-8 pt-24 bg-[#DFEAF6] text-gray-800">
          <div className="container mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold mb-10 text-center">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      );
    };

    export default Projects;
    