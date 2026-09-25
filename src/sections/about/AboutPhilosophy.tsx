"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPhilosophy() {
  const sectionRef = useRef<HTMLElement>(null);

  const philosophySteps = [
    { title: "Identity", desc: "Knowing who you are" },
    { title: "Clarity", desc: "Seeing the path ahead" },
    { title: "Purpose", desc: "Finding your 'why'" },
    { title: "Direction", desc: "Moving with intent" },
    { title: "Discipline", desc: "Consistent action" },
    { title: "Habits", desc: "Building the foundation" },
    { title: "Excellence", desc: "Mastering the craft" },
    { title: "Significance", desc: "Leaving a legacy" }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Philosophy tags animation
      gsap.fromTo(
        ".philosophy-tag",
        { y: 20, opacity: 0, scale: 0.9 },
        {
          y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.05, ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: ".philosophy-container",
            start: "top 85%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#0a0a0a] text-white py-16 md:py-24 relative overflow-hidden z-10 border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-10 max-w-[90rem] relative z-10 philosophy-container">
        
        <div className="flex flex-col mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#CD1D1D]" />
            <span className="font-courier text-xs md:text-sm uppercase tracking-[0.3em] text-[#CD1D1D] font-bold">
              The Foundation
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h2 className="font-helvetica text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white max-w-2xl leading-[1.1]">
              Core Coaching Philosophy.
            </h2>
            <p className="font-helvetica text-base md:text-lg text-white/60 font-light leading-relaxed max-w-xl">
              When people heal emotionally and discover their purpose, they become better leaders, build stronger families, and create ethical businesses.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
          {philosophySteps.map((step, idx) => (
            <div 
              key={idx} 
              className="philosophy-tag group relative p-8 md:p-10 border-r border-b border-white/10 hover:bg-white/[0.03] transition-colors duration-500 flex flex-col justify-between min-h-[240px] cursor-default"
            >
              {/* Number & Accent */}
              <div className="flex items-center justify-between mb-12">
                <span className="font-courier text-[#CD1D1D] text-lg md:text-xl font-bold tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">
                  {(idx + 1).toString().padStart(2, '0')}
                </span>
                <div className="w-12 h-[1px] bg-white/0 group-hover:bg-[#CD1D1D]/50 transition-colors duration-500" />
              </div>
              
              {/* Text */}
              <div>
                <h3 className="font-helvetica text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#CD1D1D] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="font-helvetica text-sm text-white/50 group-hover:text-white/80 transition-colors duration-300 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
