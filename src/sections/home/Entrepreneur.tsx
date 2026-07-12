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
      
      // 1. Horizontal Scroll Animation
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

      // 2. Card Image Parallax & Content Stagger
      gsap.utils.toArray('.entrepreneur-card').forEach((card: any) => {
        const image = card.querySelector('.parallax-image');
        const inner = card.querySelector('.card-inner');
        
        // Horizontal Image Parallax (Safe range to prevent black borders)
        gsap.fromTo(image, 
          { xPercent: -25 },
          {
            xPercent: 25,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "left right",
              end: "right left",
              containerAnimation: tween,
              scrub: true,
            }
          }
        );
        
        // Massive Staggered Reveal for the entire card contents
        gsap.fromTo(inner,
          { opacity: 0, y: 150, scale: 0.85, rotateZ: 2 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateZ: 0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "left 95%", // Trigger right as it enters
              end: "left 35%",   // Finish when it's mostly centered
              containerAnimation: tween,
              scrub: 1,
            }
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="entrepreneur" className="bg-[#131313] text-white h-[100dvh] relative overflow-hidden pt-6 md:pt-16 lg:pt-12 flex flex-col justify-center">
      {/* Header Container */}
      <div className="px-6 md:px-12 lg:px-24 w-full flex-shrink-0">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-3 md:mb-4">
          <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-black uppercase leading-[0.85] tracking-normal max-w-[1200px]" style={{fontFamily: "var(--font-national2, sans-serif)"}}>
            BUILDING VENTURES THAT CONNECT, PERFORM, AND MOVE PEOPLE
          </h2>
          <span className="text-2xl md:text-4xl lg:text-[2.5rem] font-black uppercase tracking-wide mt-6 md:mt-0 md:pl-8 whitespace-nowrap" style={{fontFamily: "var(--font-national2, sans-serif)"}}>
            THE WORK
          </span>
        </div>
        
        <div className="w-full h-[2px] bg-zinc-200 mb-3 md:mb-4"></div>
        
        <div className="flex justify-between items-center text-xs md:text-sm lg:text-lg font-bold mb-6 md:mb-10 lg:mb-8 tracking-tight">
          <span className="w-12">(1)</span>
          <span>What we&apos;ve built</span>
          <span className="w-12 text-right opacity-0">(1)</span>
        </div>
      </div>

      {/* GSAP Track Container */}
      <div className="pl-6 md:pl-12 lg:pl-24 pb-4 md:pb-8 lg:pb-6 flex-1 flex items-center min-h-0">
        <div ref={trackRef} className="flex gap-4 md:gap-12 w-[max-content] items-start">
          {companies.map((company) => (
            <div key={company.id} className="entrepreneur-card w-[85vw] md:w-[75vw] lg:w-[50vw] flex flex-col shrink-0 group">
              <div className="card-inner flex flex-col w-full origin-bottom-left">
                <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[16/8] max-h-[45vh] md:max-h-[55vh] lg:max-h-[50vh] rounded-2xl md:rounded-[2rem] overflow-hidden mb-4 md:mb-6 bg-zinc-800 shadow-[0_10px_30px_rgba(0,0,0,0.5)] md:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                  <Image 
                    src={company.image} 
                    alt={company.name} 
                    fill 
                    sizes="(max-width: 768px) 85vw, (max-width: 1024px) 75vw, 50vw"
                    className="parallax-image object-cover scale-[1.6] transition-transform duration-1000 ease-out group-hover:scale-[1.65]" 
                  />
                </div>
                
                <div className="card-content flex flex-col-reverse lg:flex-row gap-3 md:gap-6 lg:gap-8 justify-between items-start lg:items-center mt-1 md:mt-2">
                  
                  {/* Left Side: Title & Description */}
                  <div className="flex flex-col gap-2 md:gap-4 lg:w-[65%]">
                    <h3 className="text-3xl md:text-4xl lg:text-[2.75rem] font-black uppercase tracking-wide leading-[0.9]" style={{fontFamily: "var(--font-national2, sans-serif)"}}>
                      {company.name}
                    </h3>
                    <p className="text-zinc-400 text-xs md:text-base lg:text-lg font-medium leading-relaxed max-w-2xl line-clamp-3 md:line-clamp-none">
                      {company.description}
                    </p>
                  </div>
                  
                  {/* Right Side: Larger Logo */}
                  <div className="w-full lg:w-[35%] flex justify-start lg:justify-end">
                    {company.logo && (
                      <div className="relative h-12 w-36 md:h-20 md:w-56 lg:h-24 lg:w-64">
                        <Image 
                          src={company.logo} 
                          alt={`${company.name} logo`} 
                          fill 
                          className="object-contain object-left lg:object-right" 
                        />
                      </div>
                    )}
                  </div>
                  
                </div>

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
