import React from 'react';
import Button from './Button'; // Import Button component

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-between p-4 sm:p-8 md:p-12 pt-24 bg-[#DFEAF6]"> {/* Adjusted padding for all screen sizes */}
      <div className="container mx-auto flex flex-col items-center justify-center max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-4xl flex-grow text-center"> {/* Adjusted max-width for responsiveness */}
        {/* Text content, centered */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 sm:mb-6 text-gray-900"> {/* Adjusted font sizes for responsiveness */}
          Software & Python <br /> Development
        </h2>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 max-w-sm sm:max-w-md mx-auto"> {/* Adjusted font sizes and max-width for responsiveness */}
          Crafting responsive web experiences and leveraging AI/ML to build scalable solutions. Eager to contribute my Python, JavaScript, and web framework expertise.
        </p>
      </div>

      {/* Social Media Buttons at the bottom */}
      <div className="w-full text-center py-3 sm:py-4 border-t border-gray-300 flex justify-center space-x-4">
        <Button href="https://www.linkedin.com/in/ayushhhhhh/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.381 1.11-2.5 2.48-2.5s2.48 1.119 2.48 2.5zM.02 24h4.97V8H.02V24zM9.82 8h-4.97v16h4.97V8zm-2.48 0c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5c0-1.381-1.119-2.5-2.5-2.5zM24 24h-4.97v-8.39c0-1.98-.04-4.51-2.75-4.51-2.75 0-3.17 2.15-3.17 4.37V24H8.13V8h4.74v2.16h.07c.66-1.26 2.27-2.51 4.69-2.51 5.03 0 5.96 3.32 5.96 7.68V24z"/>
          </svg>
          <span className="hidden sm:inline">LinkedIn</span>
        </Button>
        <Button href="https://github.com/ayush1k" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.82-.26.82-.577v-2.22c-3.338.72-4.042-1.61-4.042-1.61-.546-1.387-1.332-1.756-1.332-1.756-1.087-.745.082-.73.082-.73 1.205.085 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.492.998.108-.775.418-1.305.762-1.605-2.665-.3-5.464-1.332-5.464-5.93 0-1.31.465-2.38 1.235-3.22-.12-.3-.53-1.52.11-3.175 0 0 1-.32 3.3-.12 1.05-.29 2.15-.435 3.25-.435 1.1 0 2.2.145 3.25.435 2.3-2 3.3-.12 3.3-.12.64 1.65.23 2.875.12 3.175.765.84 1.235 1.91 1.235 3.22 0 4.61-2.8 5.62-5.475 5.92.43.37.82 1.1.82 2.22v3.29c0 .318.22.69.82.577C20.562 21.8 24 17.302 24 12c0-6.627-5.373-12-12-12z" clipRule="evenodd" />
          </svg>
          <span className="hidden sm:inline">GitHub</span>
        </Button>
        <Button href="mailto:ayushkumar47834@gmail.com" className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
          </svg>
          <span className="hidden sm:inline">Email</span>
        </Button>
        <Button href="https://x.com/http_ayush" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.901 1.153h3.68l-8.042 9.167L24 22.846h-7.406l-5.693-6.422L6.157 22.846H.338l8.462-9.67L0 1.154h7.521l4.84 5.814L18.901 1.153zm-1.051 19.492h2.2L5.207 3.2H3l14.643 17.445z"/>
          </svg>
          <span className="hidden sm:inline">X</span>
        </Button>
        <Button href="https://instagram.com/http_ayush" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.148 3.228-1.667 4.771-4.919 4.919-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.646-.07-4.85s.012-3.584.07-4.85c.148-3.228 1.667-4.771 4.919-4.919 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072C2.79 1.018 1.1 2.698.964 5.013.906 6.293.894 6.701.894 9.96s.014 3.667.072 4.947c.136 2.315 1.816 4 4.131 4.131 1.28.058 1.688.07 4.947.07s3.667-.014 4.947-.072c2.315-.136 4-1.816 4.131-4.131.058-1.28.07-1.688.07-4.947s-.014-3.667-.072-4.947c-.136-2.315-1.816-4-4.131-4.131C15.259.018 14.851 0 11.592 0h.408zM12 5.837a6.163 6.163 0 100 12.326 6.163 6.163 0 000-12.326zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/>
          </svg>
          <span className="hidden sm:inline">Instagram</span>
        </Button>
      </div>
    </section>
  );
};

export default Home;
