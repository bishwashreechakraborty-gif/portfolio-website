import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

const SocialBar = () => {
  const socials = [
    { icon: <FiGithub size={20} />, href: 'https://github.com/bishwashreechakraborty-gif', label: 'GitHub' },
    { icon: <FiLinkedin size={20} />, href: 'https://www.linkedin.com/in/bishwashree-chakraborty-205621327/', label: 'LinkedIn' },
    { icon: <FiInstagram size={20} />, href: 'https://www.instagram.com/_b_chakraborty/', label: 'Instagram' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="hidden md:flex fixed left-8 bottom-0 flex-col items-center gap-6 z-40"
    >
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          className="text-white/50 hover:text-red transition-all hover:-translate-y-1"
          aria-label={social.label}
        >
          {social.icon}
        </a>
      ))}
      <div className="w-px h-24 bg-white/20 mt-2"></div>
    </motion.div>
  );
};

export default SocialBar;
