import profile from "../assets/IMG_1508.jpg";
import { RiGithubFill, RiCodeSSlashLine, RiLinkedinBoxFill, RiMailLine, RiInstagramLine } from 'react-icons/ri';

import { useEffect } from "react";

const HeroAvatar = ({ src, alt = "user's picture" }) => {
  return (
    <div className="hero-avatar">
      <picture className="hero-avatar__image">
        <img src={src} alt={alt}  loading="lazy" />
      </picture>
    </div>
  );
};

const Hero = () => {
  useEffect(() => {
    const styles = `
      .hero-avatar {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 220px;
        height: 200px;
        border-radius: 8px;
        position: relative;
        border: 1px solid #A9ADB2;
        background-clip: padding-box;
      }

      @media (min-width: 640px) {
        .hero-avatar {
          width: 270px;
          height: 230px;
        }
      }

      @media (min-width: 768px) {
        .hero-avatar {
          width: 323px;
          height: 275px;
        }
      }

      .hero-avatar::before {
        background: linear-gradient(11deg, transparent 70%, #d1d5db),
                    linear-gradient(190deg, transparent 70%, #d1d5db);
        border-radius: inherit;
        content: "";
        margin: -1px;
        position: absolute;
        inset: 0;
        z-index: -2;
      }

      .hero-avatar__image {
        position: relative;
      }

      .hero-avatar__image img {
        clip-path: circle(60px at center);
        object-fit: cover;
        width: 120px;
        height: 120px;
      }

      @media (min-width: 640px) {
        .hero-avatar__image img {
          clip-path: circle(70px at center);
          width: 140px;
          height: 140px;
        }
      }
    


      .hero-avatar__image::before {
        content: '';
        position: absolute;
        display: block;
        width: 140px;
        height: 140px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(0deg);
        outline: 8px inset #d1d5db;
        border-radius: 9999px;
        animation: rotate-outline 20s linear infinite normal both;
        will-change: transform;
      }

      @media (min-width: 640px) {
        .hero-avatar__image::before {
          width: 160px;
          height: 160px;
        }
      }

      @keyframes rotate-outline {
        0% {
          transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
          transform: translate(-50%, -50%) rotate(360deg);
        }
      }

      [data-theme='light'] .hero-avatar__image::before {
        outline-color: #3b82f6;
      }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
    return () => document.head.removeChild(styleSheet); // clean up
  }, []);

  return (
    <section className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center text-white px-6 py-8 gap-10">
      <div className="w-full md:max-w-xl text-center md:text-left">
        <p className="text-[#8b5cf6] mb-2 text-sm sm:text-base">Hi there, I’m</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">Ali Ansari</h1>
        <h2 className="text-xl sm:text-2xl font-medium mb-4">
          <span className="text-gray-300">MERN </span>{" "}
          <span className="text-white">Stack Developer</span>
        </h2>
        <p className="text-gray-400 text-sm sm:text-base">
  MERN stack engineer skilled in React, Node.js, and MongoDB, building responsive web apps and APIs. Passionate about creating seamless user experiences, advancing expertise in IoT, cloud solutions, UI/UX design, and learning DevOps to optimize development workflows.
</p>
<div className="flex justify-center md:justify-start gap-4 mt-4 text-[#8b5cf6] text-2xl">
  <a href="https://github.com/ali0025" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
    <RiGithubFill />
  </a>
  <a href="https://leetcode.com/u/ali0025/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
    <RiCodeSSlashLine />
  </a>
  <a href="https://www.linkedin.com/in/aliansari8179/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
    <RiLinkedinBoxFill />
  </a>
  <a href="mailto:aliansari8179@gmail.com" className="hover:text-indigo-400">
    <RiMailLine />
  </a>
  <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
    <RiInstagramLine />
  </a>
</div>

      </div>

      {/* Avatar */}
      <div className="relative flex-shrink-0">
        {/* Glowing background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div id="glow-bg" className="w-56 h-56 sm:w-64 sm:h-64  md:w-72 md:h-72 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 blur-3xl opacity-90 sm:opacity-30"></div>
        </div>

        <HeroAvatar src={profile} alt="Ali Ansari" />
      </div>
    </section>
  );
};

export default Hero;
