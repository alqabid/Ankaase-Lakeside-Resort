import React from 'react';
import { motion } from 'framer-motion';
import { Bed, Users, Maximize } from 'lucide-react';

const Rooms: React.FC = () => {
  const rooms = [
    {
      id: "deluxe",
      title: "Deluxe Lake View",
      price: "GHS 1,200",
      img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
      features: ["King Bed", "2 Guests", "45 sqm"]
    },
    {
      id: "suite",
      title: "Executive Suite",
      price: "GHS 2,500",
      img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
      features: ["Super King", "2 Guests", "75 sqm"]
    },
    {
      id: "family",
      title: "Family Lakeside",
      price: "GHS 3,800",
      img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop",
      features: ["2 Queen Beds", "4 Guests", "110 sqm"]
    }
  ];

  return (
    <section id="rooms" className="py-24 px-6 md:px-12 bg-stone-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-black mb-4">
              Rest in <br />
              <span className="text-amber-400">Pure Luxury.</span>
            </h2>
            <p className="text-xl text-white/60 max-w-xl">
              Sanctuaries designed to blur the line between architecture and nature. 
              Every suite is a private gateway to the lake's soul.
            </p>
          </motion.div>
          <a 
            href="#booking" 
            className="px-8 py-4 rounded-full glass hover:bg-white/10 transition-all font-display font-bold uppercase tracking-widest text-sm"
          >
            View All Rooms
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, i) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
              onClick={() => {
                const bookingSection = document.getElementById('booking');
                if (bookingSection) {
                  bookingSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden relative mb-8 group-hover:shadow-2xl group-hover:shadow-amber-400/10 transition-all duration-500">
                <img 
                  src={room.img} 
                  alt={room.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent opacity-80"></div>
                
                <div className="absolute top-8 right-8">
                  <div className="bg-amber-400 text-stone-900 px-4 py-2 rounded-full text-[10px] font-display font-black uppercase tracking-widest shadow-xl">
                    Available
                  </div>
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-amber-400 font-display font-bold text-[10px] uppercase tracking-[0.3em] mb-2 block">Starting at</span>
                      <p className="text-3xl font-display font-black text-white tracking-tighter">{room.price}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="px-4">
                <h3 className="text-3xl font-display font-black mb-4 group-hover:text-amber-400 transition-colors tracking-tight">{room.title}</h3>
                <div className="flex flex-wrap gap-6 text-white/30 text-[10px] font-display font-bold uppercase tracking-widest">
                  <div className="flex items-center gap-2"><Bed className="w-3 h-3 text-amber-400" /> {room.features[0]}</div>
                  <div className="flex items-center gap-2"><Users className="w-3 h-3 text-amber-400" /> {room.features[1]}</div>
                  <div className="flex items-center gap-2"><Maximize className="w-3 h-3 text-amber-400" /> {room.features[2]}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
