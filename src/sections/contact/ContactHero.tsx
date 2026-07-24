"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-[#FAF8F5] text-[#111]">
      <div className="container mx-auto px-6 lg:px-24 max-w-[100rem]">
        
        {/* Decorative Anchor */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center gap-3 mb-6 md:mb-10 font-courier text-[11px] md:text-[13px] text-zinc-500 tracking-widest uppercase font-bold"
        >
          <div className="w-2.5 h-2.5 bg-[#CD1D1D]"></div>
          <div>INITIATE CONNECTION</div>
        </motion.div>

        {/* Massive Typography */}
        <div className="border-b border-black/10 pb-8 md:pb-16 mb-8 md:mb-16">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-national2 text-[12vw] sm:text-[10vw] md:text-[9vw] lg:text-[8vw] xl:text-[120px] 2xl:text-[140px] font-black uppercase tracking-normal leading-[0.9] text-[#111]"
            >
              LET'S
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              className="font-national2 text-[12vw] sm:text-[10vw] md:text-[9vw] lg:text-[8vw] xl:text-[120px] 2xl:text-[140px] font-black uppercase tracking-normal leading-[0.9] text-[#111]"
            >
              CONNECT.
            </motion.h1>
          </div>
        </div>

        {/* Sub-description */}
        <div className="max-w-2xl border-l-[3px] border-[#CD1D1D] pl-5 md:pl-8">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-2xl font-helvetica font-bold text-zinc-500 leading-[1.3] tracking-tight"
          >
            Whether you're looking for personalized coaching, wanting to join our next cohort, or exploring a strategic partnership, our team is ready to assist you.
          </motion.p>
        </div>

      </div>
    </section>
  );
}
