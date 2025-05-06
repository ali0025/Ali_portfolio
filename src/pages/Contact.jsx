import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error for the field being edited
    setErrors({ ...errors, [name]: '' });
  };

  const handleSendMessage = () => {
    if (validateForm()) {
      const { name, email, subject, message } = formData;
      const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
      const mailtoLink = `mailto:aliansari8179@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
    }
  };

  return (
    <section className="bg-[#121212] text-[#d4d4d4] py-12 px-4 sm:px-6 font-poppins min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column: heading and contact info */}
          <div className="space-y-8">
            <h2 className="text-[#f5f5f5] text-3xl sm:text-4xl font-bold">
              Let’s build <span className="text-[#8b5cf6]">great</span> apps together.
            </h2>
            <div className="space-y-4">
              <p className="text-[#d4d4d4] text-sm sm:text-base">
                <a href="mailto:aliansari8179@gmail.com" className="hover:text-[#8b5cf6] transition-colors">
                  aliansari8179@gmail.com
                </a>
              </p>
              <p className="text-[#d4d4d4] text-sm sm:text-base">
                <a href="tel:+918882320268" className="hover:text-[#8b5cf6] transition-colors">
                  +91 8882320268
                </a>
              </p>
              <p className="text-[#d4d4d4] text-sm sm:text-base">
                Delhi, India
              </p>
              <p className="text-[#d4d4d4] text-sm sm:text-base leading-relaxed">
                We’re here to bring your concept to life, manage your ongoing project, or expand your existing development team.
              </p>
            </div>
          </div>
          {/* Right column: form */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  name="name"
                  placeholder="Insert your name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-[#333333] text-[#ffffff] placeholder-[#ffffff] text-sm p-4 rounded-xl border ${
                    errors.name ? 'border-red-500' : 'border-[#3b3b3b]'
                  } focus:outline-none focus:border-[#8b5cf6]`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div className="flex-1">
                <input
                  type="email"
                  name="email"
                  placeholder="Insert your email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-[#333333] text-[#ffffff] placeholder-[#ffffff] text-sm p-4 rounded-xl border ${
                    errors.email ? 'border-red-500' : 'border-[#3b3b3b]'
                  } focus:outline-none focus:border-[#8b5cf6]`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
            </div>
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Insert your subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full bg-[#333333] text-[#ffffff] placeholder-[#ffffff] text-sm p-4 rounded-xl border ${
                  errors.subject ? 'border-red-500' : 'border-[#3b3b3b]'
                } focus:outline-none focus:border-[#8b5cf6]`}
              />
              {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Write your message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className={`w-full bg-[#333333] text-[#ffffff] placeholder-[#ffffff] text-sm p-4 rounded-xl border ${
                  errors.message ? 'border-red-500' : 'border-[#3b3b3b]'
                } focus:outline-none focus:border-[#8b5cf6] resize-none`}
              />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>
            <button
              onClick={handleSendMessage}
              className="bg-[#8b5cf6] text-[#f5f5f5] text-sm sm:text-base font-medium px-6 py-3 rounded-full hover:bg-[#7c3aed] transition-colors disabled:bg-[#6b7280] disabled:cursor-not-allowed"
              disabled={Object.values(errors).some((error) => error) || Object.values(formData).some((value) => !value.trim())}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;