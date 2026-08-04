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
    <section ref={sectionRef} className="w-full bg-zinc-100 text-[#111] py-24 md:py-36 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-[90rem]">
        
        {/* Top Header & Visual Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <div className="lg:col-span-7">
            <span className="auth-element font-courier text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#CD1D1D] font-bold mb-4 block">
              [ THE TRUSTED AUTHORITY ]
            </span>
            <h2 className="auth-element font-helvetica text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.9] text-[#111] mb-6">
              ACCREDITED & <span className="text-transparent" style={{ WebkitTextStroke: '1px #111' }}>RECOGNIZED</span>
            </h2>
            <p className="auth-element font-helvetica text-base md:text-lg text-zinc-600 mb-8 max-w-2xl">
              Dr. Omar&apos;s multidisciplinary background enables him to integrate medical science, psychology, coaching, leadership, branding, entrepreneurship, and holistic development into one comprehensive transformation methodology.
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 font-helvetica font-bold text-sm md:text-base text-zinc-800">
              {credentials.map((cred, idx) => (
                <li key={idx} className="auth-element flex items-start gap-3 bg-white p-4 rounded-2xl shadow-sm border border-zinc-200/80">
                  <span className="w-6 h-6 rounded-full bg-[#CD1D1D] text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>{cred}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 auth-element relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border border-black/10">
            <Image 
              src="/images/about/DSC06856.jpg"
              alt="Dr. Abdussalam Omar Authority"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </div>

        {/* 10 Areas of Expertise Grid */}
        <div className="auth-element p-8 md:p-14 bg-[#111] rounded-[32px] text-white">
          <div className="mb-10 text-center md:text-left">
            <span className="font-courier text-[10px] uppercase tracking-[0.3em] text-[#CD1D1D] font-bold block mb-2">
              [ MULTIDISCIPLINARY FRAMEWORK ]
            </span>
            <h3 className="font-helvetica text-3xl md:text-5xl font-black uppercase tracking-tight">
              10 Core Areas of Expertise
            </h3>
            <p className="font-helvetica text-sm md:text-base text-white/60 mt-2">
              Combining healthcare, psychology, leadership, business, and coaching into one practical transformation methodology.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, index) => (
              <div key={index} className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#CD1D1D] transition-colors flex items-start gap-4">
                <span className="font-courier text-xs font-bold text-[#CD1D1D] pt-1">
                  0{index + 1}
                </span>
                <span className="font-helvetica font-bold text-lg uppercase tracking-wide text-white/90">
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
