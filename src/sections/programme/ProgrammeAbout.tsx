"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import type { CompanyData } from "@/constants/companies";

gsap.registerPlugin(ScrollTrigger);

export default function ProgrammeAbout({ company }: { company: CompanyData }) {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const p1Ref = useRef<HTMLParagraphElement>(null);
  const p2Ref = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%", // Trigger when top of section hits 60% of viewport
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "expo.out" }
      });

      // Label reveals
      tl.fromTo(
        titleRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 1 }
      )
      // Decorative line draws across
      .fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.2, ease: "power4.out" },
        "-=0.6"
      )
      // First paragraph slides up
      .fromTo(
        p1Ref.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2 },
        "-=0.8"
      )
      // Second paragraph slides up
      .fromTo(
        p2Ref.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 },
        "-=1.0"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const p1Text = company.aboutParagraphs?.[0] || `About ${company.name}`;
  const p2Text = company.aboutParagraphs?.[1] || "";

  return (
    <section
      ref={sectionRef}
      className="min-h-screen w-full bg-transparent text-[#111] relative z-10 flex flex-col justify-center py-32"
    >
      <div className="container mx-auto px-6 lg:px-24 max-w-[100rem]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative">
          
          {/* Decorative red line acting as a divider/accent */}
          <div 
            ref={lineRef}
            className="absolute -top-16 left-0 right-0 h-[1px] bg-[#CD1D1D]/20 origin-left hidden lg:block"
          />

          {/* Left Column (3 cols) — Sticky Label */}
          <div className="lg:col-span-3">
            <div className="sticky top-32" ref={titleRef}>
              <span className="font-courier text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#CD1D1D] font-bold">
                [ ABOUT {company.name} ]
              </span>
              
              {/* Optional: Add a subtle grid coordinates aesthetic */}
              <div className="mt-8 font-courier text-[9px] tracking-[0.2em] text-[#111]/30 hidden lg:block">
                SEC_02 // INFO
                <br/>
                COORD: 34.0522° N, 118.2437° W
              </div>
            </div>
          </div>

          {/* Right Column (9 cols) — Content */}
          <div className="lg:col-span-9 flex flex-col gap-12 lg:gap-16">
            <p 
              ref={p1Ref}
              className="font-national2 text-3xl md:text-5xl lg:text-6xl font-black text-[#111] leading-[1.1] tracking-tight uppercase"
            >
              {p1Text}
            </p>
            
            {p2Text && (
              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Offset the second paragraph slightly in the grid */}
                <div className="md:col-start-3 md:col-span-10">
                  <p 
                    ref={p2Ref}
                    className="font-helvetica font-medium text-lg md:text-xl lg:text-2xl text-zinc-600 leading-relaxed"
                  >
                    {p2Text}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
