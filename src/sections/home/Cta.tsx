"use client";

import React, { useState, useRef } from "react";

export default function Cta() {
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
      <text x="0" y="8" fill="#4a4a4a" font-size="9" font-family="'National 2 Condensed', sans-serif" font-weight="bold" letter-spacing="-0.5">OMAR</text>
      <text x="0" y="16" fill="#4a4a4a" font-size="9" font-family="'National 2 Condensed', sans-serif" font-weight="bold" letter-spacing="-0.5">OMAR</text>
      <text x="0" y="24" fill="#4a4a4a" font-size="9" font-family="'National 2 Condensed', sans-serif" font-weight="bold" letter-spacing="-0.5">OMAR</text>
    </svg>
  `;
  const patternUrlDim = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
    patternSvgDim
  )}`;

  const patternSvgBright = `
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="8" fill="#a1a1a1" font-size="9" font-family="'National 2 Condensed', sans-serif" font-weight="bold" letter-spacing="-0.5">OMAR</text>
      <text x="0" y="16" fill="#a1a1a1" font-size="9" font-family="'National 2 Condensed', sans-serif" font-weight="bold" letter-spacing="-0.5">OMAR</text>
      <text x="0" y="24" fill="#a1a1a1" font-size="9" font-family="'National 2 Condensed', sans-serif" font-weight="bold" letter-spacing="-0.5">OMAR</text>
    </svg>
  `;
  const patternUrlBright = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
    patternSvgBright
  )}`;

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative w-full bg-[#131313] flex flex-col items-center justify-center overflow-hidden min-h-[100svh] md:min-h-0 py-32 md:pt-16 md:pb-32 group cursor-default"
      id="cta"
    >
      <div ref={textWrapperRef} className="relative z-0 px-2 md:px-0 flex flex-col justify-center h-full w-full">
        {/* Base Dim Text */}
        <h1
          className="relative z-0 text-[22vw] sm:text-[18vw] md:text-[14vw] pt-[1vw] leading-[0.85] md:leading-[0.75] font-black uppercase text-center tracking-tighter pointer-events-none select-none transition-opacity duration-300 scale-y-[1.4] md:scale-y-100 bg-[length:10px_10px] md:bg-[length:24px_24px]"
          style={{
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text",
            backgroundImage: `url("${patternUrlDim}")`,
            backgroundRepeat: "repeat",
            fontFamily: "var(--font-national2)",
          }}
        >
          PEOPLE<br />
          DON&apos;T<br />
          REMEMBER<br />
          PROMISES.<br />
          THEY<br />
          REMEMBER<br />
          RESULTS.
        </h1>

        {/* Spotlight Bright Text */}
        <h1
          className="absolute top-0 left-0 w-full h-full z-10 text-[22vw] sm:text-[18vw] md:text-[14vw] pt-[1vw] leading-[0.85] md:leading-[0.75] font-black uppercase text-center tracking-tighter pointer-events-none select-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-y-[1.4] md:scale-y-100 flex items-center justify-center bg-[length:10px_10px] md:bg-[length:24px_24px]"
          style={{
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text",
            backgroundImage: `url("${patternUrlBright}")`,
            backgroundRepeat: "repeat",
            fontFamily: "var(--font-national2)",
            maskImage: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, black 10%, transparent 100%)`,
            WebkitMaskImage: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, black 10%, transparent 100%)`,
          }}
        >
          PEOPLE<br />
          DON&apos;T<br />
          REMEMBER<br />
          PROMISES.<br />
          THEY<br />
          REMEMBER<br />
          RESULTS.
        </h1>
      </div>
    </section>
  );
}
