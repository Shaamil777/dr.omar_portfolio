"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import type { CompanyData } from "@/constants/companies";

gsap.registerPlugin(ScrollTrigger);

export default function ProgrammeFeatures({ company }: { company: CompanyData }) {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Default features mapped exactly from the user's reference screenshot
  const defaultFeatures = [
    { 
      title: "AGENCIES", 
      description: "To amplify their creative vision, we help advertising agencies as their creative partner, delivering corporate video content that captures and exceeds client expectations.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400"
    },
    { 
      title: "PUBLIC SECTOR", 
      description: "Delivering clear and impactful information is achieved when we help public sector agencies create professional video production solutions, drawing on our proven track record of success in delivering effective campaigns.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400"
    },
    { 
      title: "BRANDS", 
      description: "To elevate brand presence and drive customer engagement, we help brands create compelling video content, leveraging our experience in delivering successful video production campaigns that resonate with target audiences.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=400"
    },
    { 
      title: "VIDEO PRODUCTION COMPANIES", 
      description: "Specialised video production services are offered to other video production agencies, providing support for complex shoots and post-production workflows.",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=400"
    },
    { 
      title: "STARTUPS", 
      description: "We help startups make a strong first impression by producing polished, professional videos that showcase their brand's unique value proposition.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=400"
    },
    { 
      title: "NON-PROFIT", 
      description: "To bring their impactful work to life, we help non-profit organisations as their creative partner, delivering professional video production in Brisbane, and across Australia, that connect with audiences on a deeper level.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=400"
    }
  ];

  const features = company.features || defaultFeatures;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered slide up for list items
      gsap.fromTo(
        itemsRef.current.filter(Boolean),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-transparent text-[#111] py-16 md:py-20 relative z-10"
    >
      {/* Blinking Scattered Pixels Background */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 400px)', maskImage: 'linear-gradient(to bottom, black 0%, transparent 400px)' }}>
        <svg className="absolute inset-0 w-full h-full opacity-[0.15]">
          <pattern id="pixel-pattern-features" width="800" height="800" patternUnits="userSpaceOnUse">
             <rect x="160" y="80" width="80" height="80" fill="#CD1D1D" className="animate-pulse" style={{ animationDelay: '0s', animationDuration: '3.5s' }} />
             <rect x="480" y="240" width="80" height="80" fill="#CD1D1D" className="animate-pulse" style={{ animationDelay: '1.2s', animationDuration: '4s' }} />
             <rect x="720" y="400" width="80" height="80" fill="#CD1D1D" className="animate-pulse" style={{ animationDelay: '0.4s', animationDuration: '2.8s' }} />
             <rect x="80" y="640" width="80" height="80" fill="#CD1D1D" className="animate-pulse" style={{ animationDelay: '2.1s', animationDuration: '3.2s' }} />
             <rect x="320" y="560" width="80" height="80" fill="#CD1D1D" className="animate-pulse" style={{ animationDelay: '1.7s', animationDuration: '3s' }} />
             <rect x="560" y="80" width="80" height="80" fill="#CD1D1D" className="animate-pulse" style={{ animationDelay: '0.9s', animationDuration: '2.5s' }} />
          </pattern>
          <rect width="100%" height="100%" fill="url(#pixel-pattern-features)" />
        </svg>
      </div>

      <div className="w-full px-4 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 md:mb-16 flex flex-col items-start lg:ml-8">
          <span className="font-courier text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#CD1D1D] font-bold mb-4 block">
            [ WHAT YOU GET ]
          </span>
          <h2 className="font-national2 text-4xl md:text-5xl lg:text-[6rem] font-black uppercase tracking-normal leading-[0.9] text-[#111]">
            THE ECOSYSTEM
          </h2>
        </div>

        {/* Multi-Column Sticky Layout (70% Left, 30% Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-16 items-start">
          
          {/* Left Column (Scrolling List - 70%) */}
          <div className="lg:col-span-7 flex flex-col lg:-ml-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  ref={(el) => { itemsRef.current[index] = el; }}
                  className="flex flex-row items-start gap-6 border-t border-black/10 pt-8 group"
                >
                  {/* Thumbnail (Larger) */}
                  <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0 rounded-[20px] overflow-hidden shadow-sm border border-black/10 group-hover:scale-105 transition-transform duration-500">
                    <Image 
                      src={feature.image || 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=400'} 
                      alt={feature.title} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Text block (Larger) */}
                  <div className="flex flex-col pt-1">
                    <h3 className="font-national2 text-3xl md:text-4xl lg:text-[2.75rem] font-black uppercase tracking-normal text-[#111] leading-[0.9] mb-3 group-hover:text-[#CD1D1D] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="font-helvetica font-bold text-sm md:text-base lg:text-lg text-zinc-500 leading-relaxed pr-2">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (Sticky Media Player - 30%, smaller) */}
          <div className="lg:col-span-3 relative h-full hidden lg:block lg:-mr-4">
            <div className="sticky top-24 pt-4">
              {/* Media Player Mockup (Smaller) */}
              <div className="w-full aspect-[4/3] bg-black rounded-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.15)] relative overflow-hidden flex items-center justify-center p-2 border-2 border-black/5">
                <Image 
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800"
                  alt="Media Player"
                  fill
                  className="object-cover opacity-90 rounded-[20px]"
                />
                
                {/* Subtle Play Button overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M5 3l14 9-14 9V3z"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
