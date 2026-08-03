"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutStats() {
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    { value: 20, suffix: "+", label: "Years of Experience" },
    { value: 10000, suffix: "+", label: "Entrepreneurs Mentored" },
    { value: 1000, suffix: "+", label: "Organizations Coached" },
    { value: 200, suffix: "+", label: "Multinational Brands" },
    { value: 50, suffix: "+", label: "Startups Established" },
    { value: 15, suffix: "+", label: "Years of Coaching" },
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
    <section ref={sectionRef} className="w-full bg-[#111] text-white py-24 md:py-32 relative z-10 border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12 max-w-[90rem]">
        
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <span className="font-courier text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#CD1D1D] font-bold mb-4 block">
            [ THE MAGNITUDE OF IMPACT ]
          </span>
          <h2 className="font-national2 text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.9] text-white">
            SCALE <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>BY THE</span> NUMBERS
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16 lg:gap-y-24">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card flex flex-col items-center text-center">
              <div className="flex items-baseline justify-center mb-2">
                <span 
                  className="stat-value font-national2 text-5xl md:text-7xl lg:text-[6rem] font-black leading-none text-white tracking-tighter"
                  data-target={stat.value}
                >
                  0
                </span>
                <span className="font-national2 text-4xl md:text-5xl lg:text-[4rem] font-black text-[#CD1D1D] ml-1">
                  {stat.suffix}
                </span>
              </div>
              <p className="font-courier font-bold text-[10px] md:text-sm uppercase tracking-widest text-white/50 max-w-[120px] md:max-w-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
