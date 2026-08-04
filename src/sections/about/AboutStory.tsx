"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutStory() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".story-element",
        { y: 50, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 1.1, stagger: 0.15, ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#0D0D0D] text-white py-24 md:py-40 relative z-10 border-t border-b border-white/10 overflow-hidden">
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#CD1D1D]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#CD1D1D]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 max-w-[90rem] relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col items-start">
          <span className="story-element font-courier text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#CD1D1D] font-bold mb-4 block">
            [ THE ORIGIN // FROM LOSS TO PURPOSE ]
          </span>
          <h2 className="story-element font-helvetica text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] text-white max-w-5xl">
            Dr. Omar&apos;s story <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>began with loss.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Visual & Signature Reflection Card */}
          <div className="lg:col-span-5 flex flex-col gap-8 story-element">
            <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden border border-white/15 shadow-2xl group">
              <Image 
                src="/images/about/03.png"
                alt="Dr. Abdussalam Omar - Origin Story"
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <span className="font-courier text-[10px] uppercase tracking-widest text-[#CD1D1D] font-bold block mb-1">
                  RESILIENCE • COMPASSION • GRATITUDE
                </span>
                <p className="font-helvetica text-lg tracking-wide text-white/90">
                  Circumstances Never Define Destiny
                </p>
              </div>
            </div>

            {/* Signature Quote Card */}
            <div className="p-8 md:p-10 rounded-[24px] bg-[#141414] border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#CD1D1D]" />
              <svg className="w-10 h-10 text-[#CD1D1D]/20 absolute top-4 right-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="font-helvetica text-xl md:text-2xl font-bold tracking-tight text-white leading-snug mb-4">
                &ldquo;Your past may explain who you are today, but it never has to decide who you become tomorrow.&rdquo;
              </p>
              <span className="font-courier text-xs uppercase tracking-widest text-white/50">
                — DR. ABDUSSALAM OMAR
              </span>
            </div>
          </div>

          {/* Right Column - The Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 font-helvetica text-lg md:text-xl text-white/80 leading-relaxed">
            
            <div className="story-element p-6 md:p-8 rounded-[24px] bg-white/[0.03] border border-white/5 space-y-4">
              <h3 className="font-helvetica text-2xl md:text-3xl font-bold text-white tracking-tight">
                An Orphanage Childhood & Early Hardship
              </h3>
              <p className="text-white/70">
                He lost his father at the age of six and spent much of his childhood growing up in an orphanage. Those early years exposed him to hardship, uncertainty, loneliness, and financial struggles that could easily have shaped a very different future.
              </p>
            </div>

            <div className="story-element p-6 md:p-8 rounded-[24px] bg-white/[0.03] border border-white/5 space-y-4">
              <h3 className="font-helvetica text-2xl md:text-3xl font-bold text-[#CD1D1D] tracking-tight">
                The Foundation of Life&apos;s Purpose
              </h3>
              <p className="text-white/70">
                Instead, they became the foundation of his life&apos;s purpose. Growing up without many of life&apos;s comforts taught him <span className="text-white font-bold">resilience, compassion, gratitude</span>, and an unwavering belief that circumstances never define destiny.
              </p>
            </div>

            <div className="story-element p-6 md:p-8 rounded-[24px] bg-white/[0.03] border border-white/5 space-y-4">
              <h3 className="font-helvetica text-2xl md:text-3xl font-bold text-white tracking-tight">
                From Pain to a Deep Passion for Healing
              </h3>
              <p className="text-white/70">
                The pain of his childhood gradually evolved into a deep passion for helping others heal emotionally, discover purpose, strengthen relationships, and create meaningful lives. Today, thousands of people connect with his story because it reminds them that <span className="text-white font-bold underline decoration-[#CD1D1D] decoration-2 underline-offset-4">no past is too difficult to overcome and no dream is too great to pursue</span>.
              </p>
            </div>

            {/* Core Belief Callout */}
            <div className="story-element flex items-center gap-4 pt-4 border-t border-white/10">
              <div className="w-12 h-12 rounded-full bg-[#CD1D1D]/20 flex items-center justify-center flex-shrink-0 text-[#CD1D1D] font-black text-xl">
                ★
              </div>
              <p className="font-courier text-sm md:text-base text-white/90 tracking-wide font-bold uppercase">
                Developing people before developing businesses — because healing is where true leadership starts.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
