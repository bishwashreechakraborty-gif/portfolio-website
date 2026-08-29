import React from 'react';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white relative overflow-hidden py-12 border-t border-zinc-900">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5 select-none overflow-hidden">
        <h1 className="text-[12vw] font-black leading-none whitespace-nowrap tracking-tighter">
          BISHWASHREE
        </h1>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8">Bishwashree</h2>
        
        <div className="flex gap-6 mb-12">
          <a href="https://github.com/bishwashreechakraborty-gif" target="_blank" rel="noreferrer" className="p-3 bg-zinc-900 rounded-full hover:bg-red-600 hover:-translate-y-1 transition-all duration-300">
            <FiGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/bishwashree-chakraborty-205621327/" target="_blank" rel="noreferrer" className="p-3 bg-zinc-900 rounded-full hover:bg-red-600 hover:-translate-y-1 transition-all duration-300">
            <FiLinkedin size={20} />
          </a>
          <a href="https://www.instagram.com/_b_chakraborty/" target="_blank" rel="noreferrer" className="p-3 bg-zinc-900 rounded-full hover:bg-red-600 hover:-translate-y-1 transition-all duration-300">
            <FiInstagram size={20} />
          </a>
        </div>
        
        <p className="text-zinc-500 text-sm">
          &copy; {currentYear > 2026 ? currentYear : 2026} Bishwashree Chakraborty. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
