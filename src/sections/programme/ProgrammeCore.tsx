"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import type { CompanyData } from "@/constants/companies";

gsap.registerPlugin(ScrollTrigger);

export default function ProgrammeCore({ company }: { company: CompanyData }) {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  // Magnetic button state
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) * 0.3; // 0.3 is the magnetic pull strength
    const y = (e.clientY - top - height / 2) * 0.3;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scale up and reveal the massive text
      gsap.fromTo(
        textRef.current,
        { opacity: 0, scale: 0.9, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FAF8F5] text-[#111] py-32 md:py-48 relative z-10 overflow-hidden border-t-2 border-[#111]"
    >
      <div className="container mx-auto px-6 flex flex-col items-center justify-center text-center relative z-20">
        
        <span className="font-courier text-sm uppercase tracking-[0.4em] text-[#CD1D1D] font-bold mb-8 block">
          [ THE NEXT STEP ]
        </span>
        
        {/* Massive Clipped Typography */}
        <h2 
          ref={textRef}
          className="font-national2 font-black uppercase tracking-tighter leading-[0.85] text-[#111] mb-16 select-none"
          style={{ fontSize: "clamp(3rem, 12vw, 12rem)" }}
        >
          ARE YOU<br/>READY TO<br/>SCALE?
        </h2>
        
        <p className="font-helvetica text-lg md:text-xl text-zinc-600 max-w-2xl mb-16">
          Join the elite network of founders inside the {company.name} program and restructure your business for legacy growth.
        </p>

        {/* Magnetic Hover Button */}
        <button
          ref={buttonRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative flex items-center justify-center group"
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
            transition: "transform 0.1s ease-out", // Smooth return when mouse leaves
          }}
        >
          {/* Outer animated ring */}
          <div className="absolute inset-0 rounded-full border border-black/10 group-hover:scale-110 group-hover:border-[#CD1D1D]/30 transition-all duration-500" />
          
          {/* Main button body */}
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-[#111] group-hover:bg-[#CD1D1D] flex items-center justify-center text-white transition-colors duration-500 shadow-2xl">
            <span className="font-national2 font-bold uppercase tracking-widest text-sm md:text-base">
              Apply Now
            </span>
          </div>
        </button>

      </div>

      {/* Decorative Grid Background specific to the footer */}
      <div className="absolute inset-0 pointer-events-none opacity-20"
           style={{ backgroundImage: 'linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)', backgroundSize: '100px 100px' }} 
      />
    </section>
  );
}
