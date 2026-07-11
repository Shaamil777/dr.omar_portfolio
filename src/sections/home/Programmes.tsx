"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import data from "@/constants/data.json";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card3DGraphic from "./Card3DGraphic";

export default function Programmes() {
  const { programs } = data;
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Intro animations
      gsap.fromTo(
        ".prog-title-1",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power4.out", scrollTrigger: { trigger: ".prog-title-1", start: "top 90%" } }
      );
      gsap.fromTo(
        ".prog-title-2",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power4.out", scrollTrigger: { trigger: ".prog-title-2", start: "top 90%" } }
      );
      gsap.fromTo(
        ".prog-desc",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".prog-desc", start: "top 95%" } }
      );

      // Select all the wrappers
      const containers = gsap.utils.toArray<HTMLElement>(".program-container");

      containers.forEach((container, index) => {
        const inner = container.querySelector(".program-inner");
        if (!inner) return;

        // Increase tilt to 12 degrees
        const rotationAngle = index % 2 === 0 ? 12 : -12;

        gsap.fromTo(
          inner,
          {
            rotationZ: rotationAngle,
            scale: 0.8,
            y: "25vh", // Push it down further when it enters
          },
          {
            rotationZ: 0,
            scale: 1,
            y: "0vh",
            ease: "power2.out",
            scrollTrigger: {
              trigger: container,
              start: "top bottom", // Starts when the top of the new container hits the bottom of the screen
              end: "top top",    // Ends when it hits the top of the screen
              scrub: 0.5,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const programImages = [
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200",
  ];

  return (
    <section ref={sectionRef} id="programmes-section" className="relative bg-[#0a0a0a] text-white w-full">
      {/* Hyper-Modern Typographic Intro */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden z-0 bg-[#0a0a0a]">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
           {/* Deep Red glowing orb to match the brutalist aesthetic */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-[#CD1D1D]/20 rounded-full blur-[120px] opacity-70 mix-blend-screen" />
           <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at center, transparent 0%, #0a0a0a 70%)" }} />
           
           {/* Telemetry Labels */}
           <div className="absolute top-24 left-6 md:left-12 text-[#CD1D1D] font-mono text-xs md:text-sm opacity-80 tracking-[0.2em] hidden md:block" style={{ fontFamily: "var(--font-courier)" }}>
             [ SYS.PROG.01 ]<br/>AUTHORIZATION: GRANTED
           </div>
           <div className="absolute bottom-12 right-6 md:right-12 text-[#CD1D1D] font-mono text-xs md:text-sm opacity-80 tracking-[0.2em] text-right" style={{ fontFamily: "var(--font-courier)" }}>
             INITIATE SEQUENCE<br/>↓
           </div>
        </div>

        {/* Foreground Typography */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full">
          <h2 className="text-[14vw] md:text-[9vw] font-black uppercase leading-[0.85] tracking-tighter w-full" style={{ fontFamily: "var(--font-national2)" }}>
            <span className="block text-transparent prog-title-1" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.15)" }}>
              TRANSFORMATIONAL
            </span>
            <span className="block text-white prog-title-2 mt-2">
              PROGRAMMES
            </span>
          </h2>
          <p className="prog-desc mt-10 text-base md:text-xl font-medium text-zinc-400 max-w-2xl px-6 leading-relaxed">
            A curated selection of intensive, life-changing immersions designed for global leaders, entrepreneurs, and visionaries.
          </p>
        </div>
      </div>

      <div className="h-[100vh]" />

      <div className="relative z-10">
        {programs.slice(0, 4).map((program, index, array) => {
          const isLast = index === array.length - 1;
          const imageUrl = programImages[index % programImages.length];
          
          return (
            <div 
              key={program.id} 
              className={`program-container ${isLast ? 'h-[100vh]' : 'h-[150vh]'} sticky top-0`}
            >
              <div 
                className={`program-card w-full h-screen overflow-hidden origin-bottom`}
              >
                <div className={`program-inner w-full h-full flex items-center justify-center bg-[#0d0d0d] border-t-2 border-[#CD1D1D]/30 shadow-[0_-20px_50px_rgba(0,0,0,0.8)]`}>
                  <div className="max-w-[90vw] md:max-w-[80vw] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-white">
                  
                  {/* Content Side with 3D Graphic Behind */}
                  <div className={`relative flex flex-col justify-center h-[50vh] md:h-auto overflow-hidden md:overflow-visible ${index % 2 === 0 ? 'order-1 md:order-1' : 'order-1 md:order-2'}`}>
                    
                    {/* 3D Floating Element Behind Text */}
                    <Card3DGraphic index={index} />

                    {/* Content Layer (on top of 3D) */}
                    <div className="relative z-10 flex flex-col gap-6 pointer-events-none p-4 md:p-0">
                      <div className="flex flex-col gap-2 pointer-events-auto">
                        <span className="font-mono tracking-widest text-[#CD1D1D] text-xs md:text-sm opacity-90" style={{ fontFamily: "var(--font-courier)" }}>
                          [ {program.category.toUpperCase()} ]
                        </span>
                        <h2 className="text-[10vw] md:text-[5vw] font-black uppercase leading-[0.8] tracking-tight drop-shadow-2xl" style={{ fontFamily: "var(--font-national2)" }}>
                          {program.name}
                        </h2>
                      </div>
                      
                      {program.tagline && (
                        <p className="text-xl md:text-2xl font-bold italic text-zinc-300 mt-2 border-l-2 border-[#CD1D1D] pl-4 drop-shadow-xl pointer-events-auto">
                          {program.tagline}
                        </p>
                      )}
                      
                      <p className="text-sm md:text-lg max-w-xl font-medium leading-relaxed text-zinc-400 drop-shadow-lg pointer-events-auto">
                        {program.summary}
                      </p>

                      <div className="flex flex-col gap-1 mt-6 border-l-2 border-zinc-800 pl-4 pointer-events-auto">
                        <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-zinc-500">Target Audience</span>
                        <span className="text-sm md:text-base font-bold text-zinc-200">{program.target_audience}</span>
                      </div>

                      <div className="mt-8 pointer-events-auto">
                        <button className="px-8 py-4 bg-[#CD1D1D] text-white font-bold uppercase rounded-none hover:bg-white hover:text-black transition-colors duration-300 tracking-wider text-sm shadow-[0_0_20px_rgba(205,29,29,0.3)]">
                          Explore Program →
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Graphic Side with Image */}
                  <div className={`relative h-[50vh] md:h-[70vh] w-full bg-[#131313] overflow-hidden border border-zinc-800 shadow-2xl group ${index % 2 === 0 ? 'order-2 md:order-2' : 'order-2 md:order-1'}`}>
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                      <Image 
                        src={imageUrl} 
                        alt={program.name} 
                        fill 
                        className="object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-1000 ease-out grayscale group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent z-10" />
                    </div>
                    
                    {/* Giant Number Overlay */}
                    <div className="absolute bottom-6 right-6 z-20">
                      <span className="text-[20vw] md:text-[15vw] opacity-10 font-black leading-none pointer-events-none text-[#CD1D1D]" style={{ fontFamily: "var(--font-national2)" }}>
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
