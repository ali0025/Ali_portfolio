// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Blog from './pages/Blog';
import { Analytics } from "@vercel/analytics/react"
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import BlogPost from './pages/Blogposts';

function App() {
  return (
    <div className="bg-[#121212] min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        
        <Route path="/article/:slug" element={<BlogPost />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
