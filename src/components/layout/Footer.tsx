"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  const band1Ref = useRef<HTMLDivElement>(null);
  const band2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!band1Ref.current || !band2Ref.current) return;

    // Wait a tick to ensure layout is done so offsetWidth is accurate
    const item1 = band1Ref.current.children[0] as HTMLElement;
    const item2 = band2Ref.current.children[0] as HTMLElement;
    
    // Width = element width + flex gap (32px for gap-8)
    const item1Width = item1.offsetWidth + 32;
    const item2Width = item2.offsetWidth + 32;

    // Start in the middle so we can scroll infinitely in either direction
    // (We will render 8 copies, so index 3 is safely in the middle)
    let xPos1 = -item1Width * 3;
    let xPos2 = -item2Width * 3;

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
    fontSize: "clamp(3.5rem, 12vw, 13rem)",
    lineHeight: "0.85",
  };

  const smallTextStyle: React.CSSProperties = {
    fontFamily: "var(--font-national2)",
    fontWeight: 900,
    fontSize: "clamp(0.6rem, 1.5vw, 0.85rem)",
    lineHeight: "1.3",
    letterSpacing: "0.05em",
  };

  // Sticker base
  const stickerBase: React.CSSProperties = {
    fontFamily: "var(--font-national2)",
    fontWeight: 900,
    fontSize: "clamp(2.5rem, 8vw, 9rem)",
    lineHeight: "0.85",
    display: "inline-block",
    padding: "0.1em 0.25em",
  };

  // Style 1: Outlined text + solid border
  const stickerOutlined: React.CSSProperties = {
    ...stickerBase,
    WebkitTextStroke: "2px #CD1D1D",
    color: "transparent",
    border: "2px solid rgba(205, 29, 29, 0.5)",
  };

  // Style 2: Solid filled — inverted colors
  const stickerFilled: React.CSSProperties = {
    ...stickerBase,
    color: "#ffffff",
    backgroundColor: "#CD1D1D",
    border: "none",
  };

  // Style 3: Thick stroke, dashed border
  const stickerDashed: React.CSSProperties = {
    ...stickerBase,
    WebkitTextStroke: "3px #CD1D1D",
    color: "transparent",
    border: "3px dashed rgba(205, 29, 29, 0.4)",
  };

  return (
    <footer
      ref={containerRef}
      className="relative w-full min-h-[100vh] md:min-h-[85vh] bg-[#FAF8F5] text-[#111] flex flex-col justify-end overflow-hidden"
    >
      {/* Marquee bands */}
      <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
        {/* Upper Band */}
        <div
          className="absolute top-[10%] md:top-[5%] bg-white border-y-2 border-black/10 py-4 md:py-8 z-10 shadow-xl"
          style={{ width: "200%", left: "-50%", transform: "rotate(-1.5deg)" }}
        >
          <div ref={band1Ref} className="flex gap-4 md:gap-8 items-center whitespace-nowrap">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex items-center gap-4 md:gap-8 flex-shrink-0">
                <span className="text-[#111] uppercase" style={marqueeTextStyle}>TRANSFORM</span>
                <span style={stickerFilled} className="uppercase">DEEP IMMERSION</span>
                <span className="text-[#111] uppercase" style={marqueeTextStyle}>ELEVATE</span>
                <div className="text-[#111] uppercase" style={smallTextStyle}>DR. OMAR®<br />GLOBAL LEADERSHIP<br />COACH.</div>
                <span style={stickerOutlined} className="uppercase">EMPOWER</span>
                <span className="text-[#111] uppercase" style={marqueeTextStyle}>LEAD</span>
                <span className="text-[#111] uppercase" style={marqueeTextStyle}>INSPIRE</span>
                <span style={stickerDashed} className="uppercase">EVOLVE</span>
                <span className="text-[#111] uppercase" style={marqueeTextStyle}>IMPACT</span>
                <div className="text-[#111] uppercase" style={smallTextStyle}>DEEP IMMERSION®<br />NLP EXPERT<br />COACHING.</div>
                <span className="text-[#111] uppercase" style={marqueeTextStyle}>UNLOCK</span>
              </div>
            ))}
          </div>
        </div>

        {/* Lower Band */}
        <div
          className="absolute top-[18%] md:top-[18%] bg-white border-y-2 border-black/10 py-4 md:py-8 z-20 shadow-2xl"
          style={{ width: "200%", left: "-50%", transform: "rotate(1deg)" }}
        >
          <div ref={band2Ref} className="flex gap-4 md:gap-8 items-center whitespace-nowrap">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex items-center gap-4 md:gap-8 flex-shrink-0">
                <span className="text-[#111] uppercase" style={marqueeTextStyle}>IMPACT</span>
                <span style={stickerDashed} className="uppercase">EVOLVE</span>
                <span className="text-[#111] uppercase" style={marqueeTextStyle}>INSPIRE</span>
                <span className="text-[#111] uppercase" style={marqueeTextStyle}>LEAD</span>
                <span style={stickerFilled} className="uppercase">EMPOWER</span>
                <div className="text-[#111] uppercase" style={smallTextStyle}>DR. OMAR®<br />GLOBAL LEADERSHIP<br />COACH.</div>
                <span className="text-[#111] uppercase" style={marqueeTextStyle}>ELEVATE</span>
                <span style={stickerOutlined} className="uppercase">DEEP IMMERSION</span>
                <span className="text-[#111] uppercase" style={marqueeTextStyle}>TRANSFORM</span>
                <div className="text-[#111] uppercase" style={smallTextStyle}>DEEP IMMERSION®<br />NLP EXPERT<br />COACHING.</div>
                <span className="text-[#111] uppercase" style={marqueeTextStyle}>UNLOCK</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="relative z-30 flex-grow w-full flex flex-col justify-end pt-[40vh] md:pt-[50vh] pb-8 px-6 md:px-12 pointer-events-auto">
        <div className="max-w-[100rem] mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 border-t border-black/10 pt-8 md:pt-12">
          
          <div className="flex flex-col gap-4 md:gap-6 sm:col-span-2 md:col-span-1">
            <h3 className="font-national2 font-black text-4xl md:text-5xl uppercase tracking-tighter text-[#111]">DR. OMAR®</h3>
            <p className="font-helvetica text-zinc-500 text-sm md:text-base max-w-sm leading-relaxed">
              Global Leadership Coach, NLP Expert, and Life Transformation Specialist. Empowering individuals and organizations to achieve their highest potential.
            </p>
          </div>

          <div className="flex flex-col gap-3 md:gap-4">
            <h4 className="font-national2 font-bold text-base md:text-xl uppercase tracking-widest text-[#CD1D1D]">Contact</h4>
            <a href="mailto:info@dromar.com" className="font-helvetica font-medium text-zinc-600 hover:text-[#CD1D1D] transition-colors text-base md:text-lg">info@dromar.com</a>
            <a href="tel:+971501234567" className="font-helvetica font-medium text-zinc-600 hover:text-[#CD1D1D] transition-colors text-base md:text-lg">+971 50 123 4567</a>
          </div>

          <div className="flex flex-col gap-3 md:gap-4">
            <h4 className="font-national2 font-bold text-base md:text-xl uppercase tracking-widest text-[#CD1D1D]">Socials</h4>
            <div className="flex flex-row md:flex-col flex-wrap gap-4 md:gap-2">
              <a href="#" className="font-helvetica font-medium text-zinc-600 hover:text-[#CD1D1D] underline-offset-4 w-fit transition-colors">Instagram</a>
              <a href="#" className="font-helvetica font-medium text-zinc-600 hover:text-[#CD1D1D] underline-offset-4 w-fit transition-colors">LinkedIn</a>
              <a href="#" className="font-helvetica font-medium text-zinc-600 hover:text-[#CD1D1D] underline-offset-4 w-fit transition-colors">YouTube</a>
              <a href="#" className="font-helvetica font-medium text-zinc-600 hover:text-[#CD1D1D] underline-offset-4 w-fit transition-colors">Twitter</a>
            </div>
          </div>
          
        </div>
        
        <div className="max-w-[100rem] mx-auto w-full flex flex-col md:flex-row justify-between items-center mt-10 md:mt-24 pt-6 border-t border-black/10 text-zinc-400 text-xs md:text-sm font-helvetica">
          <p className="text-center md:text-left mb-4 md:mb-0">© {new Date().getFullYear()} Dr. Abdussalam Omar. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
            <a href="#" className="hover:text-[#CD1D1D] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#CD1D1D] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
