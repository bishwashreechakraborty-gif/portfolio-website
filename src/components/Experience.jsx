import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Summer Intern",
      company: "Technology Innovation Hub (IIT Guwahati)",
      location: "Guwahati, Assam, India · On-site",
      date: "Jul 2026 - Present",
      desc: "Project: MRI Brain Tumor Classification & Segmentation. Academic internship project showcasing Deep Learning pipeline for Brain Tumor Classification.",
      skills: ["Python", "Deep Learning", "Artificial Intelligence", "Machine Learning"]
    },
    {
      role: "Social Work Intern",
      company: "Mother Old Age Home",
      location: "Guwahati, Assam, India · On-site",
      date: "Jul 2025 - Aug 2025",
      desc: "Assisted in daily operations and social welfare activities, organized engagement programs, conducted field observations, and collaborated with a team.",
      skills: ["Social Work", "Team Collaboration", "Interpersonal Skills"]
    }
  ];

  return (
    <section id="experience" className="bg-black text-white py-20 px-6 md:px-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Professional <span className="text-red-500">Experience</span></h2>
          <div className="h-1 w-24 bg-red-600"></div>
        </motion.div>

        <div className="relative border-l border-zinc-800 pl-8 ml-4 space-y-12">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-[41px] top-0 p-2 bg-zinc-950 border border-zinc-800 rounded-full text-red-500 shadow-[0_0_15px_rgba(220,38,38,0.3)]">
                <Briefcase size={24} />
              </div>
              
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-red-500/30 transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{item.role}</h3>
                    <h4 className="text-red-400 text-lg font-medium">{item.company}</h4>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm font-medium bg-black/50 px-4 py-2 rounded-full border border-zinc-800 w-fit">
                    <Calendar size={16} />
                    <span>{item.date}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-gray-400 mb-6">
                  <MapPin size={18} className="text-gray-500" />
                  <span className="text-md">{item.location}</span>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {item.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {item.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-black text-xs font-medium text-gray-300 rounded-md border border-zinc-800">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
