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
              Sleep in <br />
              <span className="text-amber-400">Total Comfort.</span>
            </h2>
            <p className="text-xl text-white/60 max-w-xl">
              Each room is designed to bring the outside in, with floor-to-ceiling 
              windows and private balconies overlooking the lake.
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
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden relative mb-6">
                <img 
                  src={room.img} 
                  alt={room.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-amber-400 font-display font-bold text-sm uppercase tracking-widest mb-1">From</p>
                      <p className="text-2xl font-display font-black text-white">{room.price}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center text-white group-hover:bg-amber-400 group-hover:text-stone-900 transition-colors">
                      <Bed className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-amber-400 transition-colors">{room.title}</h3>
              <div className="flex gap-4 text-white/40 text-sm font-medium">
                <div className="flex items-center gap-1"><Bed className="w-4 h-4" /> {room.features[0]}</div>
                <div className="flex items-center gap-1"><Users className="w-4 h-4" /> {room.features[1]}</div>
                <div className="flex items-center gap-1"><Maximize className="w-4 h-4" /> {room.features[2]}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
