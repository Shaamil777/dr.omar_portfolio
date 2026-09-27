"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import Image from "next/image";

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
    <section ref={sectionRef} className="w-full bg-[#0a0a0a] text-white py-16 md:py-32 relative z-10 border-b border-white/10 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/3 right-0 w-[50vw] h-[50vw] bg-[#CD1D1D]/5 rounded-full blur-[140px] translate-x-1/4 pointer-events-none z-0" />
      <div className="absolute bottom-0 left-1/4 w-[30vw] h-[30vw] bg-[#CD1D1D]/5 rounded-full blur-[120px] translate-y-1/2 pointer-events-none z-0" />

      <div className="container mx-auto px-6 lg:px-12 max-w-[90rem] relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column - Heading & Intro */}
          <div className="lg:col-span-5 flex flex-col story-element">
            <h2 className="font-helvetica text-5xl sm:text-6xl md:text-[70px] lg:text-[80px] font-bold tracking-tighter leading-[0.9] text-white mb-6 uppercase">
              Professional<br />
              Background
            </h2>
            
            <div className="pl-4 md:pl-5 border-l-2 border-[#CD1D1D]">
              <p className="font-helvetica text-lg md:text-xl text-white/90 leading-relaxed font-medium">
                From emergency medical services to global human transformation.
              </p>
            </div>
          </div>

          {/* Right Column - Condensed Paragraphs */}
          <div className="lg:col-span-7 flex flex-col space-y-6 md:space-y-8 story-element pt-2 lg:pt-4">
            <p className="font-helvetica text-base md:text-lg text-white/70 font-light leading-relaxed">
              Dr. Abdussalam Omar began his career in healthcare, playing a pioneering role in developing India&apos;s 108 Emergency Response Service and serving for over a decade as a Faculty Member at King Saud University in Riyadh.
            </p>
            <p className="font-helvetica text-base md:text-lg text-white/70 font-light leading-relaxed">
              Realizing his true calling extended far beyond hospitals and universities, he voluntarily retired from academia to dedicate his life full-time to leadership coaching, entrepreneurship, and human transformation.
            </p>
            <p className="font-helvetica text-base md:text-lg text-white/70 font-light leading-relaxed">
              Today, he integrates his multidisciplinary background in healthcare, psychology, and emotional intelligence to mentor thousands of founders and organizations globally, driving sustainable business success and profound personal growth.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
