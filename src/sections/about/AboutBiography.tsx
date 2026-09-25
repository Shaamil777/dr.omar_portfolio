"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutBiography() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const philosophySteps = [
    { title: "Identity", desc: "Knowing who you are" },
    { title: "Clarity", desc: "Seeing the path ahead" },
    { title: "Purpose", desc: "Finding your 'why'" },
    { title: "Direction", desc: "Moving with intent" },
    { title: "Discipline", desc: "Consistent action" },
    { title: "Habits", desc: "Building the foundation" },
    { title: "Excellence", desc: "Mastering the craft" },
    { title: "Significance", desc: "Leaving a legacy" }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image animations
      gsap.fromTo(
        ".bio-image-wrapper",
        { y: 100, opacity: 0, scale: 0.95 },
        { 
          y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      );

      gsap.fromTo(
        ".bio-badge",
        { x: -50, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1, delay: 0.4, ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      );

      // Text animations
      const texts = gsap.utils.toArray(".bio-text-elem");
      texts.forEach((text: any, i) => {
        gsap.fromTo(
          text,
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 1, delay: i * 0.1, ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            }
          }
        );
      });

      // Philosophy tags animation
      gsap.fromTo(
        ".philosophy-tag",
        { y: 20, opacity: 0, scale: 0.9 },
        {
          y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.05, ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: ".philosophy-container",
            start: "top 85%",
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#0a0a0a] text-white py-24 md:py-32 relative overflow-hidden z-10">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#CD1D1D]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-10 max-w-[90rem] relative z-10">
        
        {/* Top Half: Image & Bio Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-20 lg:mb-32">
          
          {/* Left: Image / Visual */}
          <div className="lg:col-span-5 relative" ref={imageRef}>
            <div className="bio-image-wrapper relative aspect-[4/5] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] group rounded-2xl">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
              <Image 
                src="/images/about/02.png"
                alt="Dr. Abdussalam Omar Profile"
                fill
                className="object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/20 to-transparent z-10 opacity-90" />
              
              {/* Vertical red accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#CD1D1D] z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            {/* Floating Minimal Badge */}
            <div className="bio-badge absolute -bottom-6 -right-4 lg:-right-8 z-20 bg-[#111] border border-white/5 p-5 md:p-6 shadow-2xl max-w-[240px]">
              <div className="flex flex-col gap-2">
                <span className="font-helvetica font-black text-4xl md:text-5xl text-[#CD1D1D] leading-none tracking-tighter">20+</span>
                <div className="mt-2">
                  <h4 className="font-helvetica text-[9px] md:text-[10px] font-bold text-white uppercase tracking-[0.3em] mb-2">Years of Impact</h4>
                  <p className="font-helvetica text-[11px] md:text-xs text-white/50 leading-relaxed font-light">
                    Developing People Before Developing Businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="lg:col-span-7 flex flex-col pt-16 lg:pt-0 lg:pl-6" ref={textRef}>
            <div className="bio-text-elem flex items-center gap-4 mb-6 md:mb-8">
              <div className="h-[1px] w-8 bg-[#CD1D1D]" />
              <span className="font-courier text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#CD1D1D] font-bold">
                ABOUT DR. ABDUSSALAM OMAR
              </span>
            </div>
            
            <h2 className="bio-text-elem font-helvetica text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1] text-white mb-8 md:mb-10">
              Some build careers. <br className="hidden md:block" />
              <span className="text-white/30">Others build businesses.</span> <br className="hidden md:block" />
              <span className="text-[#CD1D1D]">A few build people.</span>
            </h2>
            
            <div className="space-y-5 md:space-y-6 mb-8 max-w-2xl">
              <p className="bio-text-elem font-helvetica text-base md:text-lg text-white/80 font-light leading-relaxed">
                Dr. Abdussalam Omar belongs to the third category. An internationally recognized Business Leadership Coach, Human Transformation Expert, and Social Entrepreneur, he has spent over two decades helping individuals and organizations unlock their true potential.
              </p>
              
              <p className="bio-text-elem font-helvetica text-base md:text-lg text-white/60 font-light leading-relaxed">
                His work goes far beyond conventional coaching. Drawing from healthcare, psychology, emotional intelligence, and holistic human development, he has created a unique transformation methodology.
              </p>
            </div>

            <div className="bio-text-elem relative pl-5 py-2 border-l-2 border-[#CD1D1D] max-w-2xl">
              <p className="font-helvetica text-sm md:text-base text-white/90 italic font-light leading-relaxed">
                &quot;Choosing purpose over comfort, he voluntarily retired from academia to dedicate his life full-time to human transformation and entrepreneurship.&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Half: Philosophy Section - Full Width */}
        <div className="bio-text-elem philosophy-container pt-12 md:pt-16 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="font-courier text-[10px] uppercase tracking-widest text-[#CD1D1D] font-bold block mb-4">
                THE CORE COACHING PHILOSOPHY
              </span>
              <p className="font-helvetica text-base md:text-lg text-white/60 font-light leading-relaxed">
                When people heal emotionally and discover their purpose, they become better leaders, build stronger families, and create ethical businesses.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
            {philosophySteps.map((step, idx) => (
              <div 
                key={idx} 
                className="philosophy-tag flex flex-col gap-3 group cursor-default"
              >
                <div className="flex items-center gap-4">
                  <span className="font-courier text-[#CD1D1D]/60 text-xs font-bold tracking-widest">
                    {(idx + 1).toString().padStart(2, '0')} //
                  </span>
                  <div className="h-[1px] flex-grow bg-white/5 group-hover:bg-[#CD1D1D]/30 transition-colors duration-500" />
                </div>
                <div>
                  <span className="font-helvetica text-base font-bold text-white/90 group-hover:text-white transition-colors block mb-1">
                    {step.title}
                  </span>
                  <span className="font-helvetica text-xs md:text-sm text-white/40 group-hover:text-white/70 transition-colors font-light">
                    {step.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
