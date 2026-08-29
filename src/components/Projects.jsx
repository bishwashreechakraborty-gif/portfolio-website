import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: 'FoodScan',
    description: 'A comprehensive food scanning and analysis application helping users track nutritional value.',
    tags: ['React', 'Node.js', 'API Integration']
  },
  {
    title: 'MRI Brain Tumor Detection',
    description: 'Deep learning model designed to accurately detect and classify brain tumors from MRI scans.',
    tags: ['Python', 'TensorFlow', 'Deep Learning']
  },
  {
    title: 'Student Admission Portal',
    description: 'Robust desktop application built with Java to streamline the university admission process.',
    tags: ['Java', 'Swing', 'MySQL']
  },
  {
    title: 'Digit Recognition',
    description: 'Handwritten digit recognition implemented entirely from scratch without external ML libraries.',
    tags: ['Python', 'Mathematics', 'Neural Networks']
  }
];

const Projects = () => {
  return (
    <section className="bg-zinc-950 text-white py-20 px-6 md:px-20 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Recent <span className="text-red-500">Innovations</span></h2>
            <div className="h-1 w-24 bg-red-600"></div>
          </div>
          
          <a href="https://github.com/bishwashreechakraborty-gif?tab=repositories" target="_blank" rel="noreferrer" className="mt-6 md:mt-0 flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
            Explore All My Repositories <Code2 size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:-translate-y-2 hover:border-red-500/50 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold group-hover:text-red-400 transition-colors">{project.title}</h3>
                <a href="https://github.com/bishwashreechakraborty-gif?tab=repositories" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
                  <FiGithub size={24} />
                </a>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-black text-xs font-medium text-gray-300 rounded-md border border-zinc-800">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
