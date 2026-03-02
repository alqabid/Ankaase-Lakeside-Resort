import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Calendar, Users, Home, ArrowRight } from 'lucide-react';

const Booking: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      const ref = Math.random().toString(36).substring(2, 9).toUpperCase();
      setBookingRef(ref);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const resetForm = () => {
    setIsSuccess(false);
    setBookingRef("");
  };

  return (
    <section id="booking" className="py-24 px-6 md:px-12 bg-stone-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-black mb-8 leading-tight">
              Begin Your <br />
              <span className="text-amber-400">Odyssey.</span>
            </h2>
            <p className="text-xl text-white/60 mb-12 max-w-md">
              Secure your sanctuary on the banks of Lake Bosomtwe. 
              The water is waiting for you.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-white/80">
                <div className="w-10 h-10 rounded-full bg-amber-400/10 flex items-center justify-center text-amber-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="font-medium">Instant Confirmation</span>
              </div>
              <div className="flex items-center gap-4 text-white/80">
                <div className="w-10 h-10 rounded-full bg-amber-400/10 flex items-center justify-center text-amber-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="font-medium">Free Cancellation (48h)</span>
              </div>
              <div className="flex items-center gap-4 text-white/80">
                <div className="w-10 h-10 rounded-full bg-amber-400/10 flex items-center justify-center text-amber-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="font-medium">Best Price Guaranteed</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-dark p-8 md:p-12 rounded-[3rem] border border-white/10 shadow-2xl overflow-hidden min-h-[500px] flex flex-col">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <label className="text-xs font-display font-bold uppercase tracking-widest text-white/40 ml-4">Select Room</label>
                      <div className="relative">
                        <Home className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                        <select 
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white outline-none focus:border-amber-400 transition-colors appearance-none"
                        >
                          <option value="" className="bg-stone-900">Choose a room...</option>
                          <option value="deluxe" className="bg-stone-900">Deluxe Lake View</option>
                          <option value="suite" className="bg-stone-900">Executive Suite</option>
                          <option value="family" className="bg-stone-900">Family Lakeside</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-display font-bold uppercase tracking-widest text-white/40 ml-4">Check In</label>
                        <div className="relative">
                          <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                          <input 
                            type="date" 
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white outline-none focus:border-amber-400 transition-colors"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-display font-bold uppercase tracking-widest text-white/40 ml-4">Check Out</label>
                        <div className="relative">
                          <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                          <input 
                            type="date" 
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white outline-none focus:border-amber-400 transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-display font-bold uppercase tracking-widest text-white/40 ml-4">Guests</label>
                      <div className="relative">
                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                        <input 
                          type="number" 
                          min="1" 
                          max="10" 
                          placeholder="Number of guests"
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white outline-none focus:border-amber-400 transition-colors"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-5 rounded-2xl bg-amber-400 text-stone-900 font-display font-black uppercase tracking-widest text-sm hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-amber-400/20 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? "Processing..." : "Confirm Booking"}
                      {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center h-full py-12"
                  >
                    <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mb-8">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <h3 className="text-3xl font-display font-black mb-4">Booking Confirmed!</h3>
                    <p className="text-white/60 mb-8 max-w-xs">
                      Your lakeside escape is ready. We've sent the details to your email.
                    </p>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 w-full">
                      <p className="text-xs font-display font-bold uppercase tracking-widest text-white/40 mb-2">Booking Reference</p>
                      <p className="text-2xl font-display font-black text-amber-400 tracking-widest">{bookingRef}</p>
                    </div>
                    <button
                      onClick={resetForm}
                      className="text-white/40 hover:text-white font-display font-bold uppercase tracking-widest text-xs transition-colors"
                    >
                      Make Another Booking
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
