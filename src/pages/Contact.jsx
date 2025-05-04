import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendMessage = () => {
    const { name, email, subject, message } = formData;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailtoLink = `mailto:aliansari8179@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="bg-[#0a0a0a] text-[#d4d4d4] py-12 px-4 sm:px-6 font-poppins min-h-screen">
      {/* Get In Touch Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Text Section */}
        <div className="space-y-4">
          <h1 className="text-[#f5f5f5] text-3xl sm:text-4xl font-bold">
            Get In Touch
          </h1>
          <p className="text-[#d4d4d4] text-base sm:text-lg">
            Let's talk about everything!
          </p>
          <p className="text-[#d4d4d4] text-sm sm:text-base">
            Don't like forms?{' '}
            <a
              href="mailto:aliansari8179@gmail.com"
              className="text-[#d4d4d4] hover:text-[#8b5cf6] transition-colors"
            >
              Send me an email
            </a>
            . <span role="img" aria-label="waving hand">👋</span>
          </p>
        </div>

        {/* Form Section */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder="Insert your name"
              value={formData.name}
              onChange={handleChange}
              className="flex-1 bg-[#333333] text-[#ffffff] placeholder-[#ffffff] text-sm p-4 rounded-xl border border-[#3b3b3b] focus:outline-none focus:border-[#8b5cf6]"
            />
            <input
              type="email"
              name="email"
              placeholder="Insert your email"
              value={formData.email}
              onChange={handleChange}
              className="flex-1 bg-[#333333] text-[#ffffff] placeholder-[#ffffff] text-sm p-4 rounded-xl border border-[#3b3b3b] focus:outline-none focus:border-[#8b5cf6]"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Insert your subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full bg-[#333333] text-[#ffffff] placeholder-[#ffffff] text-sm p-4 rounded-xl border border-[#3b3b3b] focus:outline-none focus:border-[#8b5cf6]"
          />
          <textarea
            name="message"
            placeholder="Write your message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full bg-[#333333] text-[#ffffff] placeholder-[#ffffff] text-sm p-4 rounded-xl border border-[#3b3b3b] focus:outline-none focus:border-[#8b5cf6] resize-none"
          />
          <button
            onClick={handleSendMessage}
            className="bg-[#8b5cf6] text-[#f5f5f5] text-sm sm:text-base font-medium px-6 py-3 rounded-full hover:bg-[#7c3aed] transition-colors"
          >
            Send Message
          </button>
        </div>
      </div>

      {/* Let's Build Great Apps Together Section */}
      <div className="max-w-5xl mx-auto mt-16">
        <h2 className="text-[#f5f5f5] text-3xl sm:text-4xl font-bold text-center mb-8">
          Let’s build <span className="text-[#8b5cf6]">great</span> apps together.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <p className="text-[#d4d4d4] text-sm sm:text-base">
              <a
                href="mailto:aliansari8179@gmail.com"
                className="hover:text-[#8b5cf6] transition-colors"
              >
                aliansari8179@gmail.com
              </a>
            </p>
            <p className="text-[#d4d4d4] text-sm sm:text-base">
              <a
                href="tel:+918882320268"
                className="hover:text-[#8b5cf6] transition-colors"
              >
                +91 8882320268
              </a>
            </p>
            <p className="text-[#d4d4d4] text-sm sm:text-base">
              Mumbai, India
            </p>
          </div>

          {/* Description and Button */}
          <div className="space-y-4">
            <p className="text-[#d4d4d4] text-sm sm:text-base leading-relaxed">
              We’re here to bring your concept to life, manage your ongoing project, or expand your existing development team.
            </p>
            <Link
              to="/"
              className="inline-block bg-[#8b5cf6] text-[#f5f5f5] text-sm sm:text-base font-medium px-6 py-3 rounded-full hover:bg-[#7c3aed] transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;