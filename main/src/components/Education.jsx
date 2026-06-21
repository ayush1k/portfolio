import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import ietLogo from '../assets/iet-logo.jpeg';
import reckLogo from '../assets/reck-logo.jpeg';
import stXaviersLogo from '../assets/st-xaviers-logo.png';

const educationData = [
  {
    id: 1,
    institution: 'Institute of Engineering and Technology',
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
      'This is where I actually learned the skill of survival.',
    ],
  },
  {
    id: 3,
    institution: "St. Xavier's High School - India",
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
  const logoBorder   = theme === 'dark' ? 'border-[#2a2a28]': 'border-gray-200';
  const logoFallback = theme === 'dark' ? 'bg-[#2a2a28] text-[#857f72]' : 'bg-gray-100 text-gray-500';

  return (
    <section id="education" className="scroll-mt-20 space-y-3">
      <h2 className={`text-base font-semibold border-b-2 border-dashed pb-2 ${headingColor} ${divider}`}>
        Education
      </h2>

      <div className="space-y-4">
        {educationData.map((entry) => (
          <div key={entry.id}>
            {/* Institution row */}
            <div className="flex items-center gap-2 mb-2">
              {entry.logo ? (
                <img
                  src={entry.logo}
                  alt={`${entry.institution} logo`}
                  className={`w-9 h-9 rounded-full object-contain bg-white p-0.5 border ${logoBorder}`}
                  style={{ imageRendering: 'high-quality' }}
                />
              ) : (
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold border ${logoBorder} ${logoFallback}`}>
                  {entry.institution.charAt(0)}
                </div>
              )}
              <h3 className={`text-sm font-semibold ${instColor}`}>{entry.institution}</h3>
            </div>

            {/* Degree + meta */}
            <h4 className={`text-sm ${degreeColor}`}>{entry.degree}</h4>
            <p className={`text-xs mt-0.5 ${metaColor}`}>
              {entry.period}{entry.location ? ` · ${entry.location}` : ''}
              {entry.grade && <span className="ml-2 font-medium">{entry.grade}</span>}
            </p>

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
        ))}
      </div>
    </section>
  );
};

export default Education;
