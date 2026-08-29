import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certs = [
    {
      title: "30-Day Summer Internship Program - Brain Tumor MRI Segmentation",
      issuer: "Technology Innovation Hub (IIT Guwahati)",
      date: "Jul 2026",
      credentialId: "IITG/TIDF/SI2026/081",
      skills: ["Artificial Intelligence (AI)", "Machine Learning"]
    },
    {
      title: "Data Analysis with Python",
      issuer: "IBM",
      date: "Apr 2026",
      credentialId: "2237ba17700944fd9b6ea026b0a0dcbb",
      skills: ["Data Analysis", "Python"]
    },
    {
      title: "Claude AI: From Basics to Build",
      issuer: "PW (PhysicsWallah)",
      date: "Apr 2026",
      credentialId: "81648272-e005-42e9-9eb0-1c5a68f07f29",
      skills: ["Claude AI", "Generative AI"]
    },
    {
      title: "Generative AI for All",
      issuer: "PW (PhysicsWallah)",
      date: "Apr 2026",
      credentialId: "67d47252-ff3f-43ac-be5c-fd7e1b58acb5",
      skills: ["Large Language Models (LLM)", "Machine Learning"]
    },
    {
      title: "Python 101 for Data Science",
      issuer: "Cognitive Class",
      date: "Apr 2026",
      credentialId: "d560c57f8d074143b4318f27dc01b3ca",
      skills: ["Jupyter", "Python"]
    }
  ];

  return (
    <section className="bg-red-600 text-white py-24 px-6 md:px-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10 opacity-30"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex p-4 bg-white/10 rounded-full backdrop-blur-sm mb-6 border border-white/20 shadow-xl">
            <Award size={48} className="text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Licenses & Certifications</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all shadow-xl group"
            >
              <h3 className="text-xl font-bold mb-2 text-white">{cert.title}</h3>
              <p className="text-red-200 font-medium mb-4">{cert.issuer}</p>
              
              <div className="space-y-2 mb-6">
                <p className="text-sm text-white/80">Issued {cert.date}</p>
                <p className="text-xs text-white/60 font-mono break-all">Credential ID: {cert.credentialId}</p>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {cert.skills.map(skill => (
                  <span key={skill} className="px-2 py-1 bg-black/30 text-[10px] font-semibold uppercase tracking-wider text-white/90 rounded border border-white/10">
                    {skill}
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

export default Certifications;
