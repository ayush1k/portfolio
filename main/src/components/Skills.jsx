import React from 'react';

const Skills = () => {
  // Define your tech stack with icons (using simple text for now, could be SVG/Phosphor icons later)
  const techStack = [
    { name: 'HTML', icon: '📄' },
    { name: 'CSS', icon: '🎨' },
    { name: 'Tailwind CSS', icon: '💨' },
    { name: 'JavaScript', icon: '💻' },
    { name: 'TypeScript', icon: '📜' },
    { name: 'React JS', icon: '⚛️' },
    { name: 'Next JS', icon: '➡️' },
    { name: 'Node JS', icon: '🌳' },
    { name: 'Express JS', icon: '🚀' },
    { name: 'Framer Motion', icon: '✨' },
    { name: 'Context API', icon: '🔄' },
    { name: 'Mongo DB', icon: '🍃' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'Appwrite', icon: '✍️' },
    { name: 'Gen AI', icon: '🧠' },
    { name: 'Figma', icon: '📐' },
    { name: 'Notion', icon: '📝' },
    { name: 'Github', icon: '🐙' },
    { name: 'Postman', icon: '📬' },
    { name: 'Hostinger', icon: '🌐' },
  ];

  return (
    <section id="skills" className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 pt-24 bg-[#DFEAF6] text-gray-800">
      <div className="container mx-auto max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-gray-900">Tech Stack</h2>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md text-sm sm:text-base font-medium text-gray-800"
            >
              <span className="text-lg">{tech.icon}</span> {/* Icon */}
              <span>{tech.name}</span> {/* Text */}
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span> {/* Small blue circle */}
            </div>
          ))}
        </div>

        {/* The "20+" box */}
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg max-w-xs sm:max-w-sm mx-auto">
          <p className="text-4xl sm:text-5xl font-extrabold text-blue-700 mb-2">20+</p>
          <p className="text-sm sm:text-base text-gray-600">Tech I Use to Build Magic—Next Yours</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
