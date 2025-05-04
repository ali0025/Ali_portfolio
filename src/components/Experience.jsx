import React, { useEffect } from "react";
import developerIcon from "../assets/exp1.svg"; // replace with your file
import internIcon from "../assets/exp2.svg"; // replace with your file
import SectionHeading from "./SectionHeading";

const experiences = [
   
    {
      title: "MERN Stack Developer",
      description:
        "Built blockchain apps with Solidity, React.js frontend, and Node.js backend with MongoDB.",
      icon: developerIcon,
    },
    {
        title: "Frontend Intern",
        description:
          "Designed React.js support pages and manuals at Zeilony, improving user experience and engagement.",
        icon: internIcon,
      },
  ];
  
  

const Experience = () => {
  useEffect(() => {
    const styles = `
      .experience-card {
        position: relative;
        background-color: #1e1e1e; /* Darker background for contrast */
        border: 2px solid #2d2d2d; /* Subtle border to match theme */
        border-radius: 24px; /* Matches rounded-3xl */
        overflow: hidden; /* Ensure trail doesn't bleed */
        container-type: inline-size; /* For container queries */
      }

      .experience-card::before {
        content: '';
        position: absolute;
        width: 30px; /* 30px long line */
        height: 4px; /* 4px thick */
        background: linear-gradient(90deg, transparent, #a78bfa, transparent); /* Purple-400 glow */
        box-shadow: 0 0 10px #a78bfa, 0 0 20px #a78bfa; /* Glowing effect */
        offset-path: border-box;
        offset-anchor: 100% 50%; /* Anchor right edge to path */
        animation: journey 6s infinite linear;
        z-index: 0;
      }

      @keyframes journey {
        to {
          offset-distance: 100%;
        }
      }

      @container (width > 600px) {
        .experience-card::before {
          animation: journey 12s infinite linear; /* Slower on larger screens */
        }
      }

      .experience-card > * {
        position: relative;
        z-index: 1; /* Ensure content is above the pseudo-element */
      }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
    return () => document.head.removeChild(styleSheet); // Clean up
  }, []);

  return (
    <section className="bg-[#121212] w-full py-12">
      <div className="max-w-[1050px] mx-auto  px-24 sm:px-12 lg:px-8">
      <SectionHeading highlight="Work" text="experience" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="experience-card rounded-3xl p-6 flex items-center gap-6 shadow-lg hover:shadow-purple-500/40 transition"
            >
              <img
                src={exp.icon}
                alt={exp.title}
                className="w-24 h-24 object-contain"
              />
              <div>
                <h3 className="text-white text-xl font-semibold mb-2">
                  {exp.title}
                </h3>
                <p className="text-gray-400 text-sm">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;