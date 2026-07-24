"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import type { CompanyData } from "@/constants/companies";

gsap.registerPlugin(ScrollTrigger);

const EyeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const TargetIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

export default function ProgrammeMissionVision({ company }: { company: CompanyData }) {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const bentoCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "expo.out" }
      });

      // Reveal left column
      tl.fromTo(
        leftColRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1.2 }
      )
      // Stagger reveal bento cards
      .fromTo(
        bentoCardsRef.current.filter(Boolean),
        { opacity: 0, y: 50, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.15 },
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
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600"
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen w-full bg-transparent text-[#111] relative z-10 flex flex-col justify-center py-24"
    >
      {/* Blinking Scattered Pixels Background (Bleeding from the section below) */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 400px)', maskImage: 'linear-gradient(to top, black 0%, transparent 400px)' }}>
        <svg className="absolute inset-0 w-full h-full opacity-[0.15]">
          <pattern id="pixel-pattern-mission" width="800" height="800" patternUnits="userSpaceOnUse">
             <rect x="240" y="720" width="80" height="80" fill="#CD1D1D" className="animate-pulse" style={{ animationDelay: '0s', animationDuration: '3.5s' }} />
             <rect x="560" y="640" width="80" height="80" fill="#CD1D1D" className="animate-pulse" style={{ animationDelay: '1.2s', animationDuration: '4s' }} />
             <rect x="80" y="560" width="80" height="80" fill="#CD1D1D" className="animate-pulse" style={{ animationDelay: '0.4s', animationDuration: '2.8s' }} />
             <rect x="400" y="480" width="80" height="80" fill="#CD1D1D" className="animate-pulse" style={{ animationDelay: '2.1s', animationDuration: '3.2s' }} />
             <rect x="640" y="720" width="80" height="80" fill="#CD1D1D" className="animate-pulse" style={{ animationDelay: '1.7s', animationDuration: '3s' }} />
             <rect x="320" y="400" width="80" height="80" fill="#CD1D1D" className="animate-pulse" style={{ animationDelay: '0.9s', animationDuration: '2.5s' }} />
          </pattern>
          <rect width="100%" height="100%" fill="url(#pixel-pattern-mission)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-[90rem] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (5 cols) */}
          <div ref={leftColRef} className="lg:col-span-5 flex flex-col">
            
            {/* Headings */}
            <div className="mb-8">
              {headings.map((heading, i) => (
                <h3 key={i} className="font-national2 text-3xl md:text-4xl lg:text-5xl font-black text-[#111] leading-[1.1] tracking-tight">
                  {heading}
                </h3>
              ))}
            </div>

            {/* Description */}
            <p className="font-helvetica text-base md:text-lg text-zinc-600 leading-relaxed mb-12">
              {desc}
            </p>

            {/* Stats */}
            {stats.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {stats.map((stat, i) => (
                  <div key={i} className="bg-white/60 backdrop-blur-md border border-black/10 rounded-2xl p-6 hover:bg-white/90 transition-colors duration-300">
                    <div className="font-national2 text-4xl font-black text-[#CD1D1D] mb-3">{stat.value}</div>
                    <div className="font-helvetica text-sm font-medium text-zinc-700 leading-snug">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button className="bg-[#CD1D1D] hover:bg-[#a81414] text-white font-national2 font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-full transition-colors duration-300 shadow-lg shadow-[#CD1D1D]/30">
                Join The {company.name} Program
              </button>
              <button className="bg-white hover:bg-zinc-100 text-[#111] border border-black/10 font-national2 font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-full transition-colors duration-300 flex items-center gap-2 shadow-sm">
                Brochure
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#CD1D1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column (7 cols) — Bento Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Vision Card */}
            <div 
              ref={(el) => { bentoCardsRef.current[0] = el; }}
              className="bg-white/60 backdrop-blur-md border border-black/10 rounded-3xl p-10 flex flex-col items-center justify-center text-center hover:bg-white/90 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] group"
            >
              <div className="w-14 h-14 bg-[#CD1D1D] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-[#CD1D1D]/30">
                <EyeIcon />
              </div>
              <h4 className="font-national2 text-xl font-black uppercase tracking-widest text-[#111] mb-4">Vision</h4>
              <p className="font-helvetica text-sm md:text-base text-zinc-600 leading-relaxed font-medium">
                {vision}
              </p>
            </div>

            {/* Image 1 */}
            <div 
              ref={(el) => { bentoCardsRef.current[1] = el; }}
              className="relative rounded-3xl overflow-hidden aspect-square md:aspect-auto h-full min-h-[300px] border border-black/10"
            >
              <Image 
                src={images[0]} 
                alt="Vision" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Image 2 */}
            <div 
              ref={(el) => { bentoCardsRef.current[2] = el; }}
              className="relative rounded-3xl overflow-hidden aspect-square md:aspect-auto h-full min-h-[300px] border border-black/10"
            >
              <Image 
                src={images[1]} 
                alt="Mission" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Mission Card */}
            <div 
              ref={(el) => { bentoCardsRef.current[3] = el; }}
              className="bg-white/60 backdrop-blur-md border border-black/10 rounded-3xl p-10 flex flex-col items-center justify-center text-center hover:bg-white/90 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] group"
            >
              <div className="w-14 h-14 bg-[#CD1D1D] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-[#CD1D1D]/30">
                <TargetIcon />
              </div>
              <h4 className="font-national2 text-xl font-black uppercase tracking-widest text-[#111] mb-4">Mission</h4>
              <p className="font-helvetica text-sm md:text-base text-zinc-600 leading-relaxed font-medium">
                {mission}
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
