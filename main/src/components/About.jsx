import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const About = () => {
  const { theme } = useContext(ThemeContext);
  const sectionClasses = theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-[#DFEAF6] text-gray-800';

  return (
    <section id="about" className={`min-h-screen flex items-center justify-center p-4 sm:p-8 pt-24 ${sectionClasses}`}>
      <div className="max-w-full sm:max-w-2xl md:max-w-4xl mx-auto p-6 sm:p-8 md:p-10 rounded-lg bg-transparent">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center">About Me</h2>
        <p className="text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">
          Hello! I'm [Your Name], a dedicated software developer with a strong passion for creating
          innovative and user-friendly web experiences. I have [X years] of experience working with
          various technologies, constantly learning and adapting to new challenges.
        </p>
        <p className="text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">
          My journey in software development began with a fascination for how technology can solve
          real-world problems and improve daily lives. I enjoy turning complex ideas into
          elegant and efficient solutions.
        </p>
        <p className="text-base sm:text-lg leading-relaxed">
          In my free time, I enjoy [mention hobbies, e.g., exploring new tech, hiking, reading].
          I'm always open to new opportunities and collaborations. Feel free to connect!
        </p>
      </div>
    </section>
  );
};

export default About;
