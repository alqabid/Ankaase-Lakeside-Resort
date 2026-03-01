import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Search, ArrowRight } from 'lucide-react';

interface SearchOverlayProps {
  onClose: () => void;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ onClose }) => {
  const [query, setQuery] = useState("");

  const quickLinks = [
    { label: "Luxury Rooms", href: "#rooms" },
    { label: "Jet Skiing", href: "#amenities" },
    { label: "Book Now", href: "#booking" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-stone-900/95 backdrop-blur-xl flex flex-col p-8 md:p-16"
    >
      <div className="flex justify-end mb-8">
        <button 
          onClick={onClose}
          className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="max-w-4xl mx-auto w-full">
        <div className="relative">
          <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 text-white/20" />
          <input 
            autoFocus
            type="text" 
            placeholder="Search rooms, activities..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent border-b-2 border-white/20 text-3xl md:text-6xl font-display font-black text-white py-8 pl-12 md:pl-20 outline-none placeholder-white/20 focus:border-amber-400 transition-colors"
          />
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {query.length > 2 ? (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="col-span-full text-white/40 text-sm font-display font-bold uppercase tracking-widest mb-4"
              >
                Results for "{query}"
              </motion.div>
              <a 
                href="#rooms" 
                onClick={onClose}
                className="p-8 glass rounded-[2.5rem] hover:bg-white/10 transition-all group flex justify-between items-center"
              >
                <div>
                  <h4 className="text-2xl font-display font-black text-white group-hover:text-amber-400 transition-colors mb-2">Luxury Accommodation</h4>
                  <p className="text-white/60">Find your perfect lakeside stay.</p>
                </div>
                <ArrowRight className="w-6 h-6 text-white/20 group-hover:text-amber-400 group-hover:translate-x-2 transition-all" />
              </a>
              <a 
                href="#amenities" 
                onClick={onClose}
                className="p-8 glass rounded-[2.5rem] hover:bg-white/10 transition-all group flex justify-between items-center"
              >
                <div>
                  <h4 className="text-2xl font-display font-black text-white group-hover:text-amber-400 transition-colors mb-2">Resort Activities</h4>
                  <p className="text-white/60">Jet skiing, dining, and more.</p>
                </div>
                <ArrowRight className="w-6 h-6 text-white/20 group-hover:text-amber-400 group-hover:translate-x-2 transition-all" />
              </a>
            </>
          ) : (
            <div className="col-span-full">
              <h4 className="text-white/40 text-sm font-display font-bold uppercase tracking-widest mb-8">Quick Links</h4>
              <div className="flex flex-wrap gap-4">
                {quickLinks.map((link) => (
                  <a 
                    key={link.label}
                    href={link.href}
                    onClick={onClose}
                    className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white hover:bg-amber-400 hover:text-stone-900 transition-all font-display font-bold text-sm uppercase tracking-widest"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default SearchOverlay;
