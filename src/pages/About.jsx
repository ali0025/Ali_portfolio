import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook, FaGithub, FaEnvelope } from 'react-icons/fa';
import aliimg from'../assets/IMG_1508.jpg'
import WorkTogether from '../components/WorkTogether';
const About = () => {
  return (
    <>
    <section className="bg-[#121212] text-[#a1a1a1] py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div className="space-y-6">
          <h1 className="text-[#ffffff] text-3xl sm:text-4xl font-bold flex items-center gap-2">
            I'm Ali Ansari
          </h1>
          <h2 className="text-[#a1a1a1] text-lg sm:text-xl">Hello Artisans,</h2>
          <p className="text-[#a1a1a1] text-sm sm:text-base leading-relaxed">
            With over 5 years of experience in web development, I have honed a strong understanding of fundamental programming principles adaptable to various technology stacks. My proficiency extends to building robust systems, effectively managing data, and implementing optimization strategies. Equipped with agile methodologies and a solid grasp of frontend technologies, I ensure the delivery of efficient software solutions. Familiar with industry best practices, I am adept at collaborating with cross-functional teams to deliver high-quality products.
          </p>
          <p className="text-[#a1a1a1] text-sm sm:text-base leading-relaxed">
            Started my software engineering career from 2018. I have worked with various technologies and frameworks and worked in companies and startups. Throughout my whole journey I have learned a lot and still learning. I have a strong passion for learning new technologies and sharing my knowledge with others.
          </p>
          <p className="text-[#a1a1a1] text-sm sm:text-base leading-relaxed">
            Some of my targets are to contribute to open source projects, write technical blogs, and create video tutorials. Also want to work with cloud technologies and system architecture.
          </p>
          
          {/* Social Links */}
          <div className="space-y-3">
            <a
              href="https://www.linkedin.com/in/aliansari8179/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#666666] hover:text-[#cccccc] transition-colors text-sm sm:text-base"
            >
              <FaLinkedin className="w-5 h-5" />
              Follow on LinkedIn
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#666666] hover:text-[#cccccc] transition-colors text-sm sm:text-base"
            >
              <FaTwitter className="w-5 h-5" />
              Follow on X
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#666666] hover:text-[#cccccc] transition-colors text-sm sm:text-base"
            >
              <FaFacebook className="w-5 h-5" />
              Follow on Facebook
            </a>
            <a
              href="https://github.com/ali0025"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#666666] hover:text-[#cccccc] transition-colors text-sm sm:text-base"
            >
              <FaGithub className="w-5 h-5" />
              Follow on GitHub
            </a>
          </div>

          {/* Email */}
          <p className="flex items-center gap-2 text-[#a1a1a1] text-sm sm:text-base mt-4">
            <FaEnvelope className="w-5 h-5 text-[#666666]" />
            <a href="mailto:aliansari8179@gmail.com" className="hover:text-[#cccccc] transition-colors">
              aliansari8179@gmail.com
            </a>
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <img
            src={aliimg}
            alt="Ali Ansari"
            className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-3xl border-4 border-[#ffffff]"
          />
        </div>
      </div>
    </section>
    <WorkTogether/>
    </>
  );
};

export default About;