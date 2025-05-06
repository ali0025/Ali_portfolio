import React, { useState } from "react";
import image1 from "../assets/studyNexus.png";
import image2 from "../assets/Image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import SectionHeading from "./SectionHeading";

// Icon map for tech badges
const techIcons = {
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  Node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  Express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  GitHub: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  Firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  NextJS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
};

// Light glossy background colors for techs
const techColors = {
  React: "rgba(97, 218, 251, 0.15)",
  Node: "rgba(56, 142, 60, 0.15)",
  MongoDB: "rgba(76, 175, 80, 0.15)",
  Express: "rgba(97, 97, 97, 0.15)",
  JavaScript: "rgba(247, 223, 30, 0.2)",
  HTML: "rgba(227, 76, 38, 0.2)",
  CSS: "rgba(38, 77, 228, 0.2)",
  GitHub: "rgba(23, 21, 21, 0.15)",
  Firebase: "rgba(255, 202, 40, 0.2)",
  TypeScript: "rgba(0, 122, 204, 0.2)",
  NextJS: "rgba(0, 0, 0, 0.2)",
};

const data = [
  {
    title: "StudyNexus",
    image: image1,
    techs: ["React", "Node", "MongoDB", "HTML", "CSS", "Express"],
    liveLink: "https://study-nexus-rwkh.vercel.app/",
    githubLink: "https://github.com/ali0025/studyNexus.git",
  },
  {
    title: "AquaSense Web",
    image: image2,
    techs: ["React", "Express", "MongoDB", "Node", "HTML", "NextJS"],
    liveLink: "https://aqua-sense-web-1ogf.vercel.app/",
    githubLink: "https://github.com/ali0025/AquaSense-Web.git",
  },
  {
    title: "Discord Clone",
    image: image4,
    techs: ["Firebase", "React",  "HTML", "CSS","NextJS"],
    liveLink: "https://discord-clone-two-gules.vercel.app/",
    githubLink: "https://github.com/ali0025/discord-clone",
  },
  {
    title: "Todo App",
    image: image3,
    techs: ["HTML", "CSS", "JavaScript", "NextJS"],
    liveLink: "https://todo-app-eta-orpin.vercel.app/",
    githubLink: "https://github.com/ali0025/Todo-App.git",
  },
  {
    title: "password generator",
    image: image1,
    techs: ["React", "JavaScript", "HTML", "NextJS", "Node"],
    liveLink: "https://password-generator-psi-opal.vercel.app/",
    githubLink: "https://github.com/ali0025/password-generator.git",
  },

  
  {
    title: "StudyNexus",
    image: image1,
    techs: ["React", "TypeScript", "NextJS", "Firebase"],
    liveLink: "https://study-nexus-rwkh.vercel.app/",
    githubLink: "https://github.com/ali0025/studyNexus.git",
  },
];

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const totalProjects = data.length;
  const isAllVisible = visibleCount >= totalProjects;

  const handleToggle = () => {
    setVisibleCount(isAllVisible ? 4 : Math.min(visibleCount + 2, totalProjects));
  };

  return (
    <div className="min-h-screen max-w-[1080px] mx-auto w-full bg-[#121212] text-white px-24 sm:px-12 lg:px-8 py-10">
      <SectionHeading highlight="Recent" text="Projects" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 place-items-center max-w-[1200px] mx-auto">
        {data.slice(0, visibleCount).map((item, index) => (
          <div
            key={index}
            className="bg-[#1e1e1e] rounded-2xl p-4 shadow-md w-full max-w-sm text-white"
          >
            <div className="h-48 mb-4 overflow-hidden rounded-xl">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-center">{item.title}</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 gap-x-8 justify-center mb-4">
              {item.techs.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="flex items-center justify-center gap-1 px-2 py-1 rounded-full text-xs text-white"
                  style={{
                    backgroundColor: techColors[tech] || "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 1px 4px rgba(255, 255, 255, 0.05)",
                    backdropFilter: "brightness(1.2)",
                  }}
                >
                  {techIcons[tech] && (
                    <img
                      src={techIcons[tech]}
                      alt={tech}
                      className="w-4 h-4"
                    />
                  )}
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-center gap-3">
              <a
                href={item.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 px-4 py-2 rounded-full text-sm hover:bg-gray-700 transition"
              >
                🌐 Live Demo
              </a>
              <a
                href={item.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 px-4 py-2 rounded-full text-sm hover:bg-gray-700 transition"
              >
                🐱 GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Show More / Less Button */}
      <div className="mt-10 text-center">
        <button
          onClick={handleToggle}
          className="bg-indigo-600 hover:bg-indigo-700 text-lg px-6 py-2 rounded-full transition"
        >
          {isAllVisible ? "View Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default Projects;