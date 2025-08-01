import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Skills = () => {
  const { theme } = useContext(ThemeContext);
  const sectionClasses = theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-[#DFEAF6] text-gray-800';
  const badgeClasses = theme === 'dark'
    ? 'bg-gray-700 text-gray-100'
    : 'bg-[#D1D9E6] text-[#34495E]';
  const badgeCircleClasses = theme === 'dark' ? 'bg-blue-400' : 'bg-blue-500';

  // Define your tech stack with emojis to match the image's style
  const techStack = [
    { name: 'Python', icon: '🐍' },
    { name: 'JavaScript', icon: '💻' },
    { name: 'HTML', icon: '📄' },
    { name: 'CSS', icon: '🎨' },
    { name: 'SQL', icon: '📊' },
    { name: 'C', icon: '⚙️' },
    { name: 'OOPs', icon: '🧩' },
    { name: 'OS', icon: '🖥️' },
    { name: 'Computer Networking', icon: '🔗' },
    { name: 'Generative AI', icon: '🧠' },
    { name: 'Wordpress', icon: '🌐' },
    { name: 'DBMS', icon: '🗄️' },
    { name: 'React.js', icon: '⚛️' },
    { name: 'Node.js', icon: '🌳' },
    { name: 'Express.js', icon: '🚀' },
    { name: 'Tailwind CSS', icon: '💨' },
    { name: 'Matplotlib', icon: '📈' },
    { name: 'Tkinter', icon: '🖼️' },
    { name: 'Git', icon: '🌿' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'VS Code', icon: '📝' },
    { name: 'Netlify', icon: '☁️' },
    { name: 'Jupyter Notebook', icon: '📓' },
    { name: 'Software Engineering', icon: '🛠️' },
    { name: 'Supabase', icon: '💧' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'Transformers', icon: '🔄' },
    { name: 'Machine Learning', icon: '🤖' },
    { name: 'Deep Learning', icon: '💡' },
    { name: 'Artificial Intelligence', icon: '✨' },
    { name: 'Scikit-learn', icon: '🔬' },
    { name: 'Linear Regression', icon: '📉' },
    { name: 'Chatbot Development', icon: '💬' },
    { name: 'Detr', icon: '🎯' },
    { name: 'SVM', icon: '📊' },
    { name: 'CNN', icon: '🖼️' },
  ];
  return (
    <section id="skills" className={`min-h-screen flex items-center justify-center p-4 sm:p-8 pt-24 ${sectionClasses}`}>
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-center justify-center max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl text-center md:text-left">
        {/* Tech Stack Heading on the left */}
        <div className="md:w-1/3 mb-8 md:mb-0">
          <h2 className="text-4xl sm:text-5xl font-bold md:text-left">Tech Stack</h2>
        </div>

        {/* Skills Grid on the right */}
        <div className="md:w-2/3">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-2 sm:gap-x-3 sm:gap-y-3 mb-10 mx-auto">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className={`flex items-center justify-between space-x-2 px-3 py-2 rounded-xl shadow-md text-xs sm:text-sm font-medium min-w-[100px] min-h-[40px] ${badgeClasses}`}
              >
                <div className="flex items-center space-x-2">
                  <div className={`h-4 w-4 flex items-center justify-center ${theme === 'dark' ? 'text-gray-100' : 'text-[#34495E]'}`}>
                    {tech.icon}
                  </div>
                  <span className="flex-grow text-left">{tech.name}</span>
                </div>
                {/* Removed the blue dot */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
