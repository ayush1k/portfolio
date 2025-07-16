import React from 'react';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-between p-8 pt-24 bg-[#DFEAF6]"> {/* Light blue background, changed to flex-col and justify-between */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between max-w-6xl flex-grow"> {/* Added flex-grow */}
        {/* Left Content - Updated to center the text and changed content */}
        <div className="lg:w-1/2 text-center mb-10 lg:mb-0">
          <p className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 text-gray-900">
            Ayush Kumar
          </p>
        </div>

        {/* Right Graphic (CSS-only Concentric Circles) - REMOVED */}
        {/* <div className="lg:w-1/2 flex justify-center items-center relative w-64 h-64 md:w-80 md:h-80">
          <div className="absolute w-full h-full rounded-full border-2 border-gray-400 opacity-60"></div>
          <div className="absolute w-5/6 h-5/6 rounded-full border-2 border-blue-400 opacity-70"></div>
          <div className="absolute w-4/6 h-4/6 rounded-full border-2 border-blue-600 opacity-80"></div>
          <div className="absolute w-3/6 h-3/6 rounded-full border-2 border-blue-800 opacity-90"></div>
          <div className="absolute w-2/6 h-2/6 rounded-full border-2 border-gray-900"></div>
        </div> */}
      </div>

      {/* Email text at the bottom */}
      <div className="w-full text-center py-4 border-t border-gray-300">
        <p className="text-gray-600">Email: <a href="mailto:ayushkumar47834@gmail.com" className="text-gray-800 hover:underline">ayushkumar47834@gmail.com</a></p>
      </div>
    </section>
  );
};

export default Home;
