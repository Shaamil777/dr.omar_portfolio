"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutHero() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-text",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "expo.out", delay: 0.2 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-[90vh] md:h-[100vh] flex items-center justify-center bg-[#111] overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/about/DSC05474.png"
          alt="Dr. Abdussalam Omar"
          fill
          className="object-cover opacity-35 grayscale"
          priority
        />
        {/* Gradient overlays to blend into the black background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111]/60 via-transparent to-[#111]/60" />
      </div>

      <div ref={textRef} className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col items-center justify-center text-center mt-20">
        <span className="hero-text font-courier text-xs md:text-sm uppercase tracking-[0.4em] text-[#CD1D1D] font-bold mb-6 block">
          [ PURPOSE • LEADERSHIP • TRANSFORMATION ]
        </span>
        <h1 className="hero-text font-helvetica text-4xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-bold tracking-tight leading-[0.9] text-white max-w-[85rem] mb-8">
          Healing People.<br />
          <span>Developing Leaders.</span><br />
          Building Purpose-Driven Organizations.
        </h1>
        <p className="hero-text font-helvetica text-sm md:text-xl text-white/70 font-medium tracking-wide max-w-4xl border-t border-white/10 pt-6">
          Business Leadership Coach • Human Transformation Expert • Branding Strategist • Entrepreneur
        </p>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center hero-text">
        <span className="font-courier text-[10px] uppercase tracking-widest text-white/50 mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white animate-pulse" />
        </div>
      </div>
    </section>
  );
}
