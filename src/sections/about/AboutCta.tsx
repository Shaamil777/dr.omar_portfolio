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
    <section ref={sectionRef} className="w-full bg-[#111] text-white py-28 md:py-44 relative z-10 flex flex-col items-center justify-center text-center overflow-hidden border-t border-white/10">
      {/* Scattered Pixel Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20" style={{ WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 70%)', maskImage: 'radial-gradient(circle at center, black 0%, transparent 70%)' }}>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-pixels" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" fill="#CD1D1D" className="animate-pulse" style={{ animationDelay: '0.1s', animationDuration: '2s' }} />
              <rect x="20" y="20" width="4" height="4" fill="#CD1D1D" className="animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '3s' }} />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#cta-pixels)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center max-w-5xl">
        <span className="cta-element font-courier text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#CD1D1D] font-bold mb-6 block">
          [ CLOSING REFLECTION ]
        </span>
        
        {/* Quote Block */}
        <div className="cta-element mb-12 px-6 py-8 rounded-[24px] bg-white/[0.03] border border-white/10 max-w-4xl">
          <p className="font-helvetica text-xl md:text-3xl font-bold uppercase tracking-tight text-white leading-snug mb-4">
            &ldquo;I believe every person carries extraordinary potential. My mission is to help them discover it, develop it, and use it to build a meaningful life, an ethical business, and a better world.&rdquo;
          </p>
          <span className="font-courier text-xs uppercase tracking-widest text-[#CD1D1D] font-bold">
            — DR. ABDUSSALAM OMAR
          </span>
        </div>

        <span className="cta-element font-courier text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/50 font-bold mb-4 block">
          [ THE NEXT CHAPTER ]
        </span>
        <h2 className="cta-element font-helvetica text-4xl md:text-6xl lg:text-[6.5rem] font-bold tracking-tight leading-[0.9] text-white mb-14">
          Begin Your <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>Transformation</span>
        </h2>
        
        <button className="cta-element group relative inline-flex items-center justify-center px-12 py-6 bg-[#CD1D1D] text-white font-helvetica font-bold uppercase tracking-widest text-sm md:text-lg overflow-hidden rounded-full transition-transform hover:scale-105 duration-300">
          <span className="relative z-10 flex items-center gap-3">
            Book a Consultation
            <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </span>
          <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
          <span className="absolute z-10 flex items-center gap-3 text-[#111] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            Book a Consultation
            <svg className="w-5 h-5 transform translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </span>
        </button>
      </div>
    </section>
  );
}
