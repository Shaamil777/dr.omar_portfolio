"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function BlogsHero() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro animation
      const tl = gsap.timeline();
      
      tl.fromTo(
        ".hero-text",
        { y: 60, opacity: 0, rotateX: 10 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.1, ease: "power4.out", delay: 0.1 }
      )
      .fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.5, ease: "expo.out" },
        "-=1"
      )
      .fromTo(
        ".hero-image",
        { scale: 1.05, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 1.5, ease: "expo.out" },
        "-=1.2"
      );



    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-[90vh] md:min-h-[100vh] flex flex-col justify-center bg-[#FAF8F5] overflow-hidden pt-32 pb-10 md:pb-20">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#CD1D1D]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none" />
      
      <div className="hero-content-wrapper relative z-10 container mx-auto px-6 lg:px-12 flex flex-col">
        
        {/* Top Tagline */}
        <div className="flex items-center gap-4 mb-8 md:mb-12 hero-text perspective-1000 origin-bottom">
          <div className="w-12 h-[2px] bg-[#CD1D1D]" />
          <span className="font-courier text-xs md:text-sm uppercase tracking-[0.3em] text-[#CD1D1D] font-bold">
            INSIGHTS & PERSPECTIVES
          </span>
        </div>

        {/* Main Title Layout */}
        <div ref={textRef} className="flex flex-col mb-12">
          <h1 className="hero-text perspective-1000 origin-bottom font-helvetica text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.85] text-[#111] uppercase mb-2 md:mb-4">
            The Latest
          </h1>
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10">
            <h1 className="hero-text perspective-1000 origin-bottom font-helvetica text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.85] text-[#111] uppercase">
              Thoughts.
            </h1>
            <p className="hero-text perspective-1000 origin-bottom font-helvetica text-sm md:text-base lg:text-lg text-[#111]/70 font-medium tracking-wide max-w-sm lg:mt-4">
              Deep dives into leadership, enterprise protection, and purpose-driven organizations by Dr. Omar.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div ref={lineRef} className="w-full h-[2px] bg-[#111]/10 origin-left mb-10 md:mb-16" />

        {/* Featured / Accent Image */}
        <div className="hero-image relative w-full h-[25vh] md:h-[40vh] rounded-[2rem] overflow-hidden group cursor-pointer shadow-2xl">
          <Image 
            src="https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2000"
            alt="Blogs Featured"
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-[#111]/20 group-hover:bg-[#111]/0 transition-colors duration-700 pointer-events-none" />
          
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-white/95 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-3 shadow-xl transition-transform duration-500 group-hover:-translate-y-2 pointer-events-none">
            <div className="w-2 h-2 rounded-full bg-[#CD1D1D] animate-pulse" />
            <span className="font-helvetica font-bold text-[10px] md:text-xs uppercase tracking-widest text-[#111]">Featured Article</span>
          </div>
        </div>
      </div>
      
    </section>
  );
}
