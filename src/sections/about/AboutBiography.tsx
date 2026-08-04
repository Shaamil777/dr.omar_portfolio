"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutBiography() {
  const sectionRef = useRef<HTMLElement>(null);

  const philosophySteps = [
    "Identity", "Clarity", "Purpose", "Direction",
    "Discipline", "Habits", "Excellence", "Significance"
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".bio-element",
        { y: 50, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 1, stagger: 0.12, ease: "expo.out",
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
    <section ref={sectionRef} className="w-full bg-[#111] text-white py-24 md:py-44 relative z-10">
      <div className="container mx-auto px-6 lg:px-12 max-w-[90rem]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left: Image / Visual */}
          <div className="lg:col-span-5 relative aspect-[3/4] rounded-[32px] overflow-hidden bio-element border border-white/10 shadow-2xl group">
            <Image 
              src="/images/about/02.png"
              alt="Dr. Abdussalam Omar Profile"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-60" />
            
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <span className="font-courier text-[10px] uppercase tracking-widest text-[#CD1D1D] font-bold block mb-1">
                20+ YEARS OF EXPERIENCE
              </span>
              <p className="font-helvetica text-xl font-bold uppercase tracking-wide text-white">
                Developing People Before Developing Businesses
              </p>
            </div>
          </div>

          {/* Right: Who is Dr. Omar & Background */}
          <div className="lg:col-span-7 flex flex-col">
            <span className="bio-element font-courier text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#CD1D1D] font-bold mb-6 block">
              [ WHO IS DR. ABDUSSALAM OMAR? ]
            </span>
            <h2 className="bio-element font-helvetica text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.9] text-white mb-8">
              SOME BUILD CAREERS. OTHERS BUILD BUSINESSES. <span className="text-[#CD1D1D]">A FEW DEDICATE THEIR LIVES</span> TO BUILDING PEOPLE.
            </h2>
            
            <div className="bio-element font-helvetica text-base md:text-xl text-white/75 font-medium leading-relaxed space-y-6 mb-12">
              <p>
                Dr. Abdussalam Omar belongs to the third category. An internationally recognized Business Leadership Coach, Human Transformation Expert, Branding Strategist, Entrepreneur, International Trainer, and Social Entrepreneur, he has spent more than two decades helping individuals, entrepreneurs, executives, and organizations unlock their true potential.
              </p>
              <p>
                His work goes far beyond conventional coaching. Drawing from healthcare, psychology, emotional intelligence, leadership, branding, entrepreneurship, organisational development, and holistic human development, he has created a unique transformation methodology that develops people before developing businesses.
              </p>
              <p className="text-white/60 text-base md:text-lg border-l-2 border-[#CD1D1D] pl-4">
                His professional journey began in emergency medical services—serving as a pioneering member of India&apos;s 108 Emergency Response Service (PPP model), and later as a Faculty Member and Head of Faculty Development at King Saud University in Riyadh. Choosing purpose over comfort, he voluntarily retired from academia to dedicate his life full-time to human transformation and entrepreneurship.
              </p>
            </div>

            {/* Philosophy Chain */}
            <div className="bio-element p-8 rounded-[24px] bg-white/[0.03] border border-white/10">
              <span className="font-courier text-xs uppercase tracking-widest text-[#CD1D1D] font-bold block mb-4">
                [ THE CORE COACHING PHILOSOPHY ]
              </span>
              <p className="font-helvetica text-sm md:text-base text-white/70 mb-6">
                When people heal emotionally and discover their purpose, they become better leaders, build stronger families, create ethical businesses, and contribute meaningfully to society.
              </p>
              
              <div className="flex flex-wrap items-center gap-2 md:gap-3">
                {philosophySteps.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-2 md:gap-3">
                    <span className="px-3 py-1.5 rounded-full bg-white/10 text-white font-helvetica font-bold text-xs md:text-sm uppercase tracking-wider hover:bg-[#CD1D1D] hover:text-white transition-colors cursor-default">
                      {step}
                    </span>
                    {idx < philosophySteps.length - 1 && (
                      <span className="text-[#CD1D1D] font-bold text-sm">➔</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}
