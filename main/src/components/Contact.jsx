    import React, { useState, useContext } from 'react';
    import Button from './Button'; // Import the reusable Button component
    import { ThemeContext } from '../context/ThemeContext'; // Import ThemeContext for styling

    const Contact = () => {
      const { theme } = useContext(ThemeContext);
      const formClasses = theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800';
      const inputClasses = theme === 'dark'
        ? 'bg-gray-700 border border-gray-600 text-white'
        : 'bg-gray-100 border border-gray-300 text-gray-800';

      const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      const [status, setStatus] = useState(''); // To show feedback to the user

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        // In Step 5, you will replace this with an actual fetch call to your Node.js backend
        try {
          console.log('Form Data to be sent:', formData);
          // Simulate API call delay
          await new Promise(resolve => setTimeout(resolve, 1500));
          setStatus('Message sent successfully! (Simulated)');
          setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
        } catch (error) {
          console.error('Error sending message:', error);
          setStatus('Failed to send message. Please try again.');
        }
      };

      return (
        <section id="contact" className="min-h-screen flex items-center justify-center p-4 sm:p-8 pt-24 bg-[#DFEAF6] text-gray-800">
          <div className={`max-w-md mx-auto p-8 rounded-lg shadow-xl ${formClasses}`}>
            <h2 className="text-4xl font-bold mb-6 text-center">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${inputClasses}`}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${inputClasses}`}
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${inputClasses}`}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${inputClasses}`}
                  required
                ></textarea>
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">Send Message</Button>
              {status && <p className="mt-4 text-center text-sm">{status}</p>}
            </form>
          </div>
        </section>
      );
    };

    export default Contact;
    