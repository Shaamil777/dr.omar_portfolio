"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  const band1Ref = useRef<HTMLDivElement>(null);
  const band2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let xPos1 = 0;
    let xPos2 = 0;
    let currentScroll = 0;
    let prevScroll = 0;
    let scrollDirection = 1;
    let scrollInfluence = 0;

    let itemWidth1 = 0;
    let itemWidth2 = 0;

    const updateWidths = () => {
      if (band1Ref.current && band1Ref.current.children[0]) {
        const childWidth = parseFloat(window.getComputedStyle(band1Ref.current.children[0]).width);
        const gap = parseFloat(window.getComputedStyle(band1Ref.current).columnGap) || 32;
        itemWidth1 = childWidth + gap;
      }
      if (band2Ref.current && band2Ref.current.children[0]) {
        const childWidth = parseFloat(window.getComputedStyle(band2Ref.current.children[0]).width);
        const gap = parseFloat(window.getComputedStyle(band2Ref.current).columnGap) || 32;
        itemWidth2 = childWidth + gap;
      }
    };

    updateWidths();
    
    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => updateWidths());
      if (band1Ref.current?.children[0]) resizeObserver.observe(band1Ref.current.children[0]);
      if (band2Ref.current?.children[0]) resizeObserver.observe(band2Ref.current.children[0]);
    }

    window.addEventListener("resize", updateWidths);

    const handleScroll = () => {
      currentScroll = window.scrollY;
      const delta = currentScroll - prevScroll;
      prevScroll = currentScroll;

      if (delta > 0) scrollDirection = 1;
      else if (delta < 0) scrollDirection = -1;

      scrollInfluence = Math.min(Math.abs(delta) * 0.8, 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const animate = () => {
      scrollInfluence *= 0.95;

      // Slow, continuous movement — direction flips with scroll
      const speed1 = -(0.4 + scrollInfluence) * scrollDirection;
      const speed2 = (0.4 + scrollInfluence) * scrollDirection;

      xPos1 += speed1;
      xPos2 += speed2;

      if (itemWidth1 > 0) {
        xPos1 = gsap.utils.wrap(-itemWidth1, 0, xPos1);
      }
      if (itemWidth2 > 0) {
        xPos2 = gsap.utils.wrap(-itemWidth2, 0, xPos2);
      }

      if (band1Ref.current) {
        gsap.set(band1Ref.current, { x: xPos1 });
      }
      if (band2Ref.current) {
        gsap.set(band2Ref.current, { x: xPos2 });
      }

      requestAnimationFrame(animate);
    };

    const id = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateWidths);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, []);

  // Marquee text style matching National 2 Condensed – 900
  const marqueeTextStyle: React.CSSProperties = {
    fontFamily: "var(--font-national2)",
    fontWeight: 900,
    fontSize: "clamp(10rem, 15vw, 13rem)",
    lineHeight: "0.85",
  };

  const smallTextStyle: React.CSSProperties = {
    fontFamily: "var(--font-national2)",
    fontWeight: 900,
    fontSize: "0.85rem",
    lineHeight: "1.3",
    letterSpacing: "0.05em",
  };

  // Sticker base
  const stickerBase: React.CSSProperties = {
    fontFamily: "var(--font-national2)",
    fontWeight: 900,
    fontSize: "clamp(7rem, 10vw, 9rem)",
    lineHeight: "0.85",
    display: "inline-block",
    padding: "0.1em 0.25em",
  };

  // Style 1: Outlined text + solid border
  const stickerOutlined: React.CSSProperties = {
    ...stickerBase,
    WebkitTextStroke: "2px rgb(216, 211, 211)",
    color: "transparent",
    border: "2px solid rgba(216, 211, 211, 0.5)",
  };

  // Style 2: Solid filled — inverted colors
  const stickerFilled: React.CSSProperties = {
    ...stickerBase,
    color: "#4E37FF",
    backgroundColor: "rgb(216, 211, 211)",
    border: "none",
  };

  // Style 3: Thick stroke, dashed border
  const stickerDashed: React.CSSProperties = {
    ...stickerBase,
    WebkitTextStroke: "3px rgb(216, 211, 211)",
    color: "transparent",
    border: "3px dashed rgba(216, 211, 211, 0.4)",
  };

  return (
    <footer
      ref={containerRef}
      className="relative w-full h-[75vh] bg-transparent text-white flex flex-col justify-end overflow-x-clip overflow-y-visible"
    >
      {/* Solid zigma background filler */}
      <div className="absolute bottom-0 left-0 w-full h-[85%] bg-zigma z-0" />

      {/* Marquee bands */}
      <div className="absolute top-0 left-0 w-full h-[55%] z-10" style={{ overflow: "visible" }}>

        {/* Upper Band */}
        <div
          className="absolute -top-[8%] bg-zigma border-y-2 border-lambda/40 py-8 z-10 shadow-xl"
          style={{ width: "200%", left: "-50%", transform: "rotate(-1.5deg)" }}
        >
          <div ref={band1Ref} className="flex gap-8 items-center whitespace-nowrap">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 flex-shrink-0">
                <span className="text-lambda uppercase" style={marqueeTextStyle}>TRANSFORM</span>
                <span style={stickerFilled} className="uppercase">DEEP IMMERSION</span>
                <span className="text-lambda uppercase" style={marqueeTextStyle}>ELEVATE</span>
                <div className="text-lambda uppercase" style={smallTextStyle}>DR. OMAR®<br />GLOBAL LEADERSHIP<br />COACH.</div>
                <span style={stickerOutlined} className="uppercase">EMPOWER</span>
                <span className="text-lambda uppercase" style={marqueeTextStyle}>LEAD</span>
                <span className="text-lambda uppercase" style={marqueeTextStyle}>INSPIRE</span>
                <span style={stickerDashed} className="uppercase">EVOLVE</span>
                <span className="text-lambda uppercase" style={marqueeTextStyle}>IMPACT</span>
                <div className="text-lambda uppercase" style={smallTextStyle}>DEEP IMMERSION®<br />NLP EXPERT<br />COACHING.</div>
                <span className="text-lambda uppercase" style={marqueeTextStyle}>UNLOCK</span>
              </div>
            ))}
          </div>
        </div>

        {/* Lower Band */}
        <div
          className="absolute top-[22%] bg-zigma border-y-2 border-lambda/40 py-8 z-20 shadow-2xl"
          style={{ width: "200%", left: "-50%", transform: "rotate(1deg)" }}
        >
          <div ref={band2Ref} className="flex gap-8 items-center whitespace-nowrap">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 flex-shrink-0">
                <span className="text-lambda uppercase" style={marqueeTextStyle}>IMPACT</span>
                <span style={stickerDashed} className="uppercase">EVOLVE</span>
                <span className="text-lambda uppercase" style={marqueeTextStyle}>INSPIRE</span>
                <span className="text-lambda uppercase" style={marqueeTextStyle}>LEAD</span>
                <span style={stickerFilled} className="uppercase">EMPOWER</span>
                <div className="text-lambda uppercase" style={smallTextStyle}>DR. OMAR®<br />GLOBAL LEADERSHIP<br />COACH.</div>
                <span className="text-lambda uppercase" style={marqueeTextStyle}>ELEVATE</span>
                <span style={stickerOutlined} className="uppercase">DEEP IMMERSION</span>
                <span className="text-lambda uppercase" style={marqueeTextStyle}>TRANSFORM</span>
                <div className="text-lambda uppercase" style={smallTextStyle}>DEEP IMMERSION®<br />NLP EXPERT<br />COACHING.</div>
                <span className="text-lambda uppercase" style={marqueeTextStyle}>UNLOCK</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="relative z-30 flex-grow flex justify-center items-end pb-16">
        <h2 className="text-4xl font-bold">Footer Content Space</h2>
      </div>
    </footer>
  );
}
