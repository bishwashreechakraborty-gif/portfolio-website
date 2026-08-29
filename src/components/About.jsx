import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { Code, Cpu, Eye, BookOpen } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Code size={32} className="text-red mb-4" />, value: "17+", label: "GitHub Repositories" },
    { icon: <Cpu size={32} className="text-red mb-4" />, value: "Multiple", label: "AI/ML Projects" },
    { icon: <Eye size={32} className="text-red mb-4" />, value: "Focus", label: "Computer Vision" },
    { icon: <BookOpen size={32} className="text-red mb-4" />, value: "B.Tech", label: "CSE Student" }
  ];

  return (
    <section id="about" className="py-24 bg-light text-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeading title="About Me" subtitle="Get to know me" className="!mb-8" />
            <h3 className="text-2xl font-semibold mb-6">
              A tech enthusiast dedicated to building intelligent solutions.
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Hello! I'm Bishwashree Chakraborty, a B.Tech Computer Science and Engineering student at Barak Valley Engineering College. My journey in technology is driven by a deep fascination with how Artificial Intelligence and Machine Learning can solve complex, real-world problems.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With a strong focus on Computer Vision and Software Development, I continually seek to expand my knowledge and apply it through hands-on projects. Whether it's crafting algorithms or building robust applications, I'm always eager for the next challenge.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:border-red transition-all group"
              >
                {stat.icon}
                <h4 className="text-3xl font-bold mb-2 group-hover:text-red transition-colors">{stat.value}</h4>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
