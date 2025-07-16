import React from 'react';

const Skills = () => {
  // Define your tech stack with icons and adjusted colors
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
    <section id="skills" className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 pt-24 bg-[#DFEAF6] text-gray-800">
      <div className="container mx-auto max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-gray-900">Tech Stack</h2>

        {/* Wrapper for all skills in a single row, wrapping */}
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 sm:gap-x-4 sm:gap-y-3 mb-10"> {/* Reduced gaps */}
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex items-center justify-center space-x-1.5 bg-[#D1D9E6] px-3 py-1.5 rounded-full shadow-md text-xs sm:text-sm font-medium text-[#34495E]
                         min-w-[120px] min-h-[40px]" // Reduced min-width and min-height
            >
              <span className="text-base text-[#34495E]">{tech.icon}</span> {/* Reduced icon size slightly */}
              <span className="flex-grow text-center">{tech.name}</span>
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span> {/* Reduced circle size */}
            </div>
          ))}
        </div>

        {/* The "20+" box */}
        
      </div>
    </section>
  );
};

export default Skills;
