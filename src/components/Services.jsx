import React from "react";
import api from "../assets/api.svg";
import webdevelopment from "../assets/webdevelopment.svg";
import responsive from "../assets/responsive.svg";
import SectionHeading from "./SectionHeading";

const services = [
  {
    title: "Responsive Design",
    description:
      "Ensuring that the website/mobile app is responsive across all platforms",
    bgColor: "bg-blue-950",
    icon: responsive,
  },
  {
    title: "Web Development",
    description:
      "Ensuring that a website meets the correct standards, and also ensuring it's well maintained",
    bgColor: "bg-slate-900",
    icon: webdevelopment,
  },
//   {
//     title: "Mobile Development",
//     description:
//       "Ensuring that a mobile app meets the correct standards, and also ensuring it's well maintained",
//     bgColor: "bg-indigo-900",
//     icon: mobile,
//   },
  {
    title: "API Development",
    description:
      "Building and integrating APIs to connect front-end and back-end systems efficiently",
    bgColor: "bg-indigo-900",
    icon: api, // replace with your API icon
  }
  ,
];

const Services = () => {
  return (
    <section className="bg-[#121212] w-full py-8 sm:py-12">
      <div className="max-w-[1050px] w-full mx-auto px-24 sm:px-12 lg:px-8">
      <SectionHeading highlight="SERVICES" align="center" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} rounded-xl p-4 sm:p-6 flex flex-col items-center text-center text-white hover:shadow-lg transition duration-300`}
            >
              <img
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mb-3 sm:mb-4"
                src={service.icon}
                alt={service.title}
              />
              <h3 className="font-bold text-base sm:text-lg md:text-xl mb-2">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
