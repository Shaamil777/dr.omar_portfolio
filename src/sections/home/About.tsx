"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

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
    <section ref={containerRef} className="bg-[#FAF8F5] text-zinc-950 py-16 md:py-32 px-6 md:px-12 lg:px-24 min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="max-w-[100rem] mx-auto w-full">
        <h2 className="text-sm md:text-base font-bold tracking-[0.3em] text-zinc-400 mb-16 uppercase">
          About Dr. Omar
        </h2>

        <div className="mb-2">
          {textLines.map((line, index) => (
            <div key={index} className={`overflow-hidden ${line.indent}`}>
              <motion.h3
                style={{ y: line.y, opacity: line.opacity }}
                className="text-2xl min-[375px]:text-3xl sm:text-4xl md:text-5xl lg:text-[4.5rem] xl:text-[6rem] font-black uppercase tracking-tighter leading-[0.95] py-1 text-black whitespace-nowrap"
              >
                {line.text}
              </motion.h3>
            </div>
          ))}
        </div>

        <div ref={rowRef} className="flex flex-col lg:flex-row gap-16 items-center mt-6">
          {/* Content with staggered reveal animations */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 z-10 relative">
            {/* Anchor Heading & Micro Decoration */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col gap-5 mb-2"
            >
              <div className="w-10 h-[1px] bg-zinc-400"></div>
              <h4 className="text-xs md:text-sm font-bold tracking-[0.25em] text-zinc-500 uppercase">
                Who is Dr. Omar
              </h4>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              className="text-base md:text-lg text-zinc-600 leading-normal"
            >
              For over 20 years, Dr. Abdussalam Omar has helped entrepreneurs, executives, and organizations unlock their full potential through leadership coaching, human transformation, branding, and strategic business development.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              className="text-base md:text-lg text-zinc-600 leading-normal"
            >
              By combining emotional intelligence, psychology, leadership, and business strategy, he empowers people to become better leaders, build ethical businesses, and create lasting impact.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              className={`text-base md:text-lg text-zinc-600 leading-normal ${!isExpanded ? 'hidden md:block' : ''}`}
            >
              Having mentored thousands of entrepreneurs, coached organizations across industries, and worked with leaders throughout India and the GCC, his mission is to develop purpose-driven leaders who create meaningful and lasting impact in their communities and organizations.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              className={`text-base md:text-lg text-zinc-900 leading-normal ${!isExpanded ? 'hidden md:block' : ''}`}
            >
              "His philosophy is simple: transform people first, and lasting success will follow."
            </motion.p>

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
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              {/* Primary Button */}
              <a href="#journey" className="group relative inline-flex items-center justify-center self-center sm:self-auto sm:ml-2">
                {/* Slab Layer */}
                <div className="absolute inset-0 bg-zinc-300 transform -skew-x-12 translate-x-2 translate-y-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
                
                {/* Top Layer */}
                <div className="relative px-8 py-4 bg-zinc-700 text-white transform -skew-x-12 transition-transform duration-300 group-hover:translate-y-1 group-hover:translate-x-1 flex items-center justify-center">
                  {/* Un-skew Content */}
                  <div className="transform skew-x-12 flex items-center gap-3">
                    <span className="font-bold text-xs md:text-sm tracking-widest uppercase">Explore Dr. Omar's Journey</span>
                    <svg className="w-5 h-5 text-white transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </a>

              {/* Secondary Button */}
              <a href="#consultation" className="group relative inline-flex items-center justify-center self-center sm:self-auto mt-4 sm:mt-0 sm:ml-4">
                {/* Slab Layer */}
                <div className="absolute inset-0 bg-zinc-300 transform -skew-x-12 translate-x-2 translate-y-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
                
                {/* Top Layer */}
                <div className="relative px-8 py-4 bg-white text-zinc-900 transform -skew-x-12 border border-zinc-900 transition-transform duration-300 group-hover:translate-y-1 group-hover:translate-x-1 flex items-center justify-center">
                  {/* Un-skew Content */}
                  <div className="transform skew-x-12 flex items-center gap-3">
                    <span className="font-bold text-xs md:text-sm tracking-widest uppercase">Book a Consultation</span>
                  </div>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Image Area with Parallax and Reveal */}
          <div className="w-full lg:w-1/2 relative flex justify-center items-end min-h-[450px] sm:min-h-[600px] lg:min-h-[950px] -mt-10 sm:-mt-20 lg:-mt-96">
            
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
