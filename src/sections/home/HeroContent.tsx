"use client";

import React, { forwardRef, useEffect, useRef } from 'react';

const ScrambleText = ({ text }: { text: string }) => {
  const spanRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const span = spanRef.current;
    if (!span) return;
    
    const widget = span.closest('.telemetry-widget') as HTMLElement;
    if (!widget) return;
    
    const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*+<>?';
    let animationFrameId: number;
    let lastProgress = -1;
    let frameCount = 0;
    
    const render = () => {
      frameCount++;
      const progressStr = widget.style.getPropertyValue('--progress') || '0';
      const progress = parseFloat(progressStr);
      
      if (progress >= 1) {
        if (lastProgress !== 1) {
          span.innerText = text;
          lastProgress = 1;
        }
      } else {
        if (progress !== lastProgress || frameCount % 2 === 0) {
          lastProgress = progress;
          let result = '';
          const revealCount = Math.floor(text.length * progress);
          for (let i = 0; i < text.length; i++) {
            if (text[i] === ' ') {
              result += ' ';
            } else if (i < revealCount) {
              result += text[i];
            } else {
              result += CHARS[Math.floor(Math.random() * CHARS.length)];
            }
          }
          span.innerText = result;
        }
      }
      
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();
    
    return () => cancelAnimationFrame(animationFrameId);
  }, [text]);

  return <span ref={spanRef}>{text}</span>;
};

const TelemetryWidget = ({ title, data, className, revealColor }: { title: string, data: {label: string, value: string}[], className: string, revealColor: string }) => (
  // Note: Initial state is fully visible and white. Custom --progress property starts at 0.
  <div 
    className={`absolute flex flex-col text-[7px] sm:text-[8px] md:text-[9px] leading-tight tracking-widest telemetry-widget text-white opacity-100 z-20 font-courier ${className}`} 
    style={{ '--progress': 0 } as React.CSSProperties}
    data-reveal-color={revealColor}
  >
    <div className="flex items-center gap-2 mb-1.5">
      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-current"></div>
      <div className="font-bold uppercase tracking-wider"><ScrambleText text={title} /></div>
    </div>
    <div className="relative flex flex-col pl-3 md:pl-4 ml-[2.5px] md:ml-[3px]">
      {/* Vertical line spanning the data rows */}
      <div className="absolute left-0 top-1 bottom-0 w-px bg-current opacity-40"></div>
      
      <div className="flex flex-col gap-1.5 py-1">
        {data.map((row, i) => (
          <div key={i} className="flex">
            <span className="w-16 md:w-20 opacity-60 uppercase shrink-0"><ScrambleText text={row.label} /></span>
            <span className="font-medium uppercase"><ScrambleText text={row.value} /></span>
          </div>
        ))}
      </div>

      {/* L-bracket at the bottom */}
      <div className="absolute left-0 -bottom-4 w-3 md:w-4 h-3 md:h-4 border-l border-b border-current opacity-40"></div>
    </div>
  </div>
);

const RedactedText = ({ text, className = "" }: { text: string, className?: string }) => (
  <span className={`relative inline-flex items-center justify-center mx-1 sm:mx-2 ${className}`}>
    <span className="hidden-text invisible px-1 sm:px-2">{text}</span>
    <span className="absolute inset-0 bg-[#CD1D1D] redaction-box origin-right"></span>
  </span>
);

const HeroContent = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="absolute top-0 left-0 w-full h-full flex flex-col text-white z-10 pointer-events-none">
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

        {/* Additional Decorative Typo: Right Side Coordinate Data */}
        <div className="absolute right-4 top-1/3 flex flex-col items-end font-courier text-[8px] tracking-[0.2em] text-white/20">
          <div>LAT: 25.2048° N</div>
          <div>LNG: 55.2708° E</div>
          <div className="w-4 h-px bg-white/20 mt-1"></div>
        </div>

        {/* TOP ROW */}
        <div className="flex justify-between items-start w-full relative">
           {/* Top Left Box */}
           <div className="border-b border-r border-white/10 px-4 py-2 flex items-center font-courier text-[10px] text-white/40 tracking-widest uppercase bg-black/20 backdrop-blur-sm">
             DR. OMAR LEGACY CONCEPT
           </div>
           
           {/* Top Right Box */}
           <div className="border-b border-l border-white/10 px-6 py-3 flex flex-col font-courier tracking-widest text-right items-end bg-black/20 backdrop-blur-sm">
             <div className="text-[10px] text-white/40 uppercase mb-1">DATA SCANNED</div>
             <div className="text-4xl font-bold font-helvetica text-white leading-none tracking-tighter">100%</div>
             <div className="flex items-center gap-2 mt-2 text-[10px] uppercase font-bold text-[#CD1D1D]">
                <div className="w-1.5 h-1.5 bg-[#CD1D1D]"></div>
                <div>FULL COVERAGE</div>
             </div>
           </div>
        </div>

        {/* BOTTOM ROW (Huge Text) */}
        <div className="w-full pl-6 md:pl-10 pb-12 md:pb-16 z-20">
           {/* Top margin line above the text */}
           <div className="border-t border-white/20 pt-6 md:pt-8 w-full max-w-[95%]">
             <div 
               className="flex flex-col text-left font-national2 font-black text-[5.5vw] sm:text-[50px] md:text-[68px] lg:text-[76px] uppercase leading-[0.95] md:leading-[60px] lg:leading-[68px] tracking-tight hero-text-content w-full max-w-none"
               style={{ wordSpacing: '0.15em' }}
             >
               <div className="font-courier text-[10px] sm:text-[12px] text-white/40 font-normal mb-3 md:mb-4 tracking-[0.2em] leading-normal uppercase" style={{ wordSpacing: 'normal' }}>
                 DR. OMAR
               </div>
               
               <div className="flex flex-wrap items-center gap-x-4 md:gap-x-6">
                 <span>YOU ARE EXECUTING</span>
                 <RedactedText text="CRITICAL" />
                 <RedactedText text="MULTI-MILLION" />
               </div>
               
               <div className="mt-1 md:mt-3 whitespace-nowrap">DOLLAR SCALING DECISIONS</div>
               
               <div className="flex flex-wrap items-center gap-x-4 md:gap-x-6 mt-1 md:mt-3">
                 <span>ON</span>
                 <RedactedText text="DANGEROUSLY" />
                 <RedactedText text="ISOLATED" />
                 <span>FRAGMENTS.</span>
               </div>
             </div>
           </div>
        </div>

        {/* BOTTOM FOOTER BAR */}
        <div className="absolute -bottom-px left-0 w-full border-t border-white/10 pt-2 px-4 sm:px-6 md:px-8 font-courier text-[8px] sm:text-[9px] text-white/30 tracking-widest uppercase bg-black/40 backdrop-blur-sm">
          Legacy portfolio concept for Dr. Omar. Highly confidential strategy. All data shown is verified and authenticated.
        </div>
      </div>
      
      {/* Scattered Telemetry Widgets */}
      <TelemetryWidget 
        title="MENTORSHIP_SYS" 
        data={[
          { label: "ENTR_MNT", value: "10,000+" }, 
          { label: "ORG_CHG", value: "1,000+" },
          { label: "STRTUPS", value: "50+" },
          { label: "STATUS", value: "ACTIVE 24/7" }
        ]} 
        className="top-[15%] left-[8%]"
        revealColor="#CD1D1D" // Light Red 1
      />
      
      <TelemetryWidget 
        title="GLOBAL_REACH" 
        data={[
          { label: "REGIONS", value: "GCC/ASIA/EU" }, 
          { label: "M_BRND", value: "200+" },
          { label: "NATIONS", value: "12+" },
          { label: "EXP_RTE", value: "ACCELERATED" }
        ]} 
        className="top-[20%] right-[10%]"
        revealColor="#4ade80" // Light Green 1
      />
      
      <TelemetryWidget 
        title="EXP_MATRIX" 
        data={[
          { label: "YRS_ACTV", value: "20+" }, 
          { label: "TRN_PRG", value: "1,500+" },
          { label: "C_LEVEL", value: "3,000+" },
          { label: "IMPACT", value: "VERIFIED" }
        ]} 
        className="top-[40%] left-[38%]"
        revealColor="#CD1D1D" // Light Red 2
      />
      
      <TelemetryWidget 
        title="LIFE_PRNCPL" 
        data={[
          { label: "ETHIC_W", value: "VERIFIED" }, 
          { label: "INNER_P", value: "STABLE" },
          { label: "HLTH_IX", value: "OPTIMAL" },
          { label: "BALANCE", value: "SUSTAINED" }
        ]} 
        className="top-[48%] right-[12%]"
        revealColor="#4ade80" // Light Green 2
      />

      <TelemetryWidget 
        title="SYS_STATUS" 
        data={[
          { label: "SCAN", value: "IN_PROG" }, 
          { label: "COV_RTE", value: "99.9%" },
          { label: "L_T_LAT", value: "0.01MS" },
          { label: "NET_SEC", value: "LOCKED" }
        ]} 
        className="top-[55%] left-[6%]"
        revealColor="#CD1D1D" // Light Red 3
      />
    </div>
  );
});

HeroContent.displayName = 'HeroContent';
export default HeroContent;
