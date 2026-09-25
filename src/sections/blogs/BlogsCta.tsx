"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";

export default function BlogsCta() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const textWrapperRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (textWrapperRef.current) {
      const rect = textWrapperRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const patternSvgDim = `
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="8" fill="#4a4a4a" font-size="9" font-family="'Helvetica Neue', Helvetica, Arial, sans-serif" font-weight="bold" letter-spacing="-0.5">READ</text>
      <text x="0" y="16" fill="#4a4a4a" font-size="9" font-family="'Helvetica Neue', Helvetica, Arial, sans-serif" font-weight="bold" letter-spacing="-0.5">READ</text>
      <text x="0" y="24" fill="#4a4a4a" font-size="9" font-family="'Helvetica Neue', Helvetica, Arial, sans-serif" font-weight="bold" letter-spacing="-0.5">READ</text>
    </svg>
  `;
  const patternUrlDim = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
    patternSvgDim
  )}`;

  const patternSvgBright = `
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="8" fill="#CD1D1D" font-size="9" font-family="'Helvetica Neue', Helvetica, Arial, sans-serif" font-weight="bold" letter-spacing="-0.5">READ</text>
      <text x="0" y="16" fill="#CD1D1D" font-size="9" font-family="'Helvetica Neue', Helvetica, Arial, sans-serif" font-weight="bold" letter-spacing="-0.5">READ</text>
      <text x="0" y="24" fill="#CD1D1D" font-size="9" font-family="'Helvetica Neue', Helvetica, Arial, sans-serif" font-weight="bold" letter-spacing="-0.5">READ</text>
    </svg>
  `;
  const patternUrlBright = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
    patternSvgBright
  )}`;

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative w-full bg-[#111] flex flex-col items-center justify-center overflow-hidden py-32 md:py-48 group cursor-default"
    >
      <div ref={textWrapperRef} className="relative z-0 px-4 md:px-0 flex flex-col items-center justify-center h-full w-full">
        
        {/* Base Dim Text */}
        <h2
          className="relative z-0 text-[18vw] sm:text-[14vw] md:text-[10vw] leading-[0.85] font-black uppercase text-center tracking-tight pointer-events-none select-none transition-opacity duration-300 bg-[length:12px_12px] md:bg-[length:24px_24px]"
          style={{
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text",
            backgroundImage: `url("${patternUrlDim}")`,
            backgroundRepeat: "repeat",
            fontFamily: "var(--font-helvetica, 'Helvetica Neue', Helvetica, Arial, sans-serif)",
          }}
        >
          NEVER MISS<br />
          AN UPDATE.
        </h2>

        {/* Spotlight Bright Text */}
        <h2
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-10 text-[18vw] sm:text-[14vw] md:text-[10vw] leading-[0.85] font-black uppercase text-center tracking-tight pointer-events-none select-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center bg-[length:12px_12px] md:bg-[length:24px_24px]"
          style={{
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text",
            backgroundImage: `url("${patternUrlBright}")`,
            backgroundRepeat: "repeat",
            fontFamily: "var(--font-helvetica, 'Helvetica Neue', Helvetica, Arial, sans-serif)",
            maskImage: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, black 10%, transparent 100%)`,
            WebkitMaskImage: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, black 10%, transparent 100%)`,
          }}
        >
          NEVER MISS<br />
          AN UPDATE.
        </h2>
        
        <div className="relative z-20 mt-12 md:mt-20">
          <Link href="/contact">
            <button className="bg-white text-[#111] font-helvetica font-black text-xl md:text-2xl uppercase tracking-tight px-10 py-4 rounded-full hover:bg-[#CD1D1D] hover:text-white transition-all duration-300 shadow-xl hover:shadow-[#CD1D1D]/20 hover:scale-105 active:scale-95">
              SUBSCRIBE NOW
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
