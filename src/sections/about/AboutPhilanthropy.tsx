"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPhilanthropy() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".phil-element",
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
    <section ref={sectionRef} className="w-full bg-white text-[#111] py-24 md:py-48 relative z-10 border-t border-black/10">
      <div className="container mx-auto px-6 lg:px-12 max-w-[90rem]">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-[#CD1D1D]/10 flex items-center justify-center mb-8 phil-element">
            <svg className="w-8 h-8 md:w-12 md:h-12 text-[#CD1D1D]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>

          <span className="phil-element font-courier text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#CD1D1D] font-bold mb-6 block">
            [ THE HIGHER PURPOSE ]
          </span>
          <h2 className="phil-element font-national2 text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tight leading-[0.9] text-[#111] mb-10">
            PROTECTING THE <span className="text-[#CD1D1D]">VULNERABLE</span>
          </h2>
          
          <p className="phil-element font-helvetica text-lg md:text-2xl text-zinc-600 font-bold leading-relaxed mb-12">
            The ultimate drive of a leader is not just profit, but humanity. Dr. Omar’s commitment to societal impact is most evident in his role as Chairman of the Ruqayya Foundation, an organization deeply dedicated to protecting orphans and widows.
          </p>

        </div>
      </div>
    </section>
  );
}
