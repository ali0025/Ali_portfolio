import React, { useState } from "react";
import resumePDF from '../assets/ALI_RESUME.pdf'; // Adjust path as needed
import { 
  FaEnvelope, FaPhone, FaBirthdayCake, FaMapMarkerAlt, 
  FaLinkedin, FaBook, FaChevronDown, FaDownload 
} from "react-icons/fa";
import img from '../assets/IMG_1508.jpg'
// Sidebar Data
const sidebarData = {
  avatar: img,
  name: "Ali Ansari",
  title: "Frontend Developer",
  contacts: [
    { icon: <FaEnvelope />, title: "Email", value: "aliansari8179@gmail.com", link: "mailto:aliansari8179@gmail.com" },
    { icon: <FaPhone />, title: "Phone", value: "+91 8882320268", link: "tel:+918882320268" },
    { icon: <FaBirthdayCake />, title: "Birthday", value: "October 1, 2002" },
    { icon: <FaMapMarkerAlt />, title: "Location", value: "Okhla, New Delhi, India" },
  ],
  socials: [
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/aliansari8179/" },
  ],
};

// Resume Data
const resumeData = {
  education: [
    { 
      institution: "GL Bajaj Institute Of Technology And Management", 
      degree: "BTech in Electronics and Communication Engineering", 
      years: "2021 — 2025 (Expected)", 
      grade: "Avg. SGPA: 7.1" 
    },
    { 
      institution: "Kendriya Vidyalaya", 
      degree: "Class XII, PCM with Computer Science", 
      years: "2021", 
      grade: "73.2%" 
    },
    { 
      institution: "Kendriya Vidyalaya", 
      degree: "Class X", 
      years: "2019", 
      grade: "76.6%" 
    },
  ],
  experience: [
    {
      role: "Frontend Developer",
      company: "Zeilony",
      duration: "May 2023 - Aug 2023",
      description: "Improved user engagement and navigation with responsive designs, optimized performance, created a support webpage, an easy-to-use owner's manual, and added multimedia content, leading to a 20% increase in page views.",
      skills: "React.js, Tailwind CSS, JavaScript",
    },
  ],
  projects: [
    {
      role: "Study Nexus",
      technologies: "Node.js, Express.js, MongoDB, React.js, Redux, Tailwind CSS",
      duration: "Completed",
      description: "Developed a full-stack e-learning platform with RESTful APIs for authentication, course management, and payment processing. Built a responsive front-end with React.js and Tailwind CSS, integrating Cloudinary for media storage and Bcrypt for secure credential hashing. Managed state with Redux for seamless user interactions across student, instructor, and admin roles.",
    },
    {
      role: "FinTrack API",
      technologies: "Python, Flask, PostgreSQL",
      duration: "Completed",
      description: "Developed a Python/Flask accounting backend with REST API and PostgreSQL integration, ensuring data integrity through proper database design. Implemented comprehensive testing, transaction logging, and Docker containerization for a production-ready financial application.",
    },
    {
      role: "AquaSense Web",
      technologies: "Firebase, JavaScript, HTML, CSS",
      duration: "Completed",
      description: "Conceptualized a solar-powered IoT-based sea weather and pollution transmitter buoy with sensors and wireless communication. Integrated Firebase to store sensor data and developed a weather app website to display real-time marine conditions for environmental analysis and disaster management.",
    },
  ],
  skills: [
    { name: "C/C++", level: "80%" },
    { name: "JavaScript & React", level: "85%" },
    { name: "Node.js & Express", level: "80%" },
    { name: "Python & Flask", level: "75%" },
    { name: "SQL & Databases", level: "70%" },
  ],
};

const Resume = () => {
  // State for Sidebar Toggle (Mobile)
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  // Handle Sidebar Toggle
  const toggleSidebar = () => setIsSidebarActive(!isSidebarActive);

  return (
    <div className="bg-[#121212] text-white font-poppins min-h-screen">
      <main className="flex flex-col lg:flex-row gap-6 max-w-[1200px] mx-auto p-4 lg:p-8">
        {/* Sidebar */}
        <aside
          className={`bg-[#1e1e1e] border border-[#3b3b3b] rounded-[20px] p-4 lg:p-8 shadow-lg max-h-[112px] lg:max-h-[calc(100vh-120px)] overflow-hidden transition-all duration-500 lg:sticky lg:top-[60px] lg:w-[25%] ${
            isSidebarActive ? "max-h-[405px] lg:max-h-[calc(100vh-120px)]" : ""
          }`}
        >
          <div className="flex items-center gap-4 lg:flex-col lg:items-center relative">
            <img
              src={sidebarData.avatar}
              alt={sidebarData.name}
              className="w-20 h-20 lg:w-[150px] lg:h-[150px] rounded-[20px] bg-gradient-to-br from-[#404040] to-[#303030]"
            />
            <div className="flex-1 lg:text-center">
              <h1 className="text-[#f5f5f5] text-[17px] lg:text-[26px] font-medium lg:mb-4">{sidebarData.name}</h1>
              <p className="text-[#f5f5f5] bg-[#2d2d2d] text-[11px] lg:text-[15px] font-light px-3 py-1 rounded-lg inline-block">{sidebarData.title}</p>
            </div>
            <button
              onClick={toggleSidebar}
              className="absolute top-4 right-4 bg-gradient-to-br from-[#404040] to-transparent text-[#8b5cf6] p-2 rounded-[10px] shadow-lg lg:hidden"
            >
              <FaChevronDown className={`transition-transform ${isSidebarActive ? "rotate-180" : ""}`} />
            </button>
          </div>
          <div
            className={`mt-4 opacity-0 invisible transition-opacity duration-500 lg:opacity-100 lg:visible ${
              isSidebarActive ? "opacity-100 visible" : ""
            }`}
          >
            <div className="h-[1px] bg-[#3b3b3b] my-4"></div>
            <ul className="grid grid-cols-1 lg:grid-cols-1 gap-4">
              {sidebarData.contacts.map((contact, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-[#404040] to-transparent w-8 h-8 rounded-lg flex items-center justify-center text-[#8b5cf6] shadow-lg">
                    {contact.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-[#d4d4d4]/70 text-[11px] lg:text-[14px] uppercase">{contact.title}</p>
                    {contact.link ? (
                      <a href={contact.link} className="text-[#f5f5f5] text-[13px] lg:text-[14px] truncate">{contact.value}</a>
                    ) : (
                      <p className="text-[#f5f5f5] text-[13px] lg:text-[14px]">{contact.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <div className="h-[1px] bg-[#3b3b3b] my-4"></div>
            <ul className="flex gap-4 justify-start lg:justify-center">
              {sidebarData.socials.map((social, idx) => (
                <li key={idx}>
                  <a href={social.link} target="_blank" rel="noopener noreferrer" className="text-[#d4d4d4]/70 text-2xl hover:text-[#d4d4d4] transition">
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <div className="relative w-full lg:w-[75%]">
          {/* Resume Section */}
          <article className="bg-[#1e1e1e] border border-[#3b3b3b] rounded-[20px] p-4 lg:p-8 shadow-lg">
            <header className="flex justify-between items-center">
              <h2 className="text-[24px] lg:text-[32px] text-[#f5f5f5] capitalize relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[30px] lg:after:w-[40px] after:h-[3px] lg:after:h-[5px] after:bg-gradient-to-r after:from-[#8b5cf6] after:to-[#a78bfa] after:rounded mb-8">
                Resume
              </h2>
              <a
                href={resumePDF}
                download="Ali_Ansari_Resume.pdf"
                className="bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] text-[#f5f5f5] text-[14px] lg:text-[16px] font-medium px-4 py-2 rounded-lg flex items-center gap-2 hover:from-[#7c3aed] hover:to-[#9f77fb] transition"
              >
                <FaDownload />
                Download CV
              </a>
            </header>
            <section className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-[#404040] to-transparent w-8 h-8 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center text-[#8b5cf6] shadow-lg">
                  <FaBook size={18} />
                </div>
                <h3 className="text-[18px] lg:text-[24px] text-[#f5f5f5] capitalize">Education</h3>
              </div>
              <ol className="ml-12 lg:ml-16 relative">
                {resumeData.education.map((edu, idx) => (
                  <li key={idx} className={`relative ${idx !== resumeData.education.length - 1 ? "mb-5" : ""}`}>
                    <div className="absolute top-1 -left-8 lg:-left-10 w-[1px] h-[calc(100%+20px)] bg-[#3b3b3b] -translate-y-6"></div>
                    <div className="absolute top-1 -left-[34px] lg:-left-[43px] w-2 h-2 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] shadow-[0_0_0_4px_#3b3b3b]"></div>
                    <h4 className="text-[14px] lg:text-[15px] text-[#f5f5f5] mb-2">{edu.institution}</h4>
                    <span className="text-[#7c3aed] text-[14px] lg:text-[15px] font-normal block mb-2">{edu.years}</span>
                    <p className="text-[#d4d4d4] text-[14px] lg:text-[15px] font-light leading-relaxed">
                      {edu.degree}
                      <br />
                      Grade: {edu.grade}
                    </p>
                  </li>
                ))}
              </ol>
            </section>
            <section className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-[#404040] to-transparent w-8 h-8 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center text-[#8b5cf6] shadow-lg">
                  <FaBook size={18} />
                </div>
                <h3 className="text-[18px] lg:text-[24px] text-[#f5f5f5] capitalize">Experience</h3>
              </div>
              <ol className="ml-12 lg:ml-16 relative">
                {resumeData.experience.map((exp, idx) => (
                  <li key={idx} className={`relative ${idx !== resumeData.experience.length - 1 ? "mb-5" : ""}`}>
                    <div className="absolute top-1 -left-8 lg:-left-10 w-[1px] h-[calc(100%+20px)] bg-[#3b3b3b] -translate-y-6"></div>
                    <div className="absolute top-1 -left-[34px] lg:-left-[43px] w-2 h-2 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] shadow-[0_0_0_4px_#3b3b3b]"></div>
                    <h4 className="text-[14px] lg:text-[15px] text-[#f5f5f5] mb-2">{exp.role}</h4>
                    <span className="text-[#7c3aed] text-[14px] lg:text-[15px] font-normal block">{exp.company}</span>
                    <span className="text-[#7c3aed] text-[14px] lg:text-[15px] font-normal block mb-2">{exp.duration}</span>
                    <p className="text-[#d4d4d4] text-[14px] lg:text-[15px] font-light leading-relaxed mb-2">{exp.description}</p>
                    <p className="text-[#d4d4d4] text-[14px] lg:text-[15px] font-light leading-relaxed">
                      Skills: {exp.skills}
                    </p>
                  </li>
                ))}
              </ol>
            </section>
            <section className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-[#404040] to-transparent w-8 h-8 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center text-[#8b5cf6] shadow-lg">
                  <FaBook size={18} />
                </div>
                <h3 className="text-[18px] lg:text-[24px] text-[#f5f5f5] capitalize">Projects</h3>
              </div>
              <ol className="ml-12 lg:ml-16 relative">
                {resumeData.projects.map((proj, idx) => (
                  <li key={idx} className={`relative ${idx !== resumeData.projects.length - 1 ? "mb-5" : ""}`}>
                    <div className="absolute top-1 -left-8 lg:-left-10 w-[1px] h-[calc(100%+20px)] bg-[#3b3b3b] -translate-y-6"></div>
                    <div className="absolute top-1 -left-[34px] lg:-left-[43px] w-2 h-2 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] shadow-[0_0_0_4px_#3b3b3b]"></div>
                    <h4 className="text-[14px] lg:text-[15px] text-[#f5f5f5] mb-2">{proj.role}</h4>
                    <span className="text-[#7c3aed] text-[14px] lg:text-[15px] font-normal block">{proj.technologies}</span>
                    <span className="text-[#7c3aed] text-[14px] lg:text-[15px] font-normal block mb-2">{proj.duration}</span>
                    <p className="text-[#d4d4d4] text-[14px] lg:text-[15px] font-light leading-relaxed mb-2">{proj.description}</p>
                  </li>
                ))}
              </ol>
            </section>
            <section>
              <h3 className="text-[18px] lg:text-[24px] text-[#f5f5f5] capitalize mb-5">My skills</h3>
              <ul className="p-5">
                {resumeData.skills.map((skill, idx) => (
                  <li key={idx} className={`${idx !== resumeData.skills.length - 1 ? "mb-4 lg:mb-6" : ""}`}>
                    <div className="flex justify-between items-center mb-2">
                      <h5 className="text-[13px] lg:text-[15px] text-[#f5f5f5] font-medium">{skill.name}</h5>
                      <span className="text-[#d4d4d4] text-[13px] lg:text-[15px] font-light">{skill.level}</span>
                    </div>
                    <div className="w-full h-2 bg-[#3b3b3b] rounded-full">
                      <div className="h-full bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] rounded-full" style={{ width: skill.level }}></div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </div>
      </main>

      {/* Custom CSS for Scrollbar */}
      <style>{`
        body::-webkit-scrollbar { width: 20px; }
        body::-webkit-scrollbar-track { background: #0a0a0a; }
        body::-webkit-scrollbar-thumb {
          border: 5px solid #0a0a0a;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          box-shadow: inset 1px 1px 0 rgba(255, 255, 255, 0.11), inset -1px -1px 0 rgba(255, 255, 255, 0.11);
        }
        body::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.15); }
        body::-webkit-scrollbar-button { height: 60px; }
      `}</style>
    </div>
  );
};

export default Resume;