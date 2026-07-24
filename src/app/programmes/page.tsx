"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/layout/Navbar";
import { companiesData } from "@/constants/companies";

const AbstractIcon = ({ index }: { index: number }) => {
  const type = index % 3;
  if (type === 0) return (
    <svg width="48" height="48" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[#111]">
      <circle cx="16" cy="16" r="6" fill="currentColor"/>
      <path d="M16 0v6 M16 26v6 M0 16h6 M26 16h6 M4.7 4.7l4.2 4.2 M23.1 23.1l4.2 4.2 M27.3 4.7l-4.2 4.2 M8.9 23.1l-4.2 4.2" strokeLinecap="square"/>
    </svg>
  );
  if (type === 1) return (
    <svg width="48" height="48" viewBox="0 0 32 32" fill="currentColor" className="text-[#111]">
       {[6, 16, 26].map((x) => 
         [6, 16, 26].map((y) => (
           <circle key={`${x}-${y}`} cx={x} cy={y} r="2.5" />
         ))
       )}
    </svg>
  );
  if (type === 2) return (
    <svg width="48" height="48" viewBox="0 0 32 32" fill="currentColor" className="text-[#111]">
       <rect x="13.5" y="2" width="5" height="10" />
       <rect x="13.5" y="20" width="5" height="10" />
       <rect x="2" y="13.5" width="10" height="5" />
       <rect x="20" y="13.5" width="10" height="5" />
       <rect x="6" y="6" width="5" height="8" transform="rotate(45 8.5 10)" />
       <rect x="22" y="22" width="5" height="8" transform="rotate(45 24.5 26)" />
       <rect x="22" y="6" width="5" height="8" transform="rotate(-45 24.5 10)" />
       <rect x="6" y="22" width="5" height="8" transform="rotate(-45 8.5 26)" />
    </svg>
  );
  return null;
};

const programImages = [
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",
];

export default function ProgrammesListingPage() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  
  // Custom cursor state
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHoveringCard, setIsHoveringCard] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      if (target && target.closest('.program-card-item')) {
        setIsHoveringCard(true);
      } else {
        setIsHoveringCard(false);
      }
    };
    
    const handleScroll = () => {
      setIsHoveringCard(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      // 1. Endless Marquee Animation
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 40,
        repeat: -1,
      });

      // 2. Staggered Grid Entrance
      gsap.fromTo(
        ".program-card-item",
        { y: 150, opacity: 0, rotationY: 10, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          rotationY: 0,
          scale: 1,
          stagger: 0.1,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".program-grid",
            start: "top 85%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#111] relative z-10 -mb-[15vh] pb-[20vh] rounded-b-[2rem] md:rounded-b-[4rem] shadow-2xl overflow-hidden cursor-default">
      
      {/* Navbar overlay */}
      <div className="sticky top-0 z-[110]">
        <Navbar />
      </div>

      {/* Custom Follower Cursor */}
      <div 
        className="fixed top-0 left-0 w-24 h-24 rounded-full bg-[#CD1D1D] text-white flex items-center justify-center font-national2 font-bold tracking-widest text-sm pointer-events-none z-[100] transition-opacity duration-300"
        style={{ 
          transform: `translate(${cursorPos.x - 48}px, ${cursorPos.y - 48}px) scale(${isHoveringCard ? 1 : 0})`,
          opacity: isHoveringCard ? 1 : 0,
          transition: 'transform 0.1s ease-out, opacity 0.3s ease, scale 0.3s ease'
        }}
      >
        EXPLORE
      </div>

      <section className="pt-24 md:pt-32 relative z-20">
        {/* Huge Scrolling Text Marquee */}
        <div className="relative w-full overflow-hidden flex border-b-[3px] border-[#111] pb-2 md:pb-4 mb-2 perspective-1000">
          <div ref={marqueeRef} className="flex whitespace-nowrap min-w-fit origin-left">
             {[...Array(6)].map((_, i) => (
               <h1 key={i} className="font-national2 font-black text-[22vw] leading-[0.8] tracking-normal uppercase px-12 md:px-16 text-[#111]">
                 OUR PROGRAMMES
               </h1>
             ))}
          </div>
        </div>
        
        {/* Sub Header Toolbar */}
        <div className="w-full px-6 lg:px-24 max-w-[100rem] mx-auto py-6 flex flex-col md:flex-row items-start md:items-center justify-between border-b-[2px] border-[#111]/10 gap-4 md:gap-0">
          <div className="font-helvetica font-bold text-lg md:text-xl text-zinc-500 min-w-[80px]">
            ({companiesData.length})
          </div>
          <div className="font-helvetica font-bold text-lg md:text-xl text-left md:text-center flex-1">
            Transformational Mentorship for Ambitious Leaders
          </div>
          <div className="w-full md:w-auto flex justify-start md:justify-end">
            <button className="bg-[#111] text-white font-national2 font-black text-xl uppercase tracking-tight px-6 py-2 rounded-xl hover:bg-[#CD1D1D] transition-colors shadow-lg">
              VIEW ROADMAP
            </button>
          </div>
        </div>
        
        {/* Grid of Cards */}
        <div className="program-grid w-full px-6 lg:px-24 max-w-[100rem] mx-auto mt-12 md:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-y-16">
           {companiesData.map((company, i) => {
             const img1 = programImages[(i * 2) % programImages.length];
             const img2 = programImages[(i * 2 + 1) % programImages.length];

             return (
               <Link 
                 href={`/programme/${company.slug}`}
                 key={company.slug} 
                 className="program-card-item relative group cursor-none perspective-1000 z-10 hover:z-50 block"
               >
                  
                  {/* Pop-out Image 1 (Bottom Left) */}
                  <div className="absolute inset-0 m-auto w-[90%] h-[220px] md:h-[260px] rounded-2xl overflow-hidden z-0 opacity-0 scale-75 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-x-[40%] md:group-hover:-translate-x-[50%] group-hover:translate-y-[80%] md:group-hover:translate-y-[100%] group-hover:-rotate-[15deg] shadow-2xl pointer-events-none">
                    <Image src={img1} alt="" fill className="object-cover" />
                  </div>

                  {/* Pop-out Image 2 (Bottom Right) */}
                  <div className="absolute inset-0 m-auto w-[90%] h-[220px] md:h-[260px] rounded-2xl overflow-hidden z-0 opacity-0 scale-75 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-[40%] md:group-hover:translate-x-[50%] group-hover:translate-y-[70%] md:group-hover:translate-y-[90%] group-hover:rotate-[12deg] shadow-2xl pointer-events-none">
                    <Image src={img2} alt="" fill className="object-cover" />
                  </div>

                  {/* Main Card */}
                  <div className="relative z-10 bg-white border-[2px] border-black/10 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-16 group-hover:-rotate-3 group-hover:scale-105 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)] group-hover:border-[#111] min-h-[400px] md:min-h-[450px] w-full transform-gpu origin-bottom">
                    <div>
                      <div className="mb-10 text-zinc-300 group-hover:text-[#CD1D1D] transition-colors duration-500">
                        <AbstractIcon index={i} />
                      </div>
                      <h2 className="font-national2 font-black text-4xl md:text-5xl uppercase leading-[0.9] tracking-normal mb-6 text-[#111]">
                          {company.name}
                      </h2>
                    </div>
                    
                    <div className="flex flex-col gap-6">
                      <p className="font-helvetica font-medium text-zinc-500 text-sm md:text-base leading-relaxed line-clamp-4">
                        {company.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-black/10">
                        {company.components.map((comp) => (
                          <span 
                            key={comp} 
                            className="px-2.5 py-1 bg-[#FAF8F5] text-zinc-400 font-courier text-[9px] uppercase tracking-widest font-bold rounded-md"
                          >
                            {comp}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
               </Link>
             );
           })}
        </div>

      </section>
    </main>
  );
}
