import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-red flex items-center pt-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <p className="text-white font-medium uppercase tracking-widest mb-4">
              B.Tech CSE Student & Developer
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tighter">
              Hi, I'm <br className="hidden lg:block" />Bishwashree
            </h1>
            <h2 className="text-2xl md:text-3xl text-white/90 font-light mb-6">
              Building ideas into intelligent software.
            </h2>
            <p className="text-white/80 max-w-lg mb-10 text-lg">
              Passionate about AI/ML, Computer Vision, and Software Development. Currently studying at Barak Valley Engineering College.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-8 py-3 bg-white text-red font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-all text-sm">
                View My Work
              </a>
              <a href="#contact" className="px-8 py-3 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-red transition-all text-sm">
                Contact Me
              </a>
              <a href="/resume.pdf" className="px-8 py-3 text-white font-bold uppercase tracking-wider underline hover:text-black transition-colors text-sm flex items-center">
                Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 flex justify-center md:justify-end mt-12 md:mt-0"
          >
            <div className="relative w-full max-w-xl flex items-end justify-center group scale-100 md:scale-110 md:translate-x-4 lg:translate-x-12">
              {/* Animated Glowing Aura Behind Image */}
              <motion.div 
                animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-white/20 rounded-full blur-[80px] -z-10"
              ></motion.div>
              
              <motion.img
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                src="/images/profile.png"
                alt="Bishwashree Chakraborty"
                className="relative z-10 w-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-h-[85vh]"
                style={{ 
                  WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                  maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                }}
              />
              
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-4 md:-left-12 top-1/3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-3 font-bold uppercase text-xs tracking-wider rounded-xl shadow-2xl z-20 flex items-center gap-2"
              >
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span>AI / ML</span>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span>COMPUTER VISION</span>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 md:-right-8 bottom-1/4 bg-black/50 backdrop-blur-md text-white px-4 py-3 border border-white/10 font-bold uppercase text-xs tracking-wider rounded-xl shadow-2xl z-20"
              >
                AVAILABLE FOR OPPORTUNITIES
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
