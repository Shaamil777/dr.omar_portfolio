"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
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
        const obj = { val: 0 };
        
        gsap.to(obj, {
          val: target,
          duration: 2.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
          onUpdate: function() {
            if (counter) {
              counter.innerHTML = Math.ceil(obj.val).toLocaleString();
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
    <section ref={sectionRef} className="w-full h-[100vh] text-white relative z-10 overflow-hidden flex flex-col justify-center py-6">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/about/SSK04519.webp"
          alt="Stats Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-[100rem] relative z-10">
        
        <div className="mb-8 md:mb-12 flex flex-col items-center text-center">
          <span className="font-courier text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#CD1D1D] font-bold mb-3 block">
            [ IMPACT AT A GLANCE ]
          </span>
          <h2 className="font-helvetica text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.9] text-white">
            Scale <span>by the</span> Numbers
          </h2>
          <p className="font-helvetica text-white/60 text-base md:text-lg max-w-2xl mt-4">
            Every coaching engagement reflects Dr. Omar&apos;s belief that sustainable success begins with transforming people before transforming businesses.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10 lg:gap-y-12 mb-8 md:mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card flex flex-col items-center text-center">
              <div className="flex items-baseline justify-center mb-1">
                <span 
                  className="stat-value font-helvetica text-5xl md:text-6xl lg:text-[5.5rem] font-black leading-none text-white tracking-tighter"
                  data-target={stat.value}
                >
                  {stat.value.toLocaleString()}
                </span>
                <span className="font-helvetica text-4xl md:text-5xl lg:text-[3.5rem] font-black text-[#CD1D1D] ml-1">
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
        <div className="stat-card p-6 md:p-8 rounded-[32px] bg-white/[0.03] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto backdrop-blur-sm">
          <div className="flex items-baseline justify-center">
            <span 
              className="stat-value font-helvetica text-6xl md:text-7xl lg:text-8xl font-black leading-none text-white tracking-tighter"
              data-target="1500"
            >
              1,500
            </span>
            <span className="font-helvetica text-5xl md:text-6xl font-black text-[#CD1D1D] ml-1">
              +
            </span>
          </div>
          <div className="text-center md:text-left">
            <span className="font-courier text-[10px] md:text-xs uppercase tracking-widest text-[#CD1D1D] font-bold block mb-2">
              KEYNOTE SESSIONS & LEADERSHIP WORKSHOPS
            </span>
            <h3 className="font-helvetica text-xl md:text-2xl font-bold text-white">
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
