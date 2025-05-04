import React from 'react'

import Hero from "../components/Hero";
import TechStack from '../components/TechStack';
import Services from '../components/Services';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import LatestPosts from '../components/LatestPosts';

function Homepage() {
  return (
    <div className=" bg-[#121212] font-sans" id="root">
      
      <Hero />
      <TechStack/>
      <Services/>
      <Experience/>
      <Projects/>
      <LatestPosts/>
     
      
      
    </div>
  )
}

export default Homepage
