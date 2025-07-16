import React from 'react';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center p-4 sm:p-8 pt-24 bg-[#DFEAF6] text-gray-800"> {/* Adjusted padding for smaller screens */}
      <div className="max-w-full sm:max-w-2xl md:max-w-4xl mx-auto p-6 sm:p-8 md:p-10 rounded-lg bg-transparent"> {/* Adjusted max-width and padding for responsiveness */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center">About Me</h2> {/* Adjusted font size for responsiveness */}
        <p className="text-base sm:text-lg leading-relaxed mb-3 sm:mb-4"> {/* Adjusted font size and margin for responsiveness */}
          Hello! I'm [Your Name], a dedicated software developer with a strong passion for creating
          innovative and user-friendly web experiences. I have [X years] of experience working with
          various technologies, constantly learning and adapting to new challenges.
        </p>
        <p className="text-base sm:text-lg leading-relaxed mb-3 sm:mb-4"> {/* Adjusted font size and margin for responsiveness */}
          My journey in software development began with a fascination for how technology can solve
          real-world problems and improve daily lives. I enjoy turning complex ideas into
          elegant and efficient solutions.
        </p>
        <p className="text-base sm:text-lg leading-relaxed"> {/* Adjusted font size for responsiveness */}
          In my free time, I enjoy [mention hobbies, e.g., exploring new tech, hiking, reading].
          I'm always open to new opportunities and collaborations. Feel free to connect!
        </p>
        {/* Removed Skills Section */}
      </div>
    </section>
  );
};

export default About;
