"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutBiography() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".bio-element",
        { y: 50, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "expo.out",
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
    <section ref={sectionRef} className="w-full bg-[#111] text-white py-24 md:py-48 relative z-10">
      <div className="container mx-auto px-6 lg:px-12 max-w-[90rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Image / Visual */}
          <div className="relative aspect-[3/4] rounded-[32px] overflow-hidden bio-element border border-white/10">
            <Image 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200"
              alt="Dr. Omar Profile"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>

          {/* Right: The Core Philosophy */}
          <div className="flex flex-col">
            <span className="bio-element font-courier text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#CD1D1D] font-bold mb-6 block">
              [ WHO HE IS ]
            </span>
            <h2 className="bio-element font-national2 text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.9] text-white mb-10">
              BRIDGING THE GAP BETWEEN <span className="text-[#CD1D1D]">BUSINESS ACUMEN</span> AND <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>SPIRITUAL MASTERY</span>.
            </h2>
            
            <div className="bio-element font-helvetica text-lg md:text-xl text-white/70 font-medium leading-relaxed space-y-6">
              <p>
                Meet Dr. Abdussalam Omar, the visionary founder of Deep Immersion and a Top 10 NLP Consultant (CEO Insights 2020). With over a decade of expertise as a Leadership Coach and Counselor, he has dedicated his life to transforming both businesses and the individuals who run them.
              </p>
              <p>
                He holds prestigious accreditation from the American Board of NLP and is an ICF-accredited coach. But his true distinction lies in his methodology: an unprecedented integration of innovative coaching, profound spiritual healing, and NLP techniques that guide individuals and organizations toward truly purposeful living.
              </p>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}
