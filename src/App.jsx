import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialBar from './components/SocialBar';
import About from './components/About';
import TechStack from './components/TechStack';
import FeaturedProject from './components/FeaturedProject';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-red selection:text-white relative">
      <Navbar />
      <SocialBar />
      
      <main>
        <Hero />
        
        {/* Wave Red -> White */}
        <div className="w-full bg-light">
          <svg className="w-full h-16 md:h-24 lg:h-32 text-red fill-current block" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,0 C320,120 420,120 720,60 C1020,0 1120,0 1440,120 L1440,0 L0,0 Z"></path>
          </svg>
          <About />
        </div>

        {/* Wave White -> Dark */}
        <div className="w-full bg-dark">
          <svg className="w-full h-16 md:h-24 lg:h-32 text-light fill-current block" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,0 C320,120 420,120 720,60 C1020,0 1120,0 1440,120 L1440,0 L0,0 Z"></path>
          </svg>
          <TechStack />
          <div id="projects">
            <FeaturedProject />
            <Projects />
          </div>
        </div>

        {/* Wave Dark -> White/Red */}
        <div id="skills" className="w-full bg-white relative">
          <svg className="w-full h-16 md:h-24 lg:h-32 text-dark fill-current block" viewBox="0 0 1440 120" preserveAspectRatio="none">
             <path d="M0,0 C320,120 420,120 720,60 C1020,0 1120,0 1440,120 L1440,0 L0,0 Z"></path>
          </svg>
          <Skills />
        </div>
        
        {/* Wave White -> Dark (Experience & Education) */}
        <div id="experience" className="w-full bg-black relative">
          <svg className="w-full h-16 md:h-24 lg:h-32 text-white fill-current block" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,0 C320,120 420,120 720,60 C1020,0 1120,0 1440,120 L1440,0 L0,0 Z"></path>
          </svg>
          <Experience />
          <div className="w-full h-px bg-zinc-900"></div>
          <Education />
        </div>

        {/* Wave Dark -> Red (Certifications) */}
        <div className="w-full bg-red relative">
           <svg className="w-full h-16 md:h-24 lg:h-32 text-dark fill-current block" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,0 C320,120 420,120 720,60 C1020,0 1120,0 1440,120 L1440,0 L0,0 Z"></path>
          </svg>
          <Certifications />
        </div>

        {/* Wave Red -> Dark (Contact) */}
        <div id="contact" className="w-full bg-dark relative">
          <svg className="w-full h-16 md:h-24 lg:h-32 text-red fill-current block" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,0 C320,120 420,120 720,60 C1020,0 1120,0 1440,120 L1440,0 L0,0 Z"></path>
          </svg>
          <Contact />
        </div>

      </main>
      <Footer />
    </div>
  );
}

export default App;
