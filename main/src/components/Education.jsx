import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import ietLogo from '../assets/iet-logo.jpeg';
import reckLogo from '../assets/reck-logo.jpeg';
import stXaviersLogo from '../assets/st-xaviers-logo.png';

const educationData = [
  {
    id: 1,
    institution: 'Institute of Engineering and Technology, Lucknow',
    logo: ietLogo,
    degree: 'Master of Technology - MTech, Artificial Intelligence and Data Science',
    period: 'Aug 2025 – Oct 2027',
    location: '',
    grade: '',
    highlights: [],
  },
  {
    id: 2,
    institution: 'Rajkiya Engineering College, Kannauj',
    logo: reckLogo,
    degree: 'Bachelor of Technology - BTech, CSE',
    period: 'Nov 2021 – 2025',
    location: '',
    grade: '',
    highlights: [
      'This is where I learned the skills of engineering, leadership, and analytical problem solving.',
    ],
  },
  {
    id: 3,
    institution: "St. Xavier's High School, Varanasi",
    logo: stXaviersLogo,
    degree: 'PCM+CS',
    period: 'Apr 2006 – Mar 2020',
    location: '',
    grade: 'XII: 76.6% · X: 80.4%',
    highlights: [],
  },
];

const Education = () => {
  const { theme } = useContext(ThemeContext);

  const headingColor = theme === 'dark' ? 'text-[#e8e6e1]'  : 'text-gray-800';
  const instColor    = theme === 'dark' ? 'text-[#e8e6e1]'  : 'text-gray-900';
  const degreeColor  = theme === 'dark' ? 'text-[#5b9bd5]'  : 'text-[#179cf0]';
  const metaColor    = theme === 'dark' ? 'text-[#857f72]'  : 'text-gray-500';
  const bulletText   = theme === 'dark' ? 'text-[#857f72]'  : 'text-gray-600';
  const dotColor     = theme === 'dark' ? 'bg-[#5b9bd5]'    : 'bg-[#179cf0]';
  const divider      = theme === 'dark' ? 'border-[#2a2a28]': 'border-gray-200';

  const timelineLine = theme === 'dark' ? 'bg-[#2a2a28]'    : 'bg-gray-200';
  const nodeBorder   = theme === 'dark'
    ? 'border-[#2a2a28] group-hover:ring-2 group-hover:ring-orange-500/50 group-hover:border-orange-500/60'
    : 'border-gray-200 group-hover:ring-2 group-hover:ring-blue-400 group-hover:border-blue-400';
  const logoFallback = theme === 'dark' ? 'bg-[#2a2a28] text-[#857f72]' : 'bg-gray-100 text-gray-500';

  const cardBg       = theme === 'dark'
    ? 'bg-[#242420]/30 border-[#2a2a28] group-hover:border-orange-500/40 group-hover:shadow-md group-hover:shadow-black/20'
    : 'bg-gray-50/50 border-gray-200 group-hover:border-blue-300 group-hover:shadow-md group-hover:shadow-gray-200/50';

  return (
    <section id="education" className="scroll-mt-20 space-y-4">
      <h2 className={`text-base font-semibold border-b-2 border-dashed pb-2 ${headingColor} ${divider}`}>
        Education
      </h2>

      {/* Connected Timeline Container */}
      <div className="relative pl-6 sm:pl-7 space-y-4">
        {/* Vertical Timeline Line */}
        <div className={`absolute left-4 sm:left-4 top-3 bottom-3 w-[2px] rounded-full ${timelineLine}`} />

        {educationData.map((entry) => (
          <div key={entry.id} className="relative group">
            {/* Timeline Node Logo */}
            <div className="absolute -left-6 sm:-left-7 top-1 z-10">
              {entry.logo ? (
                <img
                  src={entry.logo}
                  alt={`${entry.institution} logo`}
                  className={`w-8 h-8 rounded-full object-contain bg-white p-0.5 border shadow-xs transition-all duration-300 group-hover:scale-110 ${nodeBorder}`}
                  style={{ imageRendering: 'high-quality' }}
                />
              ) : (
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border shadow-xs transition-all duration-300 group-hover:scale-110 ${nodeBorder} ${logoFallback}`}>
                  {entry.institution.charAt(0)}
                </div>
              )}
            </div>

            {/* Content Card Block */}
            <div className={`p-3.5 rounded-xl border transition-all duration-300 group-hover:translate-x-1.5 ${cardBg}`}>
              <h3 className={`text-xs font-bold tracking-tight ${instColor}`}>{entry.institution}</h3>
              <h4 className={`text-xs font-semibold mt-0.5 ${degreeColor}`}>{entry.degree}</h4>
              
              <div className="flex flex-wrap items-center justify-between gap-x-2 mt-1">
                <span className={`text-[11px] font-medium ${metaColor}`}>{entry.period}</span>
                {entry.grade && <span className={`text-[11px] font-semibold ${metaColor}`}>{entry.grade}</span>}
              </div>

              {/* Highlights */}
              {entry.highlights && entry.highlights.length > 0 && (
                <ul className="mt-2 space-y-1.5">
                  {entry.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className={`w-1 h-1 rounded-full flex-shrink-0 mt-1.5 ${dotColor}`} />
                      <span className={`text-xs leading-relaxed ${bulletText}`}>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
