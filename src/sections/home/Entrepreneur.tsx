"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const companies = [
  {
    id: "bcc",
    name: "BCC - SINCE 2020", 
    description: "An annual mentorship and business networking ecosystem designed to help entrepreneurs structure scalable growth.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200",
    logo: "/logos/BCC/bcc.png",
  },
  {
    id: "deep_immersion",
    name: "DEEP IMMERSION", 
    description: "The flagship life transformation program integrating innovative coaching, holistic healing, and NLP techniques.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
    logo: "/logos/DI/di_light.png",
  },
  {
    id: "hea",
    name: "HEA - SINCE 2010", 
    description: "The most sought-after coaching, counselling, and training & development provider in the Middle East and India.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200",
    logo: "/logos/HEA/hea.png",
  },
  {
    id: "business_immersion",
    name: "BUSINESS IMMERSION", 
    description: "A residential program exclusively designed for business owners and leaders, focusing on productivity and leadership.",
    image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=1200",
    logo: "/logos/BI/bi_light.png",
  },
  {
    id: "mdi",
    name: "MASTER DEEP IMMERSION", 
    description: "An advanced continuation of the Deep Immersion program for those seeking deeper mastery of life transformation techniques.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200",
    logo: "/logos/MDI/mdi_liight.png",
  },
  {
    id: "youth_immersion",
    name: "YOUTH IMMERSION", 
    description: "A transformative immersion program for young adults focused on purpose-discovery, personal growth, and clarity.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1200",
    logo: "/logos/YI/yi_light.png",
  },
  {
    id: "teens_immersion",
    name: "TEENS IMMERSION", 
    description: "A transformative experience for teenagers aged 14 to 19, exploring potential and developing resilience.",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=1200",
    logo: "/logos/TI/ti_light.png",
  },
];

export default function Entrepreneur() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const getScrollAmount = () => track.scrollWidth - window.innerWidth;
      
      const tween = gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none"
      });

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${getScrollAmount()}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#131313] text-white h-[100dvh] relative overflow-hidden pt-12 md:pt-20 flex flex-col justify-center">
      {/* Header Container */}
      <div className="px-6 md:px-12 lg:px-24 w-full flex-shrink-0">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-4">
          <h2 className="text-5xl md:text-6xl lg:text-[5.5rem] font-black uppercase leading-[0.85] tracking-normal max-w-[1200px]" style={{fontFamily: "var(--font-national2, sans-serif)"}}>
            BUILDING VENTURES THAT CONNECT, PERFORM, AND MOVE PEOPLE
          </h2>
          <span className="text-3xl md:text-5xl font-black uppercase tracking-wide mt-8 md:mt-0 md:pl-8 whitespace-nowrap" style={{fontFamily: "var(--font-national2, sans-serif)"}}>
            THE WORK
          </span>
        </div>
        
        <div className="w-full h-[2px] bg-zinc-200 mb-4"></div>
        
        <div className="flex justify-between items-center text-sm md:text-lg font-bold mb-10 md:mb-16 tracking-tight">
          <span className="w-12">(1)</span>
          <span>What we&apos;ve built</span>
          <span className="w-12 text-right opacity-0">(1)</span>
        </div>
      </div>

      {/* GSAP Track Container */}
      <div className="pl-6 md:pl-12 lg:pl-24 pb-6 md:pb-12 flex-1 flex items-center min-h-0">
        <div ref={trackRef} className="flex gap-8 md:gap-12 w-[max-content] items-start">
          {companies.map((company) => (
            <div key={company.id} className="w-[85vw] md:w-[65vw] lg:w-[45vw] flex flex-col shrink-0 group">
              <div className="relative w-full aspect-[16/10] md:aspect-[16/9] max-h-[50vh] rounded-xl overflow-hidden mb-4 md:mb-6 bg-zinc-800">
                <Image 
                  src={company.image} 
                  alt={company.name} 
                  fill 
                  sizes="(max-width: 768px) 85vw, (max-width: 1024px) 65vw, 45vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105" 
                />
              </div>
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 justify-between items-start">
                <div className="flex flex-col gap-2 lg:w-[55%]">
                  {company.logo && (
                    <div className="relative h-10 w-32 md:h-14 md:w-48 mb-1">
                      <Image 
                        src={company.logo} 
                        alt={`${company.name} logo`} 
                        fill 
                        className="object-contain object-left" 
                      />
                    </div>
                  )}
                  <h3 className="text-3xl md:text-4xl lg:text-[2.5rem] font-black uppercase tracking-wide leading-[0.9]" style={{fontFamily: "var(--font-national2, sans-serif)"}}>
                    {company.name}
                  </h3>
                </div>
                <p className="text-zinc-400 text-sm md:text-base lg:text-lg lg:w-[45%] font-medium leading-snug lg:mt-16">
                  {company.description}
                </p>
              </div>
            </div>
          ))}
          {/* Spacer at the end so the last card doesn't stick to the edge */}
          <div className="w-[10vw] md:w-[20vw] shrink-0"></div>
        </div>
      </div>
    </section>
  );
}
