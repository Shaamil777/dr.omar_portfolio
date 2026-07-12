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
    { y: y1, className: "left-[5%] md:left-[2%] lg:left-[5%]", title: "The protection that is rarely spoken of...", img: "https://images.unsplash.com/photo-1614088836528-662706eebf23?q=80&w=600" },
    { y: y2, className: "right-[5%] md:right-[2%] lg:right-[10%]", title: "5 Tips for excelling as an executive protection subcontractor", img: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?q=80&w=600" },
    { y: y3, className: "left-[15%] md:left-[15%] lg:left-[20%]", title: "Navigating high-risk environments with precision", img: "https://images.unsplash.com/photo-1584445892556-9818817d2da5?q=80&w=600" },
    { y: y4, className: "right-[15%] md:right-[15%] lg:right-[25%]", title: "The future of tactical security technology", img: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=600" },
    { y: y5, className: "left-[10%] md:left-[5%] lg:left-[10%]", title: "Mastering situational awareness in urban settings", img: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=600" },
    { y: y6, className: "right-[10%] md:right-[5%] lg:right-[15%]", title: "Strategic planning for VIP transport and logistics", img: "https://images.unsplash.com/photo-1533054178521-9e735520e181?q=80&w=600" },
  ];

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-[#FAF8F5]">
      
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Background Ticks Circle (Scroll Rotation) */}
        <motion.div 
          style={{ rotate: circleRotate }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20"
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
                className="absolute w-[1.5px] h-[350px] md:h-[700px]"
                style={{ transform: `rotate(${i * 5}deg)` }}
              >
                <div className="w-full h-[15px] bg-[#1a2b3c]"></div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Content (Title, Text, Button) */}
        <div className="relative z-30 flex flex-col items-center text-center px-2 md:px-4 max-w-xl pointer-events-auto bg-[#f4f5f5]/85 md:bg-transparent py-5 md:py-0 rounded-3xl backdrop-blur-md md:backdrop-blur-none">
          <h2 className="text-[#0f172a] text-2xl sm:text-3xl md:text-6xl font-bold tracking-tight mb-3 md:mb-6 uppercase drop-shadow-sm">
            LATEST BLOGS
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-xl font-medium mb-5 md:mb-12 leading-relaxed drop-shadow-sm max-w-[200px] sm:max-w-[260px] md:max-w-none mx-auto">
            Explore my latest articles, insights, and thoughts <br className="hidden md:block" /> on entrepreneurship, technology, and beyond.
          </p>
          <button className="bg-[#131b26] text-white text-[9px] md:text-sm font-bold tracking-[0.2em] uppercase px-6 md:px-10 py-2.5 md:py-4 rounded-full hover:bg-black transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
            Read All Blogs
          </button>
        </div>

        {/* Flowing Cards */}
        {cards.map((card, index) => (
          <motion.div 
            key={index}
            style={{ y: card.y }} 
            className={`absolute top-[50%] -translate-y-1/2 ${card.className} w-56 md:w-72 lg:w-80 h-56 md:h-72 lg:h-80 bg-slate-800 shadow-2xl overflow-hidden flex items-end p-4 md:p-5 lg:p-6 z-40 group cursor-pointer rounded-none`}
          >
             <div 
               className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-110 transition-transform duration-700"
               style={{ backgroundImage: `url('${card.img}')` }}
             ></div>
             <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent"></div>
             <h3 className="relative z-10 text-white font-bold uppercase text-[10px] md:text-sm lg:text-base leading-snug drop-shadow-lg">
               {card.title}
             </h3>
          </motion.div>
        ))}
        
      </div>
    </section>
  );
}
