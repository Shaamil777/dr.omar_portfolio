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
      // Simple fade in and slide up for text
      gsap.fromTo(
        ".hero-text",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "expo.out", delay: 0.2 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-[90vh] md:h-[100vh] flex items-center justify-center bg-[#111] overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000"
          alt="Dr. Omar"
          fill
          className="object-cover opacity-40 grayscale"
          priority
        />
        {/* Gradient overlays to blend into the black background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111] via-transparent to-transparent" />
      </div>

      <div ref={textRef} className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col items-center justify-center text-center mt-24">
        <span className="hero-text font-courier text-sm md:text-base uppercase tracking-[0.4em] text-[#CD1D1D] font-bold mb-8 block">
          [ THE VISIONARY ]
        </span>
        <h1 className="hero-text font-national2 text-4xl md:text-6xl lg:text-[7rem] font-black uppercase tracking-tight leading-[0.9] text-white max-w-[80rem]">
          MORE THAN A COACH.<br />
          <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>A VISIONARY SHAPING</span><br />
          THE FUTURE OF GLOBAL LEADERSHIP.
        </h1>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center hero-text">
        <span className="font-courier text-[10px] uppercase tracking-widest text-white/50 mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white animate-pulse" />
        </div>
      </div>
    </section>
  );
}
