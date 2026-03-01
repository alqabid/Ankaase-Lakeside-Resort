import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Phone, X, Send } from 'lucide-react';

const FAB: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[90] flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="w-80 glass-dark rounded-[2.5rem] p-8 border border-white/10 shadow-2xl mb-4"
          >
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-xl font-display font-black text-white uppercase tracking-tighter">Quick Chat</h4>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/40 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4 mb-8">
              <p className="text-white/60 text-sm leading-relaxed">
                Need help with your booking? Chat with our concierge team now.
              </p>
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs font-bold uppercase tracking-widest text-white/40">Concierge Online</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a 
                href="https://wa.me/233501234567" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-2xl bg-green-500 text-white font-display font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:scale-105 transition-transform"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Us
              </a>
              <a 
                href="tel:+233501234567" 
                className="w-full py-4 rounded-2xl glass text-white font-display font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Concierge
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {scrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all ${
              isOpen ? "bg-stone-800 text-white rotate-90" : "bg-amber-400 text-stone-900 hover:scale-110"
            }`}
          >
            {isOpen ? <X className="w-8 h-8" /> : <MessageSquare className="w-8 h-8" />}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAB;
