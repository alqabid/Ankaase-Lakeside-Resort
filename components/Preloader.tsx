import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[1000] bg-stone-900 flex flex-col items-center justify-center p-12"
        >
          <div className="w-full max-w-md">
            <div className="flex justify-between items-end mb-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-col"
              >
                <span className="text-amber-400 font-display font-black text-4xl uppercase tracking-tighter leading-none">Ankaase</span>
                <span className="text-white/40 font-display font-bold text-xs uppercase tracking-widest mt-1">Lakeside Resort</span>
              </motion.div>
              <span className="text-amber-400 font-mono text-4xl font-light">{Math.round(progress)}%</span>
            </div>
            <div className="h-[1px] w-full bg-white/10 relative overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-amber-400"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-12 text-white/20 font-display font-bold text-[10px] uppercase tracking-[0.3em]"
          >
            Crafting your escape...
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
