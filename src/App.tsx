import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Globe, ShieldCheck, Zap } from 'lucide-react';

const App = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#d4af37] selection:text-black">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6 backdrop-blur-md bg-black/20 border-b border-white/5">
        <div className="text-xl font-serif tracking-[0.3em] uppercase italic">
          Moasis <span className="text-[#d4af37]">.</span>
        </div>
        <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-widest text-gray-400">
          <a href="#" className="hover:text-white transition">The Vision</a>
          <a href="#" className="hover:text-white transition">Curated Moods</a>
          <a href="#" className="hover:text-white transition">Membership</a>
        </div>
        <button className="text-[10px] uppercase tracking-widest border border-white/20 px-5 py-2 hover:bg-white hover:text-black transition-all duration-500">
          Access
        </button>
      </nav>

      {/* Main Hero Section */}
      <main className="relative flex flex-col items-center justify-center min-h-screen pt-20 px-6 overflow-hidden">
        
        {/* Aesthetic Background Elements */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl w-full text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#d4af37] text-[10px] md:text-xs uppercase tracking-[0.5em] mb-6 block font-medium"
          >
            Singapore • Kuala Lumpur • Beyond
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-8xl font-serif leading-[1.1] mb-8 tracking-tight"
          >
            Escape the <br /> 
            <span className="italic font-light opacity-90 text-white/80">Everyday.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-400 text-sm md:text-lg max-w-xl mx-auto mb-12 font-light leading-relaxed"
          >
            The world’s first AI-curated travel concierge for the modern elite. 
            From the CBD to serenity in a single click.
          </motion.p>

          {/* Form Section */}
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onSubmit={handleSubmit}
                className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-lg mx-auto"
              >
                <input 
                  type="email" 
                  required
                  placeholder="Private email address"
                  className="w-full md:flex-1 bg-white/5 border border-white/10 px-6 py-4 rounded-none focus:outline-none focus:border-[#d4af37] transition-all text-sm font-light tracking-wide"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button 
                  type="submit"
                  className="w-full md:w-auto bg-[#d4af37] text-black px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white transition-all duration-500 flex items-center justify-center gap-2 group"
                >
                  Request Access <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 border border-[#d4af37]/30 bg-[#d4af37]/5 backdrop-blur-sm"
              >
                <h3 className="text-[#d4af37] font-serif text-2xl mb-2 italic">Invitation Pending.</h3>
                <p className="text-gray-400 text-xs uppercase tracking-widest leading-loose">
                  We have added your name to the private waitlist. <br />
                  A concierge will contact you shortly.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Feature Section (Bento Grid Style) */}
      <section className="px-8 py-32 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="p-8 bg-white/[0.02] border border-white/5 space-y-4">
          <Zap size={20} className="text-[#d4af37]" />
          <h4 className="text-sm uppercase tracking-widest font-semibold">Instant Curation</h4>
          <p className="text-xs text-gray-500 leading-relaxed">AI-driven psychographic filtering. We match your mood, not just your destination.</p>
        </div>
        <div className="p-8 bg-white/[0.02] border border-white/5 space-y-4">
          <Globe size={20} className="text-[#d4af37]" />
          <h4 className="text-sm uppercase tracking-widest font-semibold">Seamless Border</h4>
          <p className="text-xs text-gray-500 leading-relaxed">Integrated VIP fast-track for Singapore and Malaysia crossings.</p>
        </div>
        <div className="p-8 bg-white/[0.02] border border-white/5 space-y-4">
          <ShieldCheck size={20} className="text-[#d4af37]" />
          <h4 className="text-sm uppercase tracking-widest font-semibold">Total Privacy</h4>
          <p className="text-xs text-gray-500 leading-relaxed">Encrypted bookings. Exclusive properties. Discrete luxury at its finest.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-12 text-center text-[9px] text-gray-600 uppercase tracking-[0.5em] border-t border-white/5">
        © 2026 MOASIS ANTONIO — ALL RIGHTS RESERVED
      </footer>
    </div>
  );
};

export default App;
