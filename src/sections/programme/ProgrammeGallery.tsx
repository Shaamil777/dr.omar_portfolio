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

  const defaultImages = [
    { url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800", alt: "Img 1", caption: "01 // MENTORSHIP" },
    { url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800", alt: "Img 2", caption: "02 // MASTERCLASS" },
    { url: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800", alt: "Img 3", caption: "03 // RETREAT" },
    { url: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800", alt: "Img 4", caption: "04 // STRATEGY" },
  ];

  const gallery = company.gallery || defaultImages;
  const title = company.galleryTitle || "Witness the\nTransformation";
  const desc = company.galleryDescription || "Take an inside look at our immersive retreats, hands-on masterclasses, and powerful mentorship sessions. Every moment is designed to push your boundaries and unlock your ultimate potential.";
  const stats = company.galleryStats || [
    { value: "50+", label: "Global Retreats" },
    { value: "10k", label: "Lives Changed" },
  ];

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
      
      // Animate gallery images in a staggered flow
      gsap.fromTo(".gallery-img",
        { opacity: 0, y: 50, scale: 0.95 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 1, 
          stagger: 0.15, 
          ease: "expo.out", 
          scrollTrigger: { 
            trigger: sectionRef.current, 
            start: "top 60%" 
          } 
        }
      );
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
      
      <div className="container mx-auto px-6 lg:px-12 2xl:px-24 max-w-[100rem] relative z-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 relative">
          
          {/* Left Column (6 cols, pushed left edge) — Sticky Title & Text */}
          <div className="lg:col-span-6 relative" ref={leftColRef}>
            <div className="lg:sticky lg:top-32 flex flex-col items-start pt-0 mt-0">
              <h2 className="font-helvetica text-3xl sm:text-4xl md:text-5xl lg:text-[2.5rem] xl:text-[3rem] 2xl:text-[4rem] font-bold tracking-tight leading-[1.05] text-[#111] mb-6">
                {title.split("\n").map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </h2>
              
              <p className="font-helvetica text-base sm:text-lg md:text-xl text-zinc-500 max-w-lg font-medium leading-relaxed mb-12">
                {desc}
              </p>
              
              {/* Stats Row */}
              <div className="flex flex-wrap sm:flex-nowrap items-start sm:items-center gap-6 sm:gap-12 border-t border-black/10 pt-8 w-full max-w-md relative">
                {stats.map((stat, i) => (
                  <div key={i} className="relative z-10 group flex-1">
                    <div className="font-helvetica text-2xl sm:text-3xl lg:text-4xl font-black text-[#111] lg:group-hover:text-[#CD1D1D] transition-colors duration-300">
                      {stat.value}
                    </div>
                    <div className="font-courier text-xs sm:text-sm font-bold tracking-widest text-zinc-500 uppercase mt-2">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (6 cols, pushed far right) — Asymmetrical Gallery Grid */}
          <div className="lg:col-span-6 lg:col-start-7 mt-12 lg:mt-0">
            <div className="grid grid-cols-2 gap-4 md:gap-6 w-full">
              {gallery.map((img, index) => {
                // Determine grid span based on index for a dynamic layout
                // 0 -> wide (col-span-2)
                // 1 -> square (col-span-1)
                // 2 -> square (col-span-1)
                // 3 -> wide (col-span-2)
                const isWide = index % 3 === 0;

                return (
                  <div 
                    key={index}
                    className={`gallery-img relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border border-black/5 shadow-xl group cursor-pointer bg-white ${isWide ? 'col-span-2 aspect-[16/9]' : 'col-span-1 aspect-[4/5]'}`}
                  >
                    <Image 
                      src={img.url} 
                      alt={img.alt || `Gallery Image ${index + 1}`} 
                      fill 
                      className="object-cover lg:group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                    />
                    
                    {/* Subtle gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Caption Overlay */}
                    {img.caption && (
                      <div className="absolute bottom-6 left-6 right-6 opacity-0 lg:group-hover:opacity-100 translate-y-4 lg:group-hover:translate-y-0 transition-all duration-500 pointer-events-none flex items-center gap-3">
                        <span className="w-8 h-[2px] bg-[#CD1D1D] hidden sm:block"></span>
                        <span className="font-courier text-xs md:text-sm uppercase tracking-[0.2em] text-white font-bold block drop-shadow-md">
                          {img.caption}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
