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

  const closingTag = company.closing?.tagline || "THE NEXT STEP";
  const rawHeading = company.closing?.heading || "Are You\nReady to\nScale?";
  const headingLines = rawHeading.split("\n");
  const closingDesc = company.closing?.description || `Join the elite network inside the ${company.name} program and begin your transformational journey.`;
  const ctaText = company.closing?.cta || "Apply Now";

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FAF8F5] text-[#111] py-32 md:py-48 relative z-10 overflow-hidden border-t-2 border-[#111]"
    >
      <div className="container mx-auto px-6 flex flex-col items-center justify-center text-center relative z-20">
        
        <span className="text-sm md:text-base font-bold tracking-[0.3em] text-zinc-400 uppercase mb-8 block"> {closingTag} </span>
        
        {/* Massive Clipped Typography */}
        <h2 
          ref={textRef}
          className="font-helvetica font-bold tracking-tighter leading-[0.88] text-[#111] mb-12 select-none"
          style={{ fontSize: "clamp(2.5rem, 9vw, 9.5rem)" }}
        >
          {headingLines.map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </h2>
        
        <p className="font-helvetica text-lg md:text-xl text-zinc-600 max-w-2xl mb-16 leading-relaxed">
          {closingDesc}
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
          <div className="absolute inset-0 rounded-full border border-black/10 lg:group-hover:scale-110 lg:group-hover:border-[#CD1D1D]/30 transition-all duration-500" />
          
          {/* Main button body */}
          <div className="min-w-44 px-8 h-40 md:min-w-52 md:h-48 rounded-full bg-[#111] lg:group-hover:bg-[#CD1D1D] flex items-center justify-center text-white transition-colors duration-500 shadow-2xl">
            <span className="font-national2 font-bold uppercase tracking-wider text-xs md:text-sm text-center px-4 leading-snug">
              {ctaText}
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
