import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology, Computer Science Engineering",
      institution: "Barak Valley Engineering College",
      location: "Assam, India",
      date: "Aug 2024 - Present",
      grade: "",
      desc: "Skills: C, CSS, React, AI/ML, and more.",
    },
    {
      degree: "All India Senior School Certificate (AISSC), Science (PCM)",
      institution: "Sai Vikash Vidya Niketan",
      date: "Aug 2021 - May 2023",
      grade: "Grade: 73%",
      desc: "",
    },
    {
      degree: "High School Leaving Certificate (HSLC), General Studies",
      institution: "Emmanuel English Higher Secondary School",
      date: "Feb 2019 - Jul 2021",
      grade: "Grade: 73.33%",
      desc: "Served as Class Captain. Actively represented the school in science competitions and a consistent podium finisher in sports.",
    }
  ];

  return (
    <section id="education" className="bg-zinc-950 text-white py-20 px-6 md:px-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Education <span className="text-red-500">Journey</span></h2>
          <div className="h-1 w-24 bg-red-600"></div>
        </motion.div>

        <div className="relative border-l border-zinc-800 pl-8 ml-4 space-y-12">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-[41px] top-0 p-2 bg-zinc-950 border border-zinc-800 rounded-full text-red-500 shadow-[0_0_15px_rgba(220,38,38,0.3)]">
                <GraduationCap size={24} />
              </div>
              
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-red-500/30 transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{item.degree}</h3>
                    <h4 className="text-red-400 text-lg font-medium">{item.institution}</h4>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <div className="flex items-center gap-2 text-gray-400 text-sm font-medium bg-black/50 px-4 py-2 rounded-full border border-zinc-800 w-fit">
                      <Calendar size={16} />
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
                
                {(item.location || item.grade) && (
                  <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-6">
                    {item.location && (
                      <div className="flex items-center gap-2">
                        <MapPin size={18} className="text-gray-500" />
                        <span className="text-md">{item.location}</span>
                      </div>
                    )}
                    {item.grade && (
                      <div className="flex items-center gap-2">
                        <Award size={18} className="text-red-500" />
                        <span className="text-md text-gray-300 font-semibold">{item.grade}</span>
                      </div>
                    )}
                  </div>
                )}
                
                {item.desc && (
                  <p className="text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
