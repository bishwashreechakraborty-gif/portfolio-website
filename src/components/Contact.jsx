import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section className="bg-black text-white py-24 px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Let's Build Something <br/><span className="text-red-600">Amazing.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              Whether you have a project in mind or just want to say hi, my inbox is always open. I'll try my best to get back to you!
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-2">Email</h4>
                <a href="mailto:bishwashreechakraborty@gmail.com" className="text-lg hover:text-red-500 transition-colors">
                  bishwashreechakraborty@gmail.com
                </a>
              </div>
              <div>
                <h4 className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-2">Phone</h4>
                <a href="tel:+916000941579" className="text-lg hover:text-red-500 transition-colors">
                  +91 60009 41579
                </a>
              </div>
              <div>
                <h4 className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-2">Location</h4>
                <p className="text-lg">Assam, India</p>
              </div>
              <div>
                <h4 className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-2">Social</h4>
                <a href="https://www.linkedin.com/in/bishwashree-chakraborty-205621327/" target="_blank" rel="noreferrer" className="text-lg hover:text-red-500 transition-colors">LinkedIn Profile</a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required 
                  className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required 
                  className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                  id="message" 
                  required 
                  rows={4}
                  className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>
              
              <button 
                type="submit" 
                disabled={status === 'submitting' || status === 'success'}
                className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {status === 'idle' && <><Send size={20} /> Send Message</>}
                {status === 'submitting' && <span className="animate-pulse">Sending...</span>}
                {status === 'success' && <><CheckCircle2 size={20} className="text-green-600" /> Message Sent!</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
