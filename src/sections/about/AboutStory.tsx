"use client";

import { useEffect, useRef } from "react";
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
    <section ref={sectionRef} className="w-full bg-[#0a0a0a] text-white py-24 md:py-40 relative z-10 border-b border-white/10 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[50vw] h-[50vw] bg-[#CD1D1D]/5 rounded-full blur-[140px] translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[30vw] h-[30vw] bg-[#CD1D1D]/5 rounded-full blur-[120px] translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 max-w-[90rem] relative z-10">
        
        {/* Top Half */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-12 md:mb-16">
          
          {/* Left Column - Heading & Intro */}
          <div className="lg:col-span-6 flex flex-col story-element">
            <h2 className="font-helvetica text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold tracking-tighter leading-[0.9] text-white mb-6 uppercase">
              Professional<br />
              Background
            </h2>
            
            <div className="pl-4 md:pl-5 border-l-2 border-[#CD1D1D]">
              <p className="font-helvetica text-lg md:text-xl text-white/90 leading-relaxed font-medium">
                Dr. Abdussalam Omar began his professional career in healthcare and emergency medical services with a commitment to serving humanity during life&apos;s most critical moments.
              </p>
            </div>
          </div>

          {/* Right Column - Top Paragraphs */}
          <div className="lg:col-span-6 flex flex-col space-y-4 md:space-y-5 story-element pt-2 lg:pt-4">
            <p className="font-helvetica text-base md:text-lg text-white/70 font-light leading-relaxed">
              Although he built a respected career in academia, Dr. Omar realized that his true calling extended far beyond hospitals and universities. Choosing purpose over comfort, he voluntarily retired from academic service to dedicate himself full-time to coaching, leadership development, branding, entrepreneurship, and human transformation.
            </p>
            <p className="font-helvetica text-base md:text-lg text-white/70 font-light leading-relaxed">
              Over the past fifteen years, he has mentored more than 10,000 entrepreneurs and business owners, coached over 1,000 organizations, contributed to the growth of more than 200 multinational brands, and guided over 50 startups through the OATHMEN® Startup Coaching ecosystem. Today, his work spans leadership coaching, executive mentoring, business transformation, startup incubation, branding strategy, emotional intelligence, organizational development, and purpose-driven entrepreneurship across multiple industries and countries.
            </p>
          </div>

        </div>

        {/* Bottom Half - Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <div className="story-element">
            <p className="font-helvetica text-base md:text-lg text-white/70 font-light leading-relaxed">
              He was a pioneering member of the team involved in developing India&apos;s 108 Emergency Response Service, one of the world&apos;s largest integrated emergency medical systems established through a Public-Private Partnership (PPP) model under the Government of India. Working alongside international emergency medicine experts, he contributed to emergency medical training, system development, operational planning, emergency protocols, and healthcare workforce development.
            </p>
          </div>
          <div className="story-element">
            <p className="font-helvetica text-base md:text-lg text-white/70 font-light leading-relaxed">
              His passion for education and professional development later led him to King Saud University in Riyadh, where he served for more than a decade as a Faculty Member in the College of Emergency Medical Sciences and Head of Faculty Development. During this period, he mentored healthcare professionals, designed faculty development initiatives, strengthened academic excellence, and helped shape future generations of emergency healthcare practitioners.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
