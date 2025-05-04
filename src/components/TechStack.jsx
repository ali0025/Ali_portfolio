import React from 'react';

import reacticon from '../assets/react-svgrepo-com.svg'
import javascript from '../assets/javascript-svgrepo-com.svg'
import mongo from '../assets/mongo-svgrepo-com.svg'
import tailwind from '../assets/tailwind-svgrepo-com.svg'
import html from '../assets/html-5-svgrepo-com.svg'
import css from '../assets/css-3-svgrepo-com.svg'
import docker from '../assets/docker-svgrepo-com.svg'
import express from '../assets/express-svgrepo-com.svg'
import postman from '../assets/postman-icon-svgrepo-com.svg'
import nodejs from '../assets/nodejs-1-logo-svgrepo-com.svg'
import SectionHeading from './SectionHeading';

const stats = [
  { number: 5, label: 'Certifications Earned' },
  { number: 118, label: 'LeetCode Problems Solved' },
  { number: 15, label: 'Github Repositories' },
  { number: 100, label: 'Code Quality' },
];

const techStack = [
  { icon: <img src={reacticon} alt="React" className='w-[30px] h-[30px]' />, label: 'React' },
  { icon: <img src={javascript} alt="JavaScript" className='w-[30px] h-[30px]' />, label: 'JavaScript' },
  { icon: <img src={html} alt="HTML5" className='w-[30px] h-[30px]' />, label: 'HTML5' },
  { icon: <img src={css} alt="CSS3" className='w-[30px] h-[30px]' />, label: 'CSS3' },
  { icon: <img src={tailwind} alt="Tailwind" className='w-[30px] h-[30px]' />, label: 'Tailwind' },
  { icon: <img src={mongo} alt="MongoDB" className='w-[30px] h-[30px]' />, label: 'MongoDB' },
  { icon: <img src={docker} alt="Docker" className='w-[30px] h-[30px]' />, label: 'Docker' },
  { icon: <img src={nodejs} alt="Node.js" className='w-[30px] h-[30px]' />, label: 'Node.js' },
  { icon: <img src={express} alt="Express" className='w-[30px] h-[30px]' />, label: 'Express' },
  { icon: <img src={postman} alt="Postman" className='w-[30px] h-[30px]' />, label: 'Postman' },
];

const TechStack = () => {
  return (
    <div className="bg-[#121212] text-[#DEDEEA] p-4 sm:p-6 md:p-10 rounded-xl w-full max-w-[1080px] mx-auto px-24 sm:px-12 lg:px-8">
      {/* Stats Section */}
      <div className="grid grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="p-2 sm:p-4">
            <div className="text-xl sm:text-2xl font-bold">{stat.number}</div>
            <div className="text-xs sm:text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Tech Stack Title */}
      <SectionHeading highlight="Tech" text="Stack" align='center' />

      {/* Tech Icons Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6   lg:px-8">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-2 sm:p-3 md:p-4 bg-[#12121226]  border border-[#232425] rounded-lg hover:bg-[rgb(39,39,39)] transition-all duration-300"
          >
            <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
              {React.cloneElement(tech.icon, { 
                className: 'w-full h-full object-contain' 
              })}
            </div>
            <span className="mt-1 sm:mt-2 text-xs sm:text-sm">{tech.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;