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
      title: "Ruqayya Foundation",
      desc: "To protect, educate, mentor, and empower more than 10,000 families through counselling, education, leadership development, life skills, and sustainable social initiatives.",
    },
    {
      title: "OATHMEN® Startup Village",
      desc: "To establish one of the region's leading startup incubation and entrepreneurship campuses, where founders can innovate, build businesses, access mentors, and create globally scalable companies.",
    },
    {
      title: "Human Excellence Village",
      desc: "To create a nature-based experiential leadership destination where individuals, families, entrepreneurs, executives, and organizations can reconnect with themselves and experience holistic transformation.",
    },
    {
      title: "TravelNGrow Global",
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
    <section ref={sectionRef} className="w-full bg-[#0a0a0a] text-white py-24 md:py-40 relative z-10 border-t border-white/10 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 left-0 w-[50vw] h-[50vw] bg-[#CD1D1D]/5 rounded-full blur-[140px] -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-[#CD1D1D]/5 rounded-full blur-[140px] translate-y-1/3 translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 max-w-[100rem] relative z-10">
        
        {/* Top Header & Visual Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch mb-32">
          {/* Left Side - Text */}
          <div className="lg:col-span-7 flex flex-col justify-center phil-element py-12 lg:pr-16">
            <span className="font-courier text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#CD1D1D] font-bold mb-6 block">
              [ THE HIGHER PURPOSE ]
            </span>
            <h2 className="font-helvetica text-5xl md:text-7xl lg:text-[7.5rem] font-bold tracking-tighter leading-[0.85] text-white uppercase mb-10">
              Protecting the<br />
              <span className="text-[#CD1D1D]">Vulnerable</span>
            </h2>
            
            <div className="pl-5 border-l-[3px] border-[#CD1D1D] mb-12 max-w-2xl">
              <p className="font-helvetica text-lg md:text-[22px] text-white/90 leading-relaxed font-medium">
                The ultimate drive of a leader is not just profit, but humanity. Dr. Omar’s commitment to societal impact is most evident in his role as Chairman of the Ruqayya Foundation.
              </p>
            </div>
            
            <p className="font-helvetica text-base md:text-lg text-white/60 leading-relaxed max-w-2xl font-light">
              Dedicated to protecting, educating, mentoring, and empowering more than 10,000 families through counselling, education, leadership development, life skills, and sustainable social initiatives—because ethical wealth creates lasting impact.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="lg:col-span-5 phil-element relative w-full h-[500px] lg:h-auto min-h-[500px] rounded-[24px] lg:rounded-[40px] overflow-hidden">
            <Image 
              src="/images/about/DSC07408.jpg"
              alt="Dr. Abdussalam Omar - Ruqayya Foundation"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"
            />
            <div className="absolute inset-0 border border-white/10 rounded-[24px] lg:rounded-[40px] pointer-events-none" />
          </div>
        </div>

        {/* Future Vision Grid */}
        <div className="mb-32 phil-element pt-16 border-t border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div>
              <span className="font-courier text-xs md:text-sm uppercase tracking-[0.3em] text-[#CD1D1D] font-bold block mb-4">
                [ THE ROAD AHEAD ]
              </span>
              <h3 className="font-helvetica text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white">
                Future Vision<br />& Institutions
              </h3>
            </div>
            <p className="font-helvetica text-base md:text-lg text-white/60 font-medium max-w-md">
              Building institutions that outlive him—institutions that inspire people to discover purpose, serve humanity, create ethical prosperity, and build a more peaceful world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
            {futureVisions.map((vision, idx) => (
              <div key={idx} className="group p-8 md:p-10 border-r border-b border-white/10 flex flex-col justify-between min-h-[320px] hover:bg-white/[0.02] transition-colors duration-500 cursor-default">
                <div>
                  <span className="font-courier text-[#CD1D1D] text-xs font-bold block mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                    0{idx + 1} // VISION
                  </span>
                  <h4 className="font-helvetica text-2xl font-bold tracking-tight mb-4 text-white group-hover:text-[#CD1D1D] transition-colors">
                    {vision.title}
                  </h4>
                </div>
                <p className="font-helvetica text-sm text-white/60 leading-relaxed font-light">
                  {vision.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Words to Live By */}
        <div className="phil-element pt-24 border-t border-white/10">
          <div className="mb-16 text-center lg:text-left">
            <span className="font-courier text-xs md:text-sm uppercase tracking-[0.3em] text-[#CD1D1D] font-bold block mb-4">
              [ GUIDING PRINCIPLES ]
            </span>
            <h3 className="font-helvetica text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white">
              Words to Live By
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            {wordsToLiveBy.map((quote, idx) => (
              <div key={idx} className="flex items-start gap-6 group">
                <span className="text-[#CD1D1D] font-helvetica font-black text-4xl md:text-5xl leading-none pt-1 opacity-50 group-hover:opacity-100 transition-opacity">
                  “
                </span>
                <p className="font-helvetica text-xl md:text-2xl font-medium tracking-tight text-white/70 group-hover:text-white transition-colors leading-snug">
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
