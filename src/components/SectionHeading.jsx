import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ title, subtitle, className = "" }) => {
  return (
    <div className={`mb-16 ${className}`}>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-red font-semibold uppercase tracking-wider text-sm mb-2"
      >
        {subtitle}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold"
      >
        {title}
        <span className="text-red">.</span>
      </motion.h2>
    </div>
  );
};

export default SectionHeading;
