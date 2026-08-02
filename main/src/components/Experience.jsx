import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import iitRoorkeeLogo from '../assets/iit-roorkee-logo.png';
import ietLogo from '../assets/iet-logo.jpeg';
import infosysSpringboardLogo from '../assets/infosys-springboard-logo.jpeg';
import reckLogo from '../assets/reck-logo.jpeg';
import cdacLogo from '../assets/cdac-noida-logo.jpeg';

const experienceData = [
  {
    id: 1,
    company: 'Indian Institute of Technology, Roorkee',
    logo: iitRoorkeeLogo,
    roles: [
      {
        title: 'Intern',
        period: 'Mar 2026 - Jul 2026 · 4 mos',
        location: 'Remote · Internship',
        bullets: [
          'Actively contributing to a research-driven project centered around Deep Learning and Computer Vision methodologies.',
          'Further project methodologies and specific implementation details will be shared upon completion of the internship.',
        ],
      },
    ],
  },
  {
    id: 2,
    company: 'Institute of Engineering and Technology, Lucknow',
    logo: ietLogo,
    roles: [
      {
        title: 'Teaching Assistant (Full-time)',
        period: 'Jan 2026 - Present · 6 mos',
        location: 'Lucknow, Uttar Pradesh, India · On-site',
        bullets: [
          'Conducted hands-on laboratory sessions for ICS 453 (Object-Oriented Programming using Python) for a cohort of 80+ students, teaching core programming concepts, software design patterns, and debugging methodologies.',
          'Led practical sessions for ICS 452 (Object-Oriented Programming using Java) for 80+ students, guiding them through inheritance, polymorphism, interface design, exception handling, and multi-threading.',
          'Prepared instructional slide content and interactive course presentations for technical foundations to enhance conceptual understanding.',
          'Built hands-on Google Colab code examples and interactive notebooks for the technical foundations course, allowing students to experiment with live code implementation.',
          'Assisted students in resolving programming bottlenecks, graded coding assignments, and provided feedback to improve code efficiency and OOP compliance.',
        ],
      },
      {
        title: 'Teaching Assistant',
        period: 'Aug 2025 - Dec 2025 · 5 mos',
        location: 'Lucknow, Uttar Pradesh, India · On-site',
        bullets: [
          'Instructed and mentored students during their ICS 354 (Mini Project) course, supervising projects across diverse domains including Web/Software Development, Mobile App Development, and Machine Learning.',
          'Guided students on systems design, tool/framework selection, and clean code practices to build functional prototypes.',
          'Provided technical consultation and feedback to student groups pursuing innovative, early-stage startup project ideas.',
        ],
      },
    ],
  },
  {
    id: 3,
    company: 'Infosys Springboard',
    logo: infosysSpringboardLogo,
    roles: [
      {
        title: 'Intern',
        period: 'Sep 2025 - Nov 2025 · 3 mos',
        location: 'Remote · Internship',
        bullets: [
          'Architected and co-developed the Python Parallel Text Handling Processor, a high-performance, multi-threaded text processing pipeline utilizing ThreadPoolExecutor to process 10,000+ text records in parallel at 100+ chunks/second.',
          'Designed a rule engine with 7+ pre-configured evaluation types and integrated SQLite database storage using SHA-256 hash-based deduplication to optimize search, storage, and processing speed.',
          'Built an interactive dashboard using Streamlit, Plotly, and Matplotlib to provide live pipeline tracking, rule editing, word clouds, and analytics, along with automated PDF report generation via ReportLab.',
          'Developed the Storage Improver module to automatically suggest scoring rules based on text pattern analysis, and integrated SMTP-based email alerts for pipeline notifications.',
        ],
      },
    ],
  },
  {
    id: 4,
    company: 'Rajkiya Engineering College, Kannauj',
    logo: reckLogo,
    roles: [
      {
        title: 'Training and Placement Cell Co-ordinator (Full-time)',
        period: 'May 2023 - May 2025 · 2 yrs 1 mo',
        location: 'Kannauj, Uttar Pradesh, India · On-site',
        bullets: [
          'Managed and maintained the college Training and Placement Cell web portal, and grew brand visibility by managing the official LinkedIn and Instagram pages.',
          'Spearheaded corporate outreach by communicating with 100+ companies to secure campus recruitment drives and internship opportunities for students.',
          'Organized and coordinated college-wide events including hackathons, quizzes, debate competitions, aptitude preparation sessions, and group discussions.',
          'Hosted technical seminars and knowledge-sharing sessions featuring industry experts to expose students to current technological trends.',
        ],
      },
    ],
  },
  {
    id: 5,
    company: 'CDAC, Noida',
    logo: cdacLogo,
    roles: [
      {
        title: 'Intern',
        period: 'Jul 2024 - Sep 2024 · 3 mos',
        location: 'Remote · Internship',
        bullets: [
          'Developed a Node.js-based interactive command-line interface (CLI) utility leveraging the truecallerjs package to perform real-time caller information retrievals.',
          'Implemented support for multiple serialization output formats (JSON, XML, YAML, plain text) and integrated dotenv and JSON-based configuration management for secure Installation ID authentication.',
          'Gained practical exposure to ethical hacking, security logging, and network analysis by conducting penetration testing inside remote virtual machines via RDP.',
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
          'Developed and deployed multiple front-end web applications, designing user interfaces with responsive frameworks and implementing robust layouts using HTML5, CSS3, and JavaScript.',
          'Created pixel-perfect and responsive pages, ensuring optimization across cross-browser environments and modern mobile viewports.',
          'Strengthened overall core web design principles, visual hierarchy guidelines, and structured code modularity during the program.',
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

  const timelineLine  = theme === 'dark' ? 'bg-[#2a2a28]'    : 'bg-gray-200';
  const nodeBorder    = theme === 'dark'
    ? 'border-[#2a2a28] group-hover:ring-2 group-hover:ring-orange-500/50 group-hover:border-orange-500/60'
    : 'border-gray-200 group-hover:ring-2 group-hover:ring-blue-400 group-hover:border-blue-400';
  const logoFallback  = theme === 'dark' ? 'bg-[#2a2a28] text-[#857f72]' : 'bg-gray-100 text-gray-500';

  const cardBg        = theme === 'dark'
    ? 'bg-[#242420]/30 border-[#2a2a28] group-hover:border-orange-500/40 group-hover:shadow-md group-hover:shadow-black/20'
    : 'bg-gray-50/50 border-gray-200 group-hover:border-blue-300 group-hover:shadow-md group-hover:shadow-gray-200/50';

  return (
    <section id="experience" className="scroll-mt-20 space-y-4">
      <h2 className={`text-base font-semibold border-b-2 border-dashed pb-2 ${headingColor} ${divider}`}>
        Experience
      </h2>

      {/* Connected Timeline Container */}
      <div className="relative pl-6 sm:pl-7 space-y-5">
        {/* Vertical Timeline Line */}
        <div className={`absolute left-4 sm:left-4 top-3 bottom-3 w-[2px] rounded-full ${timelineLine}`} />

        {experienceData.map((entry) => (
          <div key={entry.id} className="relative group">
            {/* Timeline Node Logo */}
            <div className="absolute -left-6 sm:-left-7 top-1 z-10">
              {entry.logo ? (
                <img
                  src={entry.logo}
                  alt={`${entry.company} logo`}
                  className={`w-8 h-8 rounded-full object-contain bg-white p-0.5 border shadow-xs transition-all duration-300 group-hover:scale-110 ${nodeBorder}`}
                  style={{ imageRendering: 'high-quality' }}
                />
              ) : (
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border shadow-xs transition-all duration-300 group-hover:scale-110 ${nodeBorder} ${logoFallback}`}>
                  {entry.company.charAt(0)}
                </div>
              )}
            </div>

            {/* Content Card Block */}
            <div className={`p-3.5 rounded-xl border transition-all duration-300 group-hover:translate-x-1.5 ${cardBg}`}>
              <h3 className={`text-sm font-bold tracking-tight ${companyColor}`}>{entry.company}</h3>

              {/* Roles */}
              {entry.roles.map((role, ri) => (
                <div key={ri} className={ri > 0 ? 'mt-3 pt-3 border-t border-dashed ' + divider : 'mt-1'}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-0.5">
                    <h4 className={`text-xs font-semibold ${roleColor}`}>{role.title}</h4>
                    <span className={`text-[11px] font-medium ${metaColor}`}>{role.period}</span>
                  </div>
                  {role.location && (
                    <p className={`text-[10px] mt-0.5 ${metaColor}`}>{role.location}</p>
                  )}

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
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
