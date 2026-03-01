import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import Footer from './components/Footer';
import SearchOverlay from './components/SearchOverlay';
import MobileMenu from './components/MobileMenu';

const App: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when overlays are open
  useEffect(() => {
    if (isSearchOpen || isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isSearchOpen, isMenuOpen]);

  return (
    <div className="min-h-screen bg-stone-900 selection:bg-amber-400 selection:text-black">
      <Navbar 
        scrolled={scrolled} 
        onOpenSearch={() => setIsSearchOpen(true)} 
        onOpenMenu={() => setIsMenuOpen(true)} 
      />
      
      <main>
        <Hero />
        <About />
        <Rooms />
        <Amenities />
        <Gallery />
        <Booking />
      </main>

      <Footer />

      <AnimatePresence>
        {isSearchOpen && (
          <SearchOverlay onClose={() => setIsSearchOpen(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu onClose={() => setIsMenuOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
