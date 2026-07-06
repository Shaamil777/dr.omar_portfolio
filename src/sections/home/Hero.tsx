"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const brands = [
  "ACME CORP",
  "GLOBEX",
  "SOYLENT",
  "INITECH",
  "UMBRELLA",
  "WAYNE ENT",
  "STARK IND",
  "VANDELAY",
  "HOOLI",
  "MASSIVE DYNAMIC"
];

function LogoSlider({ baseVelocity = -1 }: { baseVelocity?: number }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000) * 2;

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="absolute bottom-4 lg:bottom-8 left-0 w-full overflow-hidden flex flex-nowrap py-5 border-y border-neutral-200 bg-[#FAF8F5] z-40">
      <motion.div className="flex font-national2 uppercase text-sm lg:text-base text-neutral-400 whitespace-nowrap items-center" style={{ x }}>
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-25 lg:gap-50 px-6 lg:px-12 items-center">
            {brands.map((brand, idx) => (
              <span key={idx} className="font-semibold tracking-[0.1em] hover:text-neutral-600 transition-colors duration-300 cursor-pointer">{brand}</span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

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
    <section className="relative min-h-screen bg-[#FAF8F5] flex flex-col justify-center pt-24 pb-36 lg:pt-32 lg:pb-40 px-6 lg:px-16 overflow-hidden">

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
          style={{ top: "33%", left: "60%" }}
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
        <div className="w-full lg:w-[75%] flex flex-col mt-12 lg:mt-24 text-black font-national2 font-light uppercase tracking-[0.04em] leading-[0.7] text-[14vw] lg:text-[240px] lg:leading-[165px]">

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

      <LogoSlider />
    </section>
  );
}
