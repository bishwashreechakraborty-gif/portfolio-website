import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';

const FeaturedProject = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-red-600/10 opacity-30 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Featured <span className="text-red-500">Masterpiece</span></h2>
          <div className="h-1 w-24 bg-red-600"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold">AI Invisible Cloak</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              A real-time computer vision project that creates an invisibility effect using Python and OpenCV. By manipulating the background and foreground using HSV color detection, it perfectly simulates the iconic Harry Potter invisibility cloak.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Python', 'OpenCV', 'HSV Color Detection', 'Computer Vision'].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-sm font-medium text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4 pt-4">
              <a href="https://github.com/bishwashreechakraborty-gif/AI-Invisible-Cloak" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors">
                <FiGithub size={20} />
                View on GitHub
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative group rounded-2xl overflow-hidden shadow-2xl shadow-red-900/20 aspect-video flex items-center justify-center bg-zinc-900 border border-zinc-800"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-black to-zinc-900 z-10 opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
            <div className="relative z-20 text-red-500/30 group-hover:text-red-500/50 transition-colors duration-500">
               <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12h4l3-9 5 18 3-9h5"/>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
