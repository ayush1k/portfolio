import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

/* ── Placeholder experience entries — user will fill with real data ── */
const experienceData = [
  {
    id: 1,
    company: '[Company Name]',
    logo: null, // Add company logo URL here
    roles: [
      {
        title: '[Your Role Title]',
        period: '[Start Date] – [End Date]',
        location: '[City, Country · Remote/On-site]',
        bullets: [
          'Add your key achievement or responsibility here. Include metrics where possible (e.g. improved X by Y%).',
          'Describe a major project or system you built, with technologies used.',
          'Highlight any leadership, mentoring, or cross-team collaboration.',
          'Note any performance improvements, cost savings, or user growth you contributed to.',
        ],
      },
    ],
  },
];

const Experience = () => {
  const { theme } = useContext(ThemeContext);

  const headingColor  = theme === 'dark' ? 'text-[#e8e6e1]'  : 'text-gray-800';
  const companyColor  = theme === 'dark' ? 'text-[#e8e6e1]'  : 'text-gray-900';
  const roleColor     = theme === 'dark' ? 'text-[#5b9bd5]'  : 'text-[#179cf0]';
  const metaColor     = theme === 'dark' ? 'text-[#857f72]'  : 'text-gray-500';
  const bulletText    = theme === 'dark' ? 'text-[#857f72]'  : 'text-gray-600';
  const dotColor      = theme === 'dark' ? 'bg-[#5b9bd5]'    : 'bg-[#179cf0]';
  const divider       = theme === 'dark' ? 'border-[#2a2a28]': 'border-gray-200';
  const logoBorder    = theme === 'dark' ? 'border-[#2a2a28]': 'border-gray-200';
  const logoFallback  = theme === 'dark' ? 'bg-[#2a2a28] text-[#857f72]' : 'bg-gray-100 text-gray-500';

  return (
    <section id="experience" className="scroll-mt-20 space-y-3">
      <h2 className={`text-base font-semibold border-b-2 border-dashed pb-2 ${headingColor} ${divider}`}>
        Experience
      </h2>

      <div className="space-y-6">
        {experienceData.map((entry) => (
          <div key={entry.id}>
            {/* Company row */}
            <div className="flex items-center gap-2 mb-2">
              {entry.logo ? (
                <img
                  src={entry.logo}
                  alt={`${entry.company} logo`}
                  className={`w-8 h-8 rounded-full object-cover border ${logoBorder}`}
                />
              ) : (
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold border ${logoBorder} ${logoFallback}`}>
                  {entry.company.charAt(0)}
                </div>
              )}
              <h3 className={`text-base font-semibold ${companyColor}`}>{entry.company}</h3>
            </div>

            {/* Roles */}
            {entry.roles.map((role, ri) => (
              <div key={ri} className="mt-2">
                <div className="flex items-center gap-2">
                  <h4 className={`text-base ${roleColor}`}>{role.title}</h4>
                </div>
                <p className={`text-xs ${metaColor}`}>{role.period} · {role.location}</p>

                <ul className="mt-2 space-y-1.5">
                  {role.bullets.map((b, bi) => (
                    <li key={bi} className="flex items-start gap-2">
                      <span className={`w-1 h-1 rounded-full flex-shrink-0 mt-1.5 ${dotColor}`} />
                      <span className={`text-xs leading-relaxed ${bulletText}`}>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Divider between roles */}
                {ri < entry.roles.length - 1 && (
                  <div className={`border-b-2 border-dashed mt-4 ${divider}`} />
                )}
              </div>
            ))}

            {/* Divider between companies */}
            {experienceData.indexOf(entry) < experienceData.length - 1 && (
              <div className={`border-b-2 border-dashed py-2 ${divider}`} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
