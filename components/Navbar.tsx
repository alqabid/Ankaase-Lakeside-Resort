import React from 'react';
import { Search, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface NavbarProps {
  scrolled: boolean;
  onOpenSearch: () => void;
  onOpenMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled, onOpenSearch, onOpenMenu }) => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
        scrolled ? "py-4 px-6 glass-dark" : "py-8 px-12 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left: Search Button */}
        <div className="flex gap-2">
          <button
            onClick={onOpenSearch}
            className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition-colors group"
          >
            <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Center: Logo */}
        <a
          href="#home"
          className="px-8 py-3 rounded-full glass text-white font-display font-black tracking-tighter text-xl hover:bg-white/10 transition-all uppercase"
        >
          ANKAASE
        </a>

        {/* Right: Book & Menu */}
        <div className="flex gap-2 items-center">
          <a
            href="#booking"
            className="hidden md:flex items-center justify-center px-6 h-12 rounded-full bg-amber-400 text-stone-900 font-display font-bold text-sm uppercase tracking-wider hover:scale-105 transition-transform shadow-lg shadow-amber-400/20"
          >
            Book
          </a>
          <button
            onClick={onOpenMenu}
            className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition-colors group"
          >
            <Menu className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
