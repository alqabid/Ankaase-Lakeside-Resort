import React from 'react';
import { motion } from 'framer-motion';
import { X, MapPin } from 'lucide-react';

interface MobileMenuProps {
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onClose }) => {
  const links = [
    { label: "Home", href: "#home" },
    { label: "Vibe", href: "#about" },
    { label: "Sleep", href: "#rooms" },
    { label: "Play", href: "#amenities" },
    { label: "Snaps", href: "#gallery" },
    { label: "Book", href: "#booking" }
  ];

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="fixed inset-0 z-[100] bg-stone-900 flex flex-col p-8 md:p-16"
    >
      <div className="flex justify-between items-center mb-16">
        <span className="text-white/40 text-sm font-display font-black uppercase tracking-[0.2em]">Menu</span>
        <button 
          onClick={onClose}
          className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-8 h-8" />
        </button>
      </div>

      <div className="flex flex-col space-y-4">
        {links.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            onClick={onClose}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="text-6xl md:text-8xl font-display font-black text-white hover:text-amber-400 transition-colors tracking-tighter"
          >
            {link.label}
          </motion.a>
        ))}
      </div>

      <div className="mt-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white/5 rounded-[3rem] p-10 backdrop-blur-md border border-white/10"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-full bg-amber-400/20 flex items-center justify-center text-amber-400">
              <MapPin className="w-5 h-5" />
            </div>
            <h4 className="text-amber-400 text-xs font-display font-black uppercase tracking-widest">Current Location</h4>
          </div>
          <p className="text-white text-2xl font-display font-black mb-1">Ankaase, Lake Bosomtwe</p>
          <p className="text-white/40 text-sm font-medium">Ashanti Region, Ghana</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
