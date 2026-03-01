import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Akosua Mensah",
      role: "Travel Blogger",
      text: "The jet skiing experience was out of this world. The lake is so calm and the staff are incredibly professional.",
      rating: 5,
      img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1887&auto=format&fit=crop"
    },
    {
      name: "Kofi Boateng",
      role: "Family Vacationer",
      text: "Best tilapia I've had in years. The family suite was spacious and the view of the sunrise over the lake is something I'll never forget.",
      rating: 5,
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
    },
    {
      name: "Sarah Jenkins",
      role: "Digital Nomad",
      text: "Perfect place to disconnect. The Wi-Fi was surprisingly good for such a remote location, but the serenity is the real draw.",
      rating: 5,
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-stone-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-black mb-4"
          >
            What Our <br />
            <span className="text-amber-400">Guests Say.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-[2.5rem] relative group hover:bg-white/5 transition-all border border-white/5"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-amber-400/10 group-hover:text-amber-400/20 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-lg text-white/80 leading-relaxed mb-8 italic">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400/30">
                  <img src={review.img} alt={review.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white">{review.name}</h4>
                  <p className="text-white/40 text-xs uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
