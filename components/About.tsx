import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Feather, ChefHat } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Compass className="w-8 h-8" />,
      title: "Meteorite Legacy",
      desc: "Discover Ghana's only natural lake, born from a celestial impact over a million years ago."
    },
    {
      icon: <Feather className="w-8 h-8" />,
      title: "Soulful Serenity",
      desc: "Transcend the ordinary. Wake up to the rhythmic whisper of calm waters and morning mist."
    },
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: "Artisanal Dining",
      desc: "From lake to table. Experience the refined essence of Ashanti flavors and fresh local catch."
    }
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-stone-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-black mb-8 leading-tight">
              The Vibe is <br />
              <span className="text-amber-400">Unmatched.</span>
            </h2>
            <p className="text-xl text-white/70 leading-relaxed mb-12">
              Ankaase Lakeside Resort isn't just a place to stay; it's a feeling. 
              Nestled on the banks of Lake Bosomtwe, we offer a unique blend of 
              adventure and relaxation that you won't find anywhere else in Ghana.
            </p>
            
            <div className="space-y-8 mb-12">
              {features.map((f, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-amber-400/10 flex items-center justify-center text-amber-400 shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold mb-2">{f.title}</h4>
                    <p className="text-white/60">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-8 pt-8 border-t border-white/5 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                  <span className="text-[8px] font-black">ECO</span>
                </div>
                <span className="text-[10px] font-display font-bold uppercase tracking-widest">Certified Green</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                  <span className="text-[8px] font-black">5★</span>
                </div>
                <span className="text-[10px] font-display font-bold uppercase tracking-widest">Luxury Rated</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                  <span className="text-[8px] font-black">GHA</span>
                </div>
                <span className="text-[10px] font-display font-bold uppercase tracking-widest">Tourism Board</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1780&auto=format&fit=crop" 
                alt="Resort View" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 glass p-8 rounded-3xl max-w-xs hidden md:block">
              <p className="text-lg font-display font-bold italic">
                "The most peaceful place I've ever visited in West Africa."
              </p>
              <p className="text-amber-400 text-sm mt-4 font-bold uppercase tracking-widest">
                — Happy Guest
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
