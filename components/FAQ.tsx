import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How do I get to Ankaase from Kumasi?",
      a: "The easiest way is by private car or taxi. Follow the Kumasi-Kuntanase road, which takes about 45-60 minutes depending on traffic. We also offer shuttle services for a small fee."
    },
    {
      q: "Are children allowed at the resort?",
      a: "Yes! We are a family-friendly resort. We have family suites and a range of activities suitable for children, including guided boat tours and a safe swimming area."
    },
    {
      q: "Is it safe to swim in Lake Bosomtwe?",
      a: "Absolutely. Lake Bosomtwe is a clean, freshwater lake. We have designated swimming areas with lifeguards on duty during peak hours."
    },
    {
      q: "Do you offer vegetarian or vegan food options?",
      a: "Yes, our restaurant offers a variety of dietary options. Please let us know of any specific requirements when you book or arrive."
    },
    {
      q: "Can I bring my own jet ski?",
      a: "While we provide high-quality jet skis for rent, you are welcome to bring your own. A small launching fee applies."
    }
  ];

  return (
    <section id="faq" className="py-24 px-6 md:px-12 bg-stone-900 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 rounded-full bg-amber-400/10 flex items-center justify-center text-amber-400 mx-auto mb-6"
          >
            <HelpCircle className="w-8 h-8" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-black mb-4"
          >
            Got <span className="text-amber-400">Questions?</span>
          </motion.h2>
          <p className="text-xl text-white/40">Everything you need to know before you arrive.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-3xl border transition-all overflow-hidden ${
                openIndex === i ? "bg-white/5 border-amber-400/30" : "bg-transparent border-white/5 hover:border-white/20"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-8 flex justify-between items-center text-left"
              >
                <span className="text-xl font-display font-bold text-white">{faq.q}</span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  openIndex === i ? "bg-amber-400 text-stone-900" : "bg-white/10 text-white"
                }`}>
                  {openIndex === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-white/60 leading-relaxed text-lg">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
