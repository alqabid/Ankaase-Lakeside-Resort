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
import PullToRefresh from './components/PullToRefresh';
import Map from './components/Map';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FAB from './components/FAB';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';

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
    <div className="min-h-screen bg-stone-900 selection:bg-amber-400 selection:text-black overflow-x-hidden">
      <Preloader />
      <CustomCursor />
      <PullToRefresh />
      
      {/* Grain Effect */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

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
        <Testimonials />
        <Map />
        <FAQ />
        <Booking />
      </main>

      <Footer />
      <FAB />

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
