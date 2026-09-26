"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutAuthority() {
  const sectionRef = useRef<HTMLElement>(null);

  const credentials = [
    "ICF Accredited Leadership & Executive Coach",
    "ABNLP Certified NLP Trainer by the Tad James Company, USA",
    "Emotional Intelligence Coach & Executive Coach",
    "Business Leadership Coach & CBT Coach",
    "International Corporate Trainer",
    "Top 10 NLP Consultants — CEO Insights 2020",
    "Former Faculty & Head of Faculty Development, King Saud University",
    "Pioneering Member, India's 108 Emergency Response Service (PPP Model)",
  ];

  const expertise = [
    "Holistic Human Healing & Personal Transformation",
    "Emotional Intelligence & Self Leadership",
    "Leadership & Executive Coaching",
    "Relationship Coaching & Family Development",
    "Business Leadership & Organizational Development",
    "Branding, Positioning & Business Identity",
    "Startup Mentoring & Entrepreneurship",
    "Strategic Business Growth & Systems Development",
    "Purpose Discovery & Life Coaching",
    "Peak Performance & Habit Transformation",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".auth-element",
        { y: 50, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "expo.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white text-[#0a0a0a] relative z-10  overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#CD1D1D]/5 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />

      {/* Top Header & Visual Section - Full Right Bleed */}
      <div className="relative w-full">
        <div className="container mx-auto px-6 lg:px-12 max-w-[100rem] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
            {/* Left side text & credentials */}
            <div className="lg:col-span-7 flex flex-col justify-center auth-element py-20 md:py-32 lg:pr-16">
              <h2 className="font-helvetica text-5xl md:text-7xl lg:text-[7.5rem] font-bold tracking-tighter leading-[0.85] text-[#0a0a0a] uppercase mb-10">
                Accredited<br />
                <span className="text-[#CD1D1D]">Authority</span>
              </h2>
              
              <div className="pl-5 border-l-[3px] border-[#CD1D1D] mb-16 max-w-2xl">
                <p className="font-helvetica text-lg md:text-[22px] text-[#0a0a0a]/80 leading-relaxed font-medium">
                  Dr. Omar's multidisciplinary background enables him to integrate medical science, psychology, coaching, leadership, branding, entrepreneurship, and holistic development into one comprehensive transformation methodology.
                </p>
              </div>

              <div className="w-full">
                <span className="font-courier text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#0a0a0a]/40 font-bold mb-8 block">
                  Select Credentials & Recognitions
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 border-t border-black/10 pt-8">
                  {credentials.map((cred, idx) => (
                    <div key={idx} className="flex items-start gap-4 group">
                      <span className="font-courier text-[#CD1D1D] font-bold text-xs mt-1 transition-transform duration-300 group-hover:translate-x-1">
                        {(idx + 1).toString().padStart(2, '0')}
                      </span>
                      <span className="font-helvetica text-sm md:text-base font-medium text-[#0a0a0a]/80 leading-snug group-hover:text-[#0a0a0a] transition-colors duration-300">
                        {cred}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Placeholder to keep grid layout intact while image breaks out */}
            <div className="hidden lg:block lg:col-span-5" />
          </div>
        </div>

        {/* Right side Image (Bleeds to the right edge and touches top/bottom) */}
        <div className="auth-element relative w-full h-[500px] lg:absolute lg:top-0 lg:right-0 lg:w-[45%] xl:w-[45%] lg:h-full z-0">
          <Image 
            src="/images/about/DSC06856.jpg"
            alt="Dr. Abdussalam Omar Authority"
            fill
            className="object-cover object-[center_30%] grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"
          />
          {/* Subtle Left Border Overlay for separation */}
          <div className="absolute inset-0 lg:border-l border-black/10 pointer-events-none" />
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-[100rem] relative z-10 pb-24 md:pb-40">
        {/* 10 Areas of Expertise Grid */}
        <div className="auth-element pt-8 md:pt-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div>
              <span className="font-courier text-xs md:text-sm uppercase tracking-[0.3em] text-[#CD1D1D] font-bold block mb-4">
                [ MULTIDISCIPLINARY FRAMEWORK ]
              </span>
              <h3 className="font-helvetica text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#0a0a0a]">
                10 Core Areas<br />of Expertise
              </h3>
            </div>
            <p className="font-helvetica text-base md:text-lg text-[#0a0a0a]/60 font-medium max-w-md">
              Combining healthcare, psychology, leadership, business, and coaching into one practical transformation methodology.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-t border-l border-black/10">
            {expertise.map((item, index) => (
              <div key={index} className="group p-6 md:p-8 border-r border-b border-black/10 flex flex-col justify-between min-h-[220px] hover:bg-black/[0.03] transition-colors duration-500 cursor-default">
                <span className="font-courier text-[#CD1D1D] text-lg font-bold opacity-80 group-hover:opacity-100 transition-opacity">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <span className="font-helvetica font-bold text-lg leading-snug tracking-tight text-[#0a0a0a] group-hover:text-[#CD1D1D] transition-colors">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
