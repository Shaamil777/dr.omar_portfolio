"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import type { CompanyData } from "@/constants/companies";

gsap.registerPlugin(ScrollTrigger);

export default function ProgrammeFeatures({ company }: { company: CompanyData }) {
  const sectionRef = useRef<HTMLElement>(null);

  // Features mapping updated to reflect the new premium offering
  const defaultFeatures = [
    { 
      title: "Global Mastermind", 
      description: "Join an elite network of visionary founders and industry leaders from across the globe.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: "Strategic Mentorship", 
      description: "1-on-1 guidance from veterans who have scaled multi-million dollar enterprises.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: "Valuation Restructuring", 
      description: "Optimize your business model to attract high-tier investors and maximize exit multiples.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: "Ethical Leadership", 
      description: "Build a lasting legacy rooted in purpose, balance, and unwavering integrity.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: "Rapid Execution", 
      description: "Implement proven frameworks to accelerate growth and bypass years of trial and error.",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: "International Retreats", 
      description: "Exclusive invites to closed-door networking events in premium global locations.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const features = company.features && company.features.length > 0 ? company.features : defaultFeatures;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".editorial-anim",
        { opacity: 0, y: 50 },
        {
          opacity: 1, 
          y: 0, 
          duration: 1.2, 
          stagger: 0.1, 
          ease: "expo.out",
          scrollTrigger: { 
            trigger: sectionRef.current, 
            start: "top 75%" 
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FAF8F5] text-[#111] py-24 md:py-32 lg:py-40 relative z-10"
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-[100rem]">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Sticky Header & Media Player */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col editorial-anim z-20">
            <span className="font-courier text-xs md:text-sm uppercase tracking-[0.3em] text-[#CD1D1D] font-bold mb-6 block"> 
              {company.ecosystemTagline || "WHAT YOU GET"} 
            </span>
            <h2 className="font-helvetica text-5xl md:text-6xl lg:text-[80px] font-bold tracking-tighter leading-[0.9] text-[#111] uppercase mb-12">
              {company.ecosystemTitle || "The Ecosystem"}
            </h2>
            
            {/* Media Player - High End Minimal */}
            <div className="w-full aspect-[4/3] md:aspect-[16/10] bg-zinc-200 relative group cursor-pointer overflow-hidden rounded-sm shadow-xl">
              <Image 
                src={company.ecosystemMediaImage || "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1200"} 
                alt={company.ecosystemTitle || "Media Player"} 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700" />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-white/60 flex items-center justify-center backdrop-blur-md text-white group-hover:bg-[#CD1D1D] group-hover:border-[#CD1D1D] group-hover:scale-110 transition-all duration-500 shadow-xl">
                  <svg className="w-8 h-8 md:w-10 md:h-10 ml-2" fill="currentColor" viewBox="0 0 24 24"><path d="M5 3l14 9-14 9V3z"/></svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Typography List */}
          <div className="lg:col-span-7 flex flex-col pt-4 lg:pt-32 z-10">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="editorial-anim group relative border-t border-black/10 py-10 md:py-14 flex flex-col cursor-crosshair hover:bg-white transition-colors duration-500 px-4 md:px-8 -mx-4 md:-mx-8 first:border-t-0 lg:first:border-t"
              >
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 md:gap-8 relative z-10">
                  <div className="flex items-baseline gap-6 md:gap-10">
                    <span className="font-courier text-lg md:text-xl text-zinc-300 font-bold tracking-widest group-hover:text-[#CD1D1D] transition-colors duration-500">
                      {(idx + 1).toString().padStart(2, '0')}
                    </span>
                    <h3 className="font-helvetica text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#111] group-hover:text-[#CD1D1D] transition-colors duration-500">
                      {feature.title}
                    </h3>
                  </div>
                </div>
                
                {/* Expandable Content Area on Hover */}
                <div className="mt-6 md:mt-8 pl-0 md:pl-[4.5rem] lg:pl-[5.5rem] grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <p className="font-helvetica text-base md:text-lg text-zinc-500 font-light leading-relaxed max-w-sm group-hover:text-[#111] transition-colors duration-500">
                    {feature.description}
                  </p>
                  <div className="relative w-full aspect-[16/9] rounded-sm overflow-hidden opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 origin-left hidden md:block">
                     <Image 
                       src={feature.image || "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"} 
                       alt={feature.title} 
                       fill 
                       className="object-cover grayscale opacity-80" 
                     />
                  </div>
                </div>
                
                {/* Thin bottom border effect */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#CD1D1D] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
