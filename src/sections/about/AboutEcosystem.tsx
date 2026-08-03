"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutEcosystem() {
  const sectionRef = useRef<HTMLElement>(null);

  const ecosystems = [
    { name: "DEEP IMMERSION", desc: "The flagship life transformation program integrating NLP and holistic healing." },
    { name: "BUSINESS COACHING CLUB", desc: "An annual mentorship ecosystem for entrepreneurs to build scalable, sustainable brands." },
    { name: "HUMAN EXCELLENCE ACADEMY", desc: "The most sought-after ethical coaching & training academy in the Middle East." },
    { name: "OATHMEN", desc: "A practical entrepreneurship fellowship for young founders to turn ideas into reality." },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".eco-card",
        { opacity: 0, scale: 0.9 },
        { 
          opacity: 1, scale: 1, duration: 1, stagger: 0.15, ease: "expo.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white text-[#111] py-24 md:py-48 relative z-10">
      <div className="container mx-auto px-6 lg:px-12 max-w-[90rem]">
        
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="font-courier text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#CD1D1D] font-bold mb-4 block">
              [ THE ARCHITECT ]
            </span>
            <h2 className="font-national2 text-4xl md:text-5xl lg:text-[5rem] font-black uppercase tracking-tight leading-[0.9] text-[#111]">
              BUILDING <span className="text-transparent" style={{ WebkitTextStroke: '2px #111' }}>INSTITUTIONS</span>
            </h2>
          </div>
          <p className="font-helvetica font-bold text-sm md:text-base text-zinc-500 max-w-sm">
            He isn't just a consultant; he is an empire builder guiding everyone from young startup founders to elite CEOs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ecosystems.map((eco, index) => (
            <div key={index} className="eco-card group relative p-12 md:p-16 rounded-[32px] bg-[#111] overflow-hidden flex flex-col justify-end min-h-[300px] md:min-h-[400px]">
              {/* Background Accent */}
              <div className="absolute inset-0 bg-[#CD1D1D] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out z-0" />
              
              <div className="relative z-10 flex flex-col">
                <span className="font-courier text-[10px] text-white/50 group-hover:text-white/80 font-bold tracking-widest mb-4 transition-colors">
                  0{index + 1} // ECOSYSTEM
                </span>
                <h3 className="font-national2 text-3xl md:text-5xl font-black uppercase tracking-tight leading-[0.9] text-white mb-6">
                  {eco.name}
                </h3>
                <p className="font-helvetica font-medium text-white/70 group-hover:text-white transition-colors">
                  {eco.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
