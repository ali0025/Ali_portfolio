import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const WorkTogether = () => {
  return (
    <section className="bg-[#121212] text-[#a1a1a1] py-10 px-4 sm:px-6 font-poppins max-w-xl mx-auto">
      <div className="max-w-5xl mx-auto text-center space-y-4 rounded-2xl border border-[#232425] py-8 px-6">
        <h2 className="text-[#ffffff] text-2xl sm:text-3xl font-semibold">
          Let's Work Together
        </h2>
        <p className="text-[#a1a1a1] text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-[#8b5cf6] text-[#f5f5f5] text-sm sm:text-base font-medium px-6 py-3 rounded-full hover:bg-[#7c3aed] transition-colors"
        >
          Get in Touch
          <FaArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default WorkTogether;