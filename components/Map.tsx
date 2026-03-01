import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';

const Map: React.FC = () => {
  const googleMapsUrl = "https://www.google.com/maps/place/Lake+Bosomtwe/@6.5033333,-1.4166667,13z";

  return (
    <section id="location" className="py-24 px-6 md:px-12 bg-stone-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 text-xs font-display font-bold uppercase tracking-widest mb-6">
              <MapPin className="w-3 h-3" />
              Find Us
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-black mb-8 leading-tight">
              Where the <br />
              <span className="text-amber-400">Magic Happens.</span>
            </h2>
            <p className="text-xl text-white/60 mb-8">
              Located in the heart of the Ashanti Region, Ankaase is the gateway to the 
              mystical Lake Bosomtwe. A 45-minute drive from Kumasi.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="p-6 rounded-3xl glass border border-white/5">
                <h4 className="text-white font-display font-bold mb-2 flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-amber-400" />
                  Directions
                </h4>
                <p className="text-white/50 text-sm">
                  Follow the Kumasi-Kuntanase road, then proceed towards Ankaase. 
                  Look for the golden resort signs.
                </p>
              </div>
            </div>

            <a 
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-amber-400 text-stone-900 font-display font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-xl shadow-amber-400/20"
            >
              Open in Google Maps
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 h-[500px] lg:h-auto"
          >
            {/* Using a stylized iframe for the map */}
            <iframe
              title="Ankaase Lakeside Resort Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126861.8566415748!2d-1.48666665!3d6.5033333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb963555555555%3A0x5555555555555555!2sLake%20Bosomtwe!5e0!3m2!1sen!2sgh!4v1709332000000!5m2!1sen!2sgh"
              className="w-full h-full grayscale invert opacity-80 contrast-125"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            <div className="absolute inset-0 pointer-events-none border-[20px] border-stone-900/50 rounded-[3rem]"></div>
            
            {/* Custom Marker Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div className="relative">
                <div className="absolute inset-0 animate-ping bg-amber-400 rounded-full opacity-75"></div>
                <div className="relative w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center shadow-2xl border-4 border-stone-900">
                  <Anchor className="w-6 h-6 text-stone-900" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Anchor: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 22V8" />
    <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
    <circle cx="12" cy="5" r="3" />
  </svg>
);

export default Map;
