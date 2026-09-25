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



    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white text-[#0a0a0a] pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden z-10">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#CD1D1D]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-10 max-w-[90rem] relative z-10 pointer-events-auto">
        
        {/* Top Half: Image & Bio Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-end mb-16 lg:mb-24">
          
          {/* Left: Image Cutout */}
          <div className="lg:col-span-5 relative group" ref={imageRef}>
            <div className="bio-image-wrapper relative w-full h-[600px] md:h-[700px] lg:h-[850px]">
              <Image 
                src="/images/about/dr_lines.png"
                alt="Dr. Abdussalam Omar Profile"
                fill
                className="object-contain object-bottom grayscale group-hover:grayscale-0 opacity-90 lg:opacity-100 transition-all duration-1000 ease-out drop-shadow-2xl scale-[1.15] -translate-x-6 lg:-translate-x-12 translate-y-6 lg:translate-y-12"
              />
              
              {/* Premium Gradient Base to mask the cut */}
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none" />

              {/* Premium Inline Badge at the bottom */}
              <div className="bio-badge absolute bottom-0 left-0 w-full z-20 flex items-center justify-between border-t border-black/10 bg-white/50 backdrop-blur-xl px-6 py-5 md:px-8 md:py-6">
                <div className="flex items-center gap-5">
                  <span className="font-helvetica font-black text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-br from-[#0a0a0a] to-[#0a0a0a]/50 leading-none tracking-tighter">
                    20<span className="text-[#CD1D1D]">+</span>
                  </span>
                  <div className="h-10 w-[1px] bg-black/20" />
                  <div className="flex flex-col gap-1">
                    <span className="font-courier text-[10px] md:text-[11px] font-bold text-[#CD1D1D] uppercase tracking-[0.25em]">
                      Years of Impact
                    </span>
                    <span className="font-helvetica text-[10px] md:text-[11px] text-[#0a0a0a]/60 font-medium leading-snug max-w-[160px]">
                      Developing People Before Developing Businesses
                    </span>
                  </div>
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
            
            <h2 className="bio-text-elem font-helvetica text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1] text-[#0a0a0a] mb-8 md:mb-10">
              Some build careers. <br className="hidden md:block" />
              <span className="text-[#0a0a0a]/30">Others build businesses.</span> <br className="hidden md:block" />
              <span className="text-[#CD1D1D]">A few build people.</span>
            </h2>
            
            <div className="space-y-5 md:space-y-6 mb-8 max-w-2xl">
              <p className="bio-text-elem font-helvetica text-base md:text-lg text-[#0a0a0a]/80 font-medium leading-relaxed">
                Dr. Abdussalam Omar belongs to the third category. An internationally recognized Business Leadership Coach, Human Transformation Expert, and Social Entrepreneur, he has spent over two decades helping individuals and organizations unlock their true potential.
              </p>
              
              <p className="bio-text-elem font-helvetica text-base md:text-lg text-[#0a0a0a]/60 font-medium leading-relaxed">
                His work goes far beyond conventional coaching. Drawing from healthcare, psychology, emotional intelligence, and holistic human development, he has created a unique transformation methodology.
              </p>
            </div>

            <div className="bio-text-elem relative pl-5 py-2 border-l-2 border-[#CD1D1D] max-w-2xl">
              <p className="font-helvetica text-sm md:text-base text-[#0a0a0a]/90 italic font-medium leading-relaxed">
                &quot;Choosing purpose over comfort, he voluntarily retired from academia to dedicate his life full-time to human transformation and entrepreneurship.&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Philosophy Grid - placed under biography content full width */}
        <div className="pt-16 md:pt-24 philosophy-container mt-10">
          <div className="flex flex-col mb-16 md:mb-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-[#CD1D1D]" />
              <span className="font-courier text-xs md:text-sm uppercase tracking-[0.3em] text-[#CD1D1D] font-bold">
                The Foundation
              </span>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <h2 className="font-helvetica text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#0a0a0a] max-w-2xl leading-[1.1]">
                Core Coaching Philosophy.
              </h2>
              <p className="font-helvetica text-base md:text-lg text-[#0a0a0a]/60 font-medium leading-relaxed max-w-xl">
                When people heal emotionally and discover their purpose, they become better leaders, build stronger families, and create ethical businesses.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-24 gap-y-6 lg:gap-y-8">
            {philosophySteps.map((step, idx) => (
              <div 
                key={idx} 
                className="philosophy-tag flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 border-b border-black/10 pb-4 md:pb-6 cursor-default"
              >
                <span className="font-courier text-[#CD1D1D] text-sm md:text-base font-bold tracking-widest min-w-[30px]">
                  {(idx + 1).toString().padStart(2, '0')}
                </span>
                
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 flex-grow">
                  <h4 className="font-helvetica text-lg md:text-xl font-bold text-[#0a0a0a] min-w-[120px]">
                    {step.title}
                  </h4>
                  <span className="hidden sm:block text-black/10">—</span>
                  <p className="font-helvetica text-sm md:text-base text-[#0a0a0a]/60 font-medium">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
