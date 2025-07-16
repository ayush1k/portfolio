import React from 'react';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-between p-4 sm:p-8 md:p-12 pt-24 bg-[#DFEAF6]"> {/* Adjusted padding for all screen sizes */}
      <div className="container mx-auto flex flex-col items-center justify-center max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-4xl flex-grow text-center"> {/* Adjusted max-width for responsiveness */}
        {/* Text content, centered */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 sm:mb-6 text-gray-900"> {/* Adjusted font sizes for responsiveness */}
          Web Developer <br /> & Automation Builder
        </h2>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 max-w-sm sm:max-w-md mx-auto"> {/* Adjusted font sizes and max-width for responsiveness */}
          Building stunning websites and smart bots that automate your workflow. Crafting seamless digital experiences — from pixel — perfect frontends to powerful web automations.
        </p>
      </div>

      {/* Email text at the bottom */}
      <div className="w-full text-center py-3 sm:py-4 border-t border-gray-300 text-sm sm:text-base"> {/* Adjusted padding and text size for responsiveness */}
        <p className="text-gray-600">Email: <a href="mailto:ayushkumar47834@gmail.com" className="text-gray-800 hover:underline">ayushkumar47834@gmail.com</a></p>
      </div>
    </section>
  );
};

export default Home;
