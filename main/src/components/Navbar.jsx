import React, { useContext, useState, useRef, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const NAV_LINKS = [
  { id: 'home',         label: 'Home',         color: 'text-blue-500'   },
  { id: 'about',        label: 'About',        color: 'text-violet-500' },
  { id: 'experience',   label: 'Experience',   color: 'text-amber-500'  },
  { id: 'projects',     label: 'Projects',     color: 'text-orange-500' },
  { id: 'skills',       label: 'Skills',       color: 'text-emerald-500'},
  { id: 'education',    label: 'Education',    color: 'text-cyan-500'   },
  { id: 'certificates', label: 'Certificates', color: 'text-pink-500'   },
  { id: 'contact',      label: 'Contact',      color: 'text-rose-500'   },
];

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
  </svg>
);

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
);

const Navbar = ({ setCurrentPage, currentPage }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const glass = theme === 'dark'
    ? 'bg-[#1a1a18]/80 border-[#2a2a28] shadow-[inset_0_1.5px_0_rgba(255,255,255,0.06),0_1px_18px_rgba(0,0,0,0.48)]'
    : 'bg-white/70 border-white/50 shadow-[inset_0_1.5px_0_rgba(255,255,255,0.75),0_1px_14px_rgba(0,0,0,0.05)]';

  const divider = theme === 'dark' ? 'bg-[#2a2a28]' : 'bg-gray-200';
  const logoGrad = theme === 'dark' ? 'from-orange-500 to-amber-600' : 'from-[#179cf0] to-[#0f7fd4]';
  const nameColor = theme === 'dark' ? 'text-[#e8e6e1]' : 'text-gray-800';

  const navLinkClass = (id) => {
    const active = currentPage === id;
    const base = 'flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium cursor-pointer whitespace-nowrap transition-all duration-150 active:scale-[0.97] border';
    if (theme === 'dark') {
      return `${base} border-[#2a2a28] ${active ? 'bg-[#2a2a28] text-[#e8e6e1] border-orange-500/40' : 'text-[#857f72] hover:text-[#e8e6e1] hover:bg-[#2a2a28] hover:border-orange-500/40'}`;
    }
    return `${base} border-gray-200 ${active ? 'bg-blue-50 text-blue-600 border-blue-300' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-300'}`;
  };

  useEffect(() => {
    const handle = (e) => { if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false); };
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 flex justify-center sm:mt-2 sm:px-2">
      <div className="w-full max-w-6xl" ref={menuRef}>
        <div className={`relative overflow-hidden sm:rounded-2xl border backdrop-blur-[44px] backdrop-saturate-[160%] ${glass}`}>

          {/* DESKTOP */}
          <div className="hidden lg:flex items-center gap-2 px-4 py-1.5">
            <div className="flex items-center gap-2 shrink-0">
              <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${logoGrad} flex items-center justify-center shadow-lg`}>
                <span className="text-white text-[10px] font-bold tracking-tight select-none">AK</span>
              </div>
              <span className={`text-[13px] font-semibold tracking-tight ${nameColor}`}>Ayush Kumar</span>
            </div>
            <div className={`w-px h-5 mx-1 shrink-0 ${divider}`} />
            <div className="flex items-center gap-1 flex-1 overflow-x-auto no-scrollbar py-1">
              {NAV_LINKS.map(link => (
                <button key={link.id} type="button" onClick={() => setCurrentPage(link.id)} className={navLinkClass(link.id)}>
                  <span className={`${link.color} text-[8px]`}>&#9679;</span>
                  {link.label}
                </button>
              ))}
            </div>
            <div className={`w-px h-5 mx-1 shrink-0 ${divider}`} />
            <div className="flex items-center gap-2 shrink-0">
              <button onClick={toggleTheme} className={`cursor-pointer rounded-md p-1.5 transition-colors ${theme === 'dark' ? 'text-[#857f72] hover:text-[#e8e6e1]' : 'text-gray-500 hover:text-gray-800'}`} aria-label="Toggle theme">
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
              </button>
              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-medium ${
                theme === 'dark' ? 'bg-orange-500/10 border-orange-500/40 text-orange-400' : 'bg-blue-50 border-blue-200 text-[#179cf0]'
              }`}>
                <span className="relative flex h-2 w-2">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${theme === 'dark' ? 'bg-orange-400' : 'bg-[#179cf0]'}`} />
                  <span className={`relative inline-flex rounded-full h-2 w-2 ${theme === 'dark' ? 'bg-orange-500' : 'bg-[#179cf0]'}`} />
                </span>
                Open to Work
              </div>
            </div>
          </div>

          {/* MOBILE */}
          <div className="flex lg:hidden items-center justify-between px-3 py-2">
            <div className="flex items-center gap-2">
              <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${logoGrad} flex items-center justify-center shadow-lg`}>
                <span className="text-white text-[10px] font-bold select-none">AK</span>
              </div>
              <span className={`text-[13px] font-semibold ${nameColor}`}>Ayush Kumar</span>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={toggleTheme} className={`p-1.5 rounded-md ${theme === 'dark' ? 'text-[#857f72]' : 'text-gray-500'}`} aria-label="Toggle theme">
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
              </button>
              <button type="button" onClick={() => setMenuOpen(!menuOpen)} className={`w-8 h-8 flex items-center justify-center rounded-xl border transition-all ${
                theme === 'dark' ? 'border-[#2a2a28] text-[#857f72] hover:bg-[#2a2a28]' : 'border-gray-200 text-gray-600 hover:bg-gray-100'
              }`} aria-label="Toggle menu">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h16M4 12h16M4 19h16" /></svg>
              </button>
            </div>
          </div>

          {/* Mobile dropdown */}
          {menuOpen && (
            <div className={`lg:hidden border-t px-3 pb-3 pt-2 flex flex-col gap-1 ${
              theme === 'dark' ? 'border-[#2a2a28]' : 'border-gray-200'
            }`}>
              {NAV_LINKS.map(link => (
                <button key={link.id} type="button"
                  onClick={() => { setCurrentPage(link.id); setMenuOpen(false); }}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-left transition-all ${
                    theme === 'dark' ? 'text-[#857f72] hover:bg-[#2a2a28] hover:text-[#e8e6e1]' : 'text-gray-700 hover:bg-gray-100'
                  }`}>
                  <span className={`${link.color} text-[8px]`}>&#9679;</span>
                  {link.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
