"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  // Track the scroll position relative to the heading section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: isMobile ? ["start 1.1", "start -0.1"] : ["start 0.95", "center 0.3"],
  });

  // Create staggered animations for the main heading
  const y1 = useTransform(scrollYProgress, [0, 0.5], ["100%", "0%"]);
  const y2 = useTransform(scrollYProgress, [0.15, 0.65], ["100%", "0%"]);
  const y3 = useTransform(scrollYProgress, [0.3, 0.8], ["100%", "0%"]);

  const opacity1 = useTransform(scrollYProgress, [0, 0.4], [0, 0.8]);
  const opacity2 = useTransform(scrollYProgress, [0.15, 0.55], [0, 0.7]);
  const opacity3 = useTransform(scrollYProgress, [0.3, 0.7], [0, 0.6]);

  const textLines = [
    { text: "Transforming People.", indent: "ml-0", y: y1, opacity: opacity1 },
    { text: "Developing Leaders.", indent: "ml-0", y: y2, opacity: opacity2 },
    { text: "Building Purpose.", indent: "ml-0", y: y3, opacity: opacity3 },
  ];

  // Track the scroll position for the lower row (parallax)
  const { scrollYProgress: rowProgress } = useScroll({
    target: rowRef,
    offset: ["start end", "end start"],
  });

  // Background moves up slowly, Person moves down slowly (classic parallax depth)
  const bgParallax = useTransform(rowProgress, [0, 1], ["-10%", "10%"]);
  const personParallax = useTransform(rowProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section id="about" ref={containerRef} className="bg-[#FAF8F5] text-zinc-950 py-16 md:py-32 px-6 md:px-12 lg:px-24 min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="max-w-[100rem] mx-auto w-full">
        <h2 className="text-sm md:text-base font-bold tracking-[0.3em] text-zinc-400 mb-16 uppercase">
          About Dr. Omar
        </h2>

        <div className="mb-8 md:mb-16 border-b border-black/10 pb-8">
          {textLines.map((line, index) => (
            <div key={index} className={`overflow-hidden ${line.indent}`}>
              <motion.h3
                style={{ y: line.y, opacity: line.opacity }}
                className="font-national2 text-[10vw] sm:text-[9vw] md:text-[8vw] lg:text-[7vw] xl:text-[110px] 2xl:text-[130px] font-black uppercase tracking-normal leading-[0.9] text-[#111] whitespace-nowrap"
              >
                {line.text}
              </motion.h3>
            </div>
          ))}
        </div>

        <div ref={rowRef} className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center mt-6">
          {/* Content with staggered reveal animations */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 z-10 relative">
            {/* Anchor Heading & Micro Decoration */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex items-center gap-3 mb-2 md:mb-4 font-courier text-[11px] md:text-[13px] text-zinc-500 tracking-widest uppercase font-bold"
            >
              <div className="w-2.5 h-2.5 bg-[#CD1D1D]"></div>
              <div>AUTHORIZATION / BIO_DATA</div>
            </motion.div>
            
            <div className="border-l-[3px] border-[#CD1D1D] pl-5 md:pl-8 flex flex-col gap-4 md:gap-6">
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-helvetica font-bold text-[#111] leading-[1.3] tracking-tight"
              >
                For over 20 years, Dr. Abdussalam Omar has helped entrepreneurs, executives, and organizations unlock their full potential through leadership coaching, human transformation, branding, and strategic business development.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl lg:text-[22px] font-helvetica font-bold text-zinc-500 leading-[1.3] tracking-tight"
              >
                By combining emotional intelligence, psychology, leadership, and business strategy, he empowers people to become better leaders, build ethical businesses, and create lasting impact.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                className={`text-base sm:text-lg md:text-xl lg:text-[22px] font-helvetica font-bold text-zinc-500 leading-[1.3] tracking-tight ${!isExpanded ? 'hidden md:block' : ''}`}
              >
                Having mentored thousands of entrepreneurs, coached organizations across industries, and worked with leaders throughout India and the GCC, his mission is to develop purpose-driven leaders who create meaningful and lasting impact in their communities and organizations.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                className={`text-lg sm:text-xl md:text-2xl lg:text-[28px] font-national2 font-black uppercase text-[#111] leading-[1.1] tracking-normal mt-2 md:mt-4 ${!isExpanded ? 'hidden md:block' : ''}`}
              >
                "His philosophy is simple: transform people first, and lasting success will follow."
              </motion.p>
            </div>

            {/* Read More Toggle for Mobile */}
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="md:hidden self-start text-xs font-bold tracking-[0.2em] uppercase text-zinc-500 hover:text-zinc-900 transition-colors mt-2 underline underline-offset-4"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 md:mt-8 w-full"
            >
              {/* Primary Button */}
              <Link href="/journey" className="bg-[#111] text-white px-6 py-4 md:px-10 md:py-6 rounded-xl shadow-[0_12px_24px_rgba(0,0,0,0.2)] hover:bg-[#CD1D1D] hover:shadow-xl hover:-translate-y-1 transition-all font-national2 font-black uppercase tracking-normal text-[16px] md:text-[24px] leading-none flex items-center justify-center w-full sm:w-auto">
                EXPLORE JOURNEY
                <svg className="w-4 h-4 md:w-6 md:h-6 ml-2 md:ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              {/* Secondary Button */}
              <a href="#consultation" className="bg-transparent border-[3px] md:border-4 border-[#111] text-[#111] px-6 py-4 md:px-10 md:py-6 rounded-xl hover:bg-black/5 hover:-translate-y-1 transition-all font-national2 font-black uppercase tracking-normal text-[16px] md:text-[24px] leading-none flex items-center justify-center w-full sm:w-auto mt-2 sm:mt-0">
                BOOK CONSULTATION
              </a>
            </motion.div>
          </div>

          {/* Image Area with Parallax and Reveal */}
          <div className="w-full lg:w-1/2 relative flex justify-center items-end min-h-[350px] sm:min-h-[500px] lg:min-h-[950px] mt-8 lg:-mt-96">
            
            {/* Abstract Background (Blob scales) */}
            <motion.div 
              style={{ y: bgParallax }}
              className="absolute inset-0 z-0 flex items-center justify-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 2, ease: "easeOut" }}
                style={{ backgroundImage: `url('/images/about/about_abstract.png')` }}
                className="w-[250%] h-[250%] sm:w-[180%] sm:h-[180%] lg:w-full lg:h-full bg-contain blur-[0.7px] bg-center bg-no-repeat"
              />
            </motion.div>
            
            {/* Person Container (Portrait fades up) */}
            <motion.div 
              style={{ y: personParallax }}
              className="relative z-10 flex flex-col items-center w-[90%] sm:w-[75%] lg:w-[65%] mb-0 sm:mb-8 lg:mb-20"
            >
              <img 
                src="/images/about/09.png" 
                alt="Dr. Omar" 
                className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] contrast-[1.1] saturate-[1.1] [mask-image:linear-gradient(to_bottom,black_90%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]" 
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
