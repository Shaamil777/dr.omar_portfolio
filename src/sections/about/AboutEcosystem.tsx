"use client";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function AboutEcosystem() {
  const sectionRef = useRef<HTMLElement>(null);

  const organizations = [
    { 
      name: "", 
      tagline: "Transforming People. Developing Leaders.",
      isHea: true,
      bgImage: "/images/about/hea.webp",
      bgPosition: "object-[center_20%] md:object-[center_25%]",
      logo: (
        <div className="flex items-center gap-4">
          {/* Abstract HEA Figure */}
          <div className="relative w-12 h-16 flex-shrink-0">
            <svg viewBox="0 0 100 120" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 30 C 50 10, 70 10, 80 30" stroke="#E66A6B" strokeWidth="6" strokeLinecap="round" />
              <path d="M50 40 C 60 70, 40 100, 30 110" stroke="#EE9D45" strokeWidth="6" strokeLinecap="round" />
              <path d="M20 50 C 40 40, 60 50, 70 80" stroke="#AF59A9" strokeWidth="6" strokeLinecap="round" />
              <path d="M60 40 C 80 50, 90 80, 80 110" stroke="#4688D3" strokeWidth="6" strokeLinecap="round" />
              <circle cx="50" cy="20" r="8" fill="#E66A6B" />
            </svg>
          </div>
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="font-serif text-[3.5rem] md:text-[4.5rem] tracking-widest text-[#2986CC] leading-none mb-1">
              HEA
            </span>
            <span className="font-helvetica font-medium text-[10px] md:text-xs tracking-[0.25em] text-[#2986CC] uppercase">
              Human Excellence Academy
            </span>
          </div>
        </div>
      ),
      desc: (
        <div className="space-y-4">
          <p>Human Excellence Academy is the flagship institution founded by Dr. Omar to help individuals unlock their highest potential through holistic human development.</p>
          <p>The academy integrates psychology, emotional intelligence, leadership, coaching, neuroscience, spirituality, and experiential learning to create deep and sustainable transformation. Its programs are designed to help people heal emotionally, strengthen relationships, discover purpose, build confidence, and develop the mindset required for lifelong success.</p>
        </div>
      )
    },
    { 
      name: "Brandmount", 
      tagline: "The Identity Expert • Building Brands with Purpose",
      bgImage: "/images/about/brandmount.webp",
      bgPosition: "object-[center_20%] md:object-[center_25%]",
      logo: (
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <span className="font-helvetica font-black text-[2.75rem] md:text-5xl tracking-tighter text-white leading-none">
            Brandmount<sup className="text-xl -top-4 md:-top-5 ml-1">®</sup>
          </span>
          <span className="font-helvetica font-light text-base md:text-lg text-white/90 mt-1 tracking-wide">
            The identity expert
          </span>
        </div>
      ),
      desc: "A strategic branding and business consulting company that helps entrepreneurs and organizations discover, define, and communicate their authentic identity and long-term brand building." 
    },
    { 
      name: "OATHMEN® LLC, Sharjah", 
      tagline: "From Ideas to IPO®",
      bgImage: "/images/about/oathman.webp",
      logo: (
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <span className="font-helvetica font-bold text-3xl md:text-4xl tracking-wide text-white leading-none">
            OATHMEN
          </span>
          <span className="font-helvetica font-bold text-[9px] md:text-[11px] tracking-[0.2em] text-white mt-1">
            THE STARTUP COACHING CLUB
          </span>
        </div>
      ),
      desc: "A startup coaching, incubation, and entrepreneurship ecosystem established to help aspiring founders transform innovative ideas into scalable, investment-ready businesses." 
    },
    { 
      name: "TravelNGrow LLC, Dubai", 
      tagline: "Where Business Meets the World",
      bgImage: "/images/about/travel.webp",
      bgPosition: "object-[center_40%] md:object-[center_40%]",
      logo: (
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <span className="font-helvetica font-bold text-[2.5rem] md:text-[2.75rem] tracking-tight text-white leading-none">
            Travel<span className="text-[#F5A623]">N</span>Grow<sup className="text-xl -top-4 ml-1">®</sup>
          </span>
          <span className="font-helvetica font-light text-sm md:text-base tracking-[0.15em] text-white mt-1 uppercase">
            experience the world
          </span>
        </div>
      ),
      desc: "A premium global tourism, business networking, and experiential learning company that combines international travel with entrepreneurship, leadership development, and international networking." 
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".eco-row",
        { opacity: 0, y: 30 },
        { 
          opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#0a0a0a] relative z-10 pt-20 md:pt-32 pb-0 flex flex-col justify-start min-h-screen border-t border-white/10 overflow-hidden">
      {/* Abstract Background Elements (Matching Story Section) */}
      <div className="absolute top-1/3 right-0 w-[50vw] h-[50vw] bg-[#CD1D1D]/5 rounded-full blur-[140px] translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[30vw] h-[30vw] bg-[#CD1D1D]/5 rounded-full blur-[120px] translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 max-w-[100rem] relative z-10">
        {/* Section Header */}
        <div className="eco-row mb-20 md:mb-28 max-w-7xl">
          <h2 className="font-helvetica text-5xl md:text-7xl lg:text-[7.5rem] font-bold tracking-tighter leading-[0.9] text-white uppercase mb-8 md:mb-12">
            Organizations<br />Founded
          </h2>
          <p className="font-helvetica text-sm md:text-base lg:text-lg text-white/80 font-light leading-relaxed">
            Driven by a vision to create lasting impact beyond individual coaching, Dr. Abdussalam Omar has established a group of purpose-driven organizations that together form a complete ecosystem for leadership development, entrepreneurship, branding, business growth, and human transformation. Each organization addresses a different stage of personal, professional, or business development while working towards one common mission—developing better people, stronger leaders, sustainable businesses, and healthier communities.
          </p>
        </div>

      </div>

      <div className="flex flex-col w-full relative z-10 border-b border-[#CD1D1D]/20 lg:border-b-0">
        {organizations.map((org: any, index) => (
          <div 
            key={index} 
            className={`eco-row relative w-full overflow-hidden group ${index !== 0 ? 'border-t border-[#CD1D1D]/20 lg:border-[#CD1D1D]/40' : 'border-t border-[#CD1D1D]/20 lg:border-transparent'}`}
          >
            {/* Background Image with Gradient Overlay */}
            {org.bgImage && (
              <div className="absolute inset-0 z-0">
                <Image 
                  src={org.bgImage} 
                  alt={org.name || "Organization Background"} 
                  fill 
                  className={`object-cover opacity-10 md:opacity-[0.12] transition-transform duration-700 group-hover:scale-105 ${org.bgPosition || 'object-center'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent lg:w-2/3" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent md:hidden" />
              </div>
            )}

            {/* Content Container (Matches page padding) */}
            <div className="container mx-auto px-6 lg:px-12 max-w-[100rem] relative z-10 flex flex-col lg:flex-row lg:items-center lg:gap-16 py-16 lg:py-24 min-h-[40vh] lg:min-h-[50vh]">
              {/* Logo Column */}
              <div className="w-full lg:w-[35%] flex-shrink-0 flex flex-col items-center lg:items-start justify-center lg:pt-1 min-h-[70px] lg:min-h-0 border-b border-white/10 lg:border-none pb-5 lg:pb-0 mb-5 lg:mb-0 relative z-10">
                {org.logo}
              </div>

              {/* Text Column */}
              <div className="w-full lg:w-[65%] flex flex-col items-center lg:items-start text-center lg:text-left gap-3 sm:gap-4 relative z-10">
                <h3 className="font-helvetica text-lg md:text-xl">
                  {org.name && <span className="font-bold text-white block lg:inline mr-1">{org.name}</span>}
                  <span className={`font-medium italic block lg:inline mt-1 lg:mt-0 ${org.isHea ? 'text-[#2986CC]' : 'text-white/60'}`}>{org.tagline}</span>
                </h3>
                <div className="font-helvetica text-sm sm:text-base text-white/70 font-light leading-relaxed">
                  {org.desc}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
