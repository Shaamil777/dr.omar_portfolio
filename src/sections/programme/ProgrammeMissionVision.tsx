"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import type { CompanyData } from "@/constants/companies";

gsap.registerPlugin(ScrollTrigger);

const EyeIcon = ({ className = "text-[#111]" }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const TargetIcon = ({ className = "text-[#111]" }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

export default function ProgrammeMissionVision({ company }: { company: CompanyData }) {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightElementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "expo.out" }
      });

      // Reveal left column
      tl.fromTo(
        leftColRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2 }
      )
      // Stagger reveal right elements
      .fromTo(
        rightElementsRef.current.filter(Boolean),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2 },
        "-=0.8"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const headings = company.missionVisionHeading || ["Grow with clarity", "Lead with confidence", "Build a lasting legacy"];
  const desc = company.missionVisionDesc || "To empower business owners to grow with clarity, lead with confidence, and build enduring legacies through structured mentorship.";
  const stats = company.stats || [];
  const mission = company.mission || "";
  const vision = company.vision || "";
  const images = company.missionVisionImages || [
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200"
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen w-full bg-transparent text-[#111] relative z-10 flex flex-col justify-center py-20 md:py-24"
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-[90rem] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 cols) */}
          <div ref={leftColRef} className="lg:col-span-5 flex flex-col">
            
            <div className="border-l-[3px] border-[#CD1D1D] pl-5 md:pl-8 flex flex-col gap-5 md:gap-6 mb-10">
              <span className="font-courier text-xs uppercase tracking-[0.3em] text-[#CD1D1D] font-bold">
                {company.missionVisionTagline || "PURPOSE & VISION"}
              </span>
              {/* Headings */}
              <div className="flex flex-col gap-1 md:gap-2">
                {headings.map((heading, i) => (
                  <h3 key={i} className="text-2xl sm:text-3xl md:text-4xl lg:text-[2rem] font-helvetica font-bold text-[#111] leading-[1.1] tracking-tight">
                    {heading}
                  </h3>
                ))}
              </div>

              {/* Description */}
              <p className="text-base font-helvetica font-normal text-zinc-600 leading-relaxed max-w-lg">
                {desc}
              </p>
            </div>

            {/* Stats */}
            {stats.length > 0 && (
              <div className="flex flex-col gap-6 mb-10">
                {stats.map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <div className="font-helvetica text-3xl lg:text-4xl font-bold tracking-tight text-[#111] mb-1">{stat.value}</div>
                    <div className="font-helvetica text-xs md:text-sm font-normal text-zinc-500 uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Buttons */}
            <div className="flex flex-row items-center gap-3 w-full">
              <button className="bg-[#111] lg:hover:bg-[#CD1D1D] text-white font-helvetica font-medium uppercase tracking-wider text-[10px] md:text-xs px-5 py-3 md:px-6 md:py-3.5 rounded-full transition-colors duration-300 whitespace-nowrap">
                Join The {company.name} Program
              </button>
              <button className="bg-transparent lg:hover:bg-zinc-100 text-[#111] border border-black/20 font-helvetica font-medium uppercase tracking-wider text-[10px] md:text-xs px-5 py-3 md:px-6 md:py-3.5 rounded-full transition-colors duration-300 flex items-center gap-2 whitespace-nowrap">
                Brochure
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column (7 cols) — Minimal Editorial Layout */}
          <div className="lg:col-span-7 flex flex-col h-full pt-2">
            
            {/* Elegant Multi-Image Header */}
            <div className="flex gap-4 md:gap-6 mb-12">
              {/* Image 1 (Wider, Left) */}
              <div 
                ref={(el) => { rightElementsRef.current[0] = el; }}
                className="flex-[3] w-full aspect-[4/3] relative overflow-hidden rounded-sm bg-zinc-100"
              >
                <Image 
                  src={images[0]} 
                  alt="Mission & Vision" 
                  fill 
                  className="object-cover grayscale opacity-90 lg:hover:grayscale-0 lg:hover:opacity-100 lg:hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>
              
              {/* Image 2 (Taller, Right, Staggered down) */}
              <div 
                ref={(el) => { rightElementsRef.current[3] = el; }}
                className="flex-[2] w-full aspect-[3/4] relative overflow-hidden rounded-sm bg-zinc-100 mt-8 md:mt-16"
              >
                <Image 
                  src={images[1] || images[0]} 
                  alt="Professional Leadership" 
                  fill 
                  className="object-cover grayscale opacity-90 lg:hover:grayscale-0 lg:hover:opacity-100 lg:hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-10">
              {/* Vision Block */}
              <div 
                ref={(el) => { rightElementsRef.current[1] = el; }}
                className="flex-1 border-t border-black/20 pt-6 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-helvetica text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-zinc-400 group-hover:text-[#CD1D1D] transition-colors duration-500">Vision</h4>
                  <EyeIcon className="text-zinc-300 w-5 h-5 group-hover:text-[#CD1D1D] transition-colors duration-500" />
                </div>
                <p className="font-helvetica text-base md:text-lg text-[#111] leading-relaxed font-light pr-4">
                  {vision}
                </p>
              </div>

              {/* Mission Block */}
              <div 
                ref={(el) => { rightElementsRef.current[2] = el; }}
                className="flex-1 border-t border-black/20 pt-6 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-helvetica text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-zinc-400 group-hover:text-[#CD1D1D] transition-colors duration-500">Mission</h4>
                  <TargetIcon className="text-zinc-300 w-5 h-5 group-hover:text-[#CD1D1D] transition-colors duration-500" />
                </div>
                <p className="font-helvetica text-base md:text-lg text-[#111] leading-relaxed font-light pr-4">
                  {mission}
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
