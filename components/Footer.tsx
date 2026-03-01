import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 border-t border-white/5 pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a href="#home" className="text-3xl font-display font-black tracking-tighter text-white uppercase mb-8 block">
              ANKAASE
            </a>
            <p className="text-white/50 leading-relaxed mb-8 max-w-sm">
              The ultimate lakeside escape in Ghana. Experience the magic of 
              Lake Bosomtwe with luxury accommodation and world-class activities.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-amber-400 hover:text-stone-900 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-amber-400 hover:text-stone-900 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-amber-400 hover:text-stone-900 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-display font-bold uppercase tracking-widest text-xs mb-8">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-white/60 hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-white/60 hover:text-amber-400 transition-colors">The Vibe</a></li>
              <li><a href="#rooms" className="text-white/60 hover:text-amber-400 transition-colors">Sleep</a></li>
              <li><a href="#amenities" className="text-white/60 hover:text-amber-400 transition-colors">Play</a></li>
              <li><a href="#gallery" className="text-white/60 hover:text-amber-400 transition-colors">Snaps</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold uppercase tracking-widest text-xs mb-8">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-white/60">Ankaase, Lake Bosomtwe, Ashanti Region, Ghana</span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-white/60">+233 50 123 4567</span>
              </li>
              <li className="flex gap-4 items-center">
                <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-white/60">hello@ankaase.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold uppercase tracking-widest text-xs mb-8">Newsletter</h4>
            <p className="text-white/60 mb-6">Join our list for exclusive offers and resort updates.</p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-16 text-white outline-none focus:border-amber-400 transition-colors"
              />
              <button className="absolute right-2 top-2 bottom-2 w-12 rounded-xl bg-amber-400 text-stone-900 flex items-center justify-center hover:scale-105 transition-transform">
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/30 text-sm">
            © 2026 Ankaase Lakeside Resort. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/30 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/30 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
