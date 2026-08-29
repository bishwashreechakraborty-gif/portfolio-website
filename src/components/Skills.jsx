import React from 'react';
import { motion } from 'framer-motion';
import { Users, Brain, MessageSquare, Target } from 'lucide-react';

const skills = [
  { name: 'Problem Solving', icon: Brain, description: 'Analytical approach to tackling complex algorithmic and real-world challenges.' },
  { name: 'Team Collaboration', icon: Users, description: 'Thriving in diverse team environments, fostering synergy and shared success.' },
  { name: 'Communication', icon: MessageSquare, description: 'Articulating technical concepts clearly to both technical and non-technical audiences.' },
  { name: 'Adaptability', icon: Target, description: 'Quickly learning and integrating new technologies in fast-paced environments.' }
];

const Skills = () => {
  return (
    <section className="bg-white text-black py-20 px-6 md:px-20 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Professional <span className="text-red-600">Soft Skills</span></h2>
          <div className="h-1 w-24 bg-red-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-red-200 shadow-sm hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300 text-center group"
              >
                <div className="inline-flex p-4 rounded-full bg-red-50 text-red-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{skill.name}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
