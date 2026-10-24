"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
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
      className="min-h-screen w-full relative z-10 flex flex-col justify-center py-32 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={company.aboutImage || "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000"}
          alt={`${company.name} Background`}
          fill
          className="object-cover object-[center_30%]"
        />
        {/* Light fade black overlay */}
        <div className="absolute inset-0 bg-black/80 z-10" />
      </div>

      <div className="container mx-auto px-6 lg:px-24 max-w-[100rem] relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative">
          
          {/* Decorative red line acting as a divider/accent */}
          <div 
            ref={lineRef}
            className="absolute -top-16 left-0 right-0 h-[1px] bg-white/20 origin-left hidden lg:block"
          />

          {/* Left Column (3 cols) — Sticky Label */}
          <div className="lg:col-span-3">
            <div className="sticky top-32" ref={titleRef}>
              <h2 className="text-sm md:text-base font-bold tracking-[0.3em] text-zinc-400 uppercase">
                {company.aboutTitle || `About ${company.name}`}
              </h2>
            </div>
          </div>

          {/* Right Column (9 cols) — Content */}
          <div className="lg:col-span-9">
            <div className="border-l-[3px] border-[#CD1D1D] pl-5 md:pl-8 flex flex-col gap-6 md:gap-8">
              <p 
                ref={p1Ref}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-helvetica font-bold text-white leading-[1.3] tracking-tight"
              >
                {p1Text}
              </p>
              
              {p2Text && (
                <p 
                  ref={p2Ref}
                  className="text-base sm:text-lg md:text-xl font-helvetica font-normal text-zinc-300 leading-relaxed max-w-4xl"
                >
                  {p2Text}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
