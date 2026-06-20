import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  const headingColor = theme === 'dark' ? 'text-[#e8e6e1]'  : 'text-gray-800';
  const divider      = theme === 'dark' ? 'border-[#2a2a28]' : 'border-gray-200';
  const bodyColor    = theme === 'dark' ? 'text-[#857f72]'  : 'text-gray-600';
  const labelColor   = theme === 'dark' ? 'text-[#857f72]'  : 'text-gray-400';
  const inputBg      = theme === 'dark'
    ? 'bg-[#242420] border-[#2a2a28] text-[#e8e6e1] placeholder-[#857f72] focus:border-orange-500/60'
    : 'bg-gray-50 border-gray-200 text-gray-800 placeholder-gray-400 focus:border-blue-400';
  const btnBg        = theme === 'dark'
    ? 'bg-orange-500 hover:bg-orange-600 text-white'
    : 'bg-[#179cf0] hover:bg-[#0f7fd4] text-white';
  const linkColor    = theme === 'dark' ? 'text-[#5b9bd5] hover:text-[#179cf0]' : 'text-[#179cf0] hover:text-[#0f7fd4]';

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('Sent! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus('Failed to send. Please try again.');
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 space-y-3">
      <h2 className={`text-base font-semibold border-b-2 border-dashed pb-2 ${headingColor} ${divider}`}>
        Contact
      </h2>

      {/* Quick links */}
      <div className="space-y-1.5">
        {[
          { label: 'Email', value: 'ayushkumar47834@gmail.com', href: 'mailto:ayushkumar47834@gmail.com' },
          { label: 'LinkedIn', value: '/in/ayushhhhhh', href: 'https://www.linkedin.com/in/ayushhhhhh/' },
          { label: 'GitHub', value: 'ayush1k', href: 'https://github.com/ayush1k' },
        ].map(({ label, value, href }) => (
          <div key={label} className="flex items-center gap-2">
            <span className={`text-[10px] font-semibold uppercase tracking-widest w-14 shrink-0 ${labelColor}`}>
              {label}
            </span>
            <a href={href} target="_blank" rel="noopener noreferrer"
              className={`text-xs transition-colors ${linkColor}`}>
              {value}
            </a>
          </div>
        ))}
      </div>

      {/* Compact form */}
      <form onSubmit={handleSubmit} className="space-y-2 pt-1">
        <div>
          <label htmlFor="contact-name" className={`block text-[10px] font-semibold uppercase tracking-widest mb-1 ${labelColor}`}>Name</label>
          <input
            type="text" id="contact-name" name="name" required
            value={formData.name} onChange={handleChange} placeholder="Your name"
            className={`w-full px-3 py-2 rounded-lg border text-xs focus:outline-none focus:ring-1 focus:ring-blue-400 transition-colors ${inputBg}`}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className={`block text-[10px] font-semibold uppercase tracking-widest mb-1 ${labelColor}`}>Email</label>
          <input
            type="email" id="contact-email" name="email" required
            value={formData.email} onChange={handleChange} placeholder="your@email.com"
            className={`w-full px-3 py-2 rounded-lg border text-xs focus:outline-none focus:ring-1 focus:ring-blue-400 transition-colors ${inputBg}`}
          />
        </div>
        <div>
          <label htmlFor="contact-message" className={`block text-[10px] font-semibold uppercase tracking-widest mb-1 ${labelColor}`}>Message</label>
          <textarea
            id="contact-message" name="message" rows="4" required
            value={formData.message} onChange={handleChange} placeholder="Tell me more..."
            className={`w-full px-3 py-2 rounded-lg border text-xs focus:outline-none focus:ring-1 focus:ring-blue-400 transition-colors resize-none ${inputBg}`}
          />
        </div>
        <button type="submit"
          className={`w-full py-2 px-4 rounded-lg text-xs font-semibold transition-all duration-200 active:scale-[0.98] ${btnBg}`}>
          Send Message
        </button>
        {status && (
          <p className={`text-xs text-center ${
            status.includes('Sent') ? 'text-emerald-500'
              : status.includes('Sending') ? bodyColor
              : 'text-red-500'
          }`}>{status}</p>
        )}
      </form>
    </section>
  );
};

export default Contact;
