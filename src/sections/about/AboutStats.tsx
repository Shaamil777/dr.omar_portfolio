"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutStats() {
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    { value: 20, suffix: "+", label: "Years of Professional Experience" },
    { value: 15, suffix: "+", label: "Years of Coaching & Mentoring" },
    { value: 10000, suffix: "+", label: "Entrepreneurs & Business Owners Mentored" },
    { value: 1000, suffix: "+", label: "Organizations Coached & Trained" },
    { value: 200, suffix: "+", label: "Multinational Brands Supported (India & GCC)" },
    { value: 50, suffix: "+", label: "Startups Established via OATHMEN®" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counters = gsap.utils.toArray<HTMLElement>(".stat-value");
      
      counters.forEach((counter) => {
        const target = parseFloat(counter.getAttribute("data-target") || "0");
        
        gsap.to(counter, {
          innerHTML: target,
          duration: 2.5,
          ease: "power3.out",
          snap: { innerHTML: 1 },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
          onUpdate: function() {
            if (counter) {
              counter.innerHTML = Math.ceil(Number(this.targets()[0].innerHTML)).toLocaleString();
            }
          }
        });
      });
      
      gsap.fromTo(
        ".stat-card",
        { y: 50, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "expo.out",
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
    <section ref={sectionRef} className="w-full bg-[#111] text-white py-24 md:py-36 relative z-10 border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12 max-w-[90rem]">
        
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <span className="font-courier text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#CD1D1D] font-bold mb-4 block">
            [ IMPACT AT A GLANCE ]
          </span>
          <h2 className="font-helvetica text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.9] text-white">
            Scale <span>by the</span> Numbers
          </h2>
          <p className="font-helvetica text-white/60 text-base md:text-lg max-w-2xl mt-4">
            Every coaching engagement reflects Dr. Omar&apos;s belief that sustainable success begins with transforming people before transforming businesses.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16 lg:gap-y-24 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card flex flex-col items-center text-center">
              <div className="flex items-baseline justify-center mb-2">
                <span 
                  className="stat-value font-helvetica text-5xl md:text-7xl lg:text-[6rem] font-black leading-none text-white tracking-tighter"
                  data-target={stat.value}
                >
                  0
                </span>
                <span className="font-helvetica text-4xl md:text-5xl lg:text-[4rem] font-black text-[#CD1D1D] ml-1">
                  {stat.suffix}
                </span>
              </div>
              <p className="font-courier font-bold text-xs md:text-sm uppercase tracking-widest text-white/60 max-w-[160px] md:max-w-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Featured 7th Stat Card */}
        <div className="stat-card p-8 md:p-12 rounded-[32px] bg-white/[0.03] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
          <div className="flex items-baseline justify-center">
            <span 
              className="stat-value font-helvetica text-6xl md:text-8xl font-black leading-none text-white tracking-tighter"
              data-target="1500"
            >
              0
            </span>
            <span className="font-helvetica text-5xl md:text-6xl font-black text-[#CD1D1D] ml-1">
              +
            </span>
          </div>
          <div className="text-center md:text-left">
            <span className="font-courier text-xs uppercase tracking-widest text-[#CD1D1D] font-bold block mb-2">
              KEYNOTE SESSIONS & LEADERSHIP WORKSHOPS
            </span>
            <h3 className="font-helvetica text-2xl md:text-3xl font-bold text-white">
              Corporate Training Programs Delivered
            </h3>
            <p className="font-helvetica text-white/60 text-sm md:text-base mt-2 max-w-xl">
              From students and young professionals to founders, CEOs, healthcare professionals, government leaders, and family businesses across multiple industries.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
