import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function ChatbotWidget({ onClick, isChatActive }) {
  const { theme } = useContext(ThemeContext);

  if (isChatActive) return null; // Hide the FAB when already on the chatbot page

  const buttonGradient = theme === 'dark'
    ? 'from-orange-500 to-amber-600 hover:shadow-orange-500/20'
    : 'from-blue-500 to-cyan-500 hover:shadow-blue-500/20';

  return (
    <button
      onClick={onClick}
      className={`fixed bottom-6 right-6 z-50 p-4 rounded-full text-white bg-gradient-to-r ${buttonGradient} shadow-lg cursor-pointer transform hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group focus:outline-none`}
      aria-label="Chat with Ayush's AI Twin"
      title="Chat with Ayush's AI"
    >
      {/* Pulsing Outer Ring */}
      <span className="absolute -inset-1 rounded-full bg-inherit opacity-40 group-hover:animate-ping -z-10" />

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 0 1-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8Z" />
      </svg>
    </button>
  );
}
