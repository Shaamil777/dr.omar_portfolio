"use client";

import { useEffect, useState, useRef } from "react";

export default function PageGridBackground({ children }: { children: React.ReactNode }) {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.pageX, y: e.pageY });
    };

    const handleMouseLeave = () => {
      setMousePos({ x: -100, y: -100 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen w-full bg-[#FAF8F5]">
      {/* Global Crosshatch Grid Background (Scrolls with page) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          backgroundPosition: "0 0",
        }}
      />

      {/* Global Red Grid Lines Spotlight — follows cursor (Scrolls with page) */}
      <div
        className="absolute inset-0 z-20 pointer-events-none mix-blend-multiply transition-opacity duration-300"
        style={{
          opacity: mousePos.x > 0 ? 1 : 0,
          backgroundImage: `
            linear-gradient(to right, rgba(205,29,29,0.6) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(205,29,29,0.6) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          backgroundPosition: "0 0",
          maskImage: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, black 0%, black 30%, transparent 70%)`,
          WebkitMaskImage: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, black 0%, black 30%, transparent 70%)`,
        }}
      />

      {/* Page Content */}
      <div className="relative w-full flex flex-col">
        {children}
      </div>
    </div>
  );
}
