"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import type { CompanyData } from "@/constants/companies";

gsap.registerPlugin(ScrollTrigger);

export default function ProgrammeGallery({ company }: { company: CompanyData }) {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  const defaultImages = [
    { url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800", alt: "Img 1", caption: "01 // MENTORSHIP" },
    { url: "https://images.unsplash.com/photo-1542744094-24638ea0bc40?auto=format&fit=crop&q=80&w=800", alt: "Img 2", caption: "02 // MASTERCLASS" },
    { url: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800", alt: "Img 3", caption: "03 // RETREAT" },
    { url: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800", alt: "Img 4", caption: "04 // STRATEGY" },
  ];

  const gallery = company.gallery || defaultImages;

  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    
    const handleMouseLeave = () => {
      setMousePos({ x: -100, y: -100 });
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
      section.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        section.removeEventListener("mousemove", handleMouseMove);
        section.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in the left column text
      gsap.fromTo(leftColRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1, 
          x: 0, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );
      
      // We don't need complex parallax anymore, the native sticky + scroll handles the layout perfectly.
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#F6EFED] text-[#111] relative z-30 pb-24 pt-8 md:pb-32 md:pt-12 border-t border-black/10 overflow-clip"
    >
      {/* Base black dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20"
           style={{ backgroundImage: 'radial-gradient(circle, #111 1px, transparent 1px)', backgroundSize: '15px 15px' }} 
      />

      {/* Highlighted red dot grid on hover */}
      <div className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
           style={{ 
             opacity: mousePos.x > 0 ? 1 : 0,
             backgroundImage: 'radial-gradient(circle, #CD1D1D 1.5px, transparent 1.5px)', 
             backgroundSize: '15px 15px',
             maskImage: `radial-gradient(250px circle at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
             WebkitMaskImage: `radial-gradient(250px circle at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
           }} 
      />
      
      <div className="container mx-auto px-6 lg:px-24 max-w-[100rem] relative z-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 relative">
          
          {/* Left Column (6 cols, pushed left edge) — Sticky Title & Text */}
          <div className="lg:col-span-6 relative lg:-ml-40" ref={leftColRef}>
            <div className="lg:sticky lg:top-32 flex flex-col items-start pt-0 mt-0">
              {/* Decorative Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#CD1D1D]/30 bg-[#CD1D1D]/5 text-[#CD1D1D] text-xs font-bold tracking-widest uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CD1D1D] animate-pulse"></span>
                Inside The Experience
              </div>

              <h2 className="font-national2 text-4xl sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-black uppercase tracking-normal leading-[1.05] text-[#111] mb-6">
                WITNESS THE<br/>TRANSFORMATION
              </h2>
              
              <p className="font-helvetica text-lg md:text-xl text-zinc-500 max-w-md font-medium leading-snug mb-12">
                Take an inside look at our immersive retreats, hands-on masterclasses, and powerful mentorship sessions. Every moment is designed to push your boundaries and unlock your ultimate potential.
              </p>
              
              {/* Stats Row */}
              <div className="flex items-center gap-6 sm:gap-12 border-t border-black/10 pt-8 w-full max-w-sm relative">
                <div className="relative z-10 group">
                  <div className="font-national2 text-4xl sm:text-5xl font-black text-[#111] group-hover:text-[#CD1D1D] transition-colors duration-300">50+</div>
                  <div className="font-courier text-[10px] sm:text-xs font-bold tracking-widest text-zinc-500 uppercase mt-2">Global Retreats</div>
                </div>
                <div className="relative z-10 group">
                  <div className="font-national2 text-4xl sm:text-5xl font-black text-[#111] group-hover:text-[#CD1D1D] transition-colors duration-300">10k</div>
                  <div className="font-courier text-[10px] sm:text-xs font-bold tracking-widest text-zinc-500 uppercase mt-2">Lives Changed</div>
                </div>
                
                {/* Decorative rotating element */}
                <div className="absolute right-0 top-6 opacity-10 animate-[spin_10s_linear_infinite] pointer-events-none">
                  <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 0L53.5355 35.3553L85.3553 14.6447L64.6447 46.4645L100 50L64.6447 53.5355L85.3553 85.3553L53.5355 64.6447L50 100L46.4645 64.6447L14.6447 85.3553L35.3553 53.5355L0 50L35.3553 46.4645L14.6447 14.6447L46.4645 35.3553L50 0Z" fill="#111"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (6 cols, pushed far right) — Vertically Scrolling Image Stack */}
          <div className="lg:col-span-6 lg:col-start-7 lg:-mr-48 mt-8 lg:mt-0" ref={rightColRef}>
            <div className="flex flex-col w-full rounded-3xl overflow-hidden border-[4px] border-white shadow-[0_30px_60px_rgba(0,0,0,0.25)] bg-white">
              {gallery.map((img, index) => (
                <div 
                  key={index}
                  className="relative w-full aspect-[2/1] overflow-hidden group"
                >
                  <Image 
                    src={img.url} 
                    alt={img.alt} 
                    fill 
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
