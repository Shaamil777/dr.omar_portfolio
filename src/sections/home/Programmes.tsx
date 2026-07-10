"use client";

import React, { useEffect, useRef } from "react";
import ProgrammesCards from "./ProgrammesCards";
import data from "@/constants/data.json";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Programmes() {
  const { programs } = data;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const pastelColors = [
    "bg-bravo",
    "bg-charlie",
    "bg-delta",
    "bg-echo",
    "bg-fox",
    "bg-golf",
  ];

  return (
    <section id="programmes-section" className="relative bg-secondary text-white w-full">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden z-0">
        <ProgrammesCards />
      </div>

      <div className="h-[100vh]" />

      <div className="relative z-10" ref={containerRef}>
        {programs.map((program, index) => {
          const bgClass = pastelColors[index % pastelColors.length];
          
          return (
            <div 
              key={program.id} 
              className="program-container h-[150vh] sticky top-0"
            >
              <div 
                className={`program-card w-full h-screen overflow-hidden origin-bottom`}
              >
                <div className={`program-inner w-full h-full flex items-center justify-center ${bgClass} border-t border-black/10 shadow-2xl`}>
                  <div className="max-w-[90vw] md:max-w-[80vw] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-[#131313]">
                  
                  {/* Content Side */}
                  <div className={`flex flex-col gap-6 ${index % 2 === 0 ? 'order-1 md:order-1' : 'order-1 md:order-2'}`}>
                    <div className="flex flex-col gap-2">
                      <span className="font-bold tracking-widest uppercase text-sm md:text-base opacity-70">
                        {program.category}
                      </span>
                      <h2 className="text-[12vw] md:text-[6vw] font-black uppercase leading-[0.8] tracking-tight" style={{ fontFamily: "var(--font-national2)" }}>
                        {program.name}
                      </h2>
                    </div>
                    
                    {program.tagline && (
                      <p className="text-2xl md:text-3xl font-bold italic opacity-90 mt-2">
                        &quot;{program.tagline}&quot;
                      </p>
                    )}
                    
                    <p className="text-lg md:text-xl max-w-xl font-medium leading-relaxed opacity-80">
                      {program.summary}
                    </p>

                    <div className="flex flex-col gap-1 mt-6 border-l-4 border-[#131313] pl-4">
                      <span className="text-xs md:text-sm font-bold uppercase tracking-widest opacity-70">Target Audience</span>
                      <span className="text-sm md:text-base font-bold">{program.target_audience}</span>
                    </div>

                    <div className="mt-8">
                      <button className="px-8 py-4 bg-[#131313] text-white font-bold uppercase rounded-full hover:bg-white hover:text-[#131313] transition-colors duration-300 shadow-xl">
                        Explore Program →
                      </button>
                    </div>
                  </div>

                  {/* Graphic Side */}
                  <div className={`relative h-[50vh] md:h-[70vh] w-full bg-[#131313]/5 rounded-3xl overflow-hidden border border-[#131313]/10 shadow-2xl ${index % 2 === 0 ? 'order-2 md:order-2' : 'order-2 md:order-1'}`}>
                    <div className="absolute inset-0 flex items-center justify-center mix-blend-overlay">
                      <span className="text-[30vw] md:text-[25vw] opacity-10 font-black leading-none pointer-events-none" style={{ fontFamily: "var(--font-national2)" }}>
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
