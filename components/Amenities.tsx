import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, UtensilsCrossed, Anchor, Flower2 } from 'lucide-react';

const Amenities: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const amenities = [
    {
      id: "jetski",
      title: "Adrenaline",
      desc: "Feel the raw power of our high-performance jet skis as you carve through the glass-like surface of the lake.",
      icon: <Zap className="w-8 h-8" />,
      img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "dining",
      title: "Gastronomy",
      desc: "A curated culinary journey featuring the finest local ingredients and world-class preparation by the shore.",
      icon: <UtensilsCrossed className="w-8 h-8" />,
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "cruise",
      title: "Voyages",
      desc: "Drift into the golden hour on our private luxury vessel, where the horizon meets the crater's edge.",
      icon: <Anchor className="w-8 h-8" />,
      img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "spa",
      title: "Sanctuary",
      desc: "Find your center with holistic treatments designed to harmonize your spirit with the natural rhythm of the lake.",
      icon: <Flower2 className="w-8 h-8" />,
      img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section id="amenities" className="py-24 px-6 md:px-12 bg-stone-900 relative min-h-screen flex items-center overflow-hidden">
      {/* Background Crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={amenities[activeTab].img} 
            alt={amenities[activeTab].title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/40 to-transparent"></div>
        </motion.div>
      </AnimatePresence>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[10px] font-display font-bold uppercase tracking-widest text-white/60">Activities Open Today</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-black mb-8 leading-tight">
                Play in <br />
                <span className="text-amber-400">Paradise.</span>
              </h2>
              
              <div className="grid grid-cols-2 gap-4 mb-12">
                {amenities.map((a, i) => (
                  <button
                    key={a.id}
                    onClick={() => setActiveTab(i)}
                    className={`p-6 rounded-3xl border transition-all flex flex-col items-start gap-4 text-left group ${
                      activeTab === i 
                      ? "bg-amber-400 border-amber-400 text-stone-900 scale-105 shadow-2xl shadow-amber-400/20" 
                      : "bg-white/5 border-white/10 text-white hover:bg-white/10"
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                      activeTab === i ? "bg-stone-900 text-amber-400" : "bg-white/10 text-white group-hover:text-amber-400"
                    }`}>
                      {a.icon}
                    </div>
                    <span className="font-display font-bold uppercase tracking-widest text-xs">{a.title}</span>
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-md"
                >
                  <h3 className="text-3xl font-display font-black mb-4 text-white">{amenities[activeTab].title}</h3>
                  <p className="text-xl text-white/70 leading-relaxed mb-8">{amenities[activeTab].desc}</p>
                  
                  <div className="flex gap-6 items-center pt-6 border-t border-white/10 opacity-60">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-display font-bold uppercase tracking-widest text-amber-400">Equipment</span>
                      <span className="text-xs text-white font-medium">Pro-Grade Gear</span>
                    </div>
                    <div className="w-px h-8 bg-white/10"></div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-display font-bold uppercase tracking-widest text-amber-400">Safety</span>
                      <span className="text-xs text-white font-medium">Certified Guides</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
