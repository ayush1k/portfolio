import React, { useState, useContext, useEffect, useRef } from 'react';
import { ThemeContext } from '../context/ThemeContext';
const getBackendUrl = () => {
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }

  const { hostname, protocol } = window.location;

  // Handle GitHub Codespaces: e.g., solid-enigma-wrrwgpp4wj3p5v-5173.app.github.dev
  if (hostname.includes('github.dev')) {
    const codespaceUrl = hostname.replace(/-(\d+)\.(.*)/, '-8000.$2');
    return `${protocol}//${codespaceUrl}`;
  }

  // Handle Gitpod: e.g., 5173-ayush1k-portfolio-xyz.gitpod.io
  if (hostname.includes('gitpod.io')) {
    const gitpodUrl = hostname.replace(/^(\d+)-/, '8000-');
    return `${protocol}//${gitpodUrl}`;
  }

  // Fallback to localhost:8000 for standard local development
  return 'http://localhost:8000';
};

export default function ChatbotPage({ onBackToPortfolio }) {
  const { theme } = useContext(ThemeContext);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hi there! I'm Ayush's AI twin. I can tell you about my machine learning projects, work experience, education, or skills. What would you like to know?"
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleSend = async (textToSend) => {
    const text = textToSend || inputVal.trim();
    if (!text) return;

    // Add user message
    const userMsg = { id: Date.now(), sender: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputVal('');

    // Show typing indicator
    setIsTyping(true);

    try {
      const backendUrl = getBackendUrl();
      const response = await fetch(`${backendUrl}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: text,
          top_k: 4
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: 'bot', text: data.answer }
      ]);
    } catch (err) {
      console.error('Chatbot API error:', err);
      setIsTyping(false);
      
      // Detailed user guidance in case the backend is offline
      setMessages((prev) => [
        ...prev,
        { 
          id: Date.now() + 1, 
          sender: 'bot', 
          text: "I couldn't reach my backend server. Please make sure the FastAPI server is running locally on port 8000. \n\nTo start it:\n1. Open a terminal\n2. Navigate to `chatbot/`\n3. Set up and activate your virtual environment: `python3 -m venv .venv && source .venv/bin/activate`\n4. Install requirements: `pip install -r requirements.txt`\n5. Build vectorstore: `python ingest.py`\n6. Start the server: `uvicorn main:app --reload`"
        }
      ]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSend();
  };

  // Preset suggestions
  const SUGGESTIONS = [
    "Tell me about your ML projects",
    "What is your tech stack?",
    "Where did you work recently?",
    "Are you looking for new roles?"
  ];

  // Theme-based styling variables
  const cardBg = theme === 'dark' ? 'bg-[#1a1a18] border-[#2a2a28]' : 'bg-white border-gray-200';
  const textPrimary = theme === 'dark' ? 'text-[#e8e6e1]' : 'text-gray-900';
  const textSecondary = theme === 'dark' ? 'text-[#857f72]' : 'text-gray-600';
  const textMuted = theme === 'dark' ? 'text-[#655f52]' : 'text-gray-400';
  const divider = theme === 'dark' ? 'border-[#2a2a28]' : 'border-gray-200';
  
  const sidebarBg = theme === 'dark' ? 'bg-[#242420]/50' : 'bg-gray-50';
  const chatAreaBg = theme === 'dark' ? 'bg-[#1a1a18]' : 'bg-white';
  
  const botBubble = theme === 'dark'
    ? 'bg-[#242420] border border-[#2a2a28] text-[#e8e6e1] rounded-bl-none'
    : 'bg-gray-100 border border-gray-200 text-gray-800 rounded-bl-none';

  const userBubble = theme === 'dark'
    ? 'bg-orange-500 text-white rounded-br-none'
    : 'bg-blue-600 text-white rounded-br-none';

  const suggestionBtn = theme === 'dark'
    ? 'bg-[#242420] border-[#2a2a28] text-[#c8c4bc] hover:bg-[#2a2a28] hover:text-orange-400'
    : 'bg-white border-gray-200 text-gray-700 hover:bg-blue-50 hover:text-blue-600';

  const inputBg = theme === 'dark'
    ? 'bg-[#242420] border-[#2a2a28] text-white focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20'
    : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20';

  const buttonGradient = theme === 'dark'
    ? 'from-orange-500 to-amber-600 hover:shadow-orange-500/20'
    : 'from-blue-500 to-cyan-500 hover:shadow-blue-500/20';

  return (
    <div className="flex justify-center min-h-screen py-4 px-2 lg:py-10">
      <div className={`w-full max-w-6xl border rounded-2xl mt-14 lg:mt-16 flex flex-col md:flex-row overflow-hidden min-h-[600px] h-[calc(100vh-8rem)] ${cardBg}`}>
        
        {/* Left Sidebar (Info & Preset Suggestions) */}
        <div className={`w-full md:w-80 flex flex-col border-b md:border-b-0 md:border-r ${divider} ${sidebarBg}`}>
          <div className="p-5 flex-1 flex flex-col justify-between">
            <div>
              {/* Back to portfolio button */}
              <button 
                onClick={onBackToPortfolio}
                className={`mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider cursor-pointer transition-colors ${
                  theme === 'dark' ? 'text-orange-400 hover:text-orange-300' : 'text-blue-600 hover:text-blue-500'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
                Back to Portfolio
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${buttonGradient} flex items-center justify-center text-white text-base font-bold shadow-lg`}>
                    AK
                  </div>
                  <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-gray-900 animate-pulse" />
                </div>
                <div>
                  <h2 className={`text-base font-bold tracking-tight ${textPrimary}`}>Ayush's AI Twin</h2>
                  <span className="text-[11px] text-emerald-500 font-semibold uppercase tracking-wider">Online & Ready</span>
                </div>
              </div>

              <p className={`text-xs leading-relaxed mb-6 ${textSecondary}`}>
                Welcome to my interactive chat space! Ask my AI avatar anything about my expertise in ML engineering, Python projects, or education.
              </p>

              <div className={`w-full h-px mb-6 ${divider}`} />

              <h4 className={`text-xs font-bold uppercase tracking-wider mb-3 ${textPrimary}`}>Suggested Questions</h4>
              <div className="space-y-2">
                {SUGGESTIONS.map((sug, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(sug)}
                    className={`w-full text-left text-xs p-3 rounded-xl border transition-all duration-200 font-medium active:scale-[0.98] cursor-pointer ${suggestionBtn}`}
                  >
                    {sug}
                  </button>
                ))}
              </div>
            </div>

            <div className={`mt-6 text-[10px] text-center ${textMuted}`}>
              Powered by Ayush Kumar's AI Agent
            </div>
          </div>
        </div>

        {/* Right Chat Pane */}
        <div className={`flex-1 flex flex-col h-full ${chatAreaBg}`}>
          {/* Header */}
          <div className={`p-4 border-b flex items-center justify-between ${divider}`}>
            <div>
              <h3 className={`text-sm font-semibold ${textPrimary}`}>Chat Session</h3>
              <span className={`text-[10px] ${textSecondary}`}>Ask questions in real time</span>
            </div>
            <button 
              onClick={() => setMessages([{
                id: 1,
                sender: 'bot',
                text: "Hi there! I'm Ayush's AI twin. I can tell you about my machine learning projects, work experience, education, or skills. What would you like to know?"
              }])}
              className={`p-2 rounded-xl border transition-all hover:bg-gray-100 dark:hover:bg-[#242420] cursor-pointer ${divider} ${textSecondary}`}
              title="Reset Chat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4 no-scrollbar">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in duration-200`}
              >
                <div className={`flex items-start gap-2.5 max-w-[80%] ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                  {msg.sender === 'bot' && (
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${buttonGradient} text-white font-bold text-xs flex items-center justify-center shadow-md flex-shrink-0`}>
                      AI
                    </div>
                  )}
                  <div
                    className={`rounded-2xl px-4 py-3 text-xs shadow-sm leading-relaxed ${
                      msg.sender === 'user' ? userBubble : botBubble
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start animate-in fade-in duration-100">
                <div className="flex items-start gap-2.5 max-w-[80%]">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${buttonGradient} text-white font-bold text-xs flex items-center justify-center shadow-md flex-shrink-0`}>
                    AI
                  </div>
                  <div className={`rounded-2xl px-4 py-3 text-xs shadow-sm ${botBubble} flex items-center gap-1.5`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <div className={`p-4 border-t ${divider}`}>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Ask me about skills, projects, experience, or education..."
                className={`flex-1 rounded-xl px-4 py-3 text-xs border outline-none transition-all duration-200 ${inputBg}`}
              />
              <button
                type="submit"
                className={`px-5 py-3 rounded-xl text-white bg-gradient-to-r ${buttonGradient} shadow-md cursor-pointer transition-all duration-200 active:scale-95 flex items-center gap-1.5 font-semibold text-xs`}
              >
                Send
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
