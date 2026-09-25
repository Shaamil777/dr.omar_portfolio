"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutEcosystem() {
  const sectionRef = useRef<HTMLElement>(null);

  const organizations = [
    { 
      name: "Human Excellence Academy", 
      tagline: "Transforming People. Developing Leaders.",
      logo: (
        <div className="flex flex-col">
          <span className="font-helvetica font-black text-4xl md:text-[2.75rem] tracking-tighter text-white leading-none">
            Human<br className="hidden md:block"/>Excellence
          </span>
          <span className="font-helvetica font-light text-sm md:text-base text-white/90 mt-2 tracking-[0.2em] uppercase">
            Academy
          </span>
        </div>
      ),
      desc: "The flagship institution founded by Dr. Omar to help individuals unlock their highest potential through holistic human development, integrating psychology, emotional intelligence, leadership, and neuroscience." 
    },
    { 
      name: "Brandmount", 
      tagline: "The Identity Expert • Building Brands with Purpose",
      logo: (
        <div className="flex flex-col">
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
      logo: (
        <div className="flex flex-col">
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
      logo: (
        <div className="flex flex-col">
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
    <section ref={sectionRef} className="w-full bg-[#0a0a0a] relative z-10 py-20 md:py-32 flex flex-col justify-center min-h-screen border-t border-white/10 overflow-hidden">
      {/* Abstract Background Elements (Matching Story Section) */}
      <div className="absolute top-1/3 right-0 w-[50vw] h-[50vw] bg-[#CD1D1D]/5 rounded-full blur-[140px] translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[30vw] h-[30vw] bg-[#CD1D1D]/5 rounded-full blur-[120px] translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 max-w-[80rem] relative z-10">
        <div className="flex flex-col">
          {organizations.map((org, index) => (
            <div 
              key={index} 
              className={`eco-row flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16 py-10 lg:py-16 ${index !== 0 ? 'border-t border-[#CD1D1D]/40' : ''}`}
            >
              {/* Logo Column */}
              <div className="w-full lg:w-[35%] flex-shrink-0 flex items-center lg:items-start lg:pt-1">
                {org.logo}
              </div>

              {/* Text Column */}
              <div className="w-full lg:w-[65%] flex flex-col gap-4">
                <h3 className="font-helvetica text-white text-lg md:text-xl">
                  <span className="font-bold">{org.name}</span> <span className="font-medium italic text-white/90">{org.tagline}</span>
                </h3>
                <p className="font-helvetica text-sm md:text-base text-white/70 font-light leading-relaxed">
                  {org.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
