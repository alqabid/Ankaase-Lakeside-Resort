import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Waves, Utensils, Music, Ship, Coffee, Sparkles } from 'lucide-react';

const Amenities: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const amenities = [
    {
      id: "jetski",
      title: "Jet Skiing",
      desc: "Feel the rush of adrenaline as you zip across the calm waters of Lake Bosomtwe.",
      icon: <Waves className="w-8 h-8" />,
      img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "dining",
      title: "Lakeside Dining",
      desc: "Savor the freshest local tilapia and international delicacies with a view.",
      icon: <Utensils className="w-8 h-8" />,
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "cruise",
      title: "Sunset Cruise",
      desc: "Relax on our luxury boat as the sun dips below the crater's rim.",
      icon: <Ship className="w-8 h-8" />,
      img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "spa",
      title: "Spa & Wellness",
      desc: "Rejuvenate your body and mind with our signature lakeside treatments.",
      icon: <Sparkles className="w-8 h-8" />,
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
                  <p className="text-xl text-white/70 leading-relaxed">{amenities[activeTab].desc}</p>
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
