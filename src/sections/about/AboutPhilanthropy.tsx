"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPhilanthropy() {
  const sectionRef = useRef<HTMLElement>(null);

  const futureVisions = [
    {
      title: "RUQAYYA FOUNDATION",
      desc: "To protect, educate, mentor, and empower more than 10,000 families through counselling, education, leadership development, life skills, and sustainable social initiatives.",
    },
    {
      title: "OATHMEN® STARTUP VILLAGE",
      desc: "To establish one of the region's leading startup incubation and entrepreneurship campuses, where founders can innovate, build businesses, access mentors, and create globally scalable companies.",
    },
    {
      title: "HUMAN EXCELLENCE VILLAGE",
      desc: "To create a nature-based experiential leadership destination where individuals, families, entrepreneurs, executives, and organizations can reconnect with themselves and experience holistic transformation.",
    },
    {
      title: "TRAVELNGROW GLOBAL",
      desc: "To build TravelNGrow into a globally recognized premium business travel and networking company that connects entrepreneurs, investors, and leaders through curated international experiences.",
    },
  ];

  const wordsToLiveBy = [
    "Healing is the beginning of every transformation.",
    "Purpose gives direction. Habits create destiny.",
    "Your past may shape you, but it never has to define your future.",
    "Businesses grow only as much as their leaders grow.",
    "Dream boldly. Live ethically. Serve generously.",
    "Inner peace is the highest form of success.",
    "Build systems that create freedom, not dependency.",
    "Ethical wealth creates lasting impact.",
    "Identity shapes habits, and habits shape destiny.",
    "Leave every person and every organization better than you found them.",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".phil-element",
        { y: 50, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 1, stagger: 0.12, ease: "expo.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white text-[#111] py-24 md:py-40 relative z-10 border-t border-black/10">
      <div className="container mx-auto px-6 lg:px-12 max-w-[90rem]">
        
        {/* Philanthropy & Ruqayya Foundation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28">
          <div className="lg:col-span-7">
            <div className="w-16 h-16 rounded-full bg-[#CD1D1D]/10 flex items-center justify-center mb-6 phil-element">
              <svg className="w-8 h-8 text-[#CD1D1D]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>

            <span className="phil-element font-courier text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#CD1D1D] font-bold mb-4 block">
              [ THE HIGHER PURPOSE ]
            </span>
            <h2 className="phil-element font-helvetica text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tight leading-[0.9] text-[#111] mb-8">
              PROTECTING THE <span className="text-[#CD1D1D]">VULNERABLE</span>
            </h2>
            
            <p className="phil-element font-helvetica text-lg md:text-2xl text-zinc-700 font-bold leading-relaxed mb-6">
              The ultimate drive of a leader is not just profit, but humanity. Dr. Omar’s commitment to societal impact is most evident in his role as Chairman of the Ruqayya Foundation.
            </p>
            <p className="phil-element font-helvetica text-base md:text-lg text-zinc-600 leading-relaxed">
              Dedicated to protecting, educating, mentoring, and empowering more than 10,000 families through counselling, education, leadership development, life skills, and sustainable social initiatives—because ethical wealth creates lasting impact.
            </p>
          </div>

          <div className="lg:col-span-5 phil-element relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border border-black/10">
            <Image 
              src="/images/about/DSC07408.jpg"
              alt="Dr. Abdussalam Omar - Ruqayya Foundation"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </div>

        {/* Future Vision Grid */}
        <div className="mb-28 phil-element">
          <div className="mb-12 text-center">
            <span className="font-courier text-[10px] uppercase tracking-[0.3em] text-[#CD1D1D] font-bold block mb-2">
              [ THE ROAD AHEAD ]
            </span>
            <h3 className="font-helvetica text-3xl md:text-5xl font-black uppercase tracking-tight text-[#111]">
              Future Vision & Institutions
            </h3>
            <p className="font-helvetica text-sm md:text-base text-zinc-500 max-w-xl mx-auto mt-2">
              Building institutions that outlive him—institutions that inspire people to discover purpose, serve humanity, create ethical prosperity, and build a more peaceful world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {futureVisions.map((vision, idx) => (
              <div key={idx} className="p-8 md:p-10 rounded-[28px] bg-zinc-900 text-white border border-black/10 flex flex-col justify-between">
                <div>
                  <span className="font-courier text-xs font-bold text-[#CD1D1D] block mb-3">
                    0{idx + 1} // FUTURE VISION
                  </span>
                  <h4 className="font-helvetica text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-white">
                    {vision.title}
                  </h4>
                  <p className="font-helvetica text-sm md:text-base text-white/70 leading-relaxed">
                    {vision.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Words to Live By */}
        <div className="phil-element p-10 md:p-16 rounded-[32px] bg-[#111] text-white">
          <div className="mb-10 text-center">
            <span className="font-courier text-[10px] uppercase tracking-[0.3em] text-[#CD1D1D] font-bold block mb-2">
              [ GUIDING PRINCIPLES ]
            </span>
            <h3 className="font-helvetica text-3xl md:text-5xl font-black uppercase tracking-tight">
              Words to Live By
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wordsToLiveBy.map((quote, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 flex items-start gap-4">
                <span className="text-[#CD1D1D] font-black text-xl leading-none">“</span>
                <p className="font-helvetica font-bold text-base md:text-lg uppercase tracking-wide text-white/90">
                  {quote}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
