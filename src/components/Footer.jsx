import React from 'react';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-[#d4d4d4]  pt-6 pb-2 px-3 sm:px-4 border-t border-[#232425] font-poppins">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {/* About Section */}
          <div className="space-y-3">
            <h3 className="text-[#f5f5f5] text-base font-semibold">Ali Ansari</h3>
            <p className="text-xs leading-relaxed">
              Frontend developer with expertise in React, Node.js, and full-stack web development.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.linkedin.com/in/aliansari8179/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d4d4d4]/70 hover:text-[#8b5cf6] transition-colors"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:aliansari8179@gmail.com"
                className="text-[#d4d4d4]/70 hover:text-[#8b5cf6] transition-colors"
              >
                <FaEnvelope className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-[#f5f5f5] text-base font-semibold">Quick Links</h3>
            <ul className="space-y-1 text-xs">
              <li>
                <a href="#education" className="hover:text-[#8b5cf6] transition-colors">Education</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#8b5cf6] transition-colors">Experience</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#8b5cf6] transition-colors">Projects</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#8b5cf6] transition-colors">Skills</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="text-[#f5f5f5] text-base font-semibold">Get In Touch</h3>
            <div className="space-y-1 text-xs">
              <p className="flex items-center">
                <FaEnvelope className="w-4 h-4 mr-2 text-[#8b5cf6]" />
                <a href="mailto:aliansari8179@gmail.com" className="hover:text-[#8b5cf6] transition-colors">
                  aliansari8179@gmail.com
                </a>
              </p>
              <p className="flex items-center">
                <FaPhone className="w-4 h-4 mr-2 text-[#8b5cf6]" />
                <a href="tel:+918882320268" className="hover:text-[#8b5cf6] transition-colors">
                  +91 8882320268
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-3 border-t border-[#232425] text-center text-xs">
          <p>© {new Date().getFullYear()} Ali Ansari. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;