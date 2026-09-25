"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutEcosystem() {
  const sectionRef = useRef<HTMLElement>(null);

  const organizations = [
    { 
      name: "Human Excellence Academy", 
      tagline: "Transforming People. Developing Leaders.",
      desc: "The flagship institution founded by Dr. Omar to help individuals unlock their highest potential through holistic human development, integrating psychology, emotional intelligence, leadership, and neuroscience." 
    },
    { 
      name: "Brandmount", 
      tagline: "The Identity Expert • Building Brands with Purpose",
      desc: "A strategic branding and business consulting company that helps entrepreneurs and organizations discover, define, and communicate their authentic identity and long-term brand building." 
    },
    { 
      name: "OATHMEN® LLC, Sharjah", 
      tagline: "From Ideas to IPO®",
      desc: "A startup coaching, incubation, and entrepreneurship ecosystem established to help aspiring founders transform innovative ideas into scalable, investment-ready businesses." 
    },
    { 
      name: "TravelNGrow LLC, Dubai", 
      tagline: "Where Business Meets the World",
      desc: "A premium global tourism, business networking, and experiential learning company that combines international travel with entrepreneurship, leadership development, and international networking." 
    },
  ];

  const frameworkSteps = [
    "Awareness", "Consultation", "Deep Immersion®", "Personal Growth & Entrepreneurship",
    "Business Coaching Club", "Business Immersion®", "Organizational Coaching", 
    "Executive Mentoring", "TravelNGrow Global", "Legacy & Impact"
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".eco-card",
        { opacity: 0, scale: 0.95, y: 30 },
        { 
          opacity: 1, scale: 1, y: 0, duration: 1, stagger: 0.15, ease: "expo.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white text-[#111] py-24 md:py-44 relative z-10">
      <div className="container mx-auto px-6 lg:px-12 max-w-[90rem]">
        
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="font-courier text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#CD1D1D] font-bold mb-4 block">
              [ THE ECOSYSTEM ]
            </span>
            <h2 className="font-helvetica text-4xl md:text-5xl lg:text-[5rem] font-bold tracking-tight leading-[0.9] text-[#111]">
              Organizations <span>Founded</span>
            </h2>
          </div>
          <p className="font-helvetica font-bold text-sm md:text-base text-zinc-500 max-w-md">
            Driven by a vision to create lasting impact beyond individual coaching, Dr. Omar has established a group of purpose-driven organizations that together form a complete transformation ecosystem.
          </p>
        </div>

        {/* Organizations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {organizations.map((org, index) => (
            <div key={index} className="eco-card group relative p-10 md:p-14 rounded-[32px] bg-[#111] overflow-hidden flex flex-col justify-between min-h-[360px] md:min-h-[420px] shadow-xl">
              {/* Background Accent */}
              <div className="absolute inset-0 bg-[#CD1D1D] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out z-0" />
              
              <div className="relative z-10">
                <span className="font-courier text-[10px] text-white/50 group-hover:text-white/80 font-bold tracking-widest mb-2 block transition-colors">
                  0{index + 1} // ORGANIZATION
                </span>
                <span className="font-courier text-xs uppercase tracking-widest text-[#CD1D1D] group-hover:text-white/90 font-bold mb-4 block transition-colors">
                  {org.tagline}
                </span>
              </div>

              <div className="relative z-10 mt-8">
                <h3 className="font-helvetica text-3xl md:text-4xl font-bold tracking-tight leading-[0.95] text-white mb-4">
                  {org.name}
                </h3>
                <p className="font-helvetica text-sm md:text-base font-medium text-white/75 group-hover:text-white transition-colors leading-relaxed">
                  {org.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Transformation Framework Roadmap */}
        <div className="eco-card p-8 md:p-12 rounded-[32px] bg-zinc-900 text-white border border-black/10">
          <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="font-courier text-[10px] uppercase tracking-[0.3em] text-[#CD1D1D] font-bold block mb-2">
                [ LIFELONG JOURNEY ]
              </span>
              <h3 className="font-helvetica text-2xl md:text-4xl font-bold tracking-tight">
                The Transformation Framework
              </h3>
            </div>
            <p className="font-helvetica text-xs md:text-sm text-white/60 max-w-sm">
              Supporting individuals and entrepreneurs through every stage of personal growth, leadership development, and business excellence.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {frameworkSteps.map((step, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="px-4 py-2.5 rounded-2xl bg-white/10 text-white font-helvetica font-bold text-xs md:text-sm uppercase tracking-wider hover:bg-[#CD1D1D] transition-colors">
                  {step}
                </div>
                {idx < frameworkSteps.length - 1 && (
                  <span className="text-[#CD1D1D] font-black text-sm">➔</span>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
