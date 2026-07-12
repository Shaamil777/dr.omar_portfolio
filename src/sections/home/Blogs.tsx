"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Blogs() {
  const containerRef = useRef<HTMLElement>(null);
  
  // Track scroll over a large height (400vh) to create the sticky scroll effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Circle scroll rotation
  const circleRotate = useTransform(scrollYProgress, [0, 1], [0, 540]);
  
  // Parallax for 6 cards flowing sequentially
  const y1 = useTransform(scrollYProgress, [0, 0.35], ["120vh", "-120vh"]);
  const y2 = useTransform(scrollYProgress, [0.1, 0.45], ["120vh", "-120vh"]);
  const y3 = useTransform(scrollYProgress, [0.25, 0.6], ["120vh", "-120vh"]);
  const y4 = useTransform(scrollYProgress, [0.4, 0.75], ["120vh", "-120vh"]);
  const y5 = useTransform(scrollYProgress, [0.55, 0.9], ["120vh", "-120vh"]);
  const y6 = useTransform(scrollYProgress, [0.7, 1], ["120vh", "-120vh"]);

  const cards = [
    { y: y1, className: "left-[5%] md:left-[2%] lg:left-[5%]", title: "The protection that is rarely spoken of...", img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&q=80" },
    { y: y2, className: "right-[5%] md:right-[2%] lg:right-[10%]", title: "5 Tips for excelling as an executive protection subcontractor", img: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?q=80&w=600" },
    { y: y3, className: "left-[15%] md:left-[15%] lg:left-[20%]", title: "Navigating high-risk environments with precision", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80" },
    { y: y4, className: "right-[15%] md:right-[15%] lg:right-[25%]", title: "The future of tactical security technology", img: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=600" },
    { y: y5, className: "left-[10%] md:left-[5%] lg:left-[10%]", title: "Mastering situational awareness in urban settings", img: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=600" },
    { y: y6, className: "right-[10%] md:right-[5%] lg:right-[15%]", title: "Strategic planning for VIP transport and logistics", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80" },
  ];

  return (
    <section ref={containerRef} id="insights" className="relative h-[400vh] bg-[#FAF8F5] text-[#111]">
      
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Background Ticks Circle (Scroll Rotation) */}
        <motion.div 
          style={{ rotate: circleRotate }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.08]"
        >
          {/* Inner Continuous Slow Rotation */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            className="relative w-full h-full flex items-center justify-center"
          >
            {Array.from({ length: 72 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-[1.5px] h-[450px] md:h-[800px]"
                style={{ transform: `rotate(${i * 5}deg)` }}
              >
                <div className="w-full h-[15px] bg-[#111]"></div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Content (Title, Text, Button) */}
        <div className="relative z-30 flex flex-col items-center text-center px-4 max-w-2xl pointer-events-auto py-5">
          <div className="font-helvetica font-bold text-lg md:text-xl mb-4 text-[#CD1D1D]">(5)</div>
          <h2 className="text-[#111] font-national2 font-black text-6xl md:text-8xl lg:text-[8rem] uppercase leading-[0.85] tracking-normal mb-6 mix-blend-multiply">
            LATEST<br/>INSIGHTS
          </h2>
          <p className="font-helvetica font-medium text-sm md:text-lg text-zinc-500 mb-8 max-w-sm mx-auto leading-relaxed">
            Explore my latest articles, insights, and thoughts on entrepreneurship, technology, and leadership.
          </p>
          <button className="bg-[#CD1D1D] text-white font-national2 font-black text-xl md:text-2xl uppercase tracking-tight px-8 py-3 rounded-full hover:bg-black transition-colors shadow-xl">
            READ ALL
          </button>
        </div>

        {/* Flowing Cards */}
        {cards.map((card, index) => (
          <motion.div 
            key={index}
            style={{ y: card.y }} 
            className={`absolute top-[50%] -translate-y-1/2 ${card.className} w-48 md:w-64 lg:w-80 aspect-[4/5] bg-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col justify-end p-5 md:p-6 lg:p-8 z-40 group rounded-2xl md:rounded-[2rem] border-[3px] border-[#FAF8F5] cursor-none`}
          >
             <div 
               className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
               style={{ backgroundImage: `url('${card.img}')` }}
             ></div>
             <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
             
             <div className="relative z-10 flex flex-col gap-2 md:gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
               <span className="font-courier text-[#CD1D1D] font-bold text-[10px] md:text-xs tracking-widest uppercase">
                 Article
               </span>
               <h3 className="text-white font-national2 font-bold uppercase text-lg md:text-xl lg:text-3xl leading-[0.95] drop-shadow-lg">
                 {card.title}
               </h3>
             </div>
          </motion.div>
        ))}
        
      </div>
    </section>
  );
}
