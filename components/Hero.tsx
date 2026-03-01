import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="h-screen w-full relative overflow-hidden bg-stone-900">
      <div className="absolute inset-0 w-full h-full">
        {/* Autoplay video background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-luxury-resort-surrounded-by-nature-4592-large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* Overlay to make text readable */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80"></div>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-6 md:p-12 pb-32 md:pb-20 flex flex-col items-start justify-end h-full pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="pointer-events-auto max-w-4xl pt-20"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-amber-400 text-stone-900 px-3 py-1 rounded-lg text-xs font-display font-bold uppercase tracking-wider shadow-lg">
              #Trending
            </div>
            <div className="bg-white/20 backdrop-blur text-white px-3 py-1 rounded-lg text-xs font-display font-bold uppercase tracking-wider">
              @AnkaaseResort
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black text-white leading-[0.9] drop-shadow-xl mb-8 tracking-tighter">
            Lakeside <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">
              Vibes Only.
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-white/90 font-medium bg-black/40 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] inline-block max-w-xl border border-white/10 font-body leading-relaxed">
            Jet skis, boat cruises, and that perfect tilapia. Your weekend story starts at Ankaase.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 right-8 z-20"
      >
        <a
          href="#about"
          className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-2xl shadow-black/50 animate-bounce hover:scale-110 transition-transform cursor-pointer text-stone-900"
        >
          <ChevronDown className="w-8 h-8" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
