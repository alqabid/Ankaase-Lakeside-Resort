import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={containerRef} id="home" className="h-[110vh] w-full relative overflow-hidden bg-stone-900">
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-110"
          poster="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-luxury-resort-surrounded-by-nature-4592-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-stone-900"></div>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 p-6 md:p-12 pb-48 md:pb-32 flex flex-col items-start justify-end h-full pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto max-w-5xl"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-12 h-[1px] bg-amber-400"></span>
            <span className="text-amber-400 font-display font-bold text-xs uppercase tracking-[0.3em]">The Ashanti Jewel</span>
          </motion.div>
          
          <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-display font-black text-white leading-[0.8] drop-shadow-2xl mb-12 tracking-tighter">
            Lakeside <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">
              Paradise.
            </span>
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col md:flex-row items-start md:items-center gap-8"
          >
            <p className="text-lg md:text-xl text-white/70 font-medium max-w-md font-body leading-relaxed">
              Where the golden sun meets the mystical waters of Lake Bosomtwe. Your story of serenity begins here.
            </p>
            <a 
              href="#booking"
              className="px-10 py-5 rounded-full bg-amber-400 text-stone-900 font-display font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-2xl shadow-amber-400/20"
            >
              Reserve Now
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-4 group"
        >
          <span className="text-white/30 text-[10px] uppercase tracking-[0.4em] group-hover:text-amber-400 transition-colors">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1 h-2 bg-amber-400 rounded-full"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
