import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const TechStack = () => {
  const technologies = [
    "Python", "C", "C++", "Java", 
    "JavaScript", "HTML", "CSS", "React", 
    "OpenCV", "Machine Learning", "AI", 
    "Git", "GitHub", "SQL"
  ];

  return (
    <section id="skills" className="py-24 bg-dark text-white relative">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading title="Tech Stack" subtitle="Tools & Technologies" />
        
        <div className="flex flex-wrap gap-4 mt-12">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white/80 font-medium hover:bg-red hover:text-white hover:border-red transition-all cursor-default"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red/10 rounded-full blur-[100px] pointer-events-none"></div>
    </section>
  );
};

export default TechStack;
