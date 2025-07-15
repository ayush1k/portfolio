import React from 'react';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center p-8 pt-24 bg-[#e0f2f7]"> {/* Light blue background */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between max-w-6xl">
        {/* Left Content - Updated to center the text and changed content */}
        <div className="lg:w-1/2 text-center mb-10 lg:mb-0">
          <p className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 text-gray-900">
            Ayush Kumar
          </p>
        </div>

      </div>
    </section>
  );
};

export default Home;
