import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const experienceData = [
  {
    id: 1,
    company: 'Indian Institute of Technology, Roorkee',
    logo: null,
    roles: [
      {
        title: 'Intern',
        period: 'Mar 2026 - Present · 4 mos',
        location: 'Remote · Internship',
        bullets: [
          'Details of ongoing research and projects are confidential.',
        ],
      },
    ],
  },
  {
    id: 2,
    company: 'Institute of Engineering and Technology',
    logo: null,
    roles: [
      {
        title: 'Teaching Assistant (Full-time)',
        period: 'Jan 2026 - Present · 6 mos',
        location: 'Lucknow, Uttar Pradesh, India · On-site',
        bullets: [
          'ICS 453 - Object oriented programming using Python',
          'ICS 452 - Object oriented programming using Java',
        ],
      },
      {
        title: 'Teaching Assistant',
        period: 'Aug 2025 - Dec 2025 · 5 mos',
        location: 'Lucknow, Uttar Pradesh, India · On-site',
        bullets: [
          'ICS 354 - Mini Project',
        ],
      },
    ],
  },
  {
    id: 3,
    company: 'Infosys Springboard',
    logo: null,
    roles: [
      {
        title: 'Intern',
        period: 'Sep 2025 - Nov 2025 · 3 mos',
        location: 'Remote · Internship',
        bullets: [
          'Completed technical training modules and project work under the Infosys Springboard program.',
        ],
      },
    ],
  },
  {
    id: 4,
    company: 'Rajkiya Engineering College, Kannauj',
    logo: null,
    roles: [
      {
        title: 'Training and Placement Cell Co-ordinator (Full-time)',
        period: 'May 2023 - May 2025 · 2 yrs 1 mo',
        location: 'Kannauj, Uttar Pradesh, India · On-site',
        bullets: [
          'Managed the Training and Placement Cell website and social media presence.',
        ],
      },
    ],
  },
  {
    id: 5,
    company: 'CDAC, Noida',
    logo: null,
    roles: [
      {
        title: 'Intern',
        period: 'Jul 2024 - Sep 2024 · 3 mos',
        location: 'Remote · Internship',
        bullets: [
          'Gained hands-on experience in ethical hacking and penetration testing using advanced cybersecurity tools.',
          'Worked in a virtual environment, utilizing virtual machines accessed through Remote Desktop Protocol (RDP).',
        ],
      },
    ],
  },
  {
    id: 6,
    company: 'Oasis Infobyte',
    logo: null,
    roles: [
      {
        title: 'Web Development and Designing Intern',
        period: 'Jun 2024 - Jul 2024 · 2 mos',
        location: 'Remote · Internship',
        bullets: [
          'Worked on multiple web development projects, strengthening front-end development and design skills.',
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
                  <h4 className={`text-sm ${roleColor}`}>{role.title}</h4>
                </div>
                <p className={`text-xs ${metaColor}`}>
                  {role.period}{role.location ? ` · ${role.location}` : ''}
                </p>

                {role.bullets && role.bullets.length > 0 && (
                  <ul className="mt-2 space-y-1.5">
                    {role.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-2">
                        <span className={`w-1 h-1 rounded-full flex-shrink-0 mt-1.5 ${dotColor}`} />
                        <span className={`text-xs leading-relaxed ${bulletText}`}>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}

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
