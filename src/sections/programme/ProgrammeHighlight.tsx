"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import type { CompanyData } from "@/constants/companies";

gsap.registerPlugin(ScrollTrigger);

const PillarIcon = ({ name, className }: { name: string, className?: string }) => {
  switch (name) {
    case "shield":
      return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;
    case "layers":
      return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>;
    case "heart":
      return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;
    case "globe":
      return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>;
    default:
      return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth={1} /></svg>;
  }
};

export default function ProgrammeHighlight({ company }: { company: CompanyData }) {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Use the new pillars data, or fallback if none exists
  const pillars = company.pillars || [
    { title: "Ethical Leadership", focus: "Integrity", concept: "Build with purpose.", icon: "shield" },
    { title: "Scalable Systems", focus: "Operational Excellence", concept: "System-driven growth.", icon: "layers" },
    { title: "Personal Mastery", focus: "Balanced Life", concept: "Sustainable success.", icon: "heart" },
    { title: "Legacy Building", focus: "Mentorship", concept: "Outlast the founders.", icon: "globe" }
  ];

  useEffect(() => {
    if (pillars.length === 0) return;

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;

      // Setup initial states
      pillars.forEach((_, i) => {
        const el = pillarsRef.current[i];
        if (i === 0) {
          gsap.set(el, { opacity: 1, y: 0, filter: isMobile ? "none" : "blur(0px)" });
        } else {
          gsap.set(el, { opacity: 0, y: isMobile ? 40 : 80, filter: isMobile ? "none" : "blur(10px)" });
        }
      });

      // Master scroll timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1, // Smooth scrub
        }
      });

      // Orchestrate the overlapping fade in/out sequence
      pillars.forEach((_, i) => {
        const el = pillarsRef.current[i];
        
        // If not the first, animate it IN
        if (i > 0) {
          tl.to(el, {
            opacity: 1,
            y: 0,
            ...(isMobile ? {} : { filter: "blur(0px)" }),
            duration: 1,
            ease: "power2.out"
          }, i * 2 - 1);
        }

        // Hold segment (does nothing visually, just occupies scroll time)
        tl.to(el, { duration: 1 }, i * 2);

        // If not the last, animate it OUT
        if (i < pillars.length - 1) {
          tl.to(el, {
            opacity: 0,
            y: isMobile ? -40 : -80,
            ...(isMobile ? {} : { filter: "blur(10px)" }),
            duration: 1,
            ease: "power2.in"
          }, i * 2 + 1);
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, [pillars]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0a0a0a] text-white h-[calc(60vh*var(--pillar-count))] md:h-[calc(100vh*var(--pillar-count))]"
      style={{ "--pillar-count": pillars.length } as React.CSSProperties}
    >
      <div 
        ref={containerRef}
        className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center"
      >
        {/* Abstract Ambient Background */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
           {/* Deep red ambient glow */}
           <div className="hidden md:block absolute w-[600px] h-[600px] bg-[#CD1D1D] rounded-full blur-[150px] opacity-[0.07]" />
           
           {/* Blinking Scattered Pixels (Aligned to 80px grid) */}
           <svg className="hidden md:block absolute inset-0 w-full h-full opacity-50 z-0">
             <pattern id="pixel-pattern" width="800" height="800" patternUnits="userSpaceOnUse">
                <rect x="80" y="160" width="80" height="80" fill="#CD1D1D" className="animate-pulse" style={{ animationDelay: '0s', animationDuration: '3s' }} />
                <rect x="400" y="80" width="80" height="80" fill="#CD1D1D" className="animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }} />
                <rect x="640" y="320" width="80" height="80" fill="#CD1D1D" className="animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }} />
                <rect x="240" y="560" width="80" height="80" fill="#CD1D1D" className="animate-pulse" style={{ animationDelay: '2s', animationDuration: '3.5s' }} />
                <rect x="560" y="720" width="80" height="80" fill="#CD1D1D" className="animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '3s' }} />
                <rect x="0" y="400" width="80" height="80" fill="#CD1D1D" className="animate-pulse" style={{ animationDelay: '0.8s', animationDuration: '2s' }} />
             </pattern>
             <rect width="100%" height="100%" fill="url(#pixel-pattern)" />
           </svg>

           {/* Highly Visible Grid */}
           <div className="absolute inset-0 opacity-40"
                style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '80px 80px' }} 
           />
        </div>

        {/* Top Header Fixed overlay */}
        <div className="absolute top-8 md:top-16 left-0 w-full px-6 lg:px-24 max-w-[100rem] mx-auto z-20 flex justify-center md:justify-between items-start pointer-events-none">
            <span className="font-courier text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#CD1D1D] font-bold block text-center md:text-left">
              [ THE CORE FRAMEWORK ]
            </span>
            <span className="font-national2 text-sm text-zinc-500 font-bold hidden md:block uppercase tracking-widest">
              {company.name} Pillars
            </span>
        </div>

        {/* Center Container for Animated Pillars */}
        <div className="relative w-full max-w-6xl mx-auto px-6 h-[70vh] flex items-center justify-center z-10 pointer-events-none">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              ref={(el) => { pillarsRef.current[index] = el; }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center will-change-transform"
            >
              {/* Massive Watermark Number in background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/[0.03] -z-10 font-national2 font-black leading-none select-none" style={{ fontSize: "clamp(20rem, 50vw, 60rem)" }}>
                0{index + 1}
              </div>

              {/* Progress Counter */}
              <div className="font-courier text-[#CD1D1D] font-bold text-sm md:text-base mb-8 md:mb-12 tracking-[0.2em]">
                0{index + 1} / 0{pillars.length}
              </div>

              {/* Massive Title */}
              <h3 className="font-national2 text-5xl md:text-7xl lg:text-[7rem] font-black uppercase tracking-normal leading-[0.9] text-white mb-8 md:mb-12">
                {pillar.title}
              </h3>

              {/* Focus Badge */}
              <div className="inline-block border border-white/20 bg-white/5 rounded-full px-6 py-2 backdrop-blur-md mb-8 md:mb-10">
                <span className="font-courier text-xs md:text-sm uppercase tracking-widest text-zinc-300">
                  Focus: <strong className="text-white">{pillar.focus}</strong>
                </span>
              </div>

              {/* Concept Paragraph */}
              <p className="font-helvetica text-lg md:text-2xl text-zinc-400 max-w-3xl leading-relaxed font-medium">
                {pillar.concept}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
