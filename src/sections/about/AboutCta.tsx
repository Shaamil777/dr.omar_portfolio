"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutCta() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cta-element",
        { y: 50, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "expo.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white text-[#0a0a0a] py-32 md:py-48 relative z-10 flex flex-col items-center justify-center text-center overflow-hidden border-t border-black/10">
      
      {/* Abstract Background Element */}
      <div className="absolute top-0 left-1/2 w-[60vw] h-[60vw] bg-[#CD1D1D]/5 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center max-w-[80rem]">
        
        {/* Quote Block - Pure Typography */}
        <div className="cta-element mb-32 max-w-5xl">
          <span className="text-[#CD1D1D] font-helvetica font-black text-6xl md:text-8xl leading-none block mb-6 opacity-30">
            “
          </span>
          <p className="font-helvetica text-2xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-[#0a0a0a] leading-[1.2] mb-10">
            I believe every person carries extraordinary potential. My mission is to help them discover it, develop it, and use it to build a meaningful life, an ethical business, and a better world.
          </p>
          <span className="font-courier text-xs md:text-sm uppercase tracking-[0.3em] text-[#CD1D1D] font-bold block">
            — DR. ABDUSSALAM OMAR
          </span>
        </div>

        {/* The Next Chapter */}
        <div className="cta-element w-full flex flex-col items-center pt-24 border-t border-black/10">
          <span className="font-courier text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#0a0a0a]/40 font-bold mb-8 block">
            [ THE NEXT CHAPTER ]
          </span>
          
          <h2 className="font-helvetica text-5xl md:text-7xl lg:text-[8rem] font-bold tracking-tighter leading-[0.85] text-[#0a0a0a] uppercase mb-16">
            Begin Your<br />
            <span className="text-[#CD1D1D]">Transformation</span>
          </h2>
          
          {/* Unique Massive Circular Button */}
          <button className="group relative inline-flex flex-col items-center justify-center w-48 h-48 md:w-64 md:h-64 bg-[#CD1D1D] text-white font-helvetica font-bold uppercase tracking-widest text-sm md:text-base rounded-full transition-transform hover:scale-[1.1] duration-700 ease-out shadow-2xl shadow-[#CD1D1D]/30 mt-8">
            {/* Hover Expansion Background */}
            <div className="absolute inset-0 bg-[#0a0a0a] rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] origin-center" />
            
            {/* Button Content */}
            <span className="relative z-10 flex flex-col items-center gap-3 text-center leading-relaxed">
              <span>Book A<br />Consultation</span>
              <svg className="w-6 h-6 mt-2 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>

        </div>
      </div>
    </section>
  );
}
