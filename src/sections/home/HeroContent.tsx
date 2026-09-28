"use client";

import React, { forwardRef, useEffect, useRef } from 'react';


const RedactedText = ({ text, className = "" }: { text: string, className?: string }) => (
  <span className={`relative inline-flex items-center justify-center mx-1 sm:mx-2 ${className}`}>
    <span className="hidden-text invisible px-1 sm:px-2">{text}</span>
    <span className="absolute inset-0 bg-[#CD1D1D] redaction-box origin-right"></span>
  </span>
);

const HeroContent = forwardRef<HTMLDivElement>((props, ref) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    import("gsap").then((gsapModule) => {
      const gsap = gsapModule.default;
      
      const ctx = gsap.context(() => {
        // Timeline for the hero text entrance
        const tl = gsap.timeline({ delay: 0.2 });
        
        // Initial setup for redaction boxes
        gsap.set(".redaction-box", { scaleX: 1, transformOrigin: "right" });
        gsap.set(".hidden-text", { autoAlpha: 0 });

        // Animate the main text words sliding up and fading in
        tl.fromTo(".hero-word", 
          { y: 50, opacity: 0, rotateX: 20 },
          { y: 0, opacity: 1, rotateX: 0, duration: 1, stagger: 0.1, ease: "power3.out" }
        )
        // Then reveal the redacted text
        .to(".redaction-box", {
          scaleX: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "expo.inOut"
        }, "-=0.5")
        .to(".hidden-text", {
          autoAlpha: 1,
          duration: 0.1,
          stagger: 0.1
        }, "-=0.7");
      }, contentRef);

      return () => ctx.revert();
    });
  }, []);

  return (
    <div ref={(node) => {
      // Handle both forwarded ref and local ref
      if (typeof ref === 'function') ref(node);
      else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      contentRef.current = node;
    }} className="absolute top-0 left-0 w-full h-full flex flex-col text-white z-10 pointer-events-none">
      {/* Dark gradient overlay with spotlight effect */}
      <div 
        className="hero-overlay absolute inset-0 pointer-events-none opacity-80 z-0" 
        style={{
          backgroundImage: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.95) 100%), radial-gradient(circle at 50% 35%, transparent 15%, rgba(0,0,0,0.6) 55%, rgba(0,0,0,0.95) 100%)'
        }}
      />
      
      {/* Screen Lines / CRT Scanline Effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30 z-0"
        style={{ backgroundImage: 'repeating-linear-gradient(transparent, transparent 2px, black 2px, black 4px)' }}
      />

      {/* Outer Viewfinder Frame & UI Layout */}
      <div className="absolute inset-4 sm:inset-6 md:inset-8 border border-white/10 z-10 pointer-events-none flex flex-col justify-between overflow-hidden">
        
        {/* Additional Decorative Typo: Left Side Vertical Text */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 -rotate-90 origin-center font-courier text-[8px] tracking-[0.3em] text-white/20 whitespace-nowrap">
          SYS.VER.9.4.1 // INITIATING SEQUENCES...
        </div>



        {/* TOP ROW */}
        <div className="flex justify-between items-start w-full relative">
           {/* Top Left Box */}
           <div className="border-b border-r border-white/10 px-4 py-2 flex items-center font-courier text-xs text-white/40 tracking-widest uppercase bg-black/20 backdrop-blur-sm">
             DR. OMAR LEGACY CONCEPT
           </div>
           
           
        </div>

        {/* BOTTOM ROW (Huge Text) */}
        <div className="w-full pl-4 sm:pl-6 md:pl-10 pb-16 md:pb-16 z-20 overflow-hidden">
           {/* Top margin line above the text */}
           <div className="border-t border-white/20 pt-4 sm:pt-6 md:pt-8 w-full max-w-[95%]">
             <div 
               className="flex flex-col text-left font-helvetica font-bold text-[28px] leading-[1] xs:text-[8vw] sm:text-[38px] md:text-[50px] lg:text-[60px] xl:text-[68px] uppercase sm:leading-[0.95] md:leading-[1.1] lg:leading-[1.1] tracking-tight hero-text-content w-full max-w-none"
               style={{ wordSpacing: '0.15em' }}
             >
               <div className="hero-word font-courier text-[10px] sm:text-[12px] text-white/40 font-normal mb-2 sm:mb-3 md:mb-4 tracking-[0.2em] leading-normal uppercase" style={{ wordSpacing: 'normal' }}>
                 DR. OMAR
               </div>
               
               <div className="flex flex-wrap items-center gap-x-4 md:gap-x-6">
                 <span className="hero-word inline-block">YOU ARE EXECUTING</span>
                 <RedactedText text="CRITICAL" className="hero-word inline-block" />
                 <RedactedText text="MULTI-MILLION" className="hero-word inline-block" />
               </div>
               
               <div className="mt-1 md:mt-3 whitespace-nowrap hero-word inline-block">DOLLAR SCALING DECISIONS</div>
               
               <div className="flex flex-wrap items-center gap-x-4 md:gap-x-6 mt-1 md:mt-3">
                 <span className="hero-word inline-block">ON</span>
                 <RedactedText text="DANGEROUSLY" className="hero-word inline-block" />
                 <RedactedText text="ISOLATED" className="hero-word inline-block" />
                 <span className="hero-word inline-block">FRAGMENTS.</span>
               </div>
             </div>
           </div>
        </div>

        {/* BOTTOM FOOTER BAR */}
        <div className="absolute -bottom-px left-0 w-full border-t border-white/10 pt-2 px-4 sm:px-6 md:px-8 font-courier text-[8px] sm:text-[9px] text-white/30 tracking-widest uppercase bg-black/40 backdrop-blur-sm">
          Legacy portfolio concept for Dr. Omar. Highly confidential strategy. All data shown is verified and authenticated.
        </div>
      </div>
      

    </div>
  );
});

HeroContent.displayName = 'HeroContent';
export default HeroContent;
