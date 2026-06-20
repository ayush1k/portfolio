import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

/* ── Placeholder education entries — replace with your real data ── */
const educationData = [
  {
    id: 1,
    institution: '[University / College Name]',
    logo: null, // Add institution logo URL here
    degree: '[Degree — e.g. B.Tech in Computer Science]',
    period: '[Start Year] – [End Year]',
    location: '[City, Country]',
    grade: '[CGPA / Percentage — optional]',
    highlights: [
      'Relevant coursework: Machine Learning, Data Structures, Algorithms, DBMS, Computer Networks.',
      'Add any academic achievements, projects, or clubs.',
    ],
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
                  className={`w-8 h-8 rounded-full object-cover border ${logoBorder}`}
                />
              ) : (
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold border ${logoBorder} ${logoFallback}`}>
                  {entry.institution.charAt(1)}
                </div>
              )}
              <h3 className={`text-sm font-semibold ${instColor}`}>{entry.institution}</h3>
            </div>

            {/* Degree + meta */}
            <h4 className={`text-sm ${degreeColor}`}>{entry.degree}</h4>
            <p className={`text-xs mt-0.5 ${metaColor}`}>
              {entry.period} · {entry.location}
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
