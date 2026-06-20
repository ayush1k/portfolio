import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

/* ── Placeholder certificate entries — replace with your real data ── */
const certificatesData = [
  {
    id: 1,
    title: '[Certificate Title]',
    issuer: '[Issuing Organization — e.g. Coursera, DeepLearning.AI]',
    date: '[Month Year]',
    credentialUrl: '#',
    skills: ['Machine Learning', 'Python'],
  },
  {
    id: 2,
    title: '[Certificate Title]',
    issuer: '[Issuing Organization]',
    date: '[Month Year]',
    credentialUrl: '#',
    skills: ['Deep Learning', 'TensorFlow'],
  },
];

const Certificates = () => {
  const { theme } = useContext(ThemeContext);

  const headingColor = theme === 'dark' ? 'text-[#e8e6e1]'  : 'text-gray-800';
  const titleColor   = theme === 'dark' ? 'text-[#5b9bd5]'  : 'text-[#179cf0]';
  const metaColor    = theme === 'dark' ? 'text-[#857f72]'  : 'text-gray-500';
  const divider      = theme === 'dark' ? 'border-[#2a2a28]': 'border-gray-200';
  const cardBorder   = theme === 'dark' ? 'border-[#2a2a28]': 'border-gray-200';
  const cardBg       = theme === 'dark' ? 'bg-[#1f1f1c]'    : 'bg-gray-50';
  const badgeBg      = theme === 'dark' ? 'bg-[#242420] border-[#2a2a28] text-[#857f72]' : 'bg-white border-gray-200 text-gray-600';
  const linkColor    = theme === 'dark' ? 'text-[#5b9bd5] hover:text-[#179cf0]' : 'text-[#179cf0] hover:text-[#0f7fd4]';

  return (
    <section id="certificates" className="scroll-mt-20 space-y-3">
      <h2 className={`text-base font-semibold border-b-2 border-dashed pb-2 ${headingColor} ${divider}`}>
        Certificates
      </h2>

      <div className="space-y-2">
        {certificatesData.map((cert) => (
          <div
            key={cert.id}
            className={`p-3 rounded-lg border ${cardBorder} ${cardBg}`}
          >
            <div className="flex justify-between items-start gap-2">
              <div className="flex-1 min-w-0">
                <h3 className={`text-xs font-medium ${titleColor} truncate`}>{cert.title}</h3>
                <p className={`text-xs mt-0.5 ${metaColor}`}>
                  {cert.issuer} · {cert.date}
                </p>
              </div>
              {cert.credentialUrl && cert.credentialUrl !== '#' && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-[10px] font-medium flex-shrink-0 transition-colors ${linkColor}`}
                >
                  View ↗
                </a>
              )}
            </div>

            {/* Skill tags */}
            {cert.skills && cert.skills.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {cert.skills.map((s) => (
                  <span
                    key={s}
                    className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] border font-medium ${badgeBg}`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
