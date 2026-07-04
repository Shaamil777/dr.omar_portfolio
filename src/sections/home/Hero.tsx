"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const wordVariants = {
    hidden: { y: "110%", opacity: 0 },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.1,
        duration: 1,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <section className="relative min-h-screen bg-[#FAF8F5] flex flex-col justify-center py-24 lg:py-32 px-6 lg:px-16 overflow-hidden">

      {/* Polaroid Card 1 - Behind 'WE' */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -15, y: 40 }}
        animate={{ opacity: 1, scale: 1, rotate: -15, y: 0 }}
        transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute z-0 flex flex-col p-1.5 pb-6 w-32 h-40 md:p-2 md:pb-8 md:w-48 md:h-60 lg:w-60 lg:h-72 bg-white shadow-2xl border border-neutral-100"
        style={{ top: "12%", left: "19%" }}
      >
        <div className="flex-1 bg-neutral-200 w-full h-full flex flex-col items-center justify-center border border-black/5 overflow-hidden relative">
          <motion.img 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 1.0, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" 
            alt="People Placeholder" 
            className="w-full h-full object-cover absolute inset-0" 
          />
        </div>
      </motion.div>

      <div className="max-w-[1700px] w-full mx-auto flex flex-col lg:flex-row relative z-10">

        {/* Polaroid Card 2 - Interleaved between rows */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 12, y: 40 }}
          animate={{ opacity: 1, scale: 1, rotate: 15, y: 0 }}
          transition={{ delay: 1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute z-20 flex flex-col p-1.5 pb-6 w-36 h-44 md:p-2 md:pb-8 md:w-48 md:h-60 lg:w-64 lg:h-80 bg-white shadow-2xl border border-neutral-100"
          style={{ top: "33%", left: "55%" }}
        >
          <div className="flex-1 bg-neutral-200 w-full h-full flex flex-col items-center justify-center border border-black/5 overflow-hidden relative">
            <motion.img 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 1.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop" 
              alt="Organization Placeholder" 
              className="w-full h-full object-cover absolute inset-0" 
            />
          </div>
        </motion.div>

        {/* Left Side: Typography */}
        <div className="w-full lg:w-[75%] flex flex-col mt-12 lg:mt-24 text-[rgb(14,22,35)] font-national2 font-light uppercase tracking-[0.04em] leading-[0.7] text-[14vw] lg:text-[240px] lg:leading-[165px]">

          {/* Row 1 */}
          <div className="flex flex-col lg:flex-row w-full lg:justify-between items-start lg:items-end gap-6 lg:gap-0 mb-6 lg:mb-12 relative z-10 whitespace-nowrap">
            <div className="scale-y-[1.2] origin-bottom" style={{ clipPath: "polygon(-50% -50%, 150% -50%, 150% 100%, -50% 100%)" }}>
              <motion.div custom={1} initial="hidden" animate="visible" variants={wordVariants} className="inline-block">
               WE 
              </motion.div>
            </div>
            <div className="flex lg:justify-end lg:pl-[23%] lg:pr-[2%] scale-y-[1.2] origin-bottom" style={{ clipPath: "polygon(-50% -50%, 150% -50%, 150% 100%, -50% 100%)" }}>
              <motion.div custom={2} initial="hidden" animate="visible" variants={wordVariants} className="inline-block">
                TRANSFORM 
              </motion.div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col lg:flex-row w-full lg:justify-between items-start lg:items-end gap-6 lg:gap-0 mb-6 lg:mb-12 relative z-10 whitespace-nowrap">
            <div className="scale-y-[1.2] origin-bottom" style={{ clipPath: "polygon(-50% -50%, 150% -50%, 150% 100%, -50% 100%)" }}>
              <motion.div custom={3} initial="hidden" animate="visible" variants={wordVariants} className="inline-block">
                PEOPLE
              </motion.div>
            </div>
            <div className="flex lg:justify-end lg:pr-[12%] scale-y-[1.2] origin-bottom" style={{ clipPath: "polygon(-50% -50%, 150% -50%, 150% 100%, -50% 100%)" }}>
              <motion.div custom={4} initial="hidden" animate="visible" variants={wordVariants} className="inline-block">
                AND
              </motion.div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex flex-col lg:flex-row w-full items-start lg:items-end relative z-30 whitespace-nowrap">
            <div className="flex lg:pl-[9.5%] scale-y-[1.2] origin-bottom" style={{ clipPath: "polygon(-50% -50%, 150% -50%, 150% 100%, -50% 100%)" }}>
              <motion.div custom={5} initial="hidden" animate="visible" variants={wordVariants} className="inline-block">
                BUSINESSES
              </motion.div>
            </div>
          </div>

        </div>

        {/* Right Side: Content block */}
        <div className="w-full lg:w-[25%] flex flex-col pt-4 lg:pt-[320px] mt-8 lg:mt-0 lg:pl-22 z-30 relative">
          <div className="max-w-[320px] lg:max-w-md ml-auto lg:ml-0">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="text-base lg:text-lg text-neutral-700 font-medium leading-relaxed mb-8"
            >
              We are a strategic design agency crafting premium digital experiences and shaping modern brands for the future.
            </motion.p>

            <motion.a
              href="#what-we-do"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.8 }}
              className="inline-flex items-center gap-3 text-[#18181b] font-national2 font-light uppercase tracking-[0.15em] text-lg scale-y-[1.5] origin-bottom relative group w-fit"
            >
              <span className="text-lg leading-none transform transition-transform group-hover:translate-x-2">↳</span>
              <span>WHAT WE DO</span>

              {/* Subtle underline on hover */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#18181b] transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          </div>
        </div>

      </div>

    </section>
  );
}
